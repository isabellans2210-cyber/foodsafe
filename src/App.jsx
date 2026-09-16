import { useState } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [showDemo, setShowDemo] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [hungerType, setHungerType] = useState("fisica");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [notification, setNotification] = useState("");

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const notify = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const features = [
    ["🧠", "Inteligência Artificial", "Analisa padrões de comportamento e identifica possíveis sinais de fome física ou emocional."],
    ["❤️", "Monitoramento corporal", "Acompanha indicadores como frequência cardíaca, estresse, sono e nível de atividade."],
    ["📊", "Relatórios inteligentes", "Transforma seus dados em relatórios simples para acompanhar sua evolução."],
    ["🔔", "Alertas personalizados", "Receba lembretes para hidratação, alimentação, pausas e autocuidado."],
    ["🥗", "Diário alimentar", "Registre suas refeições e observe como seus hábitos se relacionam com seu bem-estar."],
    ["🎯", "Metas pessoais", "Defina objetivos relacionados à alimentação, hidratação, sono e rotina."],
  ];

  const validationData = [
    ["Usariam o FOODSAFE", 87],
    ["Consideraram a ideia útil", 91],
    ["Gostariam de acompanhar os dados", 84],
    ["Demonstraram interesse no Premium", 68],
  ];

  const testimonials = [
    ["👩🏻", "Marina, 21 anos", "A ideia de receber um sinal antes de comer por ansiedade seria muito útil para mim."],
    ["👨🏻", "Lucas, 27 anos", "Gostei porque não é só sobre comida. O aplicativo considera sono, estresse e rotina."],
    ["👩🏼", "Ana, 34 anos", "Os relatórios deixam mais fácil perceber padrões que normalmente passam despercebidos."],
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {notification && (
        <div className="fixed top-24 right-5 z-[100] bg-green-400 text-black px-5 py-3 rounded-2xl font-bold shadow-2xl">
          ✓ {notification}
        </div>
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          <button onClick={() => scrollTo("inicio")} className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-green-400 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-green-400/30">F</div>
            <div className="text-left hidden sm:block">
              <div className="font-black text-xl text-green-400 tracking-wide">FOODSAFE</div>
              <div className="text-[10px] text-zinc-500">Smart Health Technology</div>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-6 text-sm text-zinc-300">
            {[
              ["inicio", "Início"], ["produto", "Produto"], ["tecnologia", "Tecnologia"],
              ["beneficios", "Benefícios"], ["dashboard", "App"], ["validacao", "Validação"]
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className={`hover:text-green-400 transition ${activeSection === id ? "text-green-400" : ""}`}>
                {label}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button onClick={() => setShowLogin(true)} className="hidden sm:block border border-zinc-700 hover:border-green-400 hover:text-green-400 px-4 py-2.5 rounded-xl text-sm transition">
              Entrar
            </button>
            <button onClick={() => setShowDemo(true)} className="bg-green-400 hover:bg-green-300 text-black font-bold px-4 py-2.5 rounded-xl text-sm transition">
              Testar demo
            </button>
          </div>
        </div>
      </nav>

      <section id="inicio" className="relative min-h-screen flex items-center px-5 pt-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#39ff1435_0%,transparent_58%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex bg-green-400/10 border border-green-400/30 px-5 py-2 rounded-full text-green-400 text-sm mb-7">
              ✦ Tecnologia • Saúde • Inteligência Artificial
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.02] mb-7">
              Entenda sua fome.
              <br />
              <span className="text-green-400">Cuide da sua saúde.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mb-9">
              O FOODSAFE é um conceito de tecnologia vestível conectado a um aplicativo inteligente que analisa sinais corporais e padrões comportamentais para ajudar o usuário a compreender melhor sua relação com a alimentação.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={() => setShowDemo(true)} className="bg-green-400 hover:bg-green-300 px-8 py-4 rounded-2xl text-black font-bold text-lg shadow-2xl shadow-green-400/20 transition">
                Explorar o FOODSAFE →
              </button>
              <button onClick={() => scrollTo("tecnologia")} className="border border-zinc-700 hover:border-green-400 hover:text-green-400 px-8 py-4 rounded-2xl text-lg transition">
                Como funciona
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Monitoramento", "IA comportamental", "Relatórios", "Autocuidado"].map((item) => (
                <div key={item} className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-4 text-xs md:text-sm text-zinc-300">
                  <span className="text-green-400 mr-1">✓</span>{item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="absolute w-96 h-96 bg-green-400 rounded-full blur-[130px] opacity-20" />
            <div className="relative w-[330px] rounded-[48px] bg-zinc-900 border-[10px] border-zinc-700 shadow-[0_0_80px_rgba(57,255,20,0.22)] p-6">
              <div className="flex justify-between items-center mb-7">
                <div><p className="text-xs text-zinc-500">Olá, usuário 👋</p><h3 className="text-xl font-bold">Seu dia</h3></div>
                <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">🔔</div>
              </div>
              <div className="bg-black rounded-3xl p-5 border border-zinc-800 mb-5">
                <div className="flex justify-between items-center mb-5">
                  <div><p className="text-xs text-zinc-500">Análise atual</p><p className="text-green-400 font-black text-xl">FOME FÍSICA</p></div>
                  <span className="text-3xl">🍽️</span>
                </div>
                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-green-400 w-[78%] rounded-full" /></div>
                <p className="text-xs text-zinc-500 mt-3">Confiança da análise: 78%</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[["❤️","78 bpm"],["😌","Estresse baixo"],["🌙","7h 42m"],["💧","1,6 L"]].map(([icon,text]) => (
                  <div key={text} className="bg-black border border-zinc-800 rounded-2xl p-4 text-center">
                    <div className="text-xl">{icon}</div><p className="text-xs text-zinc-400">{text}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setShowDemo(true)} className="w-full mt-5 bg-green-400 text-black font-bold py-3 rounded-2xl hover:bg-green-300 transition">
                Fazer análise
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="produto" className="bg-white text-black py-28 px-5 rounded-t-[55px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-5">O PRODUTO</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Um ecossistema para entender seus hábitos</h2>
            <p className="text-zinc-600 text-lg">O FOODSAFE combina um dispositivo vestível, aplicativo e inteligência artificial em uma única experiência.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-7">
            {[
              ["⌚","01","FOODSAFE Band","Dispositivo vestível que coleta dados corporais e envia as informações ao aplicativo."],
              ["📱","02","FOODSAFE App","Centraliza seus dados, mostra relatórios e apresenta orientações personalizadas."],
              ["🧠","03","FOODSAFE AI","Sistema inteligente que cruza informações para identificar padrões relacionados à fome."]
            ].map(([icon,number,title,text]) => (
              <div key={number} className="group bg-zinc-50 border border-zinc-200 rounded-[35px] p-8 hover:bg-black hover:text-white transition duration-300 hover:-translate-y-2">
                <div className="flex justify-between mb-8"><span className="text-6xl">{icon}</span><span className="text-green-500 font-black text-xl">{number}</span></div>
                <h3 className="text-2xl font-black mb-4">{title}</h3>
                <p className="text-zinc-600 group-hover:text-zinc-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 text-black py-28 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-green-700 font-bold">ANÁLISE INTELIGENTE</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">Que tipo de fome você está sentindo?</h2>
          </div>

          <div className="flex justify-center gap-3 mb-12">
            <button onClick={() => setHungerType("fisica")} className={`px-6 py-3 rounded-2xl font-bold transition ${hungerType === "fisica" ? "bg-green-400" : "bg-white border border-zinc-200"}`}>🍽️ Fome física</button>
            <button onClick={() => setHungerType("emocional")} className={`px-6 py-3 rounded-2xl font-bold transition ${hungerType === "emocional" ? "bg-green-400" : "bg-white border border-zinc-200"}`}>💭 Fome emocional</button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[40px] p-10 shadow-xl">
              <div className="text-6xl mb-7">{hungerType === "fisica" ? "🍽️" : "💭"}</div>
              <h3 className="text-3xl font-black mb-5">{hungerType === "fisica" ? "Fome física" : "Fome emocional"}</h3>
              <p className="text-zinc-600 text-lg leading-relaxed mb-7">
                {hungerType === "fisica"
                  ? "Está relacionada à necessidade fisiológica de energia e nutrientes. Geralmente aparece de forma gradual e pode diminuir após a alimentação."
                  : "Pode estar associada a emoções, situações sociais, estresse ou hábitos. O FOODSAFE busca identificar padrões para incentivar uma pausa consciente."}
              </p>
              <div className="space-y-3">
                {(hungerType === "fisica"
                  ? ["Aparece gradualmente","Pode vir acompanhada de sinais corporais","Tende a diminuir após comer"]
                  : ["Pode surgir repentinamente","Pode estar relacionada a emoções","Pode ocorrer mesmo sem necessidade energética"]
                ).map(item => <div key={item} className="bg-green-50 p-4 rounded-2xl"><span className="text-green-600 font-bold mr-2">✓</span>{item}</div>)}
              </div>
            </div>

            <div className="bg-black text-white rounded-[40px] p-10 shadow-xl">
              <p className="text-green-400 font-bold mb-3">ANÁLISE DO FOODSAFE</p>
              <h3 className="text-3xl font-black mb-8">Resultado da análise</h3>
              <div className="w-48 h-48 mx-auto rounded-full border-[15px] border-green-400 flex flex-col items-center justify-center mb-8">
                <span className="text-5xl font-black">78%</span><span className="text-zinc-500 text-xs">confiança</span>
              </div>
              <div className="bg-zinc-900 rounded-3xl p-6">
                <p className="text-zinc-400 text-sm mb-2">Recomendação</p>
                <p className="text-lg font-bold">{hungerType === "fisica" ? "Seu corpo pode estar sinalizando necessidade de energia. Faça uma refeição consciente." : "Faça uma pausa, observe suas emoções e avalie se existe necessidade física de alimentação."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tecnologia" className="bg-black py-28 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-green-400 font-bold">TECNOLOGIA</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">Dados transformados em informação útil.</h2>
            <p className="text-zinc-400 text-lg">O conceito do FOODSAFE utiliza diferentes fontes de informação para construir uma visão mais ampla dos hábitos do usuário.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["❤️","Frequência cardíaca","Monitoramento contínuo"],["😮‍💨","Estresse","Indicadores comportamentais"],
              ["🌙","Sono","Duração e regularidade"],["🏃","Movimento","Nível de atividade"],
              ["💧","Hidratação","Registro diário"],["🥗","Alimentação","Histórico de refeições"],
              ["😊","Humor","Registro subjetivo"],["🧠","Padrões","Análise por IA"]
            ].map(([icon,title,text]) => (
              <div key={title} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-7 hover:border-green-400/50 transition">
                <div className="text-4xl mb-6">{icon}</div><h3 className="text-xl font-bold mb-2">{title}</h3><p className="text-zinc-500 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="bg-white text-black py-28 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><span className="text-green-700 font-bold">BENEFÍCIOS</span><h2 className="text-4xl md:text-5xl font-black mt-3">Mais consciência. Mais informação.</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(([icon,title,description]) => (
              <div key={title} className="border border-zinc-200 rounded-[30px] p-8 hover:shadow-xl hover:-translate-y-1 transition">
                <div className="text-4xl mb-6">{icon}</div><h3 className="text-2xl font-black mb-4">{title}</h3><p className="text-zinc-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dashboard" className="bg-zinc-950 py-28 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-7 mb-14">
            <div><span className="text-green-400 font-bold">FOODSAFE APP</span><h2 className="text-4xl md:text-5xl font-black mt-3">Seu painel de saúde</h2><p className="text-zinc-500 mt-4">Uma visão simples dos principais indicadores acompanhados pelo sistema.</p></div>
            <button onClick={() => notify("Relatório semanal gerado!")} className="bg-green-400 hover:bg-green-300 text-black font-bold px-6 py-3 rounded-2xl transition">📄 Gerar relatório</button>
          </div>

          <div className="grid lg:grid-cols-4 gap-5 mb-8">
            {[["🍽️","Fome física",72],["😊","Bem-estar",84],["💧","Hidratação",68],["🌙","Qualidade do sono",79]].map(([icon,label,value]) => (
              <div key={label} className="bg-black border border-zinc-800 rounded-3xl p-6">
                <div className="flex justify-between mb-5"><span className="text-3xl">{icon}</span><span className="text-green-400 font-black text-xl">{value}%</span></div>
                <h3 className="font-bold mb-3">{label}</h3><div className="h-2 bg-zinc-800 rounded-full"><div className="h-full bg-green-400 rounded-full" style={{width:`${value}%`}} /></div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-black border border-zinc-800 rounded-[35px] p-8">
              <div className="flex justify-between items-center mb-8"><div><h3 className="text-2xl font-black">Evolução semanal</h3><p className="text-zinc-500 text-sm">Índice geral de bem-estar</p></div><span className="text-green-400 font-black text-2xl">+14%</span></div>
              <div className="h-52 flex items-end gap-3">
                {[48,61,55,73,67,82,88].map((height,index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-3"><div className="w-full bg-green-400/80 rounded-t-xl hover:bg-green-300 transition" style={{height:`${height}%`}} /><span className="text-xs text-zinc-600">{["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"][index]}</span></div>
                ))}
              </div>
            </div>

            <div className="bg-green-400 text-black rounded-[35px] p-8">
              <p className="font-bold mb-3">🎯 META DO DIA</p><h3 className="text-3xl font-black mb-8">Hidratação</h3><div className="text-6xl font-black mb-3">1,6L</div><p className="font-medium mb-7">de 2,0L na meta personalizada</p>
              <div className="h-4 bg-black/20 rounded-full mb-8"><div className="h-full w-[80%] bg-black rounded-full" /></div>
              <button onClick={() => notify("Água registrada 💧")} className="w-full bg-black text-white font-bold py-4 rounded-2xl hover:bg-zinc-900 transition">+ Registrar água</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-28 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><span className="text-green-700 font-bold">COMO FUNCIONA</span><h2 className="text-4xl md:text-5xl font-black mt-3">Da informação à ação</h2></div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["01","Coleta","O dispositivo coleta dados corporais e comportamentais."],
              ["02","Processamento","A inteligência artificial cruza os diferentes indicadores."],
              ["03","Interpretação","O sistema identifica padrões e apresenta um resultado."],
              ["04","Feedback","O usuário recebe informações para tomar decisões mais conscientes."]
            ].map(([number,title,text]) => (
              <div key={number} className="border border-zinc-200 rounded-[30px] p-7"><div className="text-6xl font-black text-green-500/20 mb-7">{number}</div><h3 className="text-2xl font-black mb-4">{title}</h3><p className="text-zinc-600 leading-relaxed">{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="validacao" className="bg-black py-28 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-5 py-2 rounded-full bg-green-400/10 border border-green-400/30 text-green-400 font-semibold mb-7">VALIDAÇÃO DA IDEIA</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-7">Uma solução pensada para um problema real.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-9">Para o protótipo, foi criada uma pesquisa conceitual com pessoas do público-alvo para avaliar a percepção sobre a proposta do FOODSAFE.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6"><div className="text-4xl font-black text-green-400">120+</div><p className="text-zinc-500 mt-2 text-sm">participantes simulados</p></div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6"><div className="text-4xl font-black text-green-400">4.7/5</div><p className="text-zinc-500 mt-2 text-sm">avaliação média simulada</p></div>
            </div>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-8 md:p-10">
            <h3 className="text-2xl font-black mb-2">Pesquisa de interesse</h3><p className="text-zinc-600 text-sm mb-10">Dados simulados para apresentação acadêmica</p>
            <div className="space-y-7">
              {validationData.map(([label,value]) => (
                <div key={label}><div className="flex justify-between gap-5 mb-3"><span className="text-zinc-300">{label}</span><span className="text-green-400 font-black">{value}%</span></div><div className="h-4 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-green-400 rounded-full" style={{width:`${value}%`}} /></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 text-black py-28 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div><span className="text-green-700 font-bold">PRIVACIDADE</span><h2 className="text-4xl md:text-5xl font-black mt-3 mb-7">Seus dados são seus.</h2><p className="text-zinc-600 text-lg leading-relaxed">Como conceito, o FOODSAFE foi pensado com privacidade desde o início. O usuário teria controle sobre os dados registrados e poderia escolher quais informações deseja compartilhar.</p></div>
          <div className="space-y-4">
            {[["🔐","Controle de dados","Gerencie as informações armazenadas."],["🛡️","Proteção","Dados protegidos por mecanismos de segurança."],["👤","Privacidade","Compartilhamento somente mediante autorização."],["📱","Transparência","Visualize como seus dados são utilizados."]].map(([icon,title,text]) => (
              <div key={title} className="bg-white border border-zinc-200 rounded-3xl p-6 flex gap-5 items-center"><div className="text-3xl">{icon}</div><div><h3 className="font-black text-lg">{title}</h3><p className="text-zinc-500 text-sm">{text}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-28 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><span className="text-green-400 font-bold">PLANOS</span><h2 className="text-4xl md:text-5xl font-black mt-3">Escolha sua experiência</h2><p className="text-zinc-500 mt-4">Valores fictícios para demonstração do modelo de negócio.</p></div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              ["Free","R$ 0","Para começar a conhecer seus hábitos.",["Diário alimentar","Registro de hidratação","Resumo semanal"]],
              ["Premium","R$ 29,90","A experiência completa do FOODSAFE.",["Análise por IA","Relatórios avançados","Alertas personalizados","Histórico completo","Metas inteligentes"]],
              ["Pro","R$ 49,90","Para acompanhamento profissional.",["Tudo do Premium","Relatórios profissionais","Compartilhamento autorizado","Painel de acompanhamento"]]
            ].map(([name,price,description,items]) => (
              <div key={name} className={`rounded-[35px] p-8 border ${name==="Premium" ? "bg-green-400 text-black border-green-300 scale-105" : "bg-zinc-950 border-zinc-800"}`}>
                {name==="Premium" && <div className="text-xs font-black uppercase mb-5">Mais completo</div>}
                <h3 className="text-2xl font-black">{name}</h3><div className="text-4xl font-black mt-5 mb-3">{price}{name!=="Free" && <span className="text-sm font-medium">/mês</span>}</div>
                <p className={`text-sm leading-relaxed mb-7 ${name==="Premium" ? "text-black/70" : "text-zinc-500"}`}>{description}</p>
                <div className="space-y-3 mb-8">{items.map(item => <div key={item} className="flex gap-2 text-sm"><span>✓</span>{item}</div>)}</div>
                <button onClick={() => {setSelectedPlan(name); notify(`Plano ${name} selecionado!`)}} className={`w-full py-3 rounded-2xl font-bold transition ${name==="Premium" ? "bg-black text-white" : "bg-green-400 text-black hover:bg-green-300"}`}>Escolher plano</button>
              </div>
            ))}
          </div>
          {selectedPlan && <p className="text-center text-green-400 mt-8">Plano selecionado: <strong>{selectedPlan}</strong></p>}
        </div>
      </section>

      <section className="bg-white text-black py-28 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><span className="text-green-700 font-bold">FEEDBACKS</span><h2 className="text-4xl md:text-5xl font-black mt-3">O que usuários acharam da ideia</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(([avatar,name,text]) => (
              <div key={name} className="bg-zinc-50 border border-zinc-200 rounded-[35px] p-8">
                <div className="text-xl mb-6">⭐⭐⭐⭐⭐</div><p className="text-xl leading-relaxed text-zinc-700 mb-8">“{text}”</p>
                <div className="flex items-center gap-3"><div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">{avatar}</div><div><p className="font-black">{name}</p><p className="text-xs text-zinc-500">Participante da pesquisa</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14"><span className="text-green-400 font-bold">FAQ</span><h2 className="text-4xl font-black mt-3">Perguntas frequentes</h2></div>
          <div className="space-y-4">
            {[
              ["O FOODSAFE é um produto real?","Não. Nesta apresentação, o FOODSAFE é um protótipo conceitual criado para demonstrar uma possível solução tecnológica."],
              ["O dispositivo identifica exatamente o tipo de fome?","A proposta é utilizar diferentes indicadores para gerar uma estimativa. A análise apresentada é uma funcionalidade fictícia do protótipo."],
              ["O FOODSAFE substitui um nutricionista?","Não. A proposta é funcionar como ferramenta de apoio e autoconhecimento, não como substituto de acompanhamento profissional."],
              ["Meus dados poderiam ser compartilhados?","No conceito, o usuário teria controle sobre o compartilhamento e poderia autorizar ou não o acesso de terceiros."]
            ].map(([question,answer]) => (
              <details key={question} className="group bg-black border border-zinc-800 rounded-3xl p-6">
                <summary className="cursor-pointer font-bold text-lg list-none flex justify-between gap-5">{question}<span className="text-green-400 group-open:rotate-45 transition">+</span></summary>
                <p className="text-zinc-500 mt-5 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-green-400 text-black py-24 px-5 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="font-bold uppercase tracking-widest mb-5">O próximo passo começa com uma pergunta</p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-7">Você sabe por que está comendo?</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-9">O FOODSAFE foi criado para transformar essa pergunta em uma oportunidade de autoconhecimento.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setShowDemo(true)} className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-900 transition">Conhecer a experiência</button>
            <button onClick={() => setShowContact(true)} className="border-2 border-black px-8 py-4 rounded-2xl font-bold hover:bg-black hover:text-white transition">Falar com a equipe</button>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-zinc-800 py-16 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div><h2 className="text-3xl font-black text-green-400 mb-4">FOODSAFE</h2><p className="text-zinc-500 leading-relaxed">Smart Health Technology<br/>Tecnologia para compreender hábitos alimentares.</p></div>
          <div><h3 className="font-bold mb-5">Navegação</h3><div className="space-y-3 text-zinc-500">{[["produto","Produto"],["tecnologia","Tecnologia"],["beneficios","Benefícios"],["dashboard","Aplicativo"]].map(([id,label]) => <button key={id} onClick={() => scrollTo(id)} className="block hover:text-green-400 transition">{label}</button>)}</div></div>
          <div><h3 className="font-bold mb-5">Projeto</h3><p className="text-zinc-500 text-sm leading-relaxed">Protótipo conceitual desenvolvido para fins acadêmicos, demonstrando uma possível aplicação de tecnologia, inteligência artificial e saúde.</p></div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-zinc-800 mt-12 pt-7 flex flex-col md:flex-row justify-between gap-4 text-xs text-zinc-600"><span>© 2026 FOODSAFE — Projeto conceitual</span><span>Smart Health Technology</span></div>
      </footer>

      {showDemo && (
        <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md flex items-center justify-center p-5">
          <div className="bg-zinc-950 border border-zinc-800 rounded-[35px] max-w-lg w-full p-8 relative shadow-2xl">
            <button onClick={() => setShowDemo(false)} className="absolute right-6 top-5 text-zinc-500 hover:text-white text-2xl">×</button>
            <div className="text-green-400 text-5xl mb-5">🧠</div><h2 className="text-3xl font-black mb-3">Análise FOODSAFE</h2><p className="text-zinc-500 mb-8">Simulação de uma análise realizada pelo aplicativo.</p>
            <div className="bg-black border border-zinc-800 rounded-3xl p-6 mb-5">
              <div className="flex justify-between mb-5"><span className="text-zinc-400">Probabilidade de fome física</span><span className="text-green-400 font-black">78%</span></div>
              <div className="h-3 bg-zinc-800 rounded-full mb-7"><div className="h-full w-[78%] bg-green-400 rounded-full" /></div>
              <div className="space-y-3 text-sm">{[["Frequência cardíaca","78 bpm"],["Estresse","Baixo"],["Sono","7h 42m"],["Atividade","Normal"]].map(([a,b]) => <div key={a} className="flex justify-between"><span className="text-zinc-500">{a}</span><span>{b}</span></div>)}</div>
            </div>
            <div className="bg-green-400 text-black rounded-3xl p-5"><p className="font-black mb-2">💡 Sugestão</p><p className="text-sm leading-relaxed">Faça uma pausa, observe seus sinais corporais e escolha uma ação que faça sentido para o seu momento.</p></div>
            <button onClick={() => {setShowDemo(false); notify("Análise concluída!")}} className="w-full bg-white text-black font-bold py-4 rounded-2xl mt-6">Finalizar análise</button>
          </div>
        </div>
      )}

      {showLogin && (
        <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md flex items-center justify-center p-5">
          <div className="bg-zinc-950 border border-zinc-800 rounded-[35px] max-w-md w-full p-8 relative">
            <button onClick={() => setShowLogin(false)} className="absolute right-6 top-5 text-zinc-500 hover:text-white text-2xl">×</button>
            <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center text-black font-black text-2xl mb-6">F</div>
            <h2 className="text-3xl font-black mb-2">Bem-vindo de volta</h2><p className="text-zinc-500 mb-8">Entre na sua conta FOODSAFE.</p>
            <div className="space-y-4">
              <input type="email" placeholder="Seu e-mail" className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-green-400" />
              <input type="password" placeholder="Sua senha" className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-green-400" />
              <button onClick={() => {setShowLogin(false); notify("Login realizado com sucesso!")}} className="w-full bg-green-400 text-black font-bold py-4 rounded-2xl">Entrar</button>
            </div>
            <p className="text-center text-zinc-600 text-xs mt-6">Demonstração fictícia — nenhum dado é realmente enviado.</p>
          </div>
        </div>
      )}

      {showContact && (
        <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md flex items-center justify-center p-5">
          <div className="bg-white text-black rounded-[35px] max-w-lg w-full p-8 relative">
            <button onClick={() => setShowContact(false)} className="absolute right-6 top-5 text-zinc-500 hover:text-black text-2xl">×</button>
            <div className="text-4xl mb-5">💬</div><h2 className="text-3xl font-black mb-2">Fale com a equipe</h2><p className="text-zinc-500 mb-7">Envie uma mensagem para a equipe FOODSAFE.</p>
            <div className="space-y-4">
              <input placeholder="Seu nome" className="w-full bg-zinc-100 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-400" />
              <input placeholder="Seu e-mail" className="w-full bg-zinc-100 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-400" />
              <textarea placeholder="Sua mensagem" rows="4" className="w-full bg-zinc-100 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-400 resize-none" />
              <button onClick={() => {setShowContact(false); notify("Mensagem enviada! 💚")}} className="w-full bg-green-400 text-black font-bold py-4 rounded-2xl">Enviar mensagem</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
