<template>
    <div class="privacyWrapper mx-auto text-justify	break-words">
        <h1 class="text text-2xl font-bold mb-5 text-center">Datenschutzerklärung</h1>
        <p>
          Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist: <br> <br> Julian Lau <br> Email jlauapps@gmail.com <br><br>
        </p>
        <h2 class="header is-size-4">
          Ihre Betroffenenrechte
        </h2>
        <p>
          Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
        </p>
        <ul>
        <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
        <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
        <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
        <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
        <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
        <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
        </ul>
        <p>
          Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>
        <p>
          Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.
        </p>
        <p>
          Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener nofollow">https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a>.
        </p>
        <h2 class="header is-size-4 mt-4">
          SSL-Verschlüsselung
        </h2>
        <p>
          Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
        </p>
        <hr>
        <h2 class="header is-size-4">
          Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO
        </h2>
        <h3 class="header is-size-5 mt-2">
          Einzelfallbezogenes Widerspruchsrecht
        </h3>
        <p>
          Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.
        </p>
        <p>
          Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
        </p>
        <hr>
        <h2 class="header is-size-4">
          Änderung unserer Datenschutzbestimmungen
        </h2>
        <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
        <h2>Fragen an den Datenschutzbeauftragten</h2>
        <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
        <p>
          <em>
            Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für <a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/" target="_blank" rel="noopener">externe Datenschutzbeauftragte</a> (Version #2020-09-30).
          </em>
        </p>

    </div>
</template>

<script>
export default {
    name: 'privacy-view',
    metaInfo: {
    title: 'Paypal Gebührenrechner',
    titleTemplate: '%s | Datenschutz',
    htmlAttrs: {
      lang: 'de',
      amp: true
    }
  },
}
</script>

<style scoped>
    .privacyWrapper {
      margin-bottom: 10rem;
    }
    #app {
      margin: 0 10rem 0 10rem;
    }
    @media (max-width: 1000px) {
        #app {
            margin: 0 3rem 0 3rem;
        }
    }
    @media (max-width: 600px) {
        #app {
            margin: 0 1rem 0 1rem;
        }
    }
</style>