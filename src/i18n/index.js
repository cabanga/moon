import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'pt': {
        titleDefaul: 'Plataforma 100% Angolana, para recrutamento de programadores',
        titleDefaul2: 'Nossos diferencias',
        textLogin: 'Iniciar Sessão',
        signin: 'Iniciar Sessão',
        signout: 'Terminar Sessão',
        signoup: 'Registar',
        title: 'Titulo',
        company: 'Empresa',
        salary: 'Salário',
        workPlace: 'Local de trabalho',
        city: 'Cidade',
        descriptionTitleDefault2: 'A Moon oferece um cadastro de maneira intuitiva e simples, bem como testes com os quais você pode demonstrar suas habilidades. Em pouco tempo consegui agendar entrevistas e estar inserido no mercado.',
        description: 'Descrição',
        typeCompany: 'Tipo de Empresa',
        location: 'Localização',
        level: 'Nível',
        typeJob: 'Tipo de Trabalho',
        responsabily: 'Responsábilidade',
        requeriment: 'Requisito',
        filterDevelopers: 'Buscar por skills',
        publishVacancy: 'Publicar Vaga',
        editVacancy: 'Editar Vaga',
        titleVacancy: 'Titulo da vaga',
        otherBenefits: 'Outros beneficios',
        responsibilities: 'Responsabilidades',
        requirements: 'Requisitos',
        category: 'Tipo',
        companyName: 'Nome da Empresa',
        registerVacancy: 'Registar Vaga',
        updateVacancy: 'Actualizar Vaga',
        skills: 'Competências',
        bonus: 'Bonus',
        contact_email: 'E-mail',
        contact_phone: 'Contacto Telemóvel',
        vacancies: 'Vagas',
        vacancy: 'Vaga'

    },
    'en': {
        titleDefaul: '100% Angolan platform, for T.I.',
        titleDefaul2: 'Our differences',
        textLogin: 'Please Login',
        signin: 'Sign in',
        signout: 'Sign out',
        signoup: 'Sign up',
        title: 'Title',
        company: 'Company',
        salary: 'Salary',
        workPlace: 'Work place',
        city: 'City',
        descriptionTitleDefault2: 'Moon offers an intuitive and simple registration, as well as tests with which you can demonstrate your skills. In a short time I was able to schedule interviews and be on the market.',
        description: '',
        typeCompany: '',
        localization: '',
        level: '',
        typeJob: '',
        responsabily: '',
        requeriment: '',
        filterDevelopers: '',
        publishVacancy: 'Publish vacancy',
        editVacancy: ''
    }
}

const i18n = new VueI18n({
    locale: 'pt', // set locale
    messages // set locale messages
})

export default i18n
