/*
    Assignment 05
*/

// ContentItem class definition
class ContentItem {
    constructor(id, name, description, category) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.category = category;
    }
  
    updateContentItem(id, name, description, category) {
      if (id === this.id) {
        if (name !== null) {
          this.name = name;
        }
        if (description !== null) {
          this.description = description;
        }
        if (category !== null) {
          this.category = category;
        }
      }
    }
  
    toString() {
      return `
        <div class="content-item-wrapper" id="contentitem-${this.id}">
          <h2>${this.name}</h2>
          <p>${this.description}</p>
          <div>${this.category}</div>
        </div>
      `;
    }
  }
  
  // Create an array of ContentItem instances
  const contentItems = [
    new ContentItem(0, "Red Rose Bouquet", "Roses with beautiful accents of Babies Breath and stunning lush greenery. This cut flower bouquet is ready to be placed in a vase and admired.", "Bouquet"),
    new ContentItem(1, "Rainbow Crown", "Check out our rainbow flower crown selection for the very best in unique or custom, handmade pieces from our wreaths & tiaras shops.", "Jewelry"),
    new ContentItem(2, "The Home Box", "Introducing The Home Box! Our newest Gift Box with all the Home goodies you'll need. Think of a new homeowner, daughter getting her own place or gift for a friend!", "Gift Box"),
    new ContentItem(3, "Aloe Vera", "The Aloe vera plant is an easy, attractive succulent that makes an excellent indoor companion.", "Plant"),
    new ContentItem(4, "DIY-Kit Silk Wreath", "Silk Wreath DIY kits are $5.35 and are delivered right to your doorstep so you don't miss out on any creative time!", "DIY-Kit")
  ];
  
  // Add content items to the web page
$(document).ready(function () {
    const $contentItemList = $("#content-item-list");
  
    contentItems.forEach((item) => {
      const $contentItem = $(item.toString());
  
      // Customize the CSS for each content item
      $contentItem.css({
        border: "1px solid #000",
        width: "300px",
        padding: "10px",
        margin: "10px auto",
      });
  
      $contentItemList.append($contentItem);
    });
  });
  