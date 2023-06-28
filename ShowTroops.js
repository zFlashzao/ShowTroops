let titleParent = $("#content_value > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)");
var time = 0;
let unitConfig =
    `<div> <p></p>
Commands before: <input type="datetime-local" id="commandsTime" step="1"><button id='setTime' class='btn'>Set time</button><span style='font-size:10px; color: Gray'>(Mod made by <a style='font-family: Verdana, Arial;' href='./game.php?village=212&screen=info_player&id=2871948'>Im Kumin</a>)</span>
<h4 id="incomingSupport">Incoming support</h4>
<span id="supportText"></span>
<table id="incSupportTable" style="margin-bottom: 10px" class="vis" width="100%">
    <tbody>
        <tr>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="spear"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_spear.png" title="Spear fighter" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="sword"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_sword.png" title="Swordsman" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="axe"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_axe.png" title="Axeman" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="archer"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_archer.png" title="Archer" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="spy"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_spy.png" title="Scout" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="light"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_light.png" title="Light cavalry" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="marcher"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_marcher.png" title="Mounted archer" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="heavy"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_heavy.png" title="Heavy cavalry" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="ram"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_ram.png" title="Ram" alt="Ram" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="catapult"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_catapult.png" title="Catapult" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="knight"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_knight.png" title="Paladin" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="snob"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_snob.png" title="Nobleman" alt="" class=""></a>
            </th>
        </tr>
        <tr id="unitAmnt">
            <td class="unit-item unit-item-spear hidden">0</td>
            <td class="unit-item unit-item-sword hidden">0</td>
            <td class="unit-item unit-item-axe hidden">0</td>
            <td class="unit-item unit-item-archer hidden">0</td>
            <td class="unit-item unit-item-spy hidden">0</td>
            <td class="unit-item unit-item-light hidden">0</td>
            <td class="unit-item unit-item-marcher hidden">0</td>
            <td class="unit-item unit-item-heavy hidden">0</td>
            <td class="unit-item unit-item-ram hidden">0</td>
            <td class="unit-item unit-item-catapult hidden">0</td>
            <td class="unit-item unit-item-knight hidden">0</td>
            <td class="unit-item unit-item-snob hidden">0</td>
        </tr>
    </tbody>
</table>

<div id="afterSupportDiv" style="display: none">
<h4>Incoming support after selected time</h4>
<span id="supportTextAfter"></span>
<table id="incSupportTableAfter" style="margin-bottom: 10px" class="vis" width="100%">
    <tbody>
        <tr>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="spear"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_spear.png" title="Spear fighter" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="sword"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_sword.png" title="Swordsman" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="axe"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_axe.png" title="Axeman" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="archer"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_archer.png" title="Archer" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="spy"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_spy.png" title="Scout" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="light"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_light.png" title="Light cavalry" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="marcher"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_marcher.png" title="Mounted archer" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="heavy"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_heavy.png" title="Heavy cavalry" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="ram"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_ram.png" title="Ram" alt="Ram" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="catapult"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_catapult.png" title="Catapult" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="knight"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_knight.png" title="Paladin" alt="" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="snob"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_snob.png" title="Nobleman" alt="" class=""></a>
            </th>
        </tr>
        <tr id="unitAmntAfter">
            <td class="unit-item unit-item-spear hidden">0</td>
            <td class="unit-item unit-item-sword hidden">0</td>
            <td class="unit-item unit-item-axe hidden">0</td>
            <td class="unit-item unit-item-archer hidden">0</td>
            <td class="unit-item unit-item-spy hidden">0</td>
            <td class="unit-item unit-item-light hidden">0</td>
            <td class="unit-item unit-item-marcher hidden">0</td>
            <td class="unit-item unit-item-heavy hidden">0</td>
            <td class="unit-item unit-item-ram hidden">0</td>
            <td class="unit-item unit-item-catapult hidden">0</td>
            <td class="unit-item unit-item-knight hidden">0</td>
            <td class="unit-item unit-item-snob hidden">0</td>
        </tr>
    </tbody>
</table>
</div>
<h4 id="incomingAttack">Incoming attack</h4><span id="attackText"></span>
<table id="incAttackTable" style="margin-bottom: 10px" class="vis" width="100%">
    <tbody>
        <tr>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="spear"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_spear.png" title="Spear fighter" alt="Spear" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="sword"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_sword.png" title="Swordsman" alt="Sword" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="axe"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_axe.png" title="Axeman" alt="Axe" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="archer"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_archer.png" title="Archer" alt="Archer" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="spy"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_spy.png" title="Scout" alt="Scout" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="light"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_light.png" title="Light cavalry" alt="Light Cavalry" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="marcher"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_marcher.png" title="Mounted archer" alt="Mounted Archer" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="heavy"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_heavy.png" title="Heavy cavalry" alt="Heavy Cavalry" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="ram"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_ram.png" title="Ram" alt="" class="Ram"></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="catapult"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_catapult.png" title="Catapult" alt="Catapult" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="knight"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_knight.png" title="Paladin" alt="Paladin" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="snob"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_snob.png" title="Nobleman" alt="Noble" class=""></a>
            </th>
        </tr>
        <tr id="unitAmnt">
            <td class="unit-item unit-item-spear hidden">0</td>
            <td class="unit-item unit-item-sword hidden">0</td>
            <td class="unit-item unit-item-axe hidden">0</td>
            <td class="unit-item unit-item-archer hidden">0</td>
            <td class="unit-item unit-item-spy hidden">0</td>
            <td class="unit-item unit-item-light hidden">0</td>
            <td class="unit-item unit-item-marcher hidden">0</td>
            <td class="unit-item unit-item-heavy hidden">0</td>
            <td class="unit-item unit-item-ram hidden">0</td>
            <td class="unit-item unit-item-catapult hidden">0</td>
            <td class="unit-item unit-item-knight hidden">0</td>
            <td class="unit-item unit-item-snob hidden">0</td>
        </tr>
    </tbody>
</table>

<div id="afterAttackDiv" style="display: none">
<h4>Incoming attack after selected time</h4><span id="attackTextAfter"></span>
<table id="incAttackTableAfter" style="margin-bottom: 10px" class="vis" width="100%">
    <tbody>
        <tr>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="spear"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_spear.png" title="Spear fighter" alt="Spear" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="sword"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_sword.png" title="Swordsman" alt="Sword" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="axe"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_axe.png" title="Axeman" alt="Axe" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="archer"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_archer.png" title="Archer" alt="Archer" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="spy"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_spy.png" title="Scout" alt="Scout" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="light"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_light.png" title="Light cavalry" alt="Light Cavalry" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="marcher"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_marcher.png" title="Mounted archer" alt="Mounted Archer" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="heavy"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_heavy.png" title="Heavy cavalry" alt="Heavy Cavalry" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="ram"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_ram.png" title="Ram" alt="" class="Ram"></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="catapult"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_catapult.png" title="Catapult" alt="Catapult" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="knight"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_knight.png" title="Paladin" alt="Paladin" class=""></a>
            </th>
            <th style="text-align:center" width="35">
                <a href="#" class="unit_link" data-unit="snob"><img src="https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_snob.png" title="Nobleman" alt="Noble" class=""></a>
            </th>
        </tr>
        <tr id="unitAmnt">
            <td class="unit-item unit-item-spear hidden">0</td>
            <td class="unit-item unit-item-sword hidden">0</td>
            <td class="unit-item unit-item-axe hidden">0</td>
            <td class="unit-item unit-item-archer hidden">0</td>
            <td class="unit-item unit-item-spy hidden">0</td>
            <td class="unit-item unit-item-light hidden">0</td>
            <td class="unit-item unit-item-marcher hidden">0</td>
            <td class="unit-item unit-item-heavy hidden">0</td>
            <td class="unit-item unit-item-ram hidden">0</td>
            <td class="unit-item unit-item-catapult hidden">0</td>
            <td class="unit-item unit-item-knight hidden">0</td>
            <td class="unit-item unit-item-snob hidden">0</td>
        </tr>
    </tbody>
</table>
</div>`;
titleParent.append($(unitConfig));

class Units {
    constructor(spear, sword, axe, archer, spy, light, marcher, heavy, ram, catapult, knight, snob) {
        this.spear = spear;
        this.sword = sword;
        this.axe = axe;
        this.archer = archer;
        this.spy = spy;
        this.light = light;
        this.marcher = marcher;
        this.heavy = heavy;
        this.ram = ram;
        this.catapult = catapult;
        this.knight = knight;
        this.snob = snob;
    }
}


let incs = [];
let clear = true;
let sharedSupport = false; // true if one incoming support is shared
let sharedAttack = false; // true if one incoming attack is shared

$('#commandsTime').val(convertToInput(new Date()));

document.getElementById("setTime").addEventListener("click", function () {
    setTime();
});

run();

function run(){
    sharedSupport = false;
    sharedAttack = false;
    incs = [];
    let table = document.querySelector(".commands-container table:nth-child(1)"); // Incoming commands table
    // Evaluate every incoming command
    for (let i = 2; i <= table.rows.length; i++) {
        let inc = table.querySelector("tr.command-row:nth-child(" + i + ") > td:nth-child(1) > span:nth-child(1) > span:nth-child(1) > a:nth-child(1) > span:nth-child(1) > span:nth-child(1)");
        if (inc.attributes["data-command-type"] == undefined) { // Don't store incoming command if not shared
            continue;
        } else if (inc.attributes["data-command-type"].value === "support") {
            incs.push(inc);
            sharedSupport = true;
        } else if (inc.attributes["data-command-type"].value === "attack") {
            incs.push(inc);
            sharedAttack = true;
        }
    }
    document.getElementById("supportText").innerText = "Processed 0/" + incs.length + " commands";
    document.getElementById("supportTextAfter").innerText = "Processed 0/" + incs.length + " commands";
    document.getElementById("attackText").innerText = "Processed 0/" + incs.length + " commands";
    document.getElementById("attackTextAfter").innerText = "Processed 0/" + incs.length + " commands";
    getUnits(incs);
}

/**
 * Calculates total amount of incoming troops
 * @param {String[]} incomings Array of incoming commands
 */
function getUnits(incomings) {
    let counterGetAmnt = 0; // Counts amount of processed commands
    var commandsCounterArray = [0,0,0,0];
    var incUnitsArray = new Array();
    for(var i = 0; i < 4; i++)
        incUnitsArray[i] = new Units(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    let timeout = 0;
    if (incomings.length === 0) {
        return;
    }
    // Get units of each incoming command
    incomings.forEach(function (ele) {
        let type;
        if (ele.attributes["data-command-type"].value == "support") {
            type = "support";
        } else {
            type = "attack";
        }
        let id = ele.getAttribute("data-command-id"); // Get command ID
        timeout += Math.random() * 70 + 40;
        // Get request for command details and extract amount of troops
        setTimeout(function() {
            $.get(window.location.origin + "/game.php?village=" + game_data.village.id + "&screen=info_command&ajax=details&id=" + id, function (r) {
                var responseUnits = r.units;
                var commandTime = r.time_arrival.date;
                counterGetAmnt++;
                if(commandTime <= time || time == 0){
                    if (type === "attack") {
                        commandsCounterArray[0]++;
                        document.getElementById("attackText").innerText = "Processed " + commandsCounterArray[0] + "/" + incomings.length + " commands";
                        // Add the units from the response together
                        Object.keys(responseUnits).forEach((key) => {
                            incUnitsArray[0][key] += parseInt(responseUnits[key].count);
                        });
                    } else {
                        commandsCounterArray[1]++;
                        document.getElementById("supportText").innerText = "Processed " + commandsCounterArray[1] + "/" + incomings.length + " commands";
                        // Add the units from the response together
                        Object.keys(responseUnits).forEach((key) => {
                            incUnitsArray[1][key] += parseInt(responseUnits[key].count);
                        });
                    }
                } else {
                    if (type === "attack") {
                        commandsCounterArray[2]++;
                        document.getElementById("attackTextAfter").innerText = "Processed " + commandsCounterArray[2] + "/" + incomings.length + " commands";
                        // Add the units from the response together
                        Object.keys(responseUnits).forEach((key) => {
                            incUnitsArray[2][key] += parseInt(responseUnits[key].count);
                        });
                    } else {
                        commandsCounterArray[3]++;
                        document.getElementById("supportTextAfter").innerText = "Processed " + commandsCounterArray[3] + "/" + incomings.length + " commands";
                        // Add the units from the response together
                        Object.keys(responseUnits).forEach((key) => {
                            incUnitsArray[3][key] += parseInt(responseUnits[key].count);
                        });
                    }
                }
                // If all incoming commands have been processed, write the total number of troops into the table
                if (counterGetAmnt == incomings.length) {
                    writeUnits(incUnitsArray[0], document.getElementById("incAttackTable"), false);
                    writeUnits(incUnitsArray[1], document.getElementById("incSupportTable"), false);
                    if(document.getElementById("afterSupportDiv").style.display != "none"){
                        writeUnits(incUnitsArray[2], document.getElementById("incAttackTableAfter"), true);
                        writeUnits(incUnitsArray[3], document.getElementById("incSupportTableAfter"), true);
                        clear = false;
                    }
                }
            });
        }, timeout)
    });
}

function writeUnits(incUnits, table, sum) {
    Object.keys(incUnits).forEach((key) => {
        if(clear)
            table.getElementsByClassName("unit-item-" + key)[0].innerText = 0;
        if(sum){
            var val = parseInt(table.getElementsByClassName("unit-item-" + key)[0].innerText);
            table.getElementsByClassName("unit-item-" + key)[0].innerText = val + incUnits[key];
        } else {
            table.getElementsByClassName("unit-item-" + key)[0].innerText = incUnits[key];
        }
        if (incUnits[key] > 0) {
            table.getElementsByClassName("unit-item-" + key)[0].classList.remove("hidden");
        }
    });
}

function setTime(){
    clear = true;
    time = parseInt(new Date(document.getElementById("commandsTime").value).getTime() / 1000)
    document.getElementById("incomingSupport").innerText = "Incoming support before selected time";
    document.getElementById("incomingAttack").innerText = "Incoming attack before selected time";
    document.getElementById("afterSupportDiv").style.display = "block";
    document.getElementById("afterAttackDiv").style.display = "block";
    run();
}

function convertToInput(date) {
    date.setHours(date.getHours());
    date.setMinutes(date.getMinutes());
    date.setSeconds(date.getSeconds());
    var a = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        time: date.toTimeString().split(' ')[0],
        ms: date.getMilliseconds()
    };
    if (a.m < 10) {
        a.m = '0' + a.m
    };
    if (a.d < 10) {
        a.d = '0' + a.d
    };
    if (a.ms < 100) {
        a.ms = '0' + a.ms;
        if (a.ms < 10) {
            a.ms = '0' + a.ms
        }
    };
    return a.y + '-' + a.m + '-' + a.d + 'T' + a.time;
}
