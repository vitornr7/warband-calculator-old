const companions = document.querySelector('#selected-heroes')

const createHeroPanel = (id) => {
    const panel = document.createElement('div')
    panel.classList.add('hero-panel')
    panel.setAttribute('id', id)

    return panel
}

const createLevelController = (lbl, lvl) => {
    const li = document.createElement('li')

    const label = document.createElement('div')

    const lvlPanel = document.createElement('div')
    const btnSub = document.createElement('button')
    const level = document.createElement('div')
    const btnAdd = document.createElement('button')

    label.innerText = lbl

    btnSub.innerText = "-"
    level.innerText = lvl
    btnAdd.innerText = "+"

    btnAdd.onclick = () => {

    }
    btnSub.onclick = () => {

    }

    lvlPanel.classList.add('lvl-controller')

    lvlPanel.append(btnSub)
    lvlPanel.append(level)
    lvlPanel.append(btnAdd)

    li.append(label)
    li.append(lvlPanel)

    return li
}

const createInfoSection = (info) => {
    const section = document.createElement('section')

    const portrait = document.createElement('div')
    const heroName = document.createElement('h2')
    const list = document.createElement('ul')

    const level = createLevelController('Level:', info.level)
    const health = document.createElement('li')

    heroName.innerText = info.name
    portrait.classList.add('portrait')

    health.innerText = "Health: " + info.hp

    section.append(portrait)
    section.append(heroName)

    list.append(level)
    list.append(health)

    section.append(list)

    return section
}

const createAttributesSection = (attr) => {
    const section = document.createElement('section')

    const title = document.createElement('h2')
    const points = document.createElement('p')
    title.innerText = "Attributes"
    points.innerText = "Attribute points: 3"

    const list = document.createElement('ul')

    const str = createLevelController('STR', attr.str)
    const agi = createLevelController('AGI', attr.agi)
    const int = createLevelController('INT', attr.int)
    const cha = createLevelController('CHA', attr.cha)

    list.append(str)
    list.append(agi)
    list.append(int)
    list.append(cha)

    section.append(title)
    section.append(list)
    section.append(points)

    return section
}

const createSkillsSection = (skills) => {
    const section = document.createElement('section')

    const title = document.createElement('h2')
    const points = document.createElement('p')
    title.innerText = "Skills"
    points.innerText = "Skill points: 2"

    const list = document.createElement('ul')

    const skillsLI = []
    skillsLI.push(createLevelController('Ironflesh', skills.ironflesh))
    skillsLI.push(createLevelController('Power Strike', skills.power_strike))
    skillsLI.push(createLevelController('Power Throw', skills.power_throw))
    skillsLI.push(createLevelController('Power Draw', skills.power_draw))
    skillsLI.push(createLevelController('Weapon Master', skills.weapon_master))
    skillsLI.push(createLevelController('Shield', skills.shield))
    skillsLI.push(createLevelController('Athletics', skills.athletics))
    skillsLI.push(createLevelController('Riding', skills.riding))
    skillsLI.push(createLevelController('Horse Archery', skills.horse_archery))
    skillsLI.push(createLevelController('Looting', skills.looting))
    skillsLI.push(createLevelController('Trainer', skills.trainer))
    skillsLI.push(createLevelController('Tracking', skills.tracking))
    skillsLI.push(createLevelController('Tactics', skills.tactics))
    skillsLI.push(createLevelController('Path Finding', skills.path_finding))
    skillsLI.push(createLevelController('Spotting', skills.spotting))
    skillsLI.push(createLevelController('Inventory Management', skills.inventory_management))
    skillsLI.push(createLevelController('Wound Treatment', skills.wound_treatment))
    skillsLI.push(createLevelController('Surgery', skills.surgery))
    skillsLI.push(createLevelController('First Aid', skills.first_aid))
    skillsLI.push(createLevelController('Engineer', skills.engineer))
    skillsLI.push(createLevelController('Persuasion', skills.persuasion))
    skillsLI.push(createLevelController('Prisoner Management', skills.prisoner_management))
    skillsLI.push(createLevelController('Leadership', skills.leadership))
    skillsLI.push(createLevelController('Trade', skills.trade))

    section.append(title)
    section.append(list)

    skillsLI.forEach(el => {
        list.append(el)
    })

    section.append(points)

    return section
}

// ymira ---------------------------------------------
const ymiraPanel = createHeroPanel('yimira-panel')

const ymiraInfo = createInfoSection(ymira.info)
const ymiraAttr = createAttributesSection(ymira.attributes)
const ymiraSkills = createSkillsSection(ymira.skills)

ymiraPanel.append(ymiraInfo)
ymiraPanel.append(ymiraAttr)
ymiraPanel.append(ymiraSkills)

companions.append(ymiraPanel)

// deshavi ---------------------------------------------

const deshaviPanel = createHeroPanel('yimira-panel')

const deshaviInfo = createInfoSection(deshavi.info)
const deshaviAttr = createAttributesSection(deshavi.attributes)
const deshaviSkills = createSkillsSection(deshavi.skills)

deshaviPanel.append(deshaviInfo)
deshaviPanel.append(deshaviAttr)
deshaviPanel.append(deshaviSkills)

companions.append(deshaviPanel)