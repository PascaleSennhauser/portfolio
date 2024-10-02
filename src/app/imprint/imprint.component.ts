import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { PrivacyPolicyEnglishComponent } from "../privacy-policy-english/privacy-policy-english.component";
import { PrivacyPolicyGermanComponent } from "../privacy-policy-german/privacy-policy-german.component";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, PrivacyPolicyEnglishComponent, PrivacyPolicyGermanComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})

export class ImprintComponent {
  text: any = {
    en: {
      imprintTitle: "Imprint",
      imprintCountry: "Winterthur, Switzerland",
      instance: "Responsible instance",
      email: "E-mail",
      images: "Images",
      logo: "logo",
      icon: "icon",
      icons: "Other icons:",
      disclaimerTitle: "Disclaimer",
      disclaimerText: "<strong>Disclaimer</strong><br />The author assumes no liability for the correctness, accuracy, timeliness, reliability and completeness of the information.<br />Liability claims against the author for damages of a material or immaterial nature arising from access to or use or non-use of the published information, misuse of the connection or technical faults are excluded.<br /><br />All offers are subject to change. The author expressly reserves the right to change, supplement or delete parts of the pages or the entire offer without prior notice or to cease publication temporarily or permanently.<br /><br /><strong>Disclaimer for content and links</strong><br />References and links to third-party websites lie outside our area of responsibility. Any responsibility for such websites is rejected. Access to and use of such websites is at the user's own risk. <br /><br /><strong>Copyright declaration</strong><br />The copyright and all other rights to content, images, photos or other files on this website belong exclusively to Pascale Sennhauser or the specifically named rights holders. The written consent of the copyright holder must be obtained in advance for the reproduction of any elements.<br /><br />",
      resource: "Source"
    },
    ge: {
      imprintTitle: "Impressum",
      imprintCountry: "Winterthur, Schweiz",
      instance: "Verantwortliche Instanz",
      email: "E-Mail",
      images: "Bilder",
      logo: "Logo",
      icon: "Icon",
      icons: "Andere Icons:",
      disclaimerTitle: "Haftungsausschluss",
      disclaimerText: "<strong>Haftungsausschluss</strong><br />Die Autorin übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.<br />Haftungsansprüche gegen die Autorin wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.<br /><br />Alle Angebote sind freibleibend. Die Autorin behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.<br /><br /><strong>Haftungsausschluss für Inhalte und Links</strong><br />Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.<br /><br /><strong>Urheberrechtserklärung</strong><br />Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschliesslich Pascale Sennhauser oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.<br /><br />",
      resource: "Quelle"
    }
  }

  /**
   * Placeholder
   */

  languageData = 'en';
}
