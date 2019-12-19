var dictionary = {}

dictionary.search = function(q) {
  qMod = q.toUpperCase()
  if (qMod in TBF) {
    return TBF[qMod]
  }
  return `Du søkte etter «${q}», men det vet jeg ikke hva er.`
}

const TBF = {
  OVK: 'Byrådsavdeling for oppvekst og kunnskap',
  PBE:
    'Plan- og  bygningsetaten. Ligger under byrådsavdeling for byutvikling (BYU)',
  ODE: 'Oslo Origo',
  KEM: 'Kemneren. Ligger under byrådsavdeling for finans (FIN).',
  PET:
    'Program for elektroniske tjenester. Ble startet av forrige byråd. Origo har videreført en del av produktene som PET utviklet.',
  LØFTET:
    'Prosjektnavnet til de eksisterende nettsidene. Prosjektet er avsluttet, og nettsidene utvikles og driftes av Utviklings- og kompetanseetaten (UKE). Redaksjonen blir ofte omtalt som webforvaltningen.',
  AWS: `Amazon Web Services, skytjenester fra Amazon.
  
Skytjenester i dette tilfellet er alt fra virtuelle servere til databaser og andre tjenester som man bare trenger å trykke på en knapp (og legge inn kredittkortet sitt) for å ta i bruk.`,
  MVP:
    'Minimal viable product. Det minste produktet som kan lages hvor bruker likevel får gjennomført kjerneoppgaven.',
  WEBFORVALTNINGEN:
    'Navn på tidligere avdeling som driftet og utviklet kommunens nettsider i Utviklings- og kompetanseetaten (UKE). Etter omorganisering sitter utviklere og designere i ulike seksjoner, men vi bruker likevel ofte “webforvaltningen” som en enkel måte å referere til alle som jobber med nettsidene.',
  ITAS: `Interaktive tjenester applikasjonsservere
Hva:
- Servere som tjenestene vi lager (utvikler/programerer) i Oslo kommune går på
- Oslo kommunes Integrasjonsløsning som binder sammen mange tjenester. Feks DVD med fagsystemer
- Utviklings- og testmiljø for de som programmerer i UKE og mange i Origo
Hvor:
- UKE, egen seksjon som heter "Plattformforvaltning - systemutvikling" aka Team ITAS.
- Origo, hjelper UKE og bruker også selv miljøet'`,
  UKE:
    'Utviklings- og kompetanseetaten. Ligger under Byrådsavdeling for finans (FIN).',
  FJARB:
    'Fjernarbeidsløsningen i kommunen. Altså, den du må mikke med for å få tilgang til feks outlook utenfor kommunens nett. Noe sånt ...'
}

module.exports = dictionary
