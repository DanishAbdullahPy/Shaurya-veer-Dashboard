import React, { useState } from "react";
import "./style.css";

function Regulations() {
  const [trigger, setTrigger] = useState(true);

  const handleB1Click = () => {
    setTrigger(true);
  };

  const handleB2Click = () => {
    setTrigger(false);
  };

  return (
    <div style={{ margin: "20px" }}>
      <div id="button">
        <div
          id="b1"
          onClick={handleB1Click}
          style={{
            backgroundColor: trigger ? "#c9def1" : "#f7d9c4",
          }}
        >
          <p id="ptext1">Do's</p>
        </div>
        <div
          id="b2"
          onClick={handleB2Click}
          style={{
            backgroundColor: trigger ? "#f7d9c4" : "#c6def1",
          }}
        >
          <p id="ptext2">Don'ts</p>
        </div>
      </div>

      {/* data */}
      {trigger ? (
        <div id="does">
          <h2>
            The Commission has drawn up a list of &#39;Dos&#39; and
            &#39;Don&#39;ts&#39; to be followed by candidates and political
            parties after the announcement of elections and till the completion
            of the process of elections. The Commission has directed that this
            be given the widest possible publicity and its contents brought to
            the knowledge of all candidates and political parties including in
            the official language of the State. 30 It must be clearly brought to
            the notice of candidates and political parties that the list of
            Dos&#39; and Donts&#39; is only illustrative and not exhaustive and
            is not intended to substitute or modify other detailed
            directions/instructions on the above subjects, which must be
            strictly observed and followed.
          </h2>

          <ol>
            <li>
              On-going programmes, which actually started in the field before
              the announcement of elections may continue.
            </li>
            <li>
              Relief and rehabilitation measures to the people in areas affected
              by floods, drought, pestilence, and other natural calamities, can
              commence and continue.
            </li>
            <li>
              Grant of cash or medical facilities to terminally or critically
              ill persons can continue with appropriate approvals.
            </li>
            <li>
              Public places like maidans must be available impartially to all
              parties/contesting candidates for holding election meetings. So
              also use of helipads must be available impartially to all
              parties/contesting candidates, to ensure a level playing field.
            </li>
            <li>
              Criticism of other political parties and candidates should relate
              to their policies, programme, past record and work.
            </li>
            <li>
              The right of every individual for peaceful and undisturbed home
              life should be fully safeguarded.
            </li>
            <li>
              The local police authorities should be fully informed of the venue
              and time of the proposed meetings well in time and all necessary
              permissions taken.
            </li>
            <li>
              If there are any restrictive or prohibitory orders in force in the
              place of the proposed meeting, they shall be fully respected.
              Exemption, if necessary, must be applied for and obtained well in
              time.
            </li>
            <li>
              Permission must be obtained for the use of loudspeakers or any
              other such facilities for the proposed meetings.
            </li>
            <li>
              The assistance of the police should be obtained in dealing with
              persons disturbing meetings or otherwise creating disorder.
            </li>
            <li>
              The time and place of the starting of any procession, the route to
              be followed and the time and place at which the procession will
              terminate should be settled in advance and advance permissions
              obtained from the police authorities.
            </li>
            <li>
              The existence of any restrictive orders in force in the localities
              through which the procession has to pass should be ascertained and
              fully complied with. So also all traffic regulations and other
              restrictions.
            </li>
            <li>
              The passage of the procession must be without hindrance to
              traffic.
            </li>
            <li>
              Cooperation should be extended to all election officials at all
              times to ensure peaceful and orderly poll.
            </li>
            <li>All Workers must display badges or identity cards.</li>
            <li>
              Unofficial identity slips issued to voters shall be on plain
              (white) paper and not contain any symbol, name of the candidate or
              name of the party.
            </li>
            <li>
              Restrictions on plying of vehicles during the campaign period and
              on poll day shall be fully obeyed.
            </li>
            <li>
              (Except voters, candidates and their election/polling agents),
              only persons with a specific valid authority letter from the
              Election Commission can enter any polling booth. No functionary
              however highly placed (e.g. Chief Minister, Minister, MP or MLA
              etc) is exempt from this condition.
            </li>
            <li>
              Any complaint or problem regarding the conduct of elections shall
              be brought to the notice of the observer appointed by the
              Commission/Returning Officer/Zonal/Sector Magistrate/Election
              Commission of India.
            </li>
            <li>
              Directions/orders/instructions of the Election Commission, the
              Returning Officer, and the District Election Officer shall be
              obeyed in all matters related to various aspects of election.
            </li>
            <li>
              Do leave the constituency after the campaign period is over if you
              are not a voter or a candidate or candidate’s election agent from
              that constituency.
            </li>
          </ol>
        </div>
      ) : (
        <div id="dont">
          <ol type="1">
            <li>
              Any and all advertisements at the cost of the public exchequer
              regarding achievements of the party/Government in power is
              prohibited.
            </li>
            <li>
              No Minister shall enter any polling station or the place of
              counting, unless he or she is a candidate or as a voter only for
              voting.
            </li>
            <li>
              Official work should not at all be mixed with
              campaigning/electioneering.
            </li>
            <li>
              No inducement, financial or otherwise, shall be offered to the
              voter.
            </li>
            <li>
              Caste/communal feelings of the electors shall not be appealed to.
            </li>
            <li>
              No activity, which may aggravate existing differences or create
              mutual hatred or cause tension between different castes,
              communities or religious or linguistic groups shall be attempted.
            </li>
            <li>
              No aspect of the private life, not connected with the public
              activities, of the leaders or workers of other parties shall be
              permitted to be criticized.
            </li>
            <li>
              Other parties or their workers shall not be criticized based on
              unverified allegations or on distortions.
            </li>
            <li>
              Temples, Mosques, Churches, Gurudwaras or any place of worship
              shall not be used as places for election propaganda, including
              speeches, posters, music etc., on electioneering.
            </li>
            <li>
              Activities which are corrupt practices or electoral offences such
              as bribery, undue influence, intimidation of voters, personation,
              canvassing within 100 meters of a polling station, holding of
              public meetings during the period of 48 hours ending with the hour
              fixed for the close of the poll and conveyance of voters to and
              from polling stations are prohibited.
            </li>
            <li>
              Demonstrations or picketing before the houses of individuals by
              way of protesting against their opinion or activities shall not be
              resorted to.
            </li>
            <li>
              Subject to the local laws, no one can make use of any
              individual&#39;s land, building, compound wall, vehicles etc. for
              erecting flag staffs, putting up banners, pasting notices or
              writing slogans etc. without specific permission of the owner (to
              be shown to and deposited with the District Election Officer).
            </li>
            <li>
              No disturbances shall be created in public meetings or processions
              organized by other political parties or candidates.
            </li>
            <li>
              Processions along places at which another party is holding
              meetings shall not be undertaken.
            </li>
            <li>
              Processionists shall not carry any articles, which are capable of
              being misused as missiles or weapons.
            </li>
            <li>
              Posters issued by other parties and candidates shall not be
              removed or defaced.
            </li>
            <li>
              Posters, flags, symbols or any other propaganda material shall not
              be displayed in the place being used on the day of poll for
              distribution of identity slips or near polling booths.
            </li>
            <li>
              Loudspeakers whether static or mounted on moving vehicles shall
              not be used either before 6 a.m. or after 10 a.m. and without the
              prior written permission of the authorities concerned.
            </li>
            <li>
              Loudspeakers shall also not be used at public meetings and
              processions without the prior written permission of the
              authorities concerned. Normally, such meetings/processions will
              not be allowed to continue beyond 10.00 p.m. in the night and will
              be further subject to the local laws, local perceptions of the
              security arrangements of the area and other relevant
              considerations like weather conditions, festival season,
              examination period, etc.
            </li>
            <li> No liquor should be distributed during elections.</li>
            <li>
              On the day of the poll, no person who has been assessed to be
              having a security threat and therefore given official security
              shall enter the vicinity of a polling station premise (within 100
              meters) with his security personnel. Further, on the day of the
              poll no such person shall move around in a constituency with his
              security personnel. If the person provided with official security
              happens to be a voter also, then he or she shall restrict his /
              her movement - accompanied by security personnel, to voting only.
            </li>
            <li>
              No person who has been assessed to be having a security threat and
              therefore provided official security or who has private security
              guards for himself, shall be appointed as an election agent or
              polling agent or counting agent.
            </li>
          </ol>
        </div>
      )}
    </div>
  );
}

export default Regulations;
