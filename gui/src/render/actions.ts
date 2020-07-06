import {injectable} from "tsyringe";
import {niceBytes, secondsToHms} from "./format";

interface StadalMemory {
  total: string,
  available: string,
  free: string
}
interface StadalHost {
 name: string,
 release: string,
 version: string,
 hostname: string,
 arch: string,
 uptime: string,
}

@injectable()
export default class Actions {
  display_memory(data: StadalMemory) {
    document.getElementById("mem-total").innerText = niceBytes(data.total);
    document.getElementById("mem-available").innerText = niceBytes(data.available);
    document.getElementById("mem-free").innerText = niceBytes(data.free);
  }
  display_host(data: StadalHost) {
    document.getElementById("host-version").innerText = data.version;
    document.getElementById("host-hostname").innerText = data.hostname;
    document.getElementById("host-uptime").innerText = secondsToHms(data.uptime);
  }
}
