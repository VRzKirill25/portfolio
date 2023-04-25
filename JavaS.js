const { createApp } = Vue

createApp({
  data() {
    return {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  },
  methods: {
    register() {
      fetch('http://studentsystem.xyz:8080/user', {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      }).then((response) => {
        switch (response.status) {
          case 201:
            alert('Пользователь успешно создан')
            break;
          case 403:
            this.error = 'Такой пользователь уже существует'
            break;
          case 400:
            this.error = 'Не верные данные'
            break;
          default:
            this.error = 'Неизвестный статус'
            break;
        }
        return response.json();
      }).then((data) => {
        console.log(data)
      })
        .catch((err) => {
          console.error("Невозможно отправить запрос", err);
        });
    },

    login() {
      this.loading = true
      fetch('http://studentsystem.xyz:8080/user/auth', {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      }).then((response) => {
        switch (response.status) {
          case 200:
            alert('Вы авторизовались')
            break;
          case 403:
            this.error = 'Проверьте логин или пароль'
            break;
          default:
            this.error = 'Неизвестный статус'
            break;
        }
        console.log(response.status)
        return response.json();
      }).then((data) => {
        console.log(data)
        this.loading = false
      })
        .catch((err) => {
          console.error("Невозможно отправить запрос", err);
        });
    }
  }

}).mount('#app')


createApp({
  data() {
    return {
      menu: false,
      optionsone: [
        { text: 'Веселье', value: false },
        { text: 'Дружба', value: false },
        { text: 'Тиммейт', value: false },
        { text: 'Про игрок', value: false },
        { text: 'Средний игрок', value: false },
        { text: 'Начальный игрок', value: false },
        { text: 'Обучение', value: false }
      ],
      optionstwo: [
        { text: 'Apex Legends', value: false },
        { text: 'Black Desert', value: false },
        { text: 'Counter-Strike: Global Offensive', value: false },
        { text: 'CarX Drift Racing ONLINE', value: false },
        { text: 'Crossout', value: false },
        { text: 'Deceit', value: false },
        { text: 'Drift 86', value: false },
        { text: 'Euro Truck Simulator 2', value: false },
        { text: 'Garrys mod', value: false },
        { text: 'Left 4 Dead 2', value: false },
        { text: 'Mortal Kombat 11', value: false },
        { text: 'Minecraft', value: false },
        { text: 'Payday 2', value: false },
        { text: 'Portal 2', value: false },
        { text: 'Phasmophobia', value: false },
        { text: 'Project Zomboid', value: false },
        { text: 'Stalcraft', value: false },
        { text: 'Unturned', value: false },
        { text: 'War Thunder', value: false }
      ],
      optionsthree: [
        { text: '10-12', value: false },
        { text: '13-15', value: false },
        { text: '16-18', value: false },
        { text: '19-21', value: false },
        { text: '22-25', value: false },
        { text: '26-30', value: false },
        { text: '31-35', value: false },
        { text: '36-40', value: false },
        { text: '41-50', value: false }
      ]
    }
  },
  methods: {
    openmenu() {
      this.menu = !this.menu
    },
    apply() {
      this.menu = !this.menu
    }
  }
  
}).mount('#filter')


createApp({
  data() {
    return {
      cards: [
        {
          username: { text: 'MaxON-Turbo' },
          tegs: { text: 'Тиммейт' },
          game: { text: 'Payday 2'},
          age: { text: '19-21'},
          infouser: { text: 'ищю тиммейта для игры, не дружить а просто играть и наращивать скилл'}
        },
        {
          username: { text: 'Exidnost' },
          tegs: { text: 'Веселье' },
          game: { text: 'Counter-Strike: Global Offensive' },
          age: { text: '16-18' },
          infouser: { text: 'Играю с дедом, снапой, зизом и дибкеем'}
        },
        {
          username: { text: 'SnapaExstreme' },
          tegs: { text: 'Дружба' },
          game: { text: 'Minecraft'},
          age: { text: '16-18'},
          infouser: { text: 'Играю с дедом, экзидности, зизом и дибкеем'}
        },
        {
          username: { text: 'littelBOSS' },
          tegs: { text: 'Обучение' },
          game: { text: 'Apex Legends'},
          age: { text: '13-15'},
          infouser: { text: 'Самый багатый в этом кубическом сантиметре земли в галактике юпитера'}
        },
        {
          username: { text: 'shweller' },
          tegs: { text: 'Тиммейт' },
          game: { text: 'Crossout'},
          age: { text: '36-40'},
          infouser: { text: 'Я Влад'}
        },
        {
          username: { text: 'Psychiatrist' },
          tegs: { text: 'Дружба' },
          game: { text: 'Drift 86'},
          age: { text: '22-25'},
          infouser: { text: 'Хорошо играю'}
        },
        {
          username: { text: 'Sys34' },
          tegs: { text: 'Начальный игрок' },
          game: { text: 'Left 4 Dead 2'},
          age: { text: '10-12'},
          infouser: { text: 'Играть люблю, сделаю уроки и можно в пк'}
        },
        {
          username: { text: 'VRzKirill25' },
          tegs: { text: 'Веселье' },
          game: { text: 'Minecraft'},
          age: { text: '13-15'},
          infouser: { text: 'Играю с зизом, cнапой, экзидности и дибкеем'}
        },
        {
          username: { text: 'Dibkei' },
          tegs: { text: 'Дружба' },
          game: { text: 'Counter-Strike: Global Offensive'},
          age: { text: '16-18'},
          infouser: { text: 'Играю с cнапой, экзидности, зизом и дедом'}
        },
        {
          username: { text: 'ZimZ' },
          tegs: { text: 'Дружба' },
          game: { text: 'Counter-Strike: Global Offensive'},
          age: { text: '16-18'},
          infouser: { text: 'Играю с cнапой, экзидности, дибкеем и дедом'}
        },
        {
          username: { text: 'Retrix' },
          tegs: { text: 'Средний игрок' },
          game: { text: 'Black Desert'},
          age: { text: '16-18'},
          infouser: { text: ' дискорд 1234321'}
        },
        {
          username: { text: 'Tremistex' },
          tegs: { text: 'Средний игрок' },
          game: { text: 'Portal 2'},
          age: { text: '13-15'},
          infouser: { text: 'Я админ двух маин серверов и точка'}
        },
        {
          username: { text: 'Zarutik' },
          tegs: { text: 'Веселье' },
          game: { text: 'Deceit'},
          age: { text: '26-30'},
          infouser: { text: 'Я создаю лучшие компьютеры из ужасных комплектующих'}
        },
        {
          username: { text: 'MrUntermensch' },
          tegs: { text: 'Тиммейт' },
          game: { text: 'Phasmophobia'},
          age: { text: '19-21'},
          infouser: { text: 'я ? Кто я ? а кто он ? почему, зачем и как'}
        },
        {
          username: { text: '4iter' },
          tegs: { text: 'Средний игрок' },
          game: { text: 'Drift 86'},
          age: { text: '16-18'},
          infouser: { text: 'Го играть'}
        },
        {
          username: { text: 'DocPilulkin' },
          tegs: { text: 'Веселье' },
          game: { text: 'Project Zomboid'},
          age: { text: '16-18'},
          infouser: { text: 'Я быстро лутаю все здания, лучший рекор 27 секунд с копейками'}
        },
        {
          username: { text: '_MoBo_' },
          tegs: { text: 'Обучение' },
          game: { text: 'Euro Truck Simulator 2'},
          age: { text: '13-15'},
          infouser: { text: 'Несколько месяцев спустя танки Леопард появляются в месте назначения'}
        },
        {
          username: { text: 'IRONSAID' },
          tegs: { text: 'Дружба' },
          game: { text: 'Stalcraft'},
          age: { text: '16-18'},
          infouser: { text: 'Факт - электро моторы легче контролируются - это знать надо !'}
        },
        {
          username: { text: 'SeroVodorod' },
          tegs: { text: 'Дружба' },
          game: { text: 'Phasmophobia'},
          age: { text: '22-25'},
          infouser: { text: 'Когда мне было 5 лет я думал что это реально'}
        },
        {
          username: { text: 'Xeon 2640' },
          tegs: { text: 'Тиммейт' },
          game: { text: 'Deceit'},
          age: { text: '13-15'},
          infouser: { text: 'В стиме она платная, но никто не отменял торрент )'}
        },
        {
          username: { text: 'SUMRAK' },
          tegs: { text: 'Про игрок' },
          game: { text: 'Mortal Kombat 11'},
          age: { text: '16-18'},
          infouser: { text: 'Сильнейший человек планеты это Киря'}
        },
        {
          username: { text: 'Evemed' },
          tegs: { text: 'Дружба' },
          game: { text: 'War Thunder'},
          age: { text: '31-35'},
          infouser: { text: 'Сперва как фанфик а потом как вполне неплохой сюжет'}
        },
        {
          username: { text: 'RSD500' },
          tegs: { text: 'Средний игрок' },
          game: { text: 'Stalcraft'},
          age: { text: '19-21'},
          infouser: { text: 'Никаких сбоев и BSOD-ов не было'}
        }
      ]
    }
  }
}).mount('#users')
