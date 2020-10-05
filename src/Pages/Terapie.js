import React from 'react';
import Section from '../Section'
import $ from "jquery";
import { Accordion } from "foundation-sites";
import reka from '../Assets/reka.jpg'
import sensoplastyka from '../Assets/sensoplastyka.jpg'
import integracjasenso from '../Assets/integracjasenso.jpg'


class Terapie extends React.Component {

  componentDidMount() {
    new Accordion($(".accordion"), {
      slideSpeed: 500,
      multiExpand: true
    });
}

  render (){
    return (
      <>
      <Section>
        <div className="cell text-center marginer">
          <h2>terapie</h2>
        </div>
      </Section>
      <Section>
        <div className="cell small-12 medium-3 medium-offset-1">
          <img className="img_therapy" src={sensoplastyka} alt="reh"></img>
        </div>
        <div className="cell small-12 medium-7">
            <h3>neurorehabilitacja dzieci i niemowląt</h3>
            <ul>
              <li>Mózgowe porażenie dziecięce</li>
              <li>Zespoły genetyczne</li>
              <li>Zaburzenia napięcia mięśniowego</li>
              <li>Przepuklina oponowo-rdzeniowa</li>
              <li>Wzmożone/ obniżone napięcie mięśniowe</li>
              <li>Asymetria ułożeniowa</li>
              <li>Kręcz szyi</li>
              <li>Opóźnienie rozwoju psychoruchowego</li>
              <li>Porażenie splotu barkowego</li>
              <li>Inne zaburzenia ośrodkowego układu nerwowego</li>
          </ul>
        </div>
      </Section>
      <Section>
        <div className="cell small-12 medium-5 medium-offset-1">
            <h3>Badanie<br/> stóp</h3>
            <h5 className="therapy-description">indywidualne dopasowanie termoplastycznych
             wkładek ortopedycznych<strong> ICB MEDICAL</strong></h5>
           <p>
           wkładki ortopedyczne są ważnym elementem wspomagania terapii nieprawidłowego ustawienia stóp (a co za tym idzie całej postawy) u dzieci. Pomagają utrwalać efekty uzyskane podczas terapii oraz zapobiegają kompensacjom kończyn dolnych i tułowia.
           </p>
        </div>
       
        <div className="cell small-12 medium-5 ">
            <h3> terapia trójpłaszczyznowa</h3>
            <h4 className="therapy-description">manualna terapia stóp na podstawach neurofizjologicznych wg Barbary Zukunft-Huber</h4>
          <ul>
            <li>stopa płasko-koślawa, sierpowata, przywiedzeniowa, końska, piętowa i inne</li>
            <li>zaburzenia osi kończyn dolnych</li>
          </ul>
        </div>
      </Section>
      <Section>
      <div className="cell small-12 medium-3 medium-offset-1">
          <img className="img_therapy" src={integracjasenso} alt="reh"></img>
        </div>
        <div className="cell small-12 medium-7">
            <h3>integracja Sensoryczna</h3>
            <ul>
              <li>Nadpobudliwość ruchowa </li>
              <li>Problemy z koncentracją uwagi</li>
              <li>ADHD</li>
              <li>Autyzm, zespół Aspergera</li>
              <li>Opóźnienie rozwoju psychomotorycznego</li>
              <li>Zaburzenia mowy</li>
          </ul>
        </div>
      </Section>
      <Section>
        <div className="cell small-12 medium-5 medium-offset-1">
        <h3>terapia w kombinezonie</h3>
      <h5>turnusy z użyciem kombinezonów Therasuit</h5>
            <p >
                Ćwiczenia w wymiarze 2,5 godzin dziennie, 5 razy w tygodniu w cyklach jedno, dwu i trzytygodniowych. Jest to zindywidualizowany, intensywny program rehabilitacyjny mający na celu rozwój siły i funkcji, czyli niezależności w wykonywaniu codziennych czynności.
                W terapii wykorzystywane są: kostium rehabilitacyjny TheraSuit oraz Uniwersalny Gabinet Leczniczy. Specjalnie stworzony program pozwala na poprawę wzorców ruchowych oraz przyspieszenie rozwoju motorycznego.
                </p>
            
          <ul>
            <li>Mózgowe porażenie dziecięce</li>
            <li>Opóźnienie rozwoju motorycznego</li>
            <li>Udary i urazy mózgu</li>
            <li>Przepuklina rdzeniowo-oponowa</li>
            <li>Choroby układu nerwowo-mięśniowego</li>
          </ul>
        </div>
        <div className="cell small-12 medium-5">
            <h3>Korekcja wad postawy</h3>
           <ul>
             <li>Wady i zniekształcenia stóp</li>
             <li>Wady i zniekształcenia stóp</li>
             <li>Skoliozy</li>
             <li>Koślawość/ szpotawość kolan</li>
             <li>Inne wady postawy</li>
           </ul>
           <h3>Kinesiotaping</h3>
          <ul>
            <li>Korekcja wad postawy</li>
            <li>Wspomaganie pracy mięśni</li>
          </ul>
        </div>
      </Section>
      <Section>
        <div className="cell small-12 medium-7 medium-offset-1">
            <h3>Funkcjonalna terapia ręki</h3>
          <ul>
            <li>Poprawa zdolności manualnych</li>
            <li>Przygotowanie do funkcji szkolnych</li>
            <li>Nauka prawidłowego chwytu</li>
          </ul>
        </div>
        <div className="cell small-12 medium-3">
          <img  src={reka} alt="terapia ręki"></img>
        </div>
      </Section>
      <Section>
        <div className="cell small-12 medium-4">
            <h3> logopedyczna</h3>
           <ul>
             <li>Dyslalia</li>
             <li>Opóźniony rozwój mowy</li>
             <li>Niedokształcenie mowy pochodzenia korowego</li>
             <li>Dyzartria</li>
             <li>Jąkanie</li>
             <li>Niedokształcenie mowy z powodu niepełnosprawności intelektualnej</li>
             <li>Afazja</li>
             <li>Profilaktyka logopedyczna</li>
             <li>Zajęcia logarytmiczne</li>
           </ul>
        </div>
        <div className="cell small-12 medium-4">
            <h3>pedagogiczna</h3>
          <ul>
            <li>Reedukacja Dysleksji</li>
            <li>Usprawnianie czynności analizatorów: słuchowego, wzrokowego i kinestetyczno-ruchowego</li>
            <li>Eliminowanie niepowodzeń szkolnych</li>
          </ul>
        </div>
        <div className="cell small-12 medium-4">
            <h3> psychologiczna</h3>
           <ul>
             <li>Ocena rozwoju dziecka i gotowości szkolnej</li>
             <li>Problemy wychowawcze</li>
             <li>Niedokształcenie mowy pochodzenia korowego</li>
             <li>Lęk i depresja</li>
             <li>Problemy z koncentracją uwagi i nadpobudliwość</li>
             <li>Autyzm, zespół aspergera</li>
             <li>Upośledzenie umysłowe</li>
             <li>Trening interpersonalny dla młodzieży</li>
           </ul>
        </div>
      </Section>
      </>
    );
  }
}

export default Terapie;