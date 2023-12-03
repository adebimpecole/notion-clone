import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import home from "./assets/home1.webp";

import "./Styles/LandingPage.sass";
import Tab from "./MinorComponents/Tab";

import sprinkle from "./assets/sprinkle.svg";
import books from "./assets/books.svg";
import target from "./assets/target.svg";
import doc from "./assets/doc.svg";
import Slide from "./MinorComponents/Slider";
import BlockQuote from "./MinorComponents/BlockQuote";
import IconTab from "./MinorComponents/IconTab";
import LearnMore from "./MinorComponents/LearnMore";
import NumberTab from "./MinorComponents/NumberTab";
import Tweet from "./MinorComponents/Tweet";
import PlainTab from "./MinorComponents/PlainTab";
import Footer from "./Footer";
import SlideButton from "./MinorComponents/SlideButton";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const [show, setShow] = useState(0);

  const images = [
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/kanban.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/table.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/list.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/calendar.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/gallery.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/timeline.png",
  ];

  const images2 = [
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/engineering.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/design.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/product.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/marketing.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/operations.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/hr.png",
  ];

  const slide_dataset = [
    {
      the_src: "https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-01.png",
      the_note: "Community meet-up in Tokyo",
    },
    {
      the_src: "https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-02.png",
      the_note: "Notion ambassador event in New York",
    },
    {
      the_src: "https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-03.png",
      the_note: "Sharing Notion setups in San Francisco",
    },
    {
      the_src: "https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-04.png",
      the_note: "Coffee pop-up in London",
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const Increament = () => {
    if(show == 3){
      setShow(0)
    }
    else{
      setShow(show + 1)
    }
  }

  const Decreament = () => {
    if(show == 0){
      setShow(3)
    }
    else{
      setShow(show - 1)
    }
  }

  return (
    <div className="landing_page">
      <Navbar />
      <div className="real_sections">
        <div className="section_one">
          <div className="section1_text">
            <div className="section1_head">
              Write, plan, share. <br /> With AI at your side.
            </div>
            <div className="section1_text">
              Notion is the connected workspace where better, faster work
              happens.
            </div>
            <div className="section1_button">Get Notion free &#8594;</div>
          </div>
          <div className="section1_image">
            <img src={home} className="the_image" alt="section one image" />
          </div>
        </div>
        <div className="section_tabs">
          <Tab
            the_title="AI"
            the_body="Ask literally anything. Notion will answer."
            lil_text="Now with Q&A"
            the_icon={sprinkle}
            the_color="#9E46DA"
            the_background="#F0E1F9"
          />
          <Tab
            the_title="Wikis"
            the_body="Centralize your knowledge. No more hunting for answers."
            lil_text=""
            the_icon={books}
            the_color="#EA4E43"
            the_background="#FBE9E8"
          />
          <Tab
            the_title="Projects"
            the_body="Manage complex projects without the chaos"
            lil_text=""
            the_icon={target}
            the_color="#2B85D1"
            the_background="#E2ECF3"
          />
          <Tab
            the_title="Docs"
            the_body="Simple, powerful, beautiful. Next-gen notes and docs "
            lil_text=""
            the_icon={doc}
            the_color="#F7B74F"
            the_background="#FEF6D6"
          />
        </div>
        <div className="slider_section">{/* <Slide/> */}</div>
        <div className="section_two">
          <LearnMore
            the_head="Millions run on notion everyday"
            the_body="Powering the world’s best teams, from next-generation startups to
        established enterprises."
            the_link="Read customer stories"
          />
          <div className="bottom_section">
            <img
              src="/src/assets/figma-logo.png"
              alt="company logo"
              style={{ height: "1.8rem" }}
            />
            <img src="/src/assets/pixar.png" alt="company logo" />
            <img
              src="/src/assets/doordash.png"
              alt="company logo"
              style={{ height: "1.2rem" }}
            />
            <img src="/src/assets/nike.png" alt="company logo" />
            <img src="/src/assets/amazon.png" alt="company logo" />
            <img src="/src/assets/pinterest.png" alt="company logo" />
            <img
              src="/src/assets/h.png"
              alt="company logo"
              style={{ height: "3rem" }}
            />
            <img
              src="/src/assets/uber.png"
              alt="company logo"
              style={{ height: "2rem" }}
            />
            <img
              src="/src/assets/plaid.png"
              alt="company logo"
              style={{ height: "2rem" }}
            />
            <img src="/src/assets/toyota.png" alt="company logo" />
            <img src="/src/assets/snowflake.png" alt="company logo" />
            <img src="/src/assets/headspace__1_.png" alt="company logo" />
            <img src="/src/assets/angel-list.png" alt="company logo" />
            <img src="/src/assets/robinhood_logo.png" alt="company logo" />
          </div>
        </div>
        <div className="section_three">
          <div className="section3_back">
            Consolidation tools <br /> Cuts cost.
          </div>
          <BlockQuote
            the_quote="We got rid of nearly a dozen different tools because of what
          Notion does for us."
            the_img="https://www.notion.so/cdn-cgi/image/format=webp,width=128/front-static/shared/logos/color/metalab.png"
            the_name="Justin Watt"
            the_role="Director of Ops & Marketing, MetaLab"
          />
        </div>
        <div className="section_four">
          <img
            src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekI.png"
            alt="side_picture"
          />
          <div className="section4_head">Powerful building blocks</div>
          <div className="section4_container1">
            <img src="/src/assets/shuffle.svg" alt="container icon" />
            <div className="container_text">
              <div className="container_heading">
                Visualize, filter & sort any way you want
              </div>
              <div className="container_body">
                Show only tasks assigned to you, or items marked as urgent.
                Break down any project in the way that’s most helpful to you.
              </div>
            </div>
            <img
              className="big_image"
              src={images[count]}
              alt="container image"
            />
            <div className="conatiner_button">
              <span
                className={`each_button ${count == 0 ? `show` : ""}`}
                onClick={() => setCount(0)}
              >
                Board
              </span>
              <span
                className={`each_button ${count == 1 ? `show` : ""}`}
                onClick={() => setCount(1)}
              >
                Table
              </span>
              <span
                className={`each_button ${count == 2 ? `show` : ""}`}
                onClick={() => setCount(2)}
              >
                Timeline
              </span>
              <span
                className={`each_button ${count == 3 ? `show` : ""}`}
                onClick={() => setCount(3)}
              >
                Calendar
              </span>
              <span
                className={`each_button ${count == 4 ? `show` : ""}`}
                onClick={() => setCount(4)}
              >
                Gallery
              </span>
              <span
                className={`each_button ${count == 5 ? `show` : ""}`}
                onClick={() => setCount(5)}
              >
                List
              </span>
            </div>
          </div>
          <div className="section4_container2">
            <img
              className="small_icon"
              src="/src/assets/eye.svg"
              alt="container icon"
            />
            <div className="container_text">
              <div className="container_heading">
                Customize the info you track
              </div>
              <div className="container_body">
                Create your own labels, tags, owners, and more, so everyone has
                context and everything stays organized.
              </div>
            </div>
            <img
              className="small_img"
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/customize-info.png"
              alt="container image"
            />
          </div>
          <div className="section4_container3">
            <img
              src="/src/assets/paint.svg"
              alt="container icon"
              className="small_icon"
            />
            <div className="container_text">
              <div className="container_heading">
                Build any page, communicate any idea
              </div>
              <div className="container_body">
                Everything is drag and drop in Notion — images, toggles,
                to-do’s, even embedded databases.
              </div>
            </div>
            <img
              className="small_img"
              alt="container image"
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png"
            />
          </div>
        </div>
        <BlockQuote
          the_quote="Notion adapts to your needs. It’s as minimal or as powerful as you
          need it to be."
          the_img="https://www.notion.so/cdn-cgi/image/format=webp,width=48/front-static/shared/logos/color/match-group.png"
          the_name="Rahim Makani"
          the_role="Director of Product, Matchgroup"
        />
        <div className="section_five">
          <div className="section5_heading">Every team, side-by-side</div>
          <div className="section5_tabs">
            <IconTab
              the_icon="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/engineering-v2.png"
              the_title="engineering"
              onClick={() => setCount2(0)}
            />
            <IconTab
              the_icon="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/design-v2.png"
              the_title="design"
              onClick={() => setCount2(1)}
            />
            <IconTab
              the_icon="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/product.png"
              the_title="product"
              onClick={() => setCount2(2)}
            />
            <IconTab
              the_icon="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/marketing.png"
              the_title="marketing"
              onClick={() => setCount2(3)}
            />
            <IconTab
              the_icon="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/operations.png"
              the_title="operations"
              onClick={() => setCount2(4)}
            />
            <IconTab
              the_icon="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/hr-v2.png"
              the_title="hr"
              onClick={() => setCount2(5)}
            />
          </div>
          <img className="section5_img" src={images2[count2]} alt="big image" />
        </div>
        <LearnMore
          the_head="Join a global movement."
          head2=" Unleash your creativity."
          the_body="Powering the world’s best teams, from next-generation startups to
        established enterprises."
          the_link="Learn more"
        />
        <div className="section_six">
          <img
            className="avatar"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/avatars.png"
            alt="avatar"
          />
          <NumberTab the_number="1m" the_unit="community members" the_key="1" />
          <NumberTab the_number="150" the_unit="community groups" the_key="2" />
          <NumberTab
            the_number="50"
            the_unit="countries represented"
            the_key="3"
          />
          <div className="bigger_container1">
            <div className="contianer_textarea">
              <div className="textarea_title">An always-on support network</div>
              <div className="textarea_body">
                Swap setups and share tips in over 149 online communities.
              </div>
            </div>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=384/front-static/pages/home/community-icons-V2.png"
              alt="flying icons"
            />
          </div>
          <div className="bigger_container2">
            <div className="contianer_textarea">
              <div className="textarea_title">Choose your language</div>
              <div className="textarea_body">
                Notion currently supports English, Korean, Japanese, French,
                German, Spanish, and Portuguese. With more to come!
              </div>
            </div>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/welcome-to-notion.png"
              alt="flying icons"
            />
          </div>
          <div className="slideshow_container">
            <div className="image_container">
              <img
                src={slide_dataset[show].the_src}
                alt="sideshow image"
              />
            </div>

            <div className="slideshow_details">
              <span>{slide_dataset[show].the_note}</span>
              <SlideButton the_count={show}/>
            </div>
          </div>
          <div className="slide_buttons">
            <div className="right_button" onClick={Decreament}>
                <img className="the_button" src="/src/assets/right_arrow.svg" alt="button"/>
            </div>
            <div className="left_button" onClick={ Increament}>
                <img className="the_button" src="/src/assets/left_arrow.svg" alt="button"/>
            </div>
          </div>
          <Tweet
            the_name="Deborah Mecca"
            the_handle="DebMecca"
            the_img="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-deborah.png"
            the_tweet1="I used to HATE documenting things. And then I started using "
            the_tweet2=" and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs."
            the_key="1"
          />
          <Tweet
            the_name="André Blackman"
            the_handle="mindofandre"
            the_img="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-andre.png"
            the_tweet1="One of the most incredible things about "
            the_tweet2=" is the dynamic community being built - creating and sharing at its best."
            the_key="2"
          />
          <Tweet
            the_name="Oliver Peyre"
            the_handle="opeyre"
            the_img="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-oliver.png"
            the_tweet2=" Truly impressed by the velocity and quality of your work. Making using Notion even more fun week after week!"
            the_key="3"
          />
        </div>
        <div className="section_seven">
          <LearnMore
            the_head="Endless ways to use it"
            the_link="Browse all templates"
            the_class="grid_head"
          />
          <img
            src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekJ.png"
            alt="overlay image"
            className="grid_overlay"
          />

          <PlainTab
            image="block"
            real_deal="Company wiki"
            image_src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/company-wiki-template.png"
            the_icon="/src/assets/home.svg"
            the_key="1"
          />
          <PlainTab
            image="none"
            real_deal="Product roadmap"
            the_icon="/src/assets/flag.svg"
            the_key="2"
          />
          <PlainTab
            image="none"
            real_deal="OKRs"
            the_icon="/src/assets/good.svg"
            the_key="3"
          />
          <PlainTab
            image="none"
            real_deal="Meeting notes"
            the_icon="/src/assets/note.svg"
            the_key="4"
          />
          <PlainTab
            image="none"
            real_deal="Vacation planner"
            the_icon="/src/assets/plane.svg"
            the_key="5"
          />
          <PlainTab
            image="none"
            real_deal="Editorial calendar"
            the_icon="/src/assets/cal.svg"
            the_key="6"
          />
          <PlainTab
            image="none"
            real_deal="Habit tracker"
            the_icon="/src/assets/draws.svg"
            the_key="7"
          />
        </div>
        <div className="section_one">
          <div className="section1_text">
            <div className="section1_head">Get started for free</div>
            <div className="section1_text">
              Play around with it first. Pay and add your team later.
            </div>
            <div className="button_link">
              <div className="section1_button">Try Notion free</div>
              <div className="section_link">Request a demo &#8594;</div>
            </div>
          </div>
          <div className="section1_image last_image">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png"
              className="the_image"
              alt="section one image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
