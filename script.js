const projects = {
  pki: {
    kicker: "PROJET 01 · PKI / EJBCA",
    title: "Infrastructure à clés publiques",
    text: "Conception et déploiement d'une PKI destinée à gérer le cycle de vie des certificats numériques et à sécuriser les communications web.",
    points: [
      "Déploiement et prise en main d'EJBCA dans un environnement conteneurisé.",
      "Création et configuration d'une autorité de certification et de profils d'entités.",
      "Génération et gestion de certificats X.509 côté client et serveur.",
      "Configuration d'Apache avec SSL/TLS et validation d'un accès HTTPS."
    ]
  },
  switch: {
    kicker: "PROJET 02 · NETWORK SECURITY",
    title: "Attaques & sécurité des switches",
    text: "Travail consacré aux vulnérabilités de couche 2 et aux contre-mesures permettant de durcir un réseau commuté.",
    points: [
      "Étude du MAC flooding, de l'ARP spoofing, des attaques BPDU, DoS et VLAN hopping.",
      "Analyse des risques liés à la redirection et à l'interception de trafic.",
      "Mise en œuvre de protections : Port Security, ACL, 802.1X et mécanismes de détection."
    ]
  },
  audit: {
    kicker: "PROJET 03 · AUDIT / DETECTION",
    title: "Audit & détection d'intrusions",
    text: "Mise en pratique d'outils d'audit système et réseau afin d'identifier des services exposés, des vulnérabilités et des modifications suspectes.",
    points: [
      "Scan et reconnaissance avec Nmap.",
      "Analyse de vulnérabilités avec Nessus et audit web avec Nikto.",
      "Contrôle d'intégrité avec AIDE / Tripwire.",
      "Création de règles Snort et analyse des alertes."
    ]
  },
  linux: {
    kicker: "PROJET 04 · LINUX HARDENING",
    title: "Durcissement réseau Linux",
    text: "Configuration de mécanismes de filtrage et de segmentation afin de contrôler les flux et réduire la surface d'exposition.",
    points: [
      "Règles Netfilter/Iptables : INPUT, OUTPUT, FORWARD et NAT.",
      "Mise en place de filtrage, masquerading et principes de bastion / DMZ.",
      "Étude du proxy Squid et de ses ACL de filtrage."
    ]
  },
  ptero: {
    kicker: "PROJET 05 · GRC / RESILIENCE",
    title: "PteroPark — sécurisation du SI",
    text: "Projet de sécurisation d'un SI mêlant environnements IT, OT et IoT, avec une approche architecture, risques, identité et résilience.",
    points: [
      "Analyse des risques et scénarios de menace.",
      "Proposition d'une architecture sécurisée et de mesures IAM.",
      "Travail autour de la gestion de crise, du PRA et du PCA.",
      "Formalisation de politiques et procédures de sécurité."
    ]
  }
};

const modal = document.querySelector("#projectModal");
const content = document.querySelector("#modalContent");
document.querySelectorAll("[data-project]").forEach(btn => {
  btn.addEventListener("click", () => {
    const p = projects[btn.dataset.project];
    content.innerHTML = `<p class="modal-kicker">${p.kicker}</p><h3>${p.title}</h3><p>${p.text}</p>
      <ul>${p.points.map(x => `<li>${x}</li>`).join("")}</ul>`;
    modal.showModal();
  });
});
document.querySelector(".close").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
}, {threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.querySelector("#year").textContent = new Date().getFullYear();