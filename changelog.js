// this should be in DD/MM/YYYY!!! poggers
const changes = [
    {
        date: '20/07/2025',
        changes: [
            `Added prototech Thruster information.`
        ]
    },
    {
        date: '19/07/2025',
        changes: [
            `Added Modular Cargo information.`
        ]
    },
    {
        date: '7/07/2020 again',
        changes: [
            `Changed cargo container filler to ore (while I add more options), because who fills cargo with Platinum Ingots?`
        ]
    },
    {
        date: '7/07/2020',
        changes: [
            `Ship Thruster requirements now take into account weight of thrusters and recursively calculate requirements.`,
            `Added a Cargo Space Multiplier option.`
        ],
    }
]


function showChanges() {
    let c = Cookies.get('lastSeen');
    if (!c || c !== String(changes.length)) {
        $('#changelogModal').modal()
        addChanges()

    }
    Cookies.set('lastSeen', changes.length);

}

function clearVers() {
    Cookies.set('lastSeen', '-1')
}

function addChanges() {

    let modalBodyHTML = ''
    for (let change of changes) {
        let title = `<h4>${change.date}</h4>`

        let changesList = ''
        for (let item of change.changes)
            changesList += `<li>${item}</li>`

        let allChanges = `<ul>${changesList}</ul>`

        modalBodyHTML += `${title}${allChanges}`
    }

    $('#changelogModalBody').html(modalBodyHTML)
}

showChanges()