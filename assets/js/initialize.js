function initializeScripts(){
  $('.materialboxed').materialbox();
  $(".button-collapse").sideNav({
    menuWidth: 200,
    edge: 'left',
    closeOnClick: true,
    draggable: true
  });

  $('.my-borders').css({
    height: '0px',
    width: '0px'
  })
  // $('.carousel.carousel-slider').carousel({fullWidth: true});
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered

  $('#textarea1').trigger('autoresize');

  var urlString = window.location.href;
  
  $(document).scrollTop();

  var pagename = window.location.pathname.replace('/', '')
  
  if(window.ga) {
    window.ga('set', 'page', window.location.pathname);
    window.ga('send', 'pageview');
  }
  
  if(pagename === ''){
    Barba.Pjax.getTransition = () => HideShowTransition;
  } else {
    Barba.Pjax.getTransition = () => FadeTransition;
  }

  if(pagename){
    $('nav a[href="/' + pagename + '"]').parent().find('div').addClass('nav-underlined');
  }

  $('.tag').click(function(event){
    event.preventDefault();

    hideCloseIcons($(this));

    var button = $(this),
        tag = $(this).attr('val'),
        projects = $('.card'),
        buttons = $('.btn'),
        active_tags = [],
        needToClearFilters = tag === "clear-filters";

    if(needToClearFilters){
      clearFilters();
    } else{
      toggleTags(button, tag);
      active_tags = addActiveTags(buttons);
      showProjects(projects, active_tags);
    }
  })

  $("nav ul li a").hover(function(e){
    $(e.target).parent().find('div').addClass('nav-hover-underlined');
  }, function(e){
    $(e.target).parent().find('div').removeClass('nav-hover-underlined');
  });

  $("#filter").click(function(event){
    event.preventDefault();
    var text = $('#filter').text(),
        options = {
          "filter": "hide filters",
          "hide filters": "filter"
        };

    $("#filter").text(options[text]);
    $("#tags").toggle(400);
  })
  // debugger
  $(window).scroll(() => {
    var scrollPos = $(document).scrollTop();
        documentHeight = $(document).height();
    if(scrollPos/documentHeight > 0.1){
      $('#scroll-top').css('display', 'block');
    }else {
      $('#scroll-top').css('display', 'none');
    }
  })

  $('#scroll-top').click((e)=>{
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 250);
    return false;
  })
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(elems, options);
});