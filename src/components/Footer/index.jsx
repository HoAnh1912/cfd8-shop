import React from "react";
import ItemFooter from "./components/ItemFooter";
import "../Footer/footer.scss";
import TagFooter from "./components/TagFooter";

export function Footer() {
  var itemGetInTouch = [
    {
      id: 1,
      item: "About Us",
    },
    {
      id: 2,
      item: "Careers",
    },
    {
      id: 3,
      item: "Press Releases",
    },
    {
      id: 4,
      item: "Blog",
    },
  ];
  var itemConnections = [
    {
      id: 1,
      item: "Facebook",
    },
    {
      id: 2,
      item: "Twitter",
    },
    {
      id: 3,
      item: "Instagram",
    },
    {
      id: 4,
      item: "Instagram",
    },
    {
      id: 5,
      item: "Instagram",
    },
  ];
  var itemEarnings = [
    {
      id: 1,
      item: "Become an Affiliate",
    },
    {
      id: 2,
      item: "Twitter",
    },
    {
      id: 3,
      item: "Advertise your product",
    },
    {
      id: 4,
      item: "Sell on Market",
    },
  ];
  var itemAccount = [
    {
      id: 1,
      item: "Your account",
    },
    {
      id: 2,
      item: "Returns Centre",
    },
    {
      id: 3,
      item: "Chat with us",
    },
    {
      id: 4,
      item: "Help",
    },
  ];

  var itemtags = [
    {
      id: 1,
      nameTags: "Beans",
    },
    {
      id: 2,
      nameTags: "Carrots",
    },
    {
      id: 3,
      nameTags: "Apples",
    },
    {
      id: 4,
      nameTags: "Garlic",
    },
    {
      id: 5,
      nameTags: "Mushrooms",
    },
    {
      id: 6,
      nameTags: "Tomatoes",
    },
    {
      id: 7,
      nameTags: "Chilli peppers",
    },
    {
      id: 8,
      nameTags: "Broccoli",
    },
    {
      id: 9,
      nameTags: "Watermelons",
    },
    {
      id: 10,
      nameTags: "Oranges",
    },
    {
      id: 11,
      nameTags: "Bananas",
    },
    {
      id: 12,
      nameTags: "Grapes",
    },
    {
      id: 13,
      nameTags: "Cherrieses",
    },
  ];
  let elementsTag = itemtags.map((item, index) => {
    return <TagFooter key={item.id} nameTag={item.nameTags} />;
  });

  return (
    <footer>
      <div className="container">

        <div className="footerTop">
          <ItemFooter titleFooter="Get in touch" nameItem={itemGetInTouch} />
          <ItemFooter titleFooter="Connections" nameItem={itemConnections} />
          <ItemFooter titleFooter="Earnings" nameItem={itemEarnings} />
          <ItemFooter titleFooter="Account" nameItem={itemAccount} />
        </div>
        <div className="footerBottom">
          <div className="titleFooter">Product tags</div>
          <div className="tagTop">{elementsTag}</div>
        </div>
        <div className="coppy">?? 2021 Freshnesecom, Demo by CFD training</div>
      </div>
    </footer>
  );
}
