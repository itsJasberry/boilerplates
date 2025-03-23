import { Typography } from "@/components/ui/typography";

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Typography variant="h1">
        Projektowanie systemów w nowoczesnych aplikacjach webowych
      </Typography>

      <Typography variant="lead" className="mt-6 mb-10">
        Dobrze zaprojektowany system designu to fundament każdej nowoczesnej
        aplikacji. Oszczędza czas deweloperów, zapewnia spójność interfejsu i
        poprawia doświadczenie użytkownika.
      </Typography>

      <Typography variant="h2" className="mt-12">
        Czym jest system designu?
      </Typography>

      <Typography variant="p">
        System designu to zestaw reguł, komponentów i wytycznych, które
        definiują sposób tworzenia interfejsu użytkownika. Dobry system designu
        pozwala na szybki rozwój aplikacji przy zachowaniu spójnego wyglądu i
        funkcjonalności.
      </Typography>

      <Typography variant="p">
        Wdrożenie takiego systemu w projekcie ułatwia współpracę między
        designerami a deweloperami, minimalizuje podejmowanie decyzji związanych
        z wyglądem dla każdego elementu z osobna, a także zapewnia, że aplikacja
        będzie wyglądać profesjonalnie na wszystkich urządzeniach.
      </Typography>

      <Typography variant="h3" className="mt-10">
        Kluczowe elementy systemu typografii
      </Typography>

      <Typography variant="p">
        Typografia jest jednym z fundamentalnych elementów każdego systemu
        designu. Obejmuje nie tylko dobór odpowiednich fontów, ale także
        ustalenie hierarchii, rozmiarów, odstępów i innych parametrów
        wpływających na czytelność i estetykę tekstu.
      </Typography>

      <Typography variant="blockquote">
        &quot;Typografia to sztuka organizowania liter i tekstu w sposób, który
        sprawia, że język pisany jest czytelny, wyraźny i atrakcyjny wizualnie
        podczas czytania.&quot; — Ellen Lupton
      </Typography>

      <Typography variant="p">
        Implementując system typografii, powinniśmy zadbać o responsywność,
        czyli dopasowanie rozmiaru i układu tekstu do różnych szerokości ekranu.
        W przypadku nagłówków oznacza to zazwyczaj zmniejszenie ich rozmiaru na
        mniejszych urządzeniach.
      </Typography>

      <Typography variant="h4" className="mt-8">
        Przykład implementacji kodu
      </Typography>

      <Typography variant="p">
        Poniżej znajduje się przykład wykorzystania elementu{" "}
        <Typography variant="inlinecode">
          inlinecode
        </Typography>{" "}
        wewnątrz paragrafu. Taki element jest przydatny do wyróżniania
        fragmentów kodu lub technicznych terminów w tekście.
      </Typography>

      <Typography variant="large" className="mt-8">
        Ten tekst wykorzystuje wariant &quot;large&quot; — nieco większy niż standardowy
        paragraf, używany do wyróżnienia ważnych informacji, które nie są
        nagłówkami.
      </Typography>

      <Typography variant="muted" className="mt-6">
        Wariant &quot;muted&quot; przydaje się do wyświetlania mniej istotnych informacji,
        takich jak metadane, informacje pomocnicze czy objaśnienia. Jest
        subtelnie przygaszony w stosunku do głównego tekstu.
      </Typography>

      <div className="mt-12 border-t pt-6">
        <Typography variant="small">
          © 2025 TwójProjekt — Wszelkie prawa zastrzeżone. Ostatnia
          aktualizacja: 23 marca 2025.
        </Typography>
      </div>
    </div>
  );
}
