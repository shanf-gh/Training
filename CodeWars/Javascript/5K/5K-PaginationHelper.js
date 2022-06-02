/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/515bb423de843ea99400000a
*/

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection,
    this.itemsPerPage = itemsPerPage
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
  //   console.log(this.collection);
    return this.collection.length;
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if(pageIndex >= 0 && pageIndex < this.pageCount()) {
      if(pageIndex === this.pageCount() - 1) {
        return this.collection.length % this.itemsPerPage;
      } else {
        return this.itemsPerPage;
      }
    } else {
      return -1;
    }
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    console.log(itemIndex, this.itemCount());
    if(itemIndex >= 0 && itemIndex < this.itemCount()) {
      return Math.floor(itemIndex / this.itemsPerPage);
    } else {
      return -1;
    }
  }

/* Top solutions analysis */
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection, this.itemsPerPage = itemsPerPage;
  }
  
  PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
  }
  
  PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    return pageIndex < this.pageCount() 
      ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
      : -1;
  }
  
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    return itemIndex < this.collection.length && itemIndex >= 0
      ? Math.floor(itemIndex / this.itemsPerPage)
      : -1;
  }