<script lang="ts">
  import { Toaster } from "svelte-sonner";
  import { Bitcoin, Copy, Zap } from "lucide-svelte";
	import DonateCashu from "./DonateCashu.svelte";
	import { copyTextToClipboard } from "./utils";
</script>

<Toaster richColors position="top-right"></Toaster>

    <div class="flex flex-col gap-2 flex-wrap">
      <div class="flex flex-col gap-2 w-80">

        <p>
         Thank you for checking out my work. If you appreciate what I do, consider sending some sats!
        </p>
      </div>
      <div class="flex gap-2 items-center">
        <DonateCashu></DonateCashu>
      </div>
      <div class="flex gap-2 items-center">
        <a
              href="https://geyser.fund/project/brrr"
              target="_blank"
              rel="nofollow noopener noreferrer"
              class="rounded-full w-40 bg-[#2dd4bf] bg-opacity-35 hover:bg-opacity-100 transition-all"
              >
              <img src="/geyser.svg" alt="geyser" />
            </a>
            <button>
              <Copy class='w-5 h-5' onclick={()=> copyTextToClipboard('https://geyser.fund/project/brrr')}></Copy>
            </button>
            <p class="w-24 overflow-clip text-ellipsis text-xs text-nowrap">
              https://geyser.fund/project/brrr
            </p>
          </div>
          <div class="flex gap-2 items-center">
            <a
            class="p-2 flex items-center gap-1 rounded-full bg-blue-600 w-40 bg-opacity-35 hover:bg-opacity-100 transition-all"
            href="bitcoin:+glisteningstruggle62"
            >
            <Bitcoin></Bitcoin>
            <p class="text-xs">PayNym</p>
          </a>
          <button>
            <Copy class='w-5 h-5' onclick={()=> copyTextToClipboard('+glisteningstruggle62')}></Copy>
          </button>
          <p class="w-24 overflow-clip text-ellipsis text-xs break-all">
            +glisteningstruggle62
          </p>
        </div>
        <div class="flex gap-2 items-center">
          <a
          class="p-2 flex items-center gap-1 rounded-full bg-blue-600 w-40 bg-opacity-35 hover:bg-opacity-100 transition-all"
          
          href="bitcoin:PM8TJQQMZMvfVGsJ2bJmbtDnx2BVgcPThnF8XS9ApGvuzYDPWirVuMencyhvK8WBDTgeaLLEoGEYggTMJFwjDkW8HhfqijrYHStMiFhKfA7UYbwXqYB6"
          >
          <Bitcoin></Bitcoin>
          <p class="text-xs">Payment code</p>
        </a>
        <button>
          <Copy class='w-5 h-5' onclick={()=> copyTextToClipboard('PM8TJQQMZMvfVGsJ2bJmbtDnx2BVgcPThnF8XS9ApGvuzYDPWirVuMencyhvK8WBDTgeaLLEoGEYggTMJFwjDkW8HhfqijrYHStMiFhKfA7UYbwXqYB6')}></Copy>
        </button>
        <p class="w-24 overflow-clip text-ellipsis text-xs text-nowrap">
          PM8TJQQMZMvfVGsJ2bJmbtDnx2BVgcPThnF8XS9ApGvuzYDPWirVuMencyhvK8WBDTgeaLLEoGEYggTMJFwjDkW8HhfqijrYHStMiFhKfA7UYbwXqYB6
        </p>
      </div>
      <div class="flex gap-2 items-center">
        <a
        class="p-2 flex items-center gap-1 rounded-full bg-orange-600 w-40 bg-opacity-35 hover:bg-opacity-100 transition-all"
        
        href="bitcoin:bc1q8sy2kd4c907r5y05wwghldpvvnkapkn7yrvs2u"
        >
        <Bitcoin></Bitcoin>
        <p class="text-xs">Onchain address</p>
      </a>
      <button>
        <Copy class='w-5 h-5' onclick={()=> copyTextToClipboard('bc1q8sy2kd4c907r5y05wwghldpvvnkapkn7yrvs2u')}></Copy>
      </button>
      <p class="w-24 overflow-clip text-ellipsis text-xs">
        bc1q8sy2kd4c907r5y05wwghldpvvnkapkn7yrvs2u
      </p>
    </div>
    <div class="flex gap-2 items-center">
      <a
      class="p-2 flex items-center gap-1 rounded-full bg-yellow-600 w-40 bg-opacity-35 hover:bg-opacity-100 transition-all"
      
      href="lightning:lno1zrxq8pjw7qjlm68mtp7e3yvxee4y5xrgjhhyf2fxhlphpckrvevh50u0q0pdmt47mvjvq77n7thpvj9m3hcppl4hu95ue953uq46ej46el9rxqsznmjm9j44w9jntmpsq9eec9002pmyjjf6w75v88dn4472zmctcdxqqvewfj3vxyqv54q4gzy7v60u27kgwnurfzpykxnwz0jr4gzg4swld8pglcv7rlulaemm665l4pmftckhj6vwq2e6l4zk8xc53rgt7dyfdd9j86pgfsgmhx67v4a64lfeqggchfm0uqqs6jz4x5lxj3f6qw7vxe4fg8s4z5"
      >
      <Zap></Zap>
      <p class="text-xs">Bolt 12</p>
    </a>
    <button>
      <Copy class='w-5 h-5' onclick={()=> copyTextToClipboard('lno1zrxq8pjw7qjlm68mtp7e3yvxee4y5xrgjhhyf2fxhlphpckrvevh50u0q0pdmt47mvjvq77n7thpvj9m3hcppl4hu95ue953uq46ej46el9rxqsznmjm9j44w9jntmpsq9eec9002pmyjjf6w75v88dn4472zmctcdxqqvewfj3vxyqv54q4gzy7v60u27kgwnurfzpykxnwz0jr4gzg4swld8pglcv7rlulaemm665l4pmftckhj6vwq2e6l4zk8xc53rgt7dyfdd9j86pgfsgmhx67v4a64lfeqggchfm0uqqs6jz4x5lxj3f6qw7vxe4fg8s4z5')}></Copy>
    </button>
    <p class="w-24 overflow-clip text-ellipsis text-xs">
      lno1zrxq8pjw7qjlm68mtp7e3yvxee4y5xrgjhhyf2fxhlphpckrvevh50u0q0pdmt47mvjvq77n7thpvj9m3hcppl4hu95ue953uq46ej46el9rxqsznmjm9j44w9jntmpsq9eec9002pmyjjf6w75v88dn4472zmctcdxqqvewfj3vxyqv54q4gzy7v60u27kgwnurfzpykxnwz0jr4gzg4swld8pglcv7rlulaemm665l4pmftckhj6vwq2e6l4zk8xc53rgt7dyfdd9j86pgfsgmhx67v4a64lfeqggchfm0uqqs6jz4x5lxj3f6qw7vxe4fg8s4z5
    </p>
  </div>
  <div class="flex gap-2 items-center">
    <a
    class="p-2 flex items-center gap-1 rounded-full bg-yellow-600 w-40 bg-opacity-35 hover:bg-opacity-100 transition-all"
    href="lightning:nutstashapp@geyser.fund"
    >
    <Zap></Zap>
    <p class="text-xs">Lightning address</p>
  </a>
  <button>
    <Copy class='w-5 h-5'onclick={()=> copyTextToClipboard('nutstashapp@geyser.fund')}></Copy>
  </button>
  <p class="w-24 overflow-clip text-ellipsis text-xs">
    nutstashapp@geyser.fund
  </p>
</div>
</div>
