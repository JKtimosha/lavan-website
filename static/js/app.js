document.addEventListener('mousemove',e=>parallax(e));const parallax=(e)=>{document.querySelectorAll('.layer').forEach(layer=>{const speed=layer.getAttribute('data-speed');const x=(window.innerWidth-e.pageX*speed)/100;const y=(window.innerHeight-e.pageY*speed)/100;layer.style.transform=`translate(${x}px, ${y}px)`;});}
document.addEventListener("DOMContentLoaded",function(){var lazyImages=[].slice.call(document.querySelectorAll("img.lazy"));if("IntersectionObserver"in window){let lazyImageObserver=new IntersectionObserver(function(entries,observer){entries.forEach(function(entry){if(entry.isIntersecting){let lazyImage=entry.target;lazyImage.src=lazyImage.dataset.src;lazyImage.srcset=lazyImage.dataset.srcset;lazyImage.classList.remove("lazy");lazyImageObserver.unobserve(lazyImage);}});});lazyImages.forEach(function(lazyImage){lazyImageObserver.observe(lazyImage);});}else{}});$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('#scroll').fadeIn();}else{$('#scroll').fadeOut();}});$('#scroll').click(function(){$("html, body").animate({scrollTop:0},600);return false;});});function popup(win){var win_timer=setInterval(function(){if(win.closed){window.location.reload();clearInterval(win_timer);}},100);}
$('.count').each(function(){$(this).prop('Counter',0).animate({Counter:$(this).text()},{duration:3000,easing:'swing',step:function(now){$(this).text(Math.ceil(now));}});});function NavBar(){var x=document.getElementById("respNav");if(x.className==="navbar"){x.className+=" responsive";}else{x.className="navbar";}}
function scrollNav(){$('.docs_list, .docs_list_to').click(function(){$(".docs_active").removeClass("docs_active");$(this).addClass("docs_active");$('html, body').stop().animate({scrollTop:$($(this).attr('href')).offset().top-1},300);return true;});}
scrollNav();function checkMeNSFW(selected){if(selected)document.getElementById("violations_content").style.display="none";else document.getElementById("violations_content").style.display="flex";}