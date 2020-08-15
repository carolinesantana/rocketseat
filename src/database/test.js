const dataBase = require('./db')
const createProffy = require('./createProffy')

dataBase.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: "Carol",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "0000",
        bio: "Hello",
    }

    classValue = {
        subject: "1",
        cost: "40",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220 
        },
        {
            weekday: 4,
            time_from: 520,
            time_to: 1720 
        },
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consultar dados
    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffy_id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "4"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "420"
    `)

    console.log(selectClassesSchedules)




})