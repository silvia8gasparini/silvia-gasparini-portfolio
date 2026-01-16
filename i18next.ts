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
            greeting: "Piacere di conoscerti! Sono Silvia!",
            role: "Full-Stack Developer",
            words: ["Creativa", "Eclettica", "Visionaria"]
          },
        past: {
            title: "Passato",
            text: "Sono <1>laureata in Lettere Moderne</1> all'Università di Padova, con un breve epilogo a Ca' Foscari.<1/><1/> Ho lavorato tra <1>archivi, biblioteche e uffici</1>. Un mondo fatto di ordine e memoria, che mi ha insegnato <1>rigore, pazienza e attenzione al dettaglio</1>, ma nel tempo ho sentito il bisogno di rimettermi in discussione."
            },
        present: {
            title: "Presente",
            text: "Ho da poco concluso un <1>master Full-Stack Developer</1> presso <2>EPICODE</2>, ma sto continuando il mio percorso per <3>specializzarmi nel front-end</3>.<4/><4/>Voglio consolidare le mie competenze tecniche e progettuali in contesti che abbiano un’anima: <5>ambienti etici, inclusivi, orientati all’innovazione consapevole</5>."
            },
        future: {
            title: "Futuro",
            text: "Il mio obiettivo è focalizzato sul <1>front-end</1> e sul <1>design UX/UI</1>: voglio poter dare forma concreta alle mie idee progettuali, curando non solo il <2>cosa</2> e il <2>perché</2>, ma anche il <2>come</2>. <3/><3/>Coniugo il mio background umanistico con le competenze tecniche per progettare <4>interfacce accessibili, inclusive e significative</4>, capaci di dialogare con chi le usa.<3/><3/>Sogno un web meno standardizzato e più empatico, dove <5>innovazione e creatività</5> abbiano lo spazio per esprimersi fuori dagli schemi. Voglio crescere come UX/UI Designer e come front-end developer per rendere il digitale <6>un posto più umano</6>."          }
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
            greeting: "Nice to meet you! I'm Silvia!",
            role: "Full-Stack Developer",
            words: ["Creative", "Eclectic", "Visionary"]
          },
          past: {
            title: "Past",
            text: "I hold a <1>degree in Modern Literature</1> from the University of Padua, with a short chapter at Ca' Foscari.<1/><1/> I worked across <1>archives, libraries and offices,</1> a world built on order and memory that taught me <1>rigor, patience, and attention to detail</1>, yet I eventually felt the need to question myself again."
          },
          present: {
            title: "Present",
            text: "I recently completed a <1>Full-Stack Developer master's program</1> at <2>EPICODE</2>, but I’m continuing my journey to <3>specialize in front-end development</3>.<4/><4/>I want to strengthen my technical and design skills in contexts with a soul: <5>ethical, inclusive environments driven by mindful innovation</5>."
          },
          future: {
            title: "Future",
            text:"My goal is focused on <1>front-end</1> and <1>UX/UI design</1>: I want to give concrete shape to my design ideas, taking care not only of the <2>what</2> and the <2>why</2>, but also the <2>how</2>. <3/><3/>I combine my humanistic background with technical skills to design <4>accessible, inclusive, and meaningful interfaces</4> that can truly connect with those who use them.<3/><3/>I dream of a web that is less standardized and more empathetic, where <5>innovation and creativity</5> have the freedom to express themselves beyond conventions. I want to grow as a UX/UI Designer and as a front-end developer to make the digital world <6>a more human place</6>."
          }
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
            greeting: "はじめまして！シルヴィアです！",
            role: "Full-Stack Developer",
            words: ["クリエイティブ", "多才", "先見的"]
          },
          past: {
            title: "過去",
            text: "私はパドヴァ大学で<1>現代文学を専攻</1>し、短期間カ・フォスカリ大学にも通いました。<1/><1/>その後、<1>文書館や図書館、事務所</1>などで働き、<1>秩序、忍耐、細部への注意</1>を学びましたが、やがて自分を見つめ直したいと思うようになりました。"
          },
          present: {
            title: "現在",
            text: "最近、<1>EPICODE</1>で<2>フルスタック・デベロッパーのマスター課程</2>を修了しましたが、さらに<3>フロントエンド分野に特化するための学び</3>を続けています。<4/><4/>私は、<5>倫理的で包摂的、そして意識的なイノベーション</5>を大切にする環境で、自分の技術力とデザイン力をより深めたいと考えています。"
          },
          future: {
            title: "未来",
            text:"私の目標は、<1>フロントエンド</1>と<1>UX/UIデザイン</1>に焦点を当てることです。<2>何を</2>、<2>なぜ</2>だけでなく、<2>どのように</2>をも大切にしながら、自分のアイデアに具体的な形を与えたいと考えています。<3/><3/>人文学の背景と技術的なスキルを融合させ、<4>誰もが使いやすく、包摂的で、意味のあるインターフェース</4>を設計しています。それらが使う人と対話できるように。<3/><3/>私は、<5>革新と創造性</5>が型にとらわれずに表現できる、より共感的で標準化されすぎていないウェブを夢見ています。UX/UIデザイナーとして、そしてフロントエンドデベロッパーとして成長し、デジタルを<6>より人間的な場所</6>にしていきたいです。"
          }
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
});
