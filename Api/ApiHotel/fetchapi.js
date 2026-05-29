import {fetchapi} from "../setapi.js";
import {API} from "../contain.js";
const boxhotel = document.querySelector('.section-3 .swiper-wrapper');
const api = `${API.apihotel}`;
fetchapi(api).then((data)=>{
    let HTML = "";
    data.forEach((item)=>{
        HTML += `
    <div class="swiper-slide"> 
        <div class="box-hotel">
          <div class="image">
            <img src=${item.image}>
            <div class="location">
              ${item.location}
              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/27/1603791006056-0fc93a0066574a5de96895781f042eb5.png?tr=q-75,w-16,h-16">
            </div>
            <span class="title-sale">
              Giảm giá ${item.sale}%
            </span>
          </div>
          <div class="infomation">
            <div class="title-hotel">
              <h3>${item.name}</h3>
            </div>
            <div class="review">
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="score">
                ${item.score}/10
              </div>
            </div>
            <div class="money">
              <del class="saleprice">${item.saleprice} VND</del>
              <span class="price">${item.price} VND</span>
            </div>
          </div>
        </div>
        </div>
        `;
    })
    boxhotel.innerHTML = HTML;
})