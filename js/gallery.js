// A $( document ).ready() block.
$(document).ready(function () {
  //console.log("ready!");

  $("#imed-gallery").nanogallery2({
    thumbnailWidth: "300",
    thumbnailHeight: "auto",
    thumbnailBoarderVertical: 0,
    thumbnailBoarderHorizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom",
      display: false
    },
    thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|labelAppear75",
    thumbnailGutterWidth: 20,
    thumbnailGutterHeight: 20,
    thumbnailAlignment: "center",
    thumbnailOpenImage: true
  });
});
