//main - page
export const stepsIsAuthorisationUser = [
    {
        element: "#step-1",
        intro: 'Каждый блок — направление развития специалиста.',
        position: 'top',
    },
    {
        element: "#step-2",
        position: 'top',
        intro: 'Тап по блоку откроет  все скиллы этого раздела.',
        tooltipClass: 'tooltip_step_2',
    },
    {
        element: "#step-3",
        intro: "Тап по скиллу откроет страницу с подробной информацией и ссылками на материалы для изучения.",
        tooltipClass: 'tooltip_step_3',
    },
    {
        element: "#step-4",
        intro: 'На популярные вопросы ответит F.A.Q.',
        tooltipClass: 'tooltip_step_4',
    },
    {
        element: "#step-5",
        position: 'left',
        intro: 'Предложить свои материалы или скиллы и задать вопросы можно через форму обратной связи.',
        tooltipClass: 'tooltip_step_5_isAuth',
    },
]

export const stepsNotAuthorisationUser = [
    {
        element: "#step-1",
        intro: 'Каждый блок — направление развития специалиста.',
        position: 'top',
    },
    {
        element: "#step-2",
        position: 'top',
        intro: 'Тап по блоку откроет  все скиллы этого раздела.',
    },
    {
        element: "#step-3",
        intro: "Тап по скиллу откроет страницу с подробной информацией и ссылками на материалы для изучения.",
        tooltipClass: 'tooltip_step_3',
    },
    {
        element: "#step-4",
        intro: 'На популярные вопросы ответит F.A.Q.',
        tooltipClass: 'tooltip_step_4',
    },
    {
        element: "#step-5",
        position: 'right',
        intro: 'Чтобы получить больше знаний, нужно зарегистрироваться.',
        tooltipClass: 'tooltip_step_5',
    },
]

//specializations - page (isAuth)
export const stepsIsAuthSpecializationsPage = [
    {
        element: "#step-1",
        intro: 'Карта компетенции состоит из грейдов — упорядоченной системы распределения в соответствии с ценностью для компании.',
        tooltipClass: 'tooltip_specialization_step_1',
        highlightClass: 'specialization_step-1'
    },
    {
        element: "#step-2",
        intro: 'Изучение материалов навыков показывает уровень соответствия грейду.',
        position: 'right',
    },
    {
        element: "#step-3",
        intro: 'И увеличивает общий прогресс освоения специальности.',
        position: 'top',
    },
    // {
    //     element: "#step-4",
    //     intro: 'Одновременно показывая уровень потенциальной заработной платы.',
    //     position: 'top',
    //     tooltipClass: 'customClass',
    // },
    {
        element: "#step-5",
        intro: 'Авторизованные пользователи могут делиться своей картой. После тапа по значку ссылка на персональную карту компетенции будет скопирована в буфер.',
        position: 'top',
    },
    {
        element: "#step-6",
        intro: 'В профиле настраивается информация, выводимая в персональной карте компетенции.',
        position: 'bottom',
        tooltipClass: 'tooltip_specializations_step_6',
    },
    {
        element: "#step-7",
        intro: 'Рассказать про сервис развития компетенции можно с помощью инструментов шеринга.',
        position: 'top',
        tooltipClass: 'tooltip_specializations_step_7',
    },
]

//specializations - page (notAuth)
export const stepsNotAuthSpecializationsPage = [
    {
        element: "#step-1",
        intro: 'Карта компетенции состоит из грейдов — упорядоченной системы распределения в соответствии с ценностью для компании.',
        tooltipClass: 'tooltip_specializations_step_1',
        highlightClass: 'specialization_step-1'
    },
    {
        element: "#step-2",
        intro: 'Изучение материалов навыков показывает уровень соответствия грейду.',
        position: 'right',
    },
    {
        element: "#step-3",
        intro: 'И увеличивает общий прогресс освоения специальности.',
        position: 'top',
    },
    // {
    //     element: "#step-4",
    //     intro: 'Одновременно показывая уровень потенциальной заработной платы.',
    //     position: 'top',
    //     tooltipClass: 'customClass',
    // },
    {
        element: "#step-5",
        intro: 'Авторизованные пользователи могут делиться своей картой. После тапа по значку ссылка на персональную карту компетенции будет скопирована в буфер.',
        position: 'top',
    },
    {
        element: "#step-7",
        intro: 'Рассказать про сервис развития компетенции можно с помощью инструментов шеринга.',
        position: 'top',
        tooltipClass: 'tooltip_specializations_step_7',
    },

]

//skill - page
export const stepsSkillPage = [
    //блок временно скрыт
    // {
    //     element: "#step-skill-1",
    //     intro: 'Время освоения - это период, за который обычно получается освоить конкретный скилл.',
    //     tooltipClass: 'tooltip_skill_step_1',
    //     highlightClass: 'skill_step-1'
    // },
    {
        element: "#step-skill-2",
        intro: 'Сложность определяется экспертами Skillmaps и It-сообществом.',
        tooltipClass: 'tooltip_skill_step_2',
        highlightClass: 'skill_step-2'
    },
    {
        element: "#step-skill-3",
        intro: 'Для освоения навыка эксперты собрали проверенные материалы из открытых источников.',
        tooltipClass: 'tooltip_skill_step_3',
        highlightClass: 'skill_step-3',
    },
    {
        element: "#step-skill-4",
        intro: 'Любой участник сообщества может предложить материал или сообщить о нерабочей ссылке через форму обратной связи.',
        tooltipClass: 'tooltip_skill_step_4',
        highlightClass: 'skill_step-4',
    },
    {
        element: "#step-skill-5",
        intro: 'Список материалов можно использовать как чек лист, отмечая уже изученные пункты.',
        tooltipClass: 'tooltip_skill_step_5',
        highlightClass: 'skill_step-5',
    },
    {
        element: "#step-skill-6",
        intro: 'В любой момент навык можно отметить как пройдённый. После изучения всех материалов или просто потому, что был освоен ранее.',
        tooltipClass: 'tooltip_skill_step-6!',
        highlightClass: 'skill_step-6!'
    },
]

//skill - pageMobile
export const stepsSkillPageMobile = [
    //блок временно скрыт
    // {
    //     element: "#step-skill-1",
    //     intro: 'Время освоения - это период, за который обычно получается освоить конкретный скилл.',
    //     tooltipClass: 'tooltip_skill_step_1',
    //     highlightClass: 'skill_step-1'
    // },
    {
        element: "#step-skill-2",
        intro: 'Сложность определяется экспертами Skillmaps и It-сообществом.',
        tooltipClass: 'tooltip_skill_step_2',
        highlightClass: 'skill_step-2'
    },
    {
        element: "#step-skill-3",
        intro: 'Для освоения навыка эксперты собрали проверенные материалы из открытых источников.',
        tooltipClass: 'tooltip_skill_step_3',
        highlightClass: 'skill_step-3',
    },
    {
        element: "#step-skill-6",
        intro: 'В любой момент навык можно отметить как пройдённый. После изучения всех материалов или просто потому, что был освоен ранее.',
        tooltipClass: 'tooltip_skill_step-6!',
        highlightClass: 'skill_step-6!'
    },
]
