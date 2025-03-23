import { TypographyContainer } from "@/components/ui/typography";

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <TypographyContainer>
        <h1>
          Projektowanie systemów w nowoczesnych aplikacjach webowych
        </h1>

        <p className="lead mt-6 mb-10">
          Dobrze zaprojektowany system designu to fundament każdej nowoczesnej
          aplikacji. Oszczędza czas deweloperów, zapewnia spójność interfejsu i
          poprawia doświadczenie użytkownika.
        </p>

        <h2 className="mt-12">
          Czym jest system designu?
        </h2>

        <p>
          System designu to zestaw reguł, komponentów i wytycznych, które
          definiują sposób tworzenia interfejsu użytkownika. Dobry system designu
          pozwala na szybki rozwój aplikacji przy zachowaniu spójnego wyglądu i
          funkcjonalności.
        </p>

        <p>
          Wdrożenie takiego systemu w projekcie ułatwia współpracę między
          designerami a deweloperami, minimalizuje podejmowanie decyzji związanych
          z wyglądem dla każdego elementu z osobna, a także zapewnia, że aplikacja
          będzie wyglądać profesjonalnie na wszystkich urządzeniach.
        </p>

        <h3 className="mt-10">
          Kluczowe elementy systemu typografii
        </h3>

        <p>
          Typografia jest jednym z fundamentalnych elementów każdego systemu
          designu. Obejmuje nie tylko dobór odpowiednich fontów, ale także
          ustalenie hierarchii, rozmiarów, odstępów i innych parametrów
          wpływających na czytelność i estetykę tekstu.
        </p>

        <blockquote>
          &quot;Typografia to sztuka organizowania liter i tekstu w sposób, który
          sprawia, że język pisany jest czytelny, wyraźny i atrakcyjny wizualnie
          podczas czytania.&quot; — Ellen Lupton
        </blockquote>

        <p>
          Implementując system typografii, powinniśmy zadbać o responsywność,
          czyli dopasowanie rozmiaru i układu tekstu do różnych szerokości ekranu.
          W przypadku nagłówków oznacza to zazwyczaj zmniejszenie ich rozmiaru na
          mniejszych urządzeniach.
        </p>

        <h4 className="mt-8">
          Przykład implementacji kodu
        </h4>

        <p>
          Poniżej znajduje się przykład wykorzystania elementu{" "}
          <code>inlinecode</code>{" "}
          wewnątrz paragrafu. Taki element jest przydatny do wyróżniania
          fragmentów kodu lub technicznych terminów w tekście.
        </p>

        <p className="font-semibold text-lg mt-8">
          Ten tekst wykorzystuje wariant &quot;large&quot; — nieco większy niż standardowy
          paragraf, używany do wyróżnienia ważnych informacji, które nie są
          nagłówkami.
        </p>

        <p className="text-muted-foreground mt-6">
          Wariant &quot;muted&quot; przydaje się do wyświetlania mniej istotnych informacji,
          takich jak metadane, informacje pomocnicze czy objaśnienia. Jest
          subtelnie przygaszony w stosunku do głównego tekstu.
        </p>

        <div className="mt-12 border-t pt-6">
          <p className="text-sm font-medium">
            © 2025 TwójProjekt — Wszelkie prawa zastrzeżone. Ostatnia
            aktualizacja: 23 marca 2025.
          </p>
        </div>
      </TypographyContainer>
    </div>
  );
}
