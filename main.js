document.addEventListener('DOMContentLoaded', function() {
    console.log('Script main.js loaded and DOMContentLoaded event fired.');

    // --- Variáveis para os Ícones das Funções ---
    const DUELIST_ICON_URL = "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleDuelist.svg";
    const CONTROLLER_ICON_URL = "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleController.svg";
    const INITIATOR_ICON_URL = "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleInitiator.svg";
    const SENTINEL_ICON_URL = "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSentinel.svg";

    // --- Dados das Habilidades dos Agentes ---
    const agentAbilitiesData = {
        "brimstone": {
            name: "Brimstone",
            agentDescription: "Vindo diretamente dos EUA, o arsenal orbital do Brimstone garante que o esquadrão dele sempre esteja em vantagem. Sua capacidade de oferecer utilitários com precisão e segurança faz dele um comandante inigualável na linha de frente.",
            role: "Controlador",
            roleIcon: CONTROLLER_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d7e00a4ad8a1a01b2edcb9fc1193d05e4e50248f-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9df59d490062acceb7c6ca32a3650b55718381f7.mp4", abilityName: "Incendiário", description: "EQUIPE um lançador de granadas incendiárias. DISPARE para lançar uma granada que detona no chão, gerando uma zona de fogo que causa dano aos jogadores dentro dela." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/5325b2340045a32d919d467ce3b09c3725de73ea-126x126.png?auto=format&fit=crop&q=80&h=48&w=48&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/8e0b72295747346b60c354765944f5233fb208f2.mp4", abilityName: "Fumaça Celeste", description: "EQUIPE um mapa tático. DISPARE para marcar os locais onde as nuvens de fumaça de Brimstone pousarão. Use o DISPARO ALTERNATIVO para confirmar, lançando nuvens de fumaça de longa duração que bloqueiam a visão na área selecionada." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/f6c1e1c587dbfe97a4185a47326ce45c42620583-128x128.png?auto=format&fit=crop&q=80&h=48&w=48&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/da2d65e4abc2129e284cf5248fd70925f093a0b3.mp4", abilityName: "Sinalizador Estimulante", description: "EQUIPE um sinalizador estimulante. DISPARE para jogar o sinalizador diante de Brimstone. Ao pousar, o sinalizador criará um campo que concede Tiro Rápido aos jogadores." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8cfa836d1d19356685e42c13054f9f5bc8e9e029-128x128.png?auto=format&fit=crop&q=80&h=48&w=48&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ccd8e6c574b7017a2681e5d37c744f5a654327e3.mp4", abilityName: "Ataque Orbital (Ultimate)", description: "EQUIPE um mapa tático. DISPARE para lançar um ataque prolongado de laser orbital no local selecionado, causando muito dano ao longo do tempo aos jogadores na área selecionada." }
            ]
        },
        "jett": {
            name: "Jett",
            agentDescription: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.",
            role: "Duelista",
            roleIcon: DUELIST_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/a0c72fe005e2f87f60f38fdb440569271c51a8fb-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/4cbc968f05713579aae9464c5a16dc3f6863f943.mp4", abilityName: "Corrente Ascendente", description: "INSTANTANEAMENTE impele Jett bem alto no ar." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/18cb69683c16d11590eda4c5458a7025f0667895-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ec6b3cf1f8ac09d597b0193de1d7bb81335b40e4.mp4", abilityName: "Brisa de Impulso", description: "ATIVE para preparar uma rajada de vento por tempo limitado. REPITA a habilidade para lançar Jett na direção do movimento atual dela. Se estiver parada, Jett será lançada para a frente. A carga de Brisa de Impulso é redefinida a cada dois abates." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8c5e94bfc817e5d35eca7692fd242404de5ac5dd-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/3353597819f0c032d56ff947d9762368b4ee6c6b.mp4", abilityName: "Erupção das Brumas", description: "Lança INSTANTANEAMENTE um projétil que se expande numa breve nuvem que obscurece a visão ao bater numa superfície. SEGURE o botão da habilidade para curvar a fumaça na direção da sua mira." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8d8e6c956af64b241e49e3625b3cb02fcc61eb09-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/667770571300e065b332617e5c8f2e009ed88928.mp4", abilityName: "Tormenta de Aço (Ultimate)", description: "EQUIPE um conjunto de facas de arremesso altamente precisas. DISPARE para lançar uma única faca contra o alvo. As facas são recarregadas ao matar um oponente. Use o DISPARO ALTERNATIVO para jogar todas as facas restantes contra o alvo, porém elas não são recarregadas ao matar um oponente." }
            ]
        },
        "phoenix": {
            name: "Phoenix",
            agentDescription: "Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve.",
            role: "Duelista",
            roleIcon: DUELIST_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/beb874d19c79982f0e99e858098c067d9132a95a-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/c62125b1b5637b7b0e0881348502f7e8b8e93572.mp4", abilityName: "Bola Curva", description: "EQUIPE um orbe de chamas que avança em curva e detona pouco após o lançamento. DISPARE para curvá-lo para a esquerda, detonando e cegando qualquer jogador que vir o orbe. Use o DISPARO ALTERNATIVO para curvá-lo para a direita." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/67df9ca3cb158a945fc9b13eb0e3949683c4c65d-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/b702ed368fd050e7cb77adf26bc55bb63c5936fb.mp4", abilityName: "Mãos Quentes", description: "EQUIPE uma bola de fogo. DISPARE para jogar a bola de fogo, que explode após um intervalo ou ao atingir o chão, criando uma zona duradoura de fogo que causa dano aos inimigos." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d807a982ce70475acb2e8461b4f8737204e35d96-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/8c5b0e23be0814583ad4601b4297d04dbaff79f7.mp4", abilityName: "Labareda", description: "EQUIPA uma parede de chamas. DISPARE para criar uma linha de chamas que avança, gerando uma parede de fogo que bloqueia a visão e causa dano a jogadores que passarem por ela. SEGURE O DISPARO para curvá-la na direção da mira." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d428c0c6c73ba34676e063092a7ae7157268db0c-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/aa122a33b1ef0320174991b8ddee4e82dbc2b937.mp4", abilityName: "Renascimento (Ultimate)", description: "INSTANTANEAMENTE coloca um marcador na localização de Phoenix. Com a habilidade ativa, morrer ou deixar o tempo acabar encerrarão a habilidade e trarão Phoenix de volta ao local marcado com Vida completa." }
            ]
        },
        "sage": {
            name: "Sage",
            agentDescription: "Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.",
            role: "Sentinela",
            roleIcon: SENTINEL_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/f2931e5af58255216179b21cce81f53eab15d6ee-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/45053483528b96cbe003ac39e6b53c9866d5fea6.mp4", abilityName: "Orbe de Lentidão", description: "EQUIPE um orbe de lentidão. DISPARE para lançá-lo. O orbe detona ao pousar, criando um campo duradouro que desacelera os jogadores dentro dele." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/cdc246179e160ded2788fd37ac21f10bc040ad54-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a247d196383136d3de15b4d6d9c816e3c8054ba0.mp4", abilityName: "Orbe Curativo", description: "EQUIPE um orbe curativo. DISPARE com a mira sobre um aliado ferido para ativar uma cura ao longo do tempo. Use o DISPARO ALTERNATIVO enquanto Sage estiver ferida para ativar uma autocura ao longo do tempo." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/829075fef7193503dd480947b79d78193d729d42-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a79b1d6838cee5572b428babd74a2db0c07f4ea5.mp4", abilityName: "Orbe de Barreira", description: "EQUIPE um orbe de barreira. DISPARE para posicionar uma parede sólida. DISPARO ALTERNATIVO gira o marcador de alvo." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/90b6e1ca1a3ecd68e2a3072515d071f80bf46c1d-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/df83929ed5da349c37a5bf4600c2b55010c72402.mp4", abilityName: "Ressurreição (Ultimate)", description: "EQUIPE uma habilidade de ressurreição. DISPARE com a mira sobre um aliado morto para começar a revivê-lo. Depois de uma breve canalização, o aliado voltará com a Vida completa." }
            ]
        },
        "sova": {
            name: "Sova",
            agentDescription: "Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape.",
            role: "Iniciador",
            roleIcon: INITIATOR_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8ab5a2d03438ff0f8b2ba2d7b26c812ab6b7adbb-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/7776fa677e90c72da94ec7d188d2d4618116c41b.mp4", abilityName: "Flecha de Choque", description: "EQUIPE um arco com uma flecha de choque. DISPARE para lançar a flecha, que explode com o impacto causando dano aos jogadores próximos. SEGURE O DISPARO para estender o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b428e1783f98a0990b86d13872f564095442f44b-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/50f9d870fa2a9b9ba38408eb718ffc06879c11a8.mp4", abilityName: "Flecha Rastreadora", description: "EQUIPE um arco com uma flecha de reconhecimento. DISPARE para lançar a flecha, que é ativada mediante impacto e Revela a localização de quaisquer inimigos próximos da linha de visão. Inimigos podem destruir a lâmina. SEGURE O DISPARO para estender o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/07877d7c79546ef64338eae550ffa5649f3582b0-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6c6f036376c18ddf4ed0c589b506b8889d86a29a.mp4", abilityName: "Drone Coruja", description: "EQUIPE um drone coruja. DISPARE para acionar e pilotar o drone. Enquanto pilota o drone, DISPARE para atirar um dardo marcador. O dardo revelará a localização de qualquer jogador atingido. Inimigos podem destruir o Drone Coruja." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/7b9f078b0576e87e74b8175b0d33ac682b7a8ab3-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/df9ce34c3d2a7f527929cac123501e1473e0da0e.mp4", abilityName: "Fúria do Caçador (Ultimate)", description: "EQUIPE um arco com três disparos de longo alcance que perfuram paredes. DISPARE para atirar um raio de energia diante de Sova, causando dano e revelando a localização dos inimigos que estiverem na linha. A habilidade pode ser REPETIDA mais duas vezes enquanto o cronômetro de habilidade estiver ativo." }
            ]
        },
        "viper": {
            name: "Viper",
            agentDescription: "Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.",
            role: "Controlador",
            roleIcon: CONTROLLER_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/3eba05b8ed1ac69c440d54cec365e537d294be25-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/49ff8efd75b76941da3018362061275d3a1d43d6.mp4", abilityName: "Nuvem Venenosa", description: "EQUIPE um emissor de gás. DISPARE para jogar o emissor, que persiste até o fim da rodada. REPITA para criar uma nuvem de gás tóxico que drena combustível. A habilidade pode ser recolhida e REPOSICIONADA antes do início da rodada e pode ser REPETIDA mais de uma vez ao longo da rodada." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b1204a1fbcc0e2fced090f18ad18e7587357c783-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/36db8f44946850c2a20aba43d8ad3ecd977c7d7e.mp4", abilityName: "Cortina Tóxica", description: "EQUIPE um lançador de emissores de gás. DISPARE para lançar uma longa linha de emissores de gás. REPITA a habilidade para criar uma parede alta de gás tóxico que drena combustível. A habilidade pode ser REPETIDA mais de uma vez." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/f477dce332e51e53f4e2f565f2d3d868dd2d0df8-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9eeb3090efed080792e6ea2f264fd60ebb12694e.mp4", abilityName: "Veneno de Cobra", description: "EQUIPE um lançador químico. DISPARE para lançar um cilindro que se rompe ao atingir o chão, gerando uma zona química duradoura que causa dano e reduz a velocidade dos inimigos." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/dab73c2ea877aca79a5bb0b8533d1de4ac07186a-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/4601fd972c588a79cdd910b2497546f156886c40.mp4", abilityName: "Poço Peçonhento (Ultimate)", description: "EQUIPE um borrifador químico. DISPARE para borrifar uma nuvem química em todas as direções ao redor de Viper, criando uma grande nuvem que reduz o alcance de visão e a Vida máxima dos jogadores dentro dela." }
            ]
        },
        "cypher": {
            name: "Cypher",
            agentDescription: "Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.",
            role: "Sentinela",
            roleIcon: SENTINEL_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/292fbe783ac9e2f638822c5f87f09b005b48a712-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/54a8dfaa9b82c7aaf994b0432bb25ef1e95c985c.mp4", abilityName: "Jaula Cibernética", description: "INSTANTANEAMENTE joga a jaula cibernética diante de Cypher. Ative para criar uma zona que bloqueia a visão e reduz a velocidade de inimigos que passarem por ela." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/eae012cb583a41bbc0de83f0963a40de58f5534f-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/825ba0643c74ad583350d1eb562bb7650ad78ae0.mp4", abilityName: "Câmera de Vigilância", description: "EQUIPE uma Câmera de Vigilância. DISPARE para colocar a câmera no local-alvo. REPITA a habilidade para controlar a visão da câmera. Enquanto controla a câmera, DISPARE para lançar um dardo marcador. O dardo revelará a localização de qualquer jogador atingido. A câmera pode ser recuperada e REPOSICIONADA." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/df43766f56e1e844ed1b179722c9444a1bd1d45c-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/aab21b75eb43f0e8cc9c0b816cb4877ae868b9fd.mp4", abilityName: "Fio-Armadilha", description: "EQUIPE um fio-armadilha. DISPARE para instalar um fio acionador oculto e destrutível no local-alvo, criando uma linha entre o local e a parede oposta. Jogadores inimigos que passarem por um fio e não destruírem o dispositivo a tempo ficarão imobilizados, revelados e estonteados depois de um breve intervalo. A habilidade pode ser recolhida para ser REPOSICIONADA." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/3e8e1779afeebd0612c019f8b2d41d7a984781b3-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ddeaad5ff2e4865351755b71fdc4fc97339fb334.mp4", abilityName: "Assalto Neural (Ultimate)", description: "Use INSTANTANEAMENTE num jogador inimigo morto na sua mira para revelar a localização de todos os jogadores inimigos ainda vivos." }
            ]
        },
        "reyna": {
            name: "Reyna",
            agentDescription: "Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho.",
            role: "Duelista",
            roleIcon: DUELIST_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/62dc726ff81568e4500167d0d402e0b083c507d9-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/327ccef09ef3c84a92320593c5db1bcb4b37e1e7.mp4", abilityName: "Devorar", description: "Inimigos abatidos por Reyna deixam Orbes de Alma que duram 3s. INSTANTANEAMENTE consome um Orbe de Alma próximo, curando-se de forma rápida por um curto período. A quantidade de Vida concedida por esta habilidade que ultrapassar 100 decairá ao longo do tempo. Se a habilidade IMPERATRIZ estiver ativa, esta habilidade será conjurada automaticamente e não consumirá o orbe." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/a9ca2fbba6c3f00e1a07e3514ac6a8f107e43e17-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6a7db5a37dd8e6e6671699ff30ad297cf1f2eeda.mp4", abilityName: "Dispensar", description: "INSTANTANEAMENTE consome um Orbe de Alma próximo, ficando inatingível por um curto período. Também se torna invisível se a habilidade IMPERATRIZ estiver ativa." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/9d295b17382acbc17bdb4e45e0be74d58e94e6c5-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/01030fba2df618b91c6185bb076f54e8c6c40415.mp4", abilityName: "Olhar Voraz", description: "EQUIPE um olho etéreo e destrutível. ATIVE para lançá-lo adiante a uma curta distância. O olho deixará com visão turva todos os inimigos que olharem para ele." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/daf434a1a75cee1f52309b2cf4eb8f878d07b419-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d777e81e035db1430b1fbf664a432163deed5afb.mp4", abilityName: "Imperatriz (Ultimate)", description: "INSTANTANEAMENTE entra em estado de frenesi, aumentando de forma drástica as velocidades de disparo, equipamento e recarga de munição. Renova a duração ao fazer um abate." }
            ]
        },
        "killjoy": {
            name: "Killjoy",
            agentDescription: "Killjoy, uma Gênia da Alemanha, defende posições-chave no campo de batalha facilmente com seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs darão conta do recado.",
            role: "Sentinela",
            roleIcon: SENTINEL_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d86a84fcd7cc656fec66be28d496a56b5171dd52-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/0582e7e1a0733667614492129abef67e17cfc92c.mp4", abilityName: "Robô de Alarme", description: "EQUIPE um Robô de Alarme oculto. DISPARE para ativar um robô que persegue os inimigos que entram no alcance. Ao se aproximar do alvo, o robô explode, causando dano e aplicando Vulnerável. SEGURE EQUIPAR para retirar um robô ativado." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/6fcb1a4dfb49ad8fabae929bc5aea5240ddb42ac-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/007e5042385d6f7315f4b4cb3fbd3b2c71b530c1.mp4", abilityName: "Torreta", description: "EQUIPE uma Torreta. DISPARE para ativar uma torreta que atira em inimigos em um cone de 180°. SEGURE EQUIPAR para retirar a torreta ativada." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/4ca9c7f4a85e5e454d8d9638247bd36cab1d4124-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/b47a0b24d2499935d28f845a067984a52dbc2542.mp4", abilityName: "Nanoenxame", description: "EQUIPE uma granada Nanoenxame. DISPARE para lançar a granada. Ao atingir uma superfície, a Nanoenxame fica oculta. ATIVE a Nanoenxame para acionar um enxame de nanorrobôs que causam dano." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d7d7787df75af327d171b723a262172693125dc4-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9485f7bbf04841f4c37e031f07dad03e9cbc1bf9.mp4", abilityName: "Confinamento (Ultimate)", description: "EQUIPE o dispositivo de Confinamento. DISPARE para ativá-lo. Após um longo processo de ativação, o dispositivo detém todos os inimigos no raio de alcance. O dispositivo pode ser destruído pelos inimigos." }
            ]
        },
        "breach": {
            name: "Breach",
            agentDescription: "Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.",
            role: "Iniciador",
            roleIcon: INITIATOR_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/cca58acc93956ee755ccea171a36584a402793c2-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ffa4695b83e2f959bc59f0393dfc74e533546a89.mp4", abilityName: "Estopim", description: "EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/668ca53aca3c788f4b9ef8ad35e86979b84745db-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a4f24e1fe60879234be5da0f8a768feb8f379fdd.mp4", abilityName: "Falha Tectônica", description: "EQUIPE um impacto sísmico. SEGURE O DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até a zona." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2621c00e27da47f6a57772902c7806a7bfe0eb66-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/592212ab60d09999d493c2099f9260d59fab917a.mp4", abilityName: "Pós-Choque", description: "EQUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede. O jato causa muito dano a todos que estiverem na área de efeito." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/58784f89733dfe25c41f8ba950c6eb4c46507d63-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/207b0ab21f8e27e98ca22f4b5546cc0963d94af6.mp4", abilityName: "Onda Trovejante (Ultimate)", description: "EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone. O terremoto estonteia e derruba todos que estiverem na área de efeito." }
            ]
        },
        "omen": {
            name: "Omen",
            agentDescription: "Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.",
            role: "Controlador",
            roleIcon: CONTROLLER_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/e8544e323a51c9b8ff7ae8fca257e038a570819d-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/f401fc788f3182b6d5aa25af6056c842117b1b36.mp4", abilityName: "Paranoia", description: "INSTANTANEAMENTE emite um projétil sombrio adiante, reduzindo brevemente o alcance de visão dos jogadores tocados. O projétil atravessa paredes." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/e4012aeda506a8e77f2e83d48aa8c5c73a37b659-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ba0b035a5ff2bb8d9487ba461b3d15900ff50f6b.mp4", abilityName: "Manto Sombrio", description: "EQUIPE um orbe sombrio e entre em um universo distorcido para posicionar os orbes. PRESSIONE o botão de habilidade para lançar o orbe no local marcado, criando uma esfera de sombra duradoura que bloqueia a visão. SEGURE O DISPARO enquanto mira para afastar o marcador. SEGURE O DISPARO ALTERNATIVO enquanto mira para aproximar o marcador. PRESSIONE RECARREGAR para alternar para a visão de mira normal." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2790998724c94f38688c9c6c5d43c0712cae18ef-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/33550fee410c5a55ea8832f41827a12aaddb686f.mp4", abilityName: "Passos Tenebrosos", description: "EQUIPE uma habilidade de passos sombrios e olhe o indicador de alcance. DISPARE para começar uma breve canalização e, então, teleporte-se para o local marcado." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/fed58cd5eb95f4e50b7b8230a150c3b686b82f78-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/252cf8ad86b6aca6210ba93ea856f52708476eba.mp4", abilityName: "Salto das Sombras (Ultimate)", description: "EQUIPE um mapa tático. DISPARE para começar a se teleportar ao local selecionado. Enquanto se teleporta, Omen aparecerá como um Vulto que pode ser destruído por qualquer inimigo para cancelar o teleporte." }
            ]
        },
        "raze": {
            name: "Raze",
            agentDescription: "Raze chega do Brasil com uma explosão de carisma e armas enormes. Com seu estilo de jogo 'porradeiro', ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!",
            role: "Duelista",
            roleIcon: DUELIST_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ce6b40ccaa79e226c9d5e237af6739dfe412b948-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/82028c5e9ae38b59660dbf9f57f341f1c20c5480.mp4", abilityName: "Carga de Explosivos", description: "INSTANTANEAMENTE joga uma Carga de Explosivos que gruda em superfícies. REUSE a habilidade depois de instalar para detonar, causando dano e movendo tudo que for atingido. Raze não sofre dano ao ser atingida pelo efeito desta habilidade, mas ainda pode sofrer dano de queda se for arremessada para longe." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/4751e0f887099484e0c39c69d7d4762b782e99f8-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d75fd65435a84906bb3e8ad0b97c505e7359697b.mp4", abilityName: "Cartuchos de Tinta", description: "EQUIPE uma granada múltipla. DISPARE para jogar a granada, que causa dano e cria submunições, cada uma causando dano a qualquer one que estiver no alcance. Use o DISPARO ALTERNATIVO para arremessar a curta distância. A carga dos Cartuchos de Tinta é redefinida a cada dois abates." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/5ab8a4e5cf6d7229021e6cfe8b50a03543c5978f-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/c824fe8e08a4f36be2273aa456819d2c2b6cd6b0.mp4", abilityName: "Bumba", description: "EQUIPE um Bumba. DISPARE para lançar o robô, que avança em linha reta no chão, ricocheteando nas paredes. O Bumba trava ao detectar inimigos no cone frontal e os persegue, explodindo e causando muito dano se alcançá-los." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/9a02bebe0a944ad2f2c764a0df1dfc8a1e7757fa-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/7281a34566f12d202dee3d43e0fa0bf0b4271d60.mp4", abilityName: "Estraga-Prazeres (Ultimate)", description: "EQUIPE um lança-mísseis. DISPARE um foguete que causa dano devastador em área ao fazer contato com qualquer coisa." }
            ]
        },
        "skye": {
            name: "Skye",
            agentDescription: "Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.",
            role: "Iniciador",
            roleIcon: INITIATOR_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b905a3a39bc979bc43653eccf9fdb289b03c5223-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/3256cb83ad3563516497864209ea585c595cd8df.mp4", abilityName: "Predador Explosivo", description: "EQUIPE um amuleto de lobo-da-tasmânia. DISPARE para enviar e controlar esse predador. Enquanto estiver no controle, DISPARE para saltar para a frente. O lobo gera uma explosão e causa dano aos inimigos diretamente atingidos." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ed6e5f91be20274ff84cb24644c3b559bfa8fed1-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/64edfd7af8a7125dd9c981c52fdc60f9560b821b.mp4", abilityName: "Luz Desbravadora", description: "EQUIPE um amuleto de falcão. DISPARE para enviá-lo. SEGURE O DISPARO para guiar o falcão na direção da sua mira. REPITA a habilidade enquanto ele estiver voando para transformá-lo em um feixe de luz que gera uma confirmação de hit caso um inimigo esteja dentro do alcance ou na linha de visão." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b80c38c49a8e37d69cda3bf335c885170975b415-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d64273e31bf2c4d16c52acc2f461e9accdb7c7f9.mp4", abilityName: "Reflorescer", description: "EQUIPE um amuleto de cura. SEGURE O DISPARO para canalizar, curando aliados dentro do alcance e na sua linha de visão. Esta habilidade pode ser repetida até a reserva de cura ser esgotada. Skye não pode curar a si mesma." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/9ccbd11eadca50047c6e84125285a11e1d334acd-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/82ab63d9255f9fbbea7c13e00cd46b09ff90d25b.mp4", abilityName: "Rastreadores (Ultimate)", description: "EQUIPE um amuleto de Rastreador. DISPARE para enviar três Rastreadores que localizarão os três inimigos mais próximos. Se um Rastreador alcançar um alvo, causará Visão Turva a ele. Inimigos podem destruir os Rastreadores." }
            ]
        },
        "yoru": {
            name: "Yoru",
            agentDescription: "Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.",
            role: "Duelista",
            roleIcon: DUELIST_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ea733bf224ae53e8e53cabfae19bfc12ce9fcda3-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/295ab26ef6097d28da0bef9c9b4c6185a80071c8.mp4", abilityName: "Ponto Cego", description: "EQUIPE para arrancar um fragmento dimensional instável da realidade. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/580f94ecab50ae7c01279dcd0adb86f9c65362c3-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/be352287c5704d82d1acbff5ecdee5187755d235.mp4", abilityName: "Passagem Dimensional", description: "EQUIPE um fluxo dimensional. DISPARE para lançá-lo à frente. Use o DISPARO ALTERNATIVO para posicionar um fluxo imóvel. ATIVE para se teleportar até ele. USE para acionar um teleporte falso." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/43416e5b34cd80c691ed0cc3b69fc73fae93f923-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ef008c8e848a054f88e88f173c03279a45a1c796.mp4", abilityName: "Distração", description: "EQUIPE um eco dimensional que se transforma em uma cópia do Yoru quando ativado. DISPARE para ativar a cópia e fazê-la avançar. Use o MODO SECUNDÁRIO para posicionar um eco inativo. USE para transformar o eco inativo em uma cópia e fazê-la avançar. As cópias explodem e cegam os inimigos quando destruídas por eles." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/51e64df7500b3114c76e5e86dfea2e622bb438e5-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9ca7fac6ec9514fa06b9785aad2ead0c3fba0eec.mp4", abilityName: "Espionagem Dimensional (Ultimate)", description: "EQUIPE uma máscara para olhar por entre as dimensões. DISPARE para entrar na dimensão do Yoru, onde você não poderá ser afetado nem visto pelos inimigos lá fora. REATIVE para sair da dimensão do Yoru mais cedo." }
            ]
        },
        "astra": {
            name: "Astra",
            agentDescription: "Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.",
            role: "Controlador",
            roleIcon: CONTROLLER_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/50c811478c52d66c7f11a4463bfb16cf47ab0dd6-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/e54ed10355d571c15ef2ee5a0897cca06851fd56.mp4", abilityName: "Pulso Nova", description: "Posicione Estrelas na Forma Astral. ATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois estoura, causando concussão a todos os jogadores na área." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/1e712336550ae51456e5b0b40646aef879906d88-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/2aafadb8cef8c1ab2894a657c23988e921b006c8.mp4", abilityName: "Nebulosa", description: "Posicione Estrelas na Forma Astral. ATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça). USE uma Estrela para dissipá-la, retornando a Estrela para ser posicionada em um novo local após um período. Dissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b3d3a7248e583eb0b7b08ef30b7d642fa900d874-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/3439c939846214067561746668bfd96805efc225.mp4", abilityName: "Poço Gravitacional", description: "Posicione Estrelas na Forma Astral. ATIVE uma delas para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando Vulnerável quem ainda estiver preso ali." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/1decdbbe068087f28c7212e179c35de7eae92832-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6bed3444d432f27cdac08f3be1dad2760be7052f.mp4", abilityName: "Forma Astral / Divisa Cósmica (Ultimate)", description: "ATIVE para entrar na Forma Astral, em que você pode posicionar Estrelas com o DISPARO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional. Quando Divisa Cósmica estiver carregada, use o DISPARO ALTERNATIVO na Forma Astral para começar a mirar e, depois, o DISPARO para escolher dois locais. Uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som." }
            ]
        },
        "kay-o": {
            name: "KAY/O",
            agentDescription: "KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de Suprimir habilidades inimigas, anulando a capacidade de contra-ataque dos adversários e dando a si e a seus aliados uma vantagem essencial em combate.",
            role: "Iniciador",
            roleIcon: INITIATOR_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/92fedb7a8c812df29cbaa2390aa07561fe2d89da-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9ad839fef2fd8d16d9608f8a6efd709091f0b74a.mp4", abilityName: "Granada/Clarão", description: "EQUIPE uma granada de clarão. DISPARE para jogá-la por cima. Use o DISPARO ALTERNATIVO para arremessar a curta distância uma versão mais fraca que explode mais rápido. A granada de clarão explode após um curto período, Cegando qualquer um que estiver na linha de visão." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/6771e933554434541c91d58749aa0bbda58619e1-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/dbccb81297a30a9ddc92ec1883c832298f014504.mp4", abilityName: "Ponto/Zero", description: "EQUIPE uma lâmina de supressão. DISPARE para lançar. A lâmina se fixa à primeira superfície que atingir e explode, Suprimindo qualquer um que estiver dentro do raio da explosão. Inimigos podem destruir a lâmina." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/40a6811eadf8b794b94e2b40695e14b7c36281a8-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/292e5319f9cd0aa7eee01af47413f4009236f87e.mp4", abilityName: "Frag/Mento", description: "EQUIPE um fragmento explosivo. DISPARE para lançá-lo. O fragmento se fixa ao chão e explode várias vezes, causando dano quase letal no centro de cada explosão." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/dabcf9f31c4b63cb2c2e537655ca0cc3b6e08d24-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d9e35cc5d68e533df2d6e15a93471a5c073b0471.mp4", abilityName: "Anular/Cmd (Ultimate)", description: "INSTANTANEAMENTE sobrecarrega com energia de Radianita polarizada que emite grandes pulsos energéticos em um raio enorme a partir de onde KAY/O estiver. Inimigos atingidos pelos pulsos são Suprimidos por um curto período. Enquanto estiver sobrecarregado, KAY/O recebe Estimulante de Combate e pode ser reestabilizado se for abatido." }
            ]
        },
        "chamber": {
            name: "Chamber",
            agentDescription: "Chamber é um Sentinela francês elegante e letal, que controla o campo de batalha com sua mira impecável e dispositivos de teletransporte. Ele é especialista em eliminar inimigos com precisão e reposicionar-se rapidamente para garantir a segurança da equipe.",
            role: "Sentinela",
            roleIcon: SENTINEL_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d8a0105305eefcd44c6c5c823bc6638c18d3850c-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/745571f61d83d880c42278a35a072cdd8b7bfa12.mp4", abilityName: "Caçador de Cabeças", description: "ATIVE para equipar uma pistola pesada. Use o DISPARO ALTERNATIVO com a pistola equipada para mirar." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/53b23071d96ffa2d27b73c5edb6ba8b0cf1dc30a-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6d191f3734a8170d99f66642041da9f33240d319.mp4", abilityName: "Rendezvous", description: "EQUIPE uma âncora de teleporte. DISPARE para posicioná-la no chão. Enquanto estiver no chão e dentro do alcance da âncora, REATIVE para teleportar rapidamente até a âncora. A âncora pode ser recuperada para ser REPOSICIONADA." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/6070c2db4a22931c24ff59349664a0c666a777c3-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/245fa173c5d3677e3838d52fb155b6366d19c91b.mp4", abilityName: "Marca Registrada", description: "EQUIPE uma armadilha que busca por inimigos. DISPARE para posicioná-la no chão. Quando um inimigo visível entra no alcance, a armadilha inicia uma contagem regressiva e desestabiliza o terreno ao redor, criando um campo duradouro que Desacelera os jogadores dentro dele. A armadilha pode ser recuperada para ser REPOSICIONADA." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b2f83e29d7ff8fbc59aa568eca0ed82d30ab007f-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/49f14376a65d54586c350e7fe863ba30911032a0.mp4", abilityName: "Tour de Force (Ultimate)", description: "ATIVE para invocar um poderoso fuzil de precisão personalizado que abate um inimigo com qualquer acerto na parte superior do corpo. Use o DISPARO ALTERNATIVO para mirar. Abater um inimigo cria um campo duradouro que Desacelera os jogadores dentro dele." }
            ]
        },
        "neon": {
            name: "Neon",
            agentDescription: "Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio.",
            role: "Duelista",
            roleIcon: DUELIST_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/fe17f22ec96403cf3b58b707db4f8e77531a47a6-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/db28dddd3cf49297ca4c10c1898e4d3702af9d6f.mp4", abilityName: "Ricochete Elétrico", description: "INSTANTANEAMENTE arremessa um raio de energia que ricocheteia uma vez. Ao atingir cada superfície, o raio eletrifica o chão abaixo dele com uma explosão." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2bfcbc821895e8d01a4f17e8f045dabf24c052e0-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a1c82c1a3aa3676bbff05dae9af8fdd8f2f25fb7.mp4", abilityName: "Equipamento Voltáico", description: "INSTANTANEAMENTE canaliza o poder de Neon para receber velocidade aumentada. Ao atingir a carga máxima, use o DISPARO ALTERNATIVO para acionar um deslize elétrico. O carregamento é redefinido a cada dois abates." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/46c16f398d28f7e029f42bc742f3838443e8a3d3-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/c1ba9d2ec4c567f6b27ddeab512ed245d5706e6b.mp4", abilityName: "Via Expressa", description: "DISPARE duas linhas de energia no chão à frente. As linhas se estendem por uma curta distância ou até atingirem uma superfície. Elas se tornam paredes de eletricidade estática que bloqueiam a visão e causam dano aos inimigos que as atravessarem." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/6a0012b92eba95e42828411c1e58d8d1c6420a5f-256x256.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/917de7be4f9bad96b54f47a4de6f91c323a57a6a.mp4", abilityName: "Sobrecarga (Ultimate)", description: "Neon libera todo o seu poder e velocidade por um curto período. DISPARE para canalizar isso em um raio elétrico mortal com alta precisão de movimento. A duração é redefinida com cada abate." }
            ]
        },
        "fade": {
            name: "Fade",
            agentDescription: "Fade, uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão.",
            role: "Iniciador",
            roleIcon: INITIATOR_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8f34a932e08cdc5e6472b445f5c2dc150228eda7-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ed5b27f8f8acf6420d5f0e30938e963a204cfeca.mp4", abilityName: "Clausura", description: "EQUIPE um nódulo de puro temor. DISPARE para arremessá-lo. O nódulo cairá depois de um determinado tempo. REPITA a habilidade para soltá-lo antecipadamente. Esse nódulo se rompe ao impacto, enclausurando inimigos próximos. Inimigos enclausurados sofrem surdez e deterioração." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/272ae63510fddab9fa751f59349def5bd09a40b2-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/2ee3d74b1105ab3cd996821fb07e4d6aa5c77c1a.mp4", abilityName: "Assombrar", description: "EQUIPE uma assombração. DISPARE para arremessá-la. Ela cairá depois de um determinado tempo. REPITA a habilidade para soltá-la antecipadamente. Essa assombração ataca ao contato, revelando inimigos em sua linha de visão e criando rastros sinistros até eles. Ela pode ser destruída pelos inimigos." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/0389b190631d8c27a09e147070aab4b706113959-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d401c0074081fd609fa08710174f27fc216c5b92.mp4", abilityName: "Espreitador", description: "EQUIPE um Espreitador. DISPARE para enviá-lo à frente. SEGURE O DISPARO para mover o Espreitador na direção da sua retícula. Ele perseguirá o primeiro rastro sinistro ou inimigo que encontrar e afetará o alvo com visão turva ao alcançá-lo." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/7ba7b49c678cfcf07564ab57907c60636bb916b0-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/fd638db2f5041f8bc09f311af2c460cec579edcd.mp4", abilityName: "Véu da Noite (Ultimate)", description: "EQUIPE o poder dos pesadelos. DISPARE para liberar uma onda implacável de energia aterrorizante. Inimigos atingidos pela onda são marcados por rastros sinistros e sofrem surdez e deterioração." }
            ]
        },
        "harbor": {
            name: "Harbor",
            agentDescription: "Harbor é um Controlador da Índia que comanda as águas para proteger aliados e romper linhas inimigas. Ele usa barreiras aquáticas e ondas para controlar o terreno e forçar os adversários a recuarem.",
            role: "Controlador",
            roleIcon: CONTROLLER_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/e988e2cc973a4c6791db0b87c13ce6a02162ed89-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/7e56441c47781a35a5893cc7ceadcfa6c23b1ee2.mp4", abilityName: "Enseada", description: "EQUIPE uma esfera de água defensiva. DISPARE para jogá-la. Use o DISPARO ALTERNATIVO para lançar por baixo. Ao atingir o solo, a esfera invoca um escudo de água destrutível que bloqueia balas." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/e6af3e9f6f2259ffe3c69448adc9f89beebc4f80-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6494d70cdea21aa4cb59b16d0f0b95c9432d709b.mp4", abilityName: "Maré Alta", description: "EQUIPE uma parede de água. DISPARE para enviar a água para frente junto ao chão. SEGURE O DISPARO para guiar a água na direção da sua retícula, atravessando o mundo e fazendo surgir uma parede ao longo do caminho. Use o DISPARO ALTERNATIVO enquanto curva para parar a água mais cedo. Jogadores atingidos sofrem REDUÇÃO DE VELOCIDADE." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/88032d13dc1b40e61bc763749c5aae29a056735d-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/eb767e57ea6e86cfb0992c92522ba8d606db8223.mp4", abilityName: "Cascata", description: "EQUIPE uma onda de água. DISPARE para enviar a onda para frente e através de paredes. REPITA para impedir a onda de seguir em frente. Jogadores atingidos sofrem REDUÇÃO DE VELOCIDADE." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8fb4f759e45fdfb5c6888a456ef6ec5e027ad052-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/7a0d8e7b1457dd4df4f09da842e72273b0621f41.mp4", abilityName: "Retaliação (Ultimate)", description: "EQUIPE o poder total do seu Artefato. DISPARE para invocar um gêiser no solo. Os inimigos na área são repetidamente alvejados por ataques do gêiser. Jogadores capturados dentro de uma área de ataque sofrem CONCUSSÃO." }
            ]
        },
        "gekko": {
            name: "Gekko",
            agentDescription: "Gekko, de Los Angeles, lidera um grupo muito unido de criaturas caóticas. Seus amigos atropelam tudo, tirando os inimigos do caminho. Depois, Gekko corre atrás deles para reagrupá-los e reiniciar o processo.",
            role: "Iniciador",
            roleIcon: INITIATOR_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/0be9c33b718eb7f941890558e661f147802cf762-256x236.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/e9a92a506942c735f5a986ee9489fad34b192843.mp4", abilityName: "Wingman", description: "EQUIPE Wingman. DISPARE para enviá-lo para encontrar inimigos. Wingman lança uma forte explosão na direção do primeiro inimigo que vê. Use o DISPARO ALTERNATIVO na direção de um ponto ou Spike plantada para que Wingman plante ou desarme a Spike. Para plantar, Gekko deve estar com a Spike no inventário. Quando Wingman expira, ele se transforma em um glóbulo inativo. INTERAJA para recuperar o glóbulo e ganhar outra carga de Wingman após um curto período." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/5cd2d39b6747b897e6648172d084d355477ea545-255x248.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/f3a565e0cde441f1754eeadda2427020a795d4a0.mp4", abilityName: "Dizzy", description: "EQUIPE Dizzy. DISPARE para enviá-la voando pelo ar. Dizzy avança e solta explosões de plasma nos inimigos em sua linha de visão. Os inimigos atingidos pelo plasma ficam cegos. Ao expirar, Dizzy se transforma em um glóbulo inativo. INTERAJA para recuperar o glóbulo e ganhar outra carga de Dizzy após um curto período." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/6a9ead27349e4fa318bc426ac57f9addb2ecf143-252x175.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/85f2c3958091bf4b8fb475c8bda0dcb10a409fbc.mp4", abilityName: "Mosh Pit", description: "EQUIPE Mosh. DISPARE para lançá-lo como uma granada. Use o DISPARO ALTERNATIVO para lançar por baixo. Ao atingir uma superfície, Mosh se duplica em uma grande área e, depois de uns instantes, explode." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/589f75f0e50a8c1c465e2bf95599d140c52c69f4-254x241.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/fe30846150b8f87f7f945a3f0c82e59d0522dbdc.mp4", abilityName: "Thrash (Ultimate)", description: "EQUIPE Thrash. DISPARE para se conectar à mente dela e guiá-la pelo território inimigo. ATIVE para avançar e explodir, detendo qualquer inimigo em um pequeno raio. Ao expirar, Thrash se transforma em um glóbulo inativo. INTERAJA para recuperar o glóbulo e ganhar outra carga de Thrash após um curto período. Thrash pode ser recuperada uma vez." }
            ]
        },
        "deadlock": {
            name: "Deadlock",
            agentDescription: "A agente norueguesa Deadlock posiciona uma gama de nanofios de alta tecnologia para proteger o campo de batalha até mesmo do ataque mais letal. Ninguém escapa do seu olhar vigilante. Ninguém sobrevive à sua ferocidade implacável.",
            role: "Sentinela",
            roleIcon: SENTINEL_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/3abe232b9adae7ae2d96a5b87d0a4fecb8a3bd5a-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/e2c77e5b49fc3b53a7c625eb7646e51e7094dc52.mp4", abilityName: "Sensor Sônico", description: "EQUIPE um Sensor Sônico. DISPARE para posicionar. O sensor monitora os sons dos inimigos em uma área. Causa concussão na área se sons de passos, disparos ou qualquer barulho significativo forem detectados." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/f712588876f0df7fa899418b4f2b2b6fbccfedbf-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a9dc93d62c1ae6c51b12ed1e84a5d96c678677f9.mp4", abilityName: "Barreira de Contenção", description: "EQUIPE um disco de Malha de Barreira. DISPARE para lançar à frente. Ao atingir o chão, o disco gera barreiras a partir do ponto de origem que bloqueiam a movimentação de personagens." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/4516d714505d1a69918c8405dda463aeb7c5718b-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d7576f43161214699762f1858e2fc8e2d3112077.mp4", abilityName: "Gravnet", description: "EQUIPE uma granada GravNet. DISPARE para lançar. Use o DISPARO ALTERNATIVO para arremessar a curta distância. A GravNet detona ao atingir o chão, forçando inimigos pegos por ela a agacharem e moverem-se lentamente." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/fba13a9ca1a5efb4e3456b96c0e78cbf4b3ec46d-512x512.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/b995bab386bd58541eacfe0e065a808081c0b9ea.mp4", abilityName: "Aniquilação (Ultimate)", description: "EQUIPE um Acelerador de Nanofios. DISPARE para liberar um pulso de nanofios que captura o primeiro inimigo que encontrar. O inimigo encasulado é puxado por uma trilha de nanofios e abatido se chegar ao final da trilha, a não ser que seja libertado. O casulo de nanofios é destrutível." }
            ]
        },
        "iso": {
            name: "Iso",
            agentDescription: "Iso é um mercenário chinês que entra em estado de fluxo para desmantelar os oponentes. Ele reconfigura a energia do ambiente para se proteger de balas e avança totalmente focado em direção ao próximo duelo até a morte.",
            role: "Duelista",
            roleIcon: DUELIST_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/5b981e9b6c35a518177ff1c7170a213e36f393c7-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/17503f71b58f654d583a66e29dab75460677576f.mp4", abilityName: "Centelha Debilitante", description: "EQUIPE um feixe molecular. DISPARE para lançá-lo à frente e aplicar FRÁGIL a todos os jogadores que tocar. O feixe pode atravessar objetos sólidos, inclusive paredes." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ac58844d85858401edcefdb8e38ec23bfb672481-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/11ad2731215ec978c89fdb675aaf3b591c3c3c55.mp4", abilityName: "Fluxo Protetor", description: "INICIE um cronômetro de foco. Enquanto estiver focado, entre em um estado de fluxo. Inimigos que você abater ou causar dano durante esse tempo geram um orbe de energia. Atirar nesse orbe concede a você um escudo que absorve uma instância de dano de qualquer fonte." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2439fd36c37debf4bd082c0609b356733577de04-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/5e331c774ffde4e8e0c45a8844b0237b7d75ba3b.mp4", abilityName: "Contingência", description: "EQUIPE para reunir energia prismática. DISPARE para enviar à frente uma parede de energia indestrutível que bloqueia balas." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/67aa0a3de742de9793d4b1fbfae38961c8d0076f-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6fbd2b0e16ac3bda095094770ce6b1d403fc3832.mp4", abilityName: "Contrato de Abate (Ultimate)", description: "EQUIPE uma arena interdimensional. DISPARE para lançar uma coluna de energia pelo campo de batalha que puxa você e o primeiro inimigo atingido por ela para a arena. Você e esse oponente lutam até a morte." }
            ]
        },
        "clove": {
            name: "Clove",
            agentDescription: "Clove, ume encrenqueire da Escócia, vai desorientar os inimigos tanto no calor do combate quanto no frio da morte. Jovem e imortal, elu mantém os inimigos confusos até do além-túmulo: momentos após a morte, elu retorna à vida.",
            role: "Controlador",
            roleIcon: CONTROLLER_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b193ce03089f357e330a51876dbb7172444e80da-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/71b28c3a8e3b6f29a2523f2cada52f2ea5a1eab0.mp4", abilityName: "Desvitalização", description: "EQUIPE um fragmento de Essência da Imortalidade. DISPARE para lançá-lo. Ele detona após um breve intervalo e aplica temporariamente Deterioração a todos os alvos atingidos." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/5ce846ce8e5ae7ce7904f0c31824f7729307743e-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/f74f0d7b96cae0bcf51e97ad99883a370508a381.mp4", abilityName: "Artimanha", description: "EQUIPE para visualizar o campo de batalha. DISPARE para marcar os locais onde você quer posicionar as nuvens de Clove. Use o DISPARO ALTERNATIVO para confirmar e lançar nuvens que bloqueiam a visão nas áreas selecionadas. Clove pode usar essa habilidade depois de morrer." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8207dec024cbac83685eb14379055e25d8c3bbed-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/4adb022f083d3887f73d23f60de71cccb45e6d83.mp4", abilityName: "Revitalizar", description: "Absorva INSTANTANEAMENTE a energia vital de um inimigo caído que sofreu dano ou foi abatido por Clove e receba aceleração e Vida temporárias." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/cb541873b62077199333f468fddd54620635870a-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/b9e4ee59e2e2a492ec5a76f71c2161faa6f03981.mp4", abilityName: "Ainda Não Morri (Ultimate)", description: "Após morrer, ATIVE para ressuscitar. Depois de ressuscitar, Clove precisa obter um abate ou uma assistência de dano em um determinado período ou morre de vez." }
            ]
        },
        "vyse": {
            name: "Vyse",
            agentDescription: "Vyse é uma Sentinela perspicaz que manipula metal líquido para criar barreiras indestrutíveis e armadilhas. Ela é especialista em controlar o campo de batalha, bloquear passagens e prender inimigos com sua tecnologia avançada.",
            role: "Sentinela",
            roleIcon: SENTINEL_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/665d8820138b5d817a7f6f6522e983edd1ea9df7-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/bacb07fdf5b13efeab5e24168f8e244257c1d0cb.mp4", abilityName: "Cerca-Viva", description: "EQUIPE filamentos de metal líquido. DISPARE para posicionar uma armadilha de parede oculta. Quando um inimigo passa por ela, uma parede indestrutível emerge do chão atrás dele. A parede dura um breve período antes de se dissip" },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f0ac7fb5d31a65820bcc22217abcafbbfb4077e7-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/5cefca2b93f097285ce2cb4f20fec7184b555218.mp4", abilityName: "Rosa Arcana", description: "EQUIPE uma Rosa Arcana. Mire em uma superfície e DISPARE para posicionar uma Rosa Arcana oculta, ou use o DISPARO ALTERNATIVO para posicionar a Rosa Arcana através da superfície. USE NOVAMENTE para cegar todos os jogadores que estiverem olhando para ela. A habilidade pode ser recuperada e REPOSICIONADA." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3a3e90a9b09ba95e7aed7b3f5979ed88d62d2785-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/84154b3401b08acad60d739616017a4fcd86710a.mp4", abilityName: "Espinheiro Cortante", description: "EQUIPE um emaranhado de metal líquido. DISPARE para lançar. Ao cair, o metal se torna invisível. Quando ATIVADO, ele se espalha e cria um grande espinheiro que causa Lentidão e dano a todos os jogadores que passam por ele." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d67be7669c8a4b483305cf7501c27c25adb44236-1024x1024.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/f9d32afb39a3260b915ea6ef441054c904a69e91.mp4", abilityName: "Jardim de Aço (Ultimate)", description: "EQUIPE um espinheiro de metal líquido. DISPARE para lançar metal como uma torrente de espinhos metálicos, BLOQUEANDO as armas primárias inimigas após um breve período." }
            ]
        },
        "tejo": {
            name: "Tejo",
            agentDescription: "Tejo, um Consultor de inteligência veterano da Colômbia, conta com um sistema de orientação balística que força o inimigo a abrir mão da posição — ou da vida. Os ataques precisos dele mantêm os oponentes desestabilizados e sob seu controle.",
            role: "Iniciador",
            roleIcon: INITIATOR_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0bbf5fc8e23c5130760d961d478b9e04eb350293-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/68c56e770855ce32eab9ba4283e4496952295d9a.mp4", abilityName: "Drone Furtivo", description: "EQUIPE um drone furtivo. DISPARE para lançar o drone e assumir o controle dos movimentos dele. DISPARE novamente para acionar um pulso que causa Supressão e Revela os inimigos atingidos." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c79ba948fd3bd1bf0001a01f6d9f4a4237144b0c-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/6fdd2855da57354f3f1d274bea06f8f24140ef23.mp4", abilityName: "Entrega Especial", description: "EQUIPE uma granada adesiva. DISPARE para lançar. A granada gruda na primeira superfície atingida e explode, causando Concussão a qualquer alvo atingido pela explosão. Use o DISPARO ALTERNATIVO para lançar a granada com um ricochete." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ee6c5d81edeea5eaac58e215cef9d93893c52225-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/612a857ad0b5ebfa86611af953066356cd33fe97.mp4", abilityName: "Rajada Guiada", description: "EQUIPE um mapa tático. DISPARE para selecionar até dois locais-alvo no mapa. Use o DISPARO ALTERNATIVO para lançar projéteis que viajam de forma autônoma até os locais-alvo e detonam ao chegar." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/329422a9eeeeb9446eedd9ede2b8346a9453cc48-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8060ca420965ebd775f8cdbe3589600ee5733911.mp4", abilityName: "Armagedom (Ultimate)", description: "EQUIPE um mapa tático para selecionar o alvo do ataque. DISPARE para selecionar o ponto de origem do ataque. DISPARE novamente para definir o ponto final e lançar o ataque, que libera uma onda de explosões ao longo do trecho determinado. Use o DISPARO ALTERNATIVO durante o mapeamento para cancelar o ponto de origem." }
            ]
        },
        "waylay": {
            name: "Waylay",
            agentDescription: "Waylay, a Radiante prismática da Tailândia, se transforma em pura luz e atravessa o campo de batalha abatendo os alvos com estilhaços luminosos antes de recuar. Tudo em um piscar de olhos.",
            role: "Duelista",
            roleIcon: DUELIST_ICON_URL,
            abilities: [
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/07a0e5e9ef539d1465fde3e2711c1c4d09756dcc-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/705b3917c26e9e97c5343d57875cd3404537190b.mp4", abilityName: "Saturação", description: "Lança INSTANTANEAMENTE um aglomerado de luz que explode ao tocar no chão e Retém jogadores próximos com uma poderosa desaceleração de movimento e armas." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3a70bfa66f910cfa825bd95264689f610e52c486-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e06f520d0e844b3c136623c2568137ac47bc54ff.mp4", abilityName: "Velocidade da Luz", description: "EQUIPE para se preparar para um impulso de velocidade. DISPARE para avançar duas vezes. Use o DISPARO ALTERNATIVO para avançar uma vez. Só o primeiro avanço faz você subir." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7bbb9874cc60f9ebe17f44d51ee4f956e39cf587-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/189ff46acf7dd27b245631af9a6c51ef95013bb7.mp4", abilityName: "Refração", description: "Cria INSTANTANEAMENTE um feixe de luz no chão. REATIVE para voltar rapidamente ao feixe como uma partícula de luz pura. Você fica invulnerável durante o deslocamento." },
                { icon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ac03cb00955a093d03d399a0ac967b4f82436b02-128x128.png?auto=format&fit=crop&q=80&h=57&w=57&crop=center", video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/b04a789382009e666cca021889586c6bc00bbaf5.mp4", abilityName: "Caminhos Convergentes (Ultimate)", description: "EQUIPE para focar seu poder prismático. DISPARE para criar uma imagem residual de si mesma que projeta um feixe de luz. Após um breve intervalo, você recebe um poderoso impulso de velocidade, e o feixe se expande e Retém outros jogadores na área." }
            ]
        },
    };

    // --- Elementos da Seção de Habilidades ---
    const abilitiesSection = document.getElementById('abilitiesSection');
    const agentAbilitiesTitle = document.getElementById('agentAbilitiesTitle');
    const agentDescriptionElement = document.getElementById('agentDescription');
    const agentRoleInfoElement = document.getElementById('agentRoleInfo');
    const agentRoleIconElement = document.getElementById('agentRoleIcon');
    const agentRoleTextElement = document.getElementById('agentRoleText');

    const abilityButtons = abilitiesSection.querySelectorAll('.ability-button');
    const abilityVideoDisplay = document.getElementById('abilityVideoDisplay');
    const currentAbilityName = document.getElementById('currentAbilityName');
    const currentAbilityDescription = document.getElementById('currentAbilityDescription');
    const videoDisplayWrapper = document.querySelector('.video-display-wrapper');

    // --- Função para Limpar APENAS o conteúdo da Habilidade Atual ---
    function clearCurrentAbilityDisplay() {
        abilityVideoDisplay.src = '';
        abilityVideoDisplay.pause();
        abilityVideoDisplay.currentTime = 0;
        abilityVideoDisplay.style.display = 'none';

        currentAbilityName.textContent = '';
        currentAbilityName.style.display = 'none';
        currentAbilityDescription.textContent = '';
        currentAbilityDescription.style.display = 'none';

        abilityButtons.forEach(btn => btn.classList.remove('active'));
        videoDisplayWrapper.classList.remove('has-video');
        // NOTA: Os elementos agentDescriptionElement e agentRoleInfoElement NÃO SÃO escondidos aqui.
        // Eles serão preenchidos ou limpos na lógica principal.
    }

    // --- Função para Limpar TODO o Conteúdo da Janela de Habilidades e Escondê-la ---
    function hideAbilitiesWindow() {
        clearCurrentAbilityDisplay(); // Limpa o conteúdo da habilidade atual
        
        agentAbilitiesTitle.textContent = 'HABILIDADES DE [Nome do Agente]'; // Reseta o título principal
        
        // Esconde e limpa a descrição do agente e a função
        if (agentDescriptionElement) { agentDescriptionElement.textContent = ''; agentDescriptionElement.style.display = 'none'; }
        if (agentRoleInfoElement) { agentRoleInfoElement.style.display = 'none'; agentRoleIconElement.src = ''; agentRoleTextElement.textContent = ''; }

        abilitiesSection.style.display = 'none';
        abilitiesSection.style.visibility = 'hidden';
        abilitiesSection.style.opacity = '0';
        abilitiesSection.classList.remove('active-display');
    }

    // --- Esconde a janela de habilidades ao carregar a página ---
    hideAbilitiesWindow();


    // --- Lógica ao Clicar no Nome do Agente na Tabela ---
    document.querySelectorAll('.agent-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const agentNameSlug = this.getAttribute('data-agent-name');
            const agentData = agentAbilitiesData[agentNameSlug];

            if (agentData) {
                // Ao clicar em um agente, primeiro limpe o conteúdo atual e
                // garanta que a janela esteja pronta para receber os novos dados.
                // Não esconda a janela inteira aqui, apenas limpe o conteúdo que será substituído.
                clearCurrentAbilityDisplay(); // Limpa dados da Habilidade Atual (vídeo, nome, desc)

                // Esconde/mostra a descrição e função do agente (garante que sumam se não houver dados, ou apareçam)
                if (agentDescriptionElement) {
                    agentDescriptionElement.textContent = agentData.agentDescription || '';
                    agentDescriptionElement.style.display = agentData.agentDescription ? 'block' : 'none';
                }
                if (agentRoleInfoElement) {
                    agentRoleIconElement.src = agentData.roleIcon || '';
                    agentRoleTextElement.textContent = agentData.role || '';
                    agentRoleInfoElement.style.display = (agentData.role && agentData.roleIcon) ? 'flex' : 'none';
                }

                // ATUALIZA TÍTULO DO AGENTE
                agentAbilitiesTitle.textContent = `${agentData.name.toUpperCase()}`;
                
                // Preenche os botões de habilidade com os dados do agente
                abilityButtons.forEach((button, index) => {
                    const iconImg = button.querySelector('img');
                    
                    if (agentData.abilities[index]) {
                        iconImg.src = agentData.abilities[index].icon;
                        iconImg.alt = `${agentData.name} Habilidade ${index + 1}`;
                        button.setAttribute('data-video-src', agentData.abilities[index].video);
                        button.setAttribute('data-ability-name', agentData.abilities[index].abilityName || '');
                        button.setAttribute('data-ability-description', agentData.abilities[index].description || '');
                        button.style.display = 'flex';
                    } else {
                        iconImg.src = '';
                        iconImg.alt = '';
                        button.removeAttribute('data-video-src');
                        button.removeAttribute('data-ability-name');
                        button.removeAttribute('data-ability-description');
                        button.style.display = 'none';
                    }
                });

                // TORNA A JANELA DE HABILIDADES VISÍVEL (SE AINDA NÃO ESTIVER)
                abilitiesSection.style.display = 'flex'; 
                abilitiesSection.style.visibility = 'visible';
                abilitiesSection.style.opacity = '1';
                abilitiesSection.classList.add('active-display');

                // Rola a página até a seção de habilidades
                if (abilitiesSection) { // Adicionado verificação para robustez
                    abilitiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                
                // Opcional: Simula o clique no primeiro botão para mostrar o primeiro vídeo do agente
                if (agentData.abilities.length > 0 && agentData.abilities[0].video) {
                    setTimeout(() => {
                        if (abilityButtons[0]) abilityButtons[0].click(); 
                    }, 50);
                }

            } else {
                alert('Dados de habilidade não encontrados para este agente. Por favor, adicione-os ao "agentAbilitiesData" no main.js');
                hideAbilitiesWindow(); // Esconde tudo se dados não forem encontrados
            }
        });
    });

    // --- Lógica de Mostrar/Esconder Vídeo e Detalhes da Habilidade ao Clicar nos Botões ---
    abilityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video-src');
            const abilityName = this.getAttribute('data-ability-name');
            const abilityDescription = this.getAttribute('data-ability-description');

            // Se o vídeo já está exibindo este src E está visível, então esconde
            if (abilityVideoDisplay.src === videoSrc && abilityVideoDisplay.style.display === 'block') {
                // Limpa apenas o display da habilidade atual (vídeo, nome, descrição da habilidade)
                abilityVideoDisplay.src = '';
                abilityVideoDisplay.pause();
                abilityVideoDisplay.currentTime = 0;
                abilityVideoDisplay.style.display = 'none';

                currentAbilityName.textContent = '';
                currentAbilityName.style.display = 'none';
                currentAbilityDescription.textContent = '';
                currentAbilityDescription.style.display = 'none';

                abilityButtons.forEach(btn => btn.classList.remove('active'));
                videoDisplayWrapper.classList.remove('has-video');
            } else {
                // Limpa o display da habilidade anterior (vídeo, nome, descrição da habilidade)
                abilityVideoDisplay.src = '';
                abilityVideoDisplay.pause();
                abilityVideoDisplay.currentTime = 0;
                abilityVideoDisplay.style.display = 'none';

                currentAbilityName.textContent = '';
                currentAbilityName.style.display = 'none';
                currentAbilityDescription.textContent = '';
                currentAbilityDescription.style.display = 'none';

                abilityButtons.forEach(btn => btn.classList.remove('active'));
                videoDisplayWrapper.classList.remove('has-video');
                
                // Define o novo src, mostra e toca
                abilityVideoDisplay.src = videoSrc;
                abilityVideoDisplay.load();
                abilityVideoDisplay.style.display = 'block';
                abilityVideoDisplay.play();

                currentAbilityName.textContent = abilityName;
                currentAbilityName.style.display = 'block';
                currentAbilityDescription.textContent = abilityDescription;
                currentAbilityDescription.style.display = 'block';

                videoDisplayWrapper.classList.add('has-video');

                this.classList.add('active');
            }
        });
    });

    // Filtro para ícones SVG em roleIconElement
    // Este filtro tenta transformar preto em #FF4654 (a cor do texto das habilidades)
    // Aplica o filtro apenas se o elemento existir
    if (agentRoleIconElement) {
        agentRoleIconElement.style.filter = "invert(29%) sepia(85%) saturate(7090%) hue-rotate(345deg) brightness(98%) contrast(100%)";
    }
});