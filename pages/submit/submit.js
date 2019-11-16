let app = getApp()

// pages/submit/submit.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  goToStories: function (event) {
    let story = event.detail.value
    if (story.author !== "" && story.content !== "") {
      wx.navigateTo({
        url: '/pages/stories/stories'
      })
      app.globalData.userStories.push(event.detail.value)
    }
  }, 

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})