import { json } from "@sveltejs/kit";

export async function GET() {
    const gh = await fetchGithub()
    const sn = await fetchFromStackerNews()
    const so = await fetchFromStackExchange()

    const response =  json({
        ghStars: gh.stars,
        ghFollowers: gh.followers,
        snStacked:  sn.stacked,
        snSpent:  sn.spent,
        soReputation:  so
    })
    response.headers.append('Cache-Control', 'public, max-age=240')
    return response;
}


const fetchFromStackExchange = async () => {
    const stackexchUrl = `https://api.stackexchange.com/2.3/users/15961987/reputation?site=stackoverflow`

    const responseStack = await fetch(stackexchUrl, {
        headers: {
            'cache-control': 'max-age=240'
        },
    });
    const reps = await responseStack.json()

    return reps.items.reduce((acc, r) => acc + r.reputation_change, 0)
}

const fetchGithub = async () => {
    const githubRepoUrl = `https://api.github.com/users/gandlafbtc/repos`;
    const githubUserUrl = `https://api.github.com/users/gandlafbtc`;

    const responseGH = await fetch(githubRepoUrl, {
        headers: {
            'cache-control': 'max-age=240'
        },
    });
    const githubRepos = await responseGH.json()

    const responseUserGH = await fetch(githubUserUrl, {
        headers: {
            'cache-control': 'max-age=240'
        },
    });
    const githubUser = await responseUserGH.json()

    return {stars: githubRepos.reduce((acc, r) => acc + r.stargazers_count, 0), followers: githubUser.followers}
}

const fetchFromStackerNews = async () => {
    const stackerNewsUrl = `https://stacker.news/api/graphql`;

    const responseSN = await fetch(stackerNewsUrl,
        {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'cache-control': 'max-age=60'
            },

            body: JSON.stringify({
                "query": "query User($name: String!){user(name: $name){stacked, spent}}",
                "variables": {
                    "name": "gandlaf21"
                }
            })
        });
    const stackedData = await responseSN.json()
    return stackedData.data.user

}