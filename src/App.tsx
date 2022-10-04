import React, { useState } from "react";
import { Section } from "./components/Section";
import { Menu } from "./components/Menu";
import { Carousel } from "./components/Carousel";
import "./App.css";
import { FullScreenImage } from "./components/FullScreenImage";

function App() {
  const [fullScreenImageShowing, setFullScreenImageShowing] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");
  const [fullScreenCaption, setFullScreenCaption] = useState(<div></div>);

  return (
    <div id={fullScreenImageShowing ? "App-noScroll" : "App"}>
      <div id="appHeaderContainer">
        <div id="title">{"Personas & Storyboarding"}</div>
      </div>
      <div id="menuContainer">
        <Menu
          sections={[
            "Overview",
            "Interface",
            "Observations",
            "Interviews",
            "Personas",
            "Storyboard",
          ]}
        />
      </div>
      <hr className="lineBreakBetweenSections" />
      <div className="sectionContainer">
        <div id="Overview" style={{ margin: "-10px" }}>
          <Section
            title={"Overview"}
            explainer={""}
            content={
              <div>
                <p>
                  This project is a case study in how we can better understand users
                  through observation, interview, personas, and storyboarding. Through
                  better understanding users and their needs, we can improve on our user
                  interface design, thereby improving the user experience.
                </p>
                <p>
                  For this project, I observed users interacting with a fountain drink
                  dispenser and interviewed several users on their experiences with it.
                  From there, I developed two user personas, the soda-lover Kate and the
                  water-lover Dylan, and drafted a storyboard based on the Kate persona.
                </p>
              </div>
            }
          />{" "}
        </div>
        <hr className="lineBreakBetweenSections" />
        <div id="Interface" style={{ margin: "-10px" }}>
          <Section
            title={"Interface: Fountain Drink Dispenser"}
            explainer={
              'The interface I chose to study is a fountain drink dispenser at the main Brown University dining hall, "The Ratty".'
            }
            content={
              <Carousel
                images={[
                  "DrinkDispenserSketch.png",
                  "DrinkDispenserSketch2.png",
                  "DrinkDispenserPhoto.png",
                ]}
                altText={[
                  "Sketch of the home screen on the Ratty drink dispenser",
                  "Sketch of the selection screen on the Ratty drink dispenser after selecting a type of fountain drink",
                  "Photo of the home screen of the Ratty drink dispenser",
                ]}
                captions={[
                  <p key="1">
                    <b>Figure 1: Interface sketch, start screen.</b> This interface is
                    designed to allow users to dispense ice and their drink of choice.
                    Drink buttons are circular and arranged by drink category, with
                    colorful graphics for all but the water button. There are filter
                    options to show all drinks (default), low calorie drinks, or no
                    caffeine drinks. The filters have the same placement and styling as
                    the option to switch the interface language to Spanish. There is a QR
                    code to scan for contactless use. After selecting a drink option, the
                    user presses the drink dispenser lever to dispense the drink. The user
                    can also press the ice dispenser lever to dispense ice.
                  </p>,
                  <p key="2">
                    <b>Figure 2: Interface sketch, selection screen.</b> This shows an
                    example screen that appears after the user selects a drink option on
                    the main screen.
                  </p>,
                  <p key="3">
                    <b>Figure 3: Interface photo, start screen.</b> Note the bright colors
                    and prominent brand logos, as well as the greyed out buttons
                    indicating a drink is not available. On clicking one of these buttons,
                    the word &apos;Unavailable&apos; appears briefly. While the machine is
                    idle, a fullscreen ad for Coke Zero Sugar will occasionally appear.{" "}
                  </p>,
                ]}
                setFullScreenImage={setFullScreenImage}
                setFullScreenCaption={setFullScreenCaption}
                setFullScreenImageShowing={setFullScreenImageShowing}
              />
            }
          />{" "}
        </div>
        <hr className="lineBreakBetweenSections" />
        <div id="Observations">
          <Section
            title={"Observations"}
            explainer={
              "I observed 20+ users interacting with the drink dispenser during popular meal times at The Ratty."
            }
            content={
              <div>
                <div className="keyFindings">
                  <p className="contentHeader">Key Findings</p>
                  <ul>
                    <li className="keyFindingsEmphasis">
                      Users used the machine to fill both reusable cups and water bottles
                    </li>
                    <ul>
                      <li>
                        Users filling cups could press their cup against the levers to
                        dispense ice or the drink, but users filling water bottles had to
                        press their hand against the levers, as there wasn&apos;t enough
                        space for most water bottles to fit{" "}
                      </li>
                    </ul>
                    <li className="keyFindingsEmphasis">
                      Users primarily used the machine for soft drinks with ice
                    </li>
                    <ul>
                      <li>
                        A significant number of users also used the machine for ice water
                        or just ice
                      </li>
                    </ul>
                    <li className="keyFindingsEmphasis">
                      Users were fast and accurate when selecting and dispensing drinks
                    </li>
                    <ul>
                      <li>
                        Uses rarely spent longer than 1 second between actions, e.g. to
                        make a decision or to locate a button
                      </li>
                    </ul>
                    <li className="keyFindingsEmphasis">
                      Users spent more time on and were less accurate when dispensing ice{" "}
                    </li>
                    <ul>
                      <li>
                        Users tended to press the ice lever multiple times versus a single
                        long press like for drinks, and ice frequently missed the intended
                        container
                      </li>
                    </ul>
                    <li className="keyFindingsEmphasis">
                      Several features went unused (QR code, drink filters, etc.)
                    </li>
                  </ul>
                </div>
              </div>
            }
          />
        </div>
        <hr className="lineBreakBetweenSections" />
        <div id="Interviews">
          <Section
            title={"Interviews"}
            explainer={
              "I interviewed three users on their experiences interacting with the drink dispenser at The Ratty."
            }
            content={
              <div className="questionAnswerWrapper">
                <div className="questionWrapper">
                  <p className="contentHeader">Questions</p>
                  <ol>
                    <li>
                      How often have you used the soda machine at this dining hall in the
                      past week?
                    </li>
                    <li>What do you normally get from the machine?</li>
                    <ul>
                      <li>
                        {" "}
                        If you wanted to get water, would you use the soda machine or the
                        water machine? Why?{" "}
                      </li>
                    </ul>
                    <li>Can you walk me through how you normally use the machine?</li>
                    <li>What do you like about using the machine?</li>
                    <li>
                      {" "}
                      Is there anything that frustrates you about using the machine?
                    </li>
                    <ul>
                      <li>Do you have any difficulty with the ice dispenser?</li>
                    </ul>
                    <li>
                      What, if anything, would you change about this user interface?
                    </li>
                    <li>
                      Is there anything about the interface we haven&apos;t covered that
                      you&apos;d like to mention?
                    </li>
                  </ol>
                </div>
                <div className="keyFindings">
                  <p className="contentHeader">Key Findings</p>
                  <ol>
                    <li>
                      One set of users used the soda machine primarily for ice and soft
                      drinks, while the other set used it primarily for ice and water
                    </li>
                    <li>
                      Users typically had a go-to drink but appreciated having all of the
                      drink options available, even if they never chose them
                    </li>
                    <li>
                      One user noted that they usually have a plate of food with them when
                      getting a drink, and they always have to put down their food to have
                      both hands free to use the machine
                    </li>
                    <li>
                      One user was frustrated that there&apos;s no indication that the ice
                      is out and that users have to find out through (literal) trial and
                      error{" "}
                    </li>
                    <li>
                      Two users noted occasional issues with touch screen responsiveness,
                      but each had a different solution
                    </li>
                    <ul>
                      <li>One user uses a different part of their hand</li>
                      <li>The other user repeats the same motion but harder</li>
                    </ul>
                  </ol>
                </div>
              </div>
            }
          />
        </div>
        <hr className="lineBreakBetweenSections" />
        <div id="Personas">
          {/* Persona icons from Adobe Stock with Education License https://stock.adobe.com/images/ux-analysis-user-research-persona/321264246?prev_url=detail */}
          <Section
            title={"Personas"}
            explainer={
              "From observing and speaking to users, I developed the following two personas: Kate and Dylan."
            }
            content={
              <div className="empathyMapWrapper">
                <p className="personaQuote">&quot;Please work.&quot; </p>
                <p className="personaHeader">
                  <b>Kate</b> is a college junior that has soda a few times a week, with a
                  clear favorite but a backup in case it&apos;s out. (It&apos;s always
                  out.)
                </p>
                <img
                  className="personaEmpathyMap"
                  src="KatePersona.png"
                  alt="Empathy map for the Kate persona. In the Thinks category, Kate thinks: Hm, maybe I should get something different this time? Nah.; Why are they always out of Diet Coke?; Ugh, it's impossible to get the right amount of ice. In the Feels category, Kate feels: Frustrated she can't tell if the ice machine is broken, empty, or slow; annoyed at ice falling everywhere; elated when she gets her drink of choice. In the Does category, Kate: presses harder if the first press doesn't work; tries to get the right amount of ice with one press; has slipped on ice from the machine at least once; tried mixing soft drinks a couple times. In the Says category, Kate says: Why doesn't it just say that it's out of ice?; Please just work, damn it!; Hm, maybe it's just slow and not empty? Nope, it's empty."
                />
                <p className="personaCaption">
                  <ul>
                    <li>
                      Kate represents soda machine users that frequently use the machine
                      for its intended purpose: soda with ice. Like them, she&apos;s an
                      expert user that is familiar with the interface and its quirks, and
                      she gets annoyed at repeat frustrations, like not knowing if the ice
                      is broken, empty, or just slow to come out.
                    </li>
                    <li>
                      Her top interface problems are the lack of feedback during and lack
                      of control over ice dispensing.{" "}
                    </li>
                  </ul>
                </p>
                <div className="line">
                  <hr />
                </div>
                <p className="personaQuote">
                  &quot;I just want ice water in my water bottle — is that too much to ask
                  for?&quot;
                </p>
                <p className="personaHeader">
                  <b>Dylan</b> is a college sophomore that doesn&apos;t like soda, but
                  does like cold drinks and often fills his water bottle at the soda
                  machine.
                </p>
                <img
                  className="personaEmpathyMap"
                  src="DylanPersona.png"
                  alt="Empathy map for the Dylan persona. In the Thinks category, Dylan thinks: There's gotta be a better way; Why can't they just make the ice easier to control?; Better not slip on all the spilled ice. In the Feels category, Dylan feels: mildly annoyed he has to wait in the soda line despite not liking soda; pressured by people waiting in line behind him while he's filling his water bottle; disappointed at ice falling everywhere. In the Does category, Dylan: switches fingers if the first press doesn't work; smiles awkwardly at the person in line behind him while waiting for water bottle to fill; carefully presses ice lever multiple times to get the right amount. In the Says category, Dylan says: there should be a separate ice machine; we need better water bottle fill station on campus; one day, someone's gonna slip on the ice and sue."
                />
                <p className="personaCaption">
                  <ul>
                    <li>
                      Dylan represents soda machine users that use the machine for its
                      other purpose: ice water and water bottle filling. Like them,
                      he&apos;s frustrated at the lack of compatibility between the
                      machine and his water bottle, but it&apos;s his only option if he
                      wants ice.{" "}
                    </li>
                    <li>
                      His top interface problems are lack of control over ice dispensing
                      and poor water bottle fit.
                    </li>
                  </ul>
                </p>
              </div>
            }
          />
        </div>
        <hr className="lineBreakBetweenSections" />
        <div id="Storyboard">
          {/* Storyboard includes images from Adobe Stock with Education License https://stock.adobe.com/images/ux-analysis-user-research-persona/321264246?prev_url=detail and https://stock.adobe.com/images/vector-illustration-of-woman-face-parts-character-head-eyes-mouth-lips-hair-and-eyebrow-icon-set/191336611?prev_url=detail*/}
          <Section
            title={"Storyboard"}
            explainer={
              "Based on the Kate persona, I developed the following storyboard of her interaction with the drink dispenser."
            }
            content={
              <div>
                <div className="twoPanels">
                  <div className="onePanel">
                    <div>
                      <img className="storyboardPanel" src="Storyboard-1.png"></img>
                    </div>
                    <div className="storyboardCaption">
                      <p>
                        After picking up her food for dinner, Kate approaches the soda
                        machine to get soda. She&apos;s careful to avoid slipping on any
                        ice in the area.
                      </p>
                    </div>
                  </div>
                  <div className="onePanel">
                    <div>
                      <img className="storyboardPanel" src="Storyboard-2.png"></img>
                    </div>
                    <div className="storyboardCaption">
                      <p>
                        Kate sets down her food next to the machine and grabs a reusable
                        cup.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="twoPanels">
                  <div className="onePanel">
                    <div>
                      <img className="storyboardPanel" src="Storyboard-3.png"></img>
                    </div>
                    <div className="storyboardCaption">
                      <p>
                        Kate presses the ice lever with her cup. The machine makes a loud
                        noise, but nothing else happens.
                      </p>
                    </div>
                  </div>
                  <div className="onePanel">
                    <div>
                      <img className="storyboardPanel" src="Storyboard-4.png"></img>
                    </div>
                    <div className="storyboardCaption">
                      <p>
                        Kate is frustrated. She can&apos;t tell if the ice machine is
                        empty, broken, or just slow to come out. She decides to try again,
                        hoping that this time it will work.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="twoPanels">
                  <div className="onePanel">
                    <div>
                      <img className="storyboardPanel" src="Storyboard-5.png"></img>
                    </div>
                    <div className="storyboardCaption">
                      <p>
                        Kate presses her cup against the ice lever again, harder and for a
                        longer time.
                      </p>
                    </div>
                  </div>
                  <div className="onePanel">
                    <div>
                      <img className="storyboardPanel" src="Storyboard-6.png"></img>
                    </div>
                    <div className="storyboardCaption">
                      <p>
                        This time, ice starts to come out. Some of it misses the cup, but
                        most goes in. Kate stops pressing the lever before the cup can
                        overflow, but barely. It&apos;s too much ice, but that&apos;s
                        better than no ice.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="twoPanels">
                  <div className="onePanel">
                    <div>
                      <img className="storyboardPanel" src="Storyboard-7.png"></img>
                    </div>
                    <div className="storyboardCaption">
                      <p>
                        Kate moves her cup to the right and selects the Coca Cola option
                        on the touchscreen.
                      </p>
                    </div>
                  </div>
                  <div className="onePanel">
                    <div>
                      <img className="storyboardPanel" src="Storyboard-8.png"></img>
                    </div>
                    <div className="storyboardCaption">
                      <p>
                        Nothing happens the first time, so she presses the button harder.
                        This time, the press registers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="twoPanels">
                  <div className="onePanel">
                    <div>
                      <img className="storyboardPanel" src="Storyboard-9.png"></img>
                    </div>
                    <div className="storyboardCaption">
                      <p>
                        Kate would like to get Orange Coke, but it&apos;s out. Instead,
                        Kate selects the button for Cherry Coke.
                      </p>
                    </div>
                  </div>
                  <div className="onePanel">
                    <div>
                      <img className="storyboardPanel" src="Storyboard-10.png"></img>
                    </div>
                    <div className="storyboardCaption">
                      <p>
                        Kate presses her cup against the drink lever until her cup is
                        almost full, then stops pressing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="twoPanels">
                  <div className="onePanel">
                    <div>
                      <img className="storyboardPanel" src="Storyboard-11.png"></img>
                    </div>
                    <div className="storyboardCaption">
                      <p>Kate is happy with her drink and leaves.</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        {fullScreenImageShowing && (
          <div id="fullScreenImageContainer">
            <FullScreenImage
              image={fullScreenImage}
              caption={fullScreenCaption}
              setFullScreenImageShowing={setFullScreenImageShowing}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
