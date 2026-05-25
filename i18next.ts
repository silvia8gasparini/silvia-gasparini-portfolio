import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "it",
  lng: localStorage.getItem("i18nextLng") || "it",
  resources: {
    it: {
      translation: {
        homepage: {
        button: "Scopri chi sono!"
          },
        about: {
          intro: {
            greeting: "Piacere di conoscerti, sono Silvia!",
            role: "Web Developer",
            words: ["Creativa", "Eclettica", "Visionaria"]
          },
          past: {
            title: "Passato",
            text: "Dopo un primo percorso in <1>Lingue Orientali a Ca' Foscari</1>, mi sono <1>laureata in Lettere Moderne</1> all'Università di Padova.<2/><2/>Ho costruito la mia professionalità tra <1>archivi, biblioteche e uffici</1>: un mondo che mi ha formato nel <1>rigore metodologico</1>, nell'<1>attenzione al dettaglio</1> e nella <1>capacità di gestire sistemi complessi di informazione</1>. Competenze che oggi trasferisco direttamente nello sviluppo software."
          },
          present: {
            title: "Presente",
            text: "Ho conseguito un <1>master professionalizzante Full-Stack Developer</1> presso <2>EPICODE</2>, dove ho acquisito competenze solide sia lato client che lato server. Sto continuando a rafforzare il mio stack tecnico, dalla <3>progettazione di interfacce all'architettura back-end</3>, con l'obiettivo di operare in autonomia sull'intero ciclo di sviluppo di un prodotto digitale.<4/><4/>Cerco contesti <5>etici, inclusivi e orientati a un'innovazione consapevole</5>."
          },
          future: {
            title: "Futuro",
            text: "Voglio affermarmi come <1>sviluppatrice Full-Stack</1> con una forte sensibilità per il design e l'esperienza utente. Mi interessa che un prodotto sia funzionale e dotato di <2>forma, coerenza e significato</2>, dal database all'interfaccia.<3/><3/>Porto con me un <1>background umanistico</1> che mi permette di progettare soluzioni tecniche <4>accessibili, inclusive e capaci di comunicare davvero</4> con chi le usa.<3/><3/>La mia visione è un web <5>meno standardizzato e più empatico</5>, dove la tecnologia si mette al servizio delle persone. Voglio contribuire a costruirlo con <6>codice, design e intenzione</6>."
          }
          },
        projects: {
          capstone: "Una web app che intreccia libri, tè e stagioni giapponesi. Il mio capstone project: un e-commerce librario ispirato all’estetica wabi-sabi, dove ogni colore racconta una storia.",
          genkitenki: "Una web app meteo ispirata all’universo Ghibli. Seleziona un continente, scegli una città, e scopri che tempo fa con Totoro! Realizzata con React, Bootstrap e l’API di OpenWeatherMap.",
          applemusic: "Un clone responsive di Apple Music, con interfaccia fluida e dark mode. Realizzato con React, Redux e Bootstrap."
        },
        contacts: {
          title: "Contattami",
          name: "Nome e Cognome",
          email: "Email",
          message: "Messaggio",
          button: "Invia",
          success: "Messaggio inviato con successo!",
          error: "Errore nell'invio, riprova"
        }
      }
    },
    en: {
      translation: {
        homepage: {
        button: "Discover who I am!"
          },
        about: {
          intro: {
            greeting: "Nice to meet you, I'm Silvia!",
            role: "Web Developer",
            words: ["Creative", "Eclectic", "Visionary"]
          },
          past: {
            title: "Past",
            text: "After an initial path in <1>Oriental Languages at Ca' Foscari</1>, I graduated in <1>Modern Literature</1> from the University of Padua.<2/><2/>I built my professional background among <1>archives, libraries and offices</1>: a world that shaped me in <1>methodological rigor</1>, <1>attention to detail</1> and the <1>ability to manage complex information systems</1>. Skills I now transfer directly into software development."
          },
          present: {
            title: "Present",
            text: "I completed a <1>Full-Stack Developer professional master's program</1> at <2>EPICODE</2>, where I gained solid skills on both the client and server side. I am continuing to strengthen my technical stack, from <3>interface design to back-end architecture</3>, with the goal of operating autonomously across the entire development cycle of a digital product.<4/><4/>I look for contexts that are <5>ethical, inclusive and oriented toward conscious innovation</5>."
          },
          future: {
            title: "Future",
            text: "I want to establish myself as a <1>Full-Stack developer</1> with a strong sensitivity for design and user experience. I care that a product is functional and equipped with <2>shape, coherence and meaning</2>, from the database to the interface.<3/><3/>I bring with me a <1>humanistic background</1> that allows me to design technical solutions that are <4>accessible, inclusive and capable of truly communicating</4> with the people who use them.<3/><3/>My vision is a web that is <5>less standardized and more empathetic</5>, where technology serves people. I want to help build it with <6>code, design and intention</6>."          }
          },
         projects: {
          capstone: "A web app blending books, tea, and the 72 Japanese microseasons. My capstone project: a bookstore e-commerce inspired by wabi-sabi aesthetics, where each color tells a story.",
          genkitenki: "A weather app inspired by the Ghibli universe. Choose a continent, pick a city, and check the weather with Totoro! Built with React, Bootstrap, and OpenWeatherMap API.",
          applemusic: "A responsive Apple Music clone with smooth interface and dark mode. Built with React, Redux, and Bootstrap."
          },
         contacts: {
          title: "Contact me",
          name: "Full Name",
          email: "Email",
          message: "Message",
          button: "Send",
          success: "Message sent successfully!",
          error: "Error sending message, please try again"
          }
      }
    },
    jp: {
      translation: {
        homepage: {
        button: "私について"
          },
        about: {
          intro: {
            greeting: "はじめまして、シルヴィアです！",
            role: "Web Developer",
            words: ["クリエイティブ", "多才", "先見的"]
          },
          past: {
            title: "過去",
            text: "<1>Ca' Foscariで東洋言語学</1>を学んだ後、パドヴァ大学で<1>現代文学の学位</1>を取得しました。<2/><2/><1>文書館、図書館、オフィス</1>の中でキャリアを積んできました。そこで培ったのは、<1>方法論的な厳密さ</1>、<1>細部への注意力</1>、そして<1>複雑な情報システムを管理する能力</1>です。これらのスキルは、今日のソフトウェア開発に直接活かされています。"
          },          
          },
          present: {
            title: "現在",
            text: "<2>EPICODE</2>にて<1>フルスタック開発者の専門修士課程</1>を修了し、クライアントサイドとサーバーサイドの両方において確かなスキルを習得しました。<3>インターフェース設計からバックエンドアーキテクチャ</3>まで、デジタルプロダクトの開発サイクル全体を自律的に担うことを目標に、技術スタックを強化し続けています。<4/><4/><5>倫理的で、インクルーシブで、意識的なイノベーションを志向する環境</5>を求めています。"
          },
          future: {
            title: "未来",
            text: "デザインとユーザー体験への強い感性を持つ<1>フルスタック開発者</1>として自分を確立していきたいと考えています。プロダクトが機能的であるだけでなく、データベースからインターフェースに至るまで、<2>形・一貫性・意味</2>を持つものであることを大切にしています。<3/><3/><1>人文学的なバックグラウンド</1>は、<4>アクセシブルでインクルーシブ、そして真に対話できる</4>技術的ソリューションを設計する力を与えてくれます。<3/><3/><5>画一化されたウェブではなく、より共感的なウェブ</5>を目指しています。テクノロジーが人に寄り添う場所を、<6>コード・デザイン・意志</6>を持って築いていきたいと思います。"          }
        },
         projects: {
          capstone: "本、お茶、そして日本の七十二候を結びつけたWebアプリ。私のキャップストーンプロジェクト：侘び寂び美学にインスパイアされたブック・コマース。色が物語を語ります。",
          genkitenki: "ジブリの世界観にインスパイアされた天気アプリ。大陸を選び、都市を選んで、トトロと一緒に天気を確認！React、Bootstrap、OpenWeatherMap APIで制作。",
          applemusic: "Apple Musicのレスポンシブ・クローン。スムーズなUIとダークモード付き。React、Redux、Bootstrapで制作。"
        },
        contacts: {
          title: "お問い合わせ",
          name: "お名前",
          email: "メールアドレス",
          message: "メッセージ",
          button: "送信",
          success: "メッセージが送信されました！",
          error: "送信エラーが発生しました。もう一度お試しください。"
        }
      }
    }
  }
);
