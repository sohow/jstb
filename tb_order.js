timeout = prompt("Set timeout (Second):");
skuName = prompt("Set sku name:");
count = 0;
current = location.href;

if(timeout>0){
    setTimeout('reload()',1000*timeout);
} else{
    location.replace(current);
}

const sleep = (timeout) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, timeout)
    })
}

async function reload() {
    if (hasSku(skuName)) {
        console.log("hasSku=true start");
        await sleep(1000)
        console.log("hasSku=true end");
        buy();
        return;
    }
    randTime = Math.floor(Math.random() * 1000);
    reloadTime = 1000 * timeout + randTime;
    setTimeout('reload()', reloadTime);
    count++;
    console.log('每（' + reloadTime + '）ms自动刷新,刷新次数：' + count);
    fr4me = '<frameset cols=\'*\'>\n<frame src=\'' + current + '\'/>';
    fr4me += '</frameset>';
    with (document) {
        write(fr4me);
        void (close())
    }
    ;
}

function buy() {
    ele = getEle('//button//span[text()="立即购买"]');
    console.log("buy",ele);
    ele.click();
}

function getEle(x) {
    return document.evaluate(x, document).iterateNext();
}

function hasSku(skuName) {
    if (skuName === "*") {
        ele = getEle('//div[@class="skuItemWrapper"]//div[@class="skuItem "]');
    } else {
        ele = getEle('//div[@class="skuItemWrapper"]//span[contains(text(),"'+skuName+'")]');
    }

    res = ele && ele.className.toString().indexOf("disable") === -1;
    if (res && ele.className.toString().indexOf("select") === -1) {
        ele.click();
    }
    return res;
}