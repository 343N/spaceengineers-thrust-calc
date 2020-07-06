const G = 9.80665
//plat weight per litre
const platinumWeight = 21.27;
var cargoContainersEnabled = true

function initInputHandlers() {
    $('#gravityOptions').children('a').click(gravitySelectEvent);
    $('#shipSizeSelect').change(shipSizeListener);
    // $('#shipSizeSelect').change(updateInput);
    $('#weightInputVal').on('input', updateOutput);
    $('#gravityInputVal').on('input', updateOutput);

    $('#lgContainerInput').on('input', updateOutput)
    $('#medContainerInput').on('input', updateOutput)
    $('#smContainerInput').on('input', updateOutput)
}

function shipSizeListener() {
    // cargoContainersEnabled = !cargoContainersEnabled
    if (isSmallShip() && cargoContainersEnabled) showMediumCargoContainer()
    if (!isSmallShip()) hideMediumCargoContainer()
    updateOutput()
}

function getShipWeight() {
    return $('#weightInputVal').val()
}

function getGravity() {
    return $('#gravityInputVal').val()
}

function getShipSize() {
    return $('#shipSizeSelect').val()
}

function isSmallShip() {
    return (getShipSize() == 'smallShip')
}

function gravitySelectEvent(event) {
    var option = gravityOptions[event.currentTarget.innerHTML.toLowerCase()]
    if (option) $('#gravityInputVal').val(option)
    updateOutput()
}

function getShipNewtons() {
    var shipWeight = Number(getShipWeight())
    var shipCargoWeight = getCargoWeight()
    var gravity = G * getGravity()
    return (shipWeight + shipCargoWeight) * gravity;
}

function getCargoWeight() {
    if (!cargoContainersEnabled) return 0;
    var weight = 0

    var count = getInputValues().cargo;
    // console.log(isSmallShip())
    if (isSmallShip()) {
        weight += count.small * smallShipCargo.small.size
        weight += count.medium * smallShipCargo.medium.size
        weight += count.large * smallShipCargo.large.size
    } else {
        weight += count.small * largeShipCargo.small.size
        weight += count.large * largeShipCargo.large.size
    }

    return weight * platinumWeight
}


function parseNewtons(n) {
    var ext = 'Newtons'
    if (n >= 10000) {
        n = n / 1000
        ext = 'kN'
    }
    var numFormat = new Intl.NumberFormat({
        style: 'decimal',
        maximumSignificantDigits: 2
    })
    return numFormat.format(n) + ' ' + ext;
}

function updateOutput() {
    $("#calculatedNewts").html(parseNewtons(getShipNewtons()))
    updateThrusterList();
}

function initThrusterList(){
    for (var key in smallShipThrusters){
        var e = $('<li id=' + key + '" class="list-group-item"></li>');
        let thruster = smallShipThrusters[key]
        e.text(thruster.name);
        e.html(e.html() + '<span class="float-right" id="' + key + 'Amnt">N/A</span>')
        $('#requirementThrusterList').append(e);
    }
}
    
function updateThrusterList(){
    let thrusterList = (isSmallShip()) ? smallShipThrusters : largeShipThrusters
    for (var key in thrusterList){
        let thruster = thrusterList[key]
        let count = Math.ceil(getShipNewtons() / thruster.thrust)
        $(`#${key}Amnt`).html(`${count} (${parseNewtons(count * thruster.thrust)})`);
    }
}
    


function getInputValues() {
    return {
        weight: getShipWeight(),
        gravity: getGravity(),
        size: getShipSize(),
        cargo: {
            large: $('#lgContainerInput').val(),
            medium: $('#medContainerInput').val(),
            small: $('#smContainerInput').val(),
        }
    }
}

function toggleCargoContainers() {
    cargoContainersEnabled = !cargoContainersEnabled
    $($('.cargoContainerElement')[0]).toggle();
    $($('.cargoContainerElement')[1]).toggle();
    if (isSmallShip()) toggleMediumCargoContainer()
    $($('.cargoContainerElement')[3]).toggle();
    updateOutput()
}

function toggleMediumCargoContainer() {
    $($('.cargoContainerElement')[2]).toggle();
}

function showMediumCargoContainer() {
    $($('.cargoContainerElement')[2]).css('display', 'flex');
}

function hideMediumCargoContainer() {
    $($('.cargoContainerElement')[2]).css('display', 'none');
}

for (var e of $('span.input-group-text'))
    e.style.width = '12.5rem';
// console.log(smallShipThrusters)

    

$('#cargoCheckboxLabel').addClass('input-group-text');
$('#cargoCheckboxSpan').addClass('input-group-text');
$('#cargoCheckbox').change(toggleCargoContainers)

initInputHandlers()
initThrusterList()
updateOutput()

toggleCargoContainers()
// toggleMediumCargoContainer()