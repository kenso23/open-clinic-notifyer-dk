export interface Practice {
  Identifier: number
  Navn: string
  KlinikType: string
  OrganisationType: number
  Adresse: string
  Postnummer: string
  By: string
  Kommunekode: number
  Regionskode: number
  PraksisFormTekst: string
  AktuelInformation: string
  Tilfredshedsundersoegelse: any
  Email: string
  DigitalPostUrl: any
  Hjemmeside: string
  InformationsKategori: string
  InformationsUnderkategori: string
  InformationsUnderkategorier: string[]
  UddannerLaeger: boolean
  AabenForTilgang: boolean
  Offentliggoeres: boolean
  SidstOpdateret: string
  Lokation: Lokation
  Aabningstider: Aabningstider[]
  Daekningsomraader: any[]
  Fravaer: any[]
  Funktioner: any[]
  Personale: Personale[]
  Produkter: any[]
  Telefonnumre: Telefonnumre[]
  Ventetider: any[]
  Faciliteter: any[]
  Selvbetjening: Selvbetjening[]
  Adgangsforhold: Adgangsforhold[]
  OevrigeOplysninger: OevrigeOplysninger[]
  KlinikHierarki: any[]
  GodAdgangUrl: any
  OnlyVisibleForProfessionals: boolean
}

export interface Lokation {
  Latitude: number
  Longitude: number
}

export interface Aabningstider {
  Type: string
  Tider: Tider[]
}

export interface Tider {
  Type: any
  Tekst: string
  FraKl: string
  TilKl: string
  Bemaerkninger: any
}

export interface Personale {
  Navn: string
  Type: string
  Foedselsdato: string
  Koen: string
  AncinitetsStart: string
  VisSpecialLaegeIAlmenMedicin: boolean
  Efteruddannelser: any[]
  FagligeMedlemskaber: any[]
}

export interface Telefonnumre {
  Tekst: string
  Nummer: string
  Beskrivelse: string
  Offentligt: boolean
  TypeId: number
}

export interface Selvbetjening {
  Tekst: string
}

export interface Adgangsforhold {
  Navn: string
  YderligereInformation?: string
}

export interface OevrigeOplysninger {
  Tekst: string
}
