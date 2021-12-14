import React from "react";
import bsc from "../../assets/vector/bsc.svg";
import coinmarketcap from "../../assets/vector/coinmarketcap.svg";
import coingecko from "../../assets/vector/coingecko.svg";
import privacy from "../../assets/docs/privacy.pdf";
import terms from "../../assets/docs/terms.pdf";

const Footer = () => {
  return (
    <div className="table-row-group z-50">
      <div className="table-row bg-almostwhite bg-opacity-60 bgblur">
        <div className="py-4 px-8 flex flex-col">
          <div className="flex flex-row flex-wrap justify-center items-center content-center align-middle space-x-6 space-y-4 mb-8">
            {/* CloudFlare */}
            <a
              href="https://www.cloudflare.com/"
              target="_blank"
              rel="noreferrer"
              title="CloudFlare"
            >
              <svg viewBox="0 0 105 36" role="img" className="w-36 pt-4">
                <path
                  fill="#494b5a"
                  d="M11.679 26.754h2.353v6.423h4.111v2.06H11.68v-8.483zM20.58 31.02v-.024c0-2.436 1.965-4.412 4.584-4.412 2.62 0 4.56 1.951 4.56 4.387v.025c0 2.436-1.965 4.41-4.584 4.41-2.618 0-4.56-1.95-4.56-4.386zm6.743 0v-.024c0-1.223-.885-2.291-2.183-2.291-1.285 0-2.147 1.042-2.147 2.266v.025c0 1.222.886 2.29 2.171 2.29 1.298 0 2.159-1.042 2.159-2.266zM32.604 31.517v-4.763h2.389v4.714c0 1.223.618 1.806 1.564 1.806.946 0 1.564-.557 1.564-1.745v-4.775h2.39v4.7c0 2.74-1.564 3.939-3.978 3.939s-3.93-1.223-3.93-3.878M44.112 26.755h3.274c3.032 0 4.79 1.744 4.79 4.192v.025c0 2.447-1.782 4.265-4.838 4.265h-3.226v-8.483zm3.31 6.397c1.408 0 2.34-.775 2.34-2.146v-.024c0-1.357-.932-2.145-2.34-2.145h-.958v4.316l.959-.001zM55.596 26.754h6.791v2.06h-4.438v1.442h4.014v1.951h-4.014v3.03h-2.353v-8.483zM65.661 26.754h2.353v6.423h4.111v2.06h-6.464v-8.483zM78.273 26.693h2.268l3.614 8.544h-2.522l-.62-1.515H77.74l-.606 1.515h-2.474l3.614-8.544zm2.062 5.2l-.946-2.413-.959 2.412h1.905zM87.186 26.754H91.2c1.298 0 2.195.34 2.765.921.498.485.752 1.14.752 1.976v.024c0 1.296-.693 2.156-1.746 2.605l2.025 2.957H92.28l-1.71-2.57h-1.03v2.57h-2.353v-8.483zm3.905 4.072c.8 0 1.262-.388 1.262-1.006v-.024c0-.667-.486-1.006-1.275-1.006h-1.54v2.038l1.553-.002zM98.112 26.754h6.827v2h-4.498v1.284h4.075v1.854h-4.075v1.346H105v1.999h-6.888v-8.483zM6.528 32.014c-.33.744-1.023 1.272-1.944 1.272-1.286 0-2.171-1.067-2.171-2.29v-.025c0-1.223.86-2.266 2.146-2.266.97 0 1.708.595 2.02 1.406h2.48c-.398-2.02-2.173-3.526-4.475-3.526-2.62 0-4.584 1.977-4.584 4.41v.024c0 2.436 1.94 4.388 4.56 4.388 2.24 0 3.991-1.45 4.453-3.393H6.528z"
                ></path>
                <path
                  d="M89.012 22.355l.257-.887c.306-1.056.192-2.031-.321-2.748-.472-.66-1.259-1.049-2.214-1.094l-18.096-.229a.358.358 0 01-.285-.151.367.367 0 01-.04-.326.481.481 0 01.42-.321l18.263-.232c2.166-.099 4.512-1.856 5.333-3.998L93.37 9.65a.659.659 0 00.028-.36C92.216 3.975 87.468 0 81.792 0c-5.23 0-9.67 3.373-11.263 8.061a5.34 5.34 0 00-3.756-1.039 5.356 5.356 0 00-4.637 6.644c-4.099.12-7.386 3.475-7.386 7.6 0 .368.028.735.082 1.1a.354.354 0 00.348.305l33.408.004h.009a.44.44 0 00.415-.32z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M95.04 9.847c-.167 0-.334.004-.5.013a.28.28 0 00-.079.017.285.285 0 00-.182.192l-.712 2.456c-.305 1.055-.192 2.03.322 2.746.471.661 1.258 1.05 2.213 1.094l3.858.232a.351.351 0 01.275.149.365.365 0 01.041.328.484.484 0 01-.42.32l-4.008.232c-2.176.1-4.521 1.856-5.342 3.998l-.29.756a.212.212 0 00.095.262c.03.017.062.027.096.028h13.802a.366.366 0 00.356-.265 9.846 9.846 0 00.367-2.677c-.001-5.457-4.429-9.88-9.891-9.88z"
                  fill="#676A80"
                ></path>
              </svg>
            </a>
            {/* Binance Smart Chain */}
            <a
              href="https://www.binance.org/en/smartChain"
              target="_blank"
              rel="noreferrer"
              title="Binance Smart Chain"
            >
              <img
                alt="Binance Smart Chain"
                src={bsc}
                className="w-auto h-auto"
              />
            </a>
            {/* Coin Market Cap */}
            <a
              href="https://coinmarketcap.com"
              target="_blank"
              rel="noreferrer"
              title="Coin Market Cap"
            >
              <img
                alt="Coin Market Cap"
                src={coinmarketcap}
                className="w-auto h-auto"
              />
            </a>
            {/* Coin Gecko */}
            <a
              href="https://www.coingecko.com"
              target="_blank"
              rel="noreferrer"
              title="Coin Gecko"
            >
              <img alt="Coin Gecko" src={coingecko} className="w-auto h-auto" />
            </a>
            {/* PancakeSwap */}
            <a
              href="https://pancakeswap.finance"
              target="_blank"
              rel="noreferrer"
              title="PancakeSwap"
            >
              <svg
                viewBox="0 0 160 26"
                color="text"
                className="w-48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.8524 19.7569C30.4803 19.7569 30.2173 19.6799 30.0633 19.5259C29.9221 19.372 29.8516 19.1282 29.8516 18.7946V7.65066C29.8516 7.31705 29.9285 7.07326 30.0825 6.91928C30.2365 6.75248 30.4931 6.66907 30.8524 6.66907H35.5679C37.3642 6.66907 38.6858 7.04759 39.5327 7.80463C40.3796 8.56167 40.803 9.69082 40.803 11.1921C40.803 12.6805 40.3796 13.8032 39.5327 14.5603C38.6987 15.3045 37.3771 15.6766 35.5679 15.6766H33.7394V18.7946C33.7394 19.1282 33.6624 19.372 33.5085 19.5259C33.3545 19.6799 33.0914 19.7569 32.7193 19.7569H30.8524ZM35.2599 12.8858C35.786 12.8858 36.1902 12.7446 36.4725 12.4624C36.7676 12.1801 36.9151 11.7566 36.9151 11.1921C36.9151 10.6147 36.7676 10.1848 36.4725 9.90253C36.1902 9.62025 35.786 9.47911 35.2599 9.47911H33.7394V12.8858H35.2599Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M45.3484 20.0456C44.1423 20.0456 43.1735 19.6607 42.4421 18.8908C41.7236 18.1081 41.3643 17.011 41.3643 15.5996C41.3643 14.5218 41.6081 13.5787 42.0957 12.7703C42.5961 11.9619 43.2954 11.3396 44.1936 10.9034C45.1046 10.4543 46.1503 10.2297 47.3308 10.2297C48.306 10.2297 49.1657 10.3388 49.9099 10.5569C50.6669 10.7622 51.3598 11.0638 51.9885 11.4615V19.1602C51.9885 19.404 51.9436 19.5644 51.8538 19.6414C51.764 19.7184 51.5844 19.7569 51.3149 19.7569H49.3517C49.2106 19.7569 49.1015 19.7376 49.0245 19.6992C48.9475 19.6478 48.8834 19.5708 48.8321 19.4682L48.5819 18.8908C48.2097 19.2886 47.7607 19.5773 47.2346 19.7569C46.7213 19.9494 46.0926 20.0456 45.3484 20.0456ZM46.7919 17.428C47.2923 17.428 47.6837 17.3061 47.966 17.0623C48.2482 16.8186 48.3894 16.4721 48.3894 16.023V13.0205C48.1456 12.905 47.8376 12.8473 47.4655 12.8473C46.7855 12.8473 46.2402 13.0847 45.8296 13.5594C45.4318 14.0342 45.2329 14.7014 45.2329 15.5611C45.2329 16.8057 45.7526 17.428 46.7919 17.428Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M54.667 19.7569C54.2949 19.7569 54.0319 19.6799 53.8779 19.5259C53.7239 19.372 53.6469 19.1282 53.6469 18.7946V11.1151C53.6469 10.8841 53.6854 10.7301 53.7624 10.6532C53.8522 10.5633 54.0318 10.5184 54.3013 10.5184H56.2837C56.4377 10.5184 56.5532 10.5441 56.6302 10.5954C56.72 10.6339 56.7713 10.7109 56.7841 10.8264L56.8804 11.4038C57.2397 11.0445 57.708 10.7622 58.2854 10.5569C58.8756 10.3388 59.53 10.2297 60.2486 10.2297C61.2879 10.2297 62.1283 10.5248 62.7699 11.1151C63.4115 11.6925 63.7322 12.5522 63.7322 13.6942V18.7946C63.7322 19.1282 63.6552 19.372 63.5013 19.5259C63.3601 19.6799 63.1035 19.7569 62.7314 19.7569H60.8645C60.4924 19.7569 60.2229 19.6799 60.0561 19.5259C59.9021 19.372 59.8251 19.1282 59.8251 18.7946V13.9444C59.8251 13.5594 59.7417 13.2836 59.5749 13.1167C59.4081 12.9499 59.1451 12.8665 58.7858 12.8665C58.4009 12.8665 58.0929 12.9692 57.862 13.1745C57.6438 13.3798 57.5348 13.6621 57.5348 14.0213V18.7946C57.5348 19.1282 57.4578 19.372 57.3038 19.5259C57.1627 19.6799 56.906 19.7569 56.5339 19.7569H54.667Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M70.5354 20.0456C68.739 20.0456 67.3532 19.6286 66.3781 18.7946C65.4029 17.9605 64.9153 16.748 64.9153 15.1569C64.9153 14.1817 65.1399 13.322 65.5889 12.5778C66.038 11.8336 66.686 11.2562 67.5329 10.8456C68.3926 10.435 69.4062 10.2297 70.5739 10.2297C71.4592 10.2297 72.2034 10.3131 72.8065 10.4799C73.4224 10.6467 73.9677 10.9034 74.4425 11.2498C74.5836 11.3396 74.6542 11.4551 74.6542 11.5963C74.6542 11.6989 74.6029 11.8336 74.5002 12.0004L73.7111 13.367C73.6213 13.5466 73.5122 13.6364 73.3839 13.6364C73.3069 13.6364 73.185 13.5851 73.0182 13.4824C72.6718 13.2643 72.3446 13.1039 72.0366 13.0013C71.7415 12.8986 71.3694 12.8473 70.9203 12.8473C70.2787 12.8473 69.7591 13.0526 69.3613 13.4632C68.9764 13.8738 68.7839 14.4384 68.7839 15.1569C68.7839 15.8883 68.9828 16.4529 69.3806 16.8506C69.7783 17.2356 70.3237 17.428 71.0165 17.428C71.4271 17.428 71.7992 17.3703 72.1329 17.2548C72.4665 17.1393 72.8065 16.9789 73.1529 16.7736C73.3326 16.671 73.4609 16.6197 73.5379 16.6197C73.6534 16.6197 73.756 16.7095 73.8458 16.8891L74.7119 18.3711C74.7761 18.4994 74.8082 18.6021 74.8082 18.6791C74.8082 18.7946 74.7312 18.9036 74.5772 19.0063C74.0383 19.3527 73.4481 19.6093 72.8065 19.7761C72.1778 19.9558 71.4207 20.0456 70.5354 20.0456Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M79.6881 20.0456C78.482 20.0456 77.5132 19.6607 76.7819 18.8908C76.0633 18.1081 75.704 17.011 75.704 15.5996C75.704 14.5218 75.9478 13.5787 76.4354 12.7703C76.9358 11.9619 77.6351 11.3396 78.5333 10.9034C79.4443 10.4543 80.4901 10.2297 81.6705 10.2297C82.6457 10.2297 83.5054 10.3388 84.2496 10.5569C85.0067 10.7622 85.6995 11.0638 86.3283 11.4615V19.1602C86.3283 19.404 86.2834 19.5644 86.1935 19.6414C86.1037 19.7184 85.9241 19.7569 85.6546 19.7569H83.6915C83.5503 19.7569 83.4412 19.7376 83.3643 19.6992C83.2873 19.6478 83.2231 19.5708 83.1718 19.4682L82.9216 18.8908C82.5495 19.2886 82.1004 19.5773 81.5743 19.7569C81.0611 19.9494 80.4323 20.0456 79.6881 20.0456ZM81.1316 17.428C81.632 17.428 82.0234 17.3061 82.3057 17.0623C82.588 16.8186 82.7291 16.4721 82.7291 16.023V13.0205C82.4853 12.905 82.1774 12.8473 81.8053 12.8473C81.1252 12.8473 80.5799 13.0847 80.1693 13.5594C79.7715 14.0342 79.5726 14.7014 79.5726 15.5611C79.5726 16.8057 80.0923 17.428 81.1316 17.428Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M98.4184 19.0255C98.5082 19.1282 98.5531 19.2436 98.5531 19.372C98.5531 19.4874 98.5146 19.5837 98.4377 19.6607C98.3607 19.7248 98.258 19.7569 98.1297 19.7569H95.1465C94.9668 19.7569 94.8321 19.7441 94.7423 19.7184C94.6653 19.6799 94.5819 19.6093 94.4921 19.5067L91.8745 15.946V18.7946C91.8745 19.1282 91.7975 19.372 91.6435 19.5259C91.4896 19.6799 91.2265 19.7569 90.8544 19.7569H88.9875C88.6154 19.7569 88.3523 19.6799 88.1984 19.5259C88.0572 19.372 87.9866 19.1282 87.9866 18.7946V7.65066C87.9866 7.31705 88.0636 7.07326 88.2176 6.91928C88.3716 6.75248 88.6282 6.66907 88.9875 6.66907H90.8544C91.2265 6.66907 91.4896 6.75248 91.6435 6.91928C91.7975 7.07326 91.8745 7.31705 91.8745 7.65066V14.0983L94.4151 10.7879C94.4921 10.6852 94.5755 10.6147 94.6653 10.5762C94.7551 10.5377 94.8898 10.5184 95.0695 10.5184H98.0527C98.181 10.5184 98.2773 10.5569 98.3414 10.6339C98.4184 10.6981 98.4569 10.7879 98.4569 10.9034C98.4569 11.0317 98.412 11.1472 98.3222 11.2498L95.031 15.0222L98.4184 19.0255Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M104.668 20.0456C103.59 20.0456 102.628 19.866 101.781 19.5067C100.947 19.1474 100.286 18.6085 99.7985 17.89C99.3109 17.1714 99.0671 16.2925 99.0671 15.2531C99.0671 13.6236 99.529 12.379 100.453 11.5193C101.377 10.6596 102.705 10.2297 104.437 10.2297C106.131 10.2297 107.414 10.6532 108.286 11.5C109.172 12.334 109.614 13.4953 109.614 14.9837C109.614 15.6252 109.332 15.946 108.767 15.946H102.724C102.724 16.4978 102.929 16.9212 103.34 17.2163C103.763 17.5114 104.398 17.659 105.245 17.659C105.771 17.659 106.208 17.6141 106.554 17.5243C106.913 17.4216 107.273 17.2741 107.632 17.0816C107.786 17.0174 107.889 16.9854 107.94 16.9854C108.055 16.9854 108.152 17.0623 108.229 17.2163L108.883 18.4481C108.947 18.5764 108.979 18.6727 108.979 18.7368C108.979 18.8523 108.902 18.9614 108.748 19.064C108.222 19.4105 107.626 19.6607 106.958 19.8146C106.291 19.9686 105.528 20.0456 104.668 20.0456ZM106.15 14.0406C106.15 13.553 106.009 13.1745 105.726 12.905C105.444 12.6356 105.021 12.5009 104.456 12.5009C103.892 12.5009 103.462 12.642 103.167 12.9243C102.872 13.1937 102.724 13.5658 102.724 14.0406H106.15Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M116.211 20.0456C115.133 20.0456 114.113 19.9365 113.151 19.7184C112.189 19.4874 111.412 19.1667 110.822 18.7561C110.604 18.6149 110.495 18.4674 110.495 18.3134C110.495 18.2107 110.533 18.1017 110.61 17.9862L111.553 16.4849C111.656 16.331 111.759 16.254 111.861 16.254C111.926 16.254 112.035 16.2989 112.189 16.3887C112.663 16.6582 113.202 16.8763 113.805 17.0431C114.408 17.2099 115.005 17.2933 115.595 17.2933C116.198 17.2933 116.641 17.2035 116.923 17.0238C117.218 16.8442 117.366 16.5555 117.366 16.1577C117.366 15.7728 117.206 15.4713 116.885 15.2531C116.577 15.035 115.993 14.7591 115.133 14.4255C113.837 13.9379 112.824 13.3926 112.092 12.7896C111.374 12.1737 111.015 11.3396 111.015 10.2875C111.015 9.01718 111.47 8.04843 112.381 7.38121C113.292 6.71398 114.505 6.38037 116.019 6.38037C117.071 6.38037 117.969 6.47661 118.713 6.66907C119.47 6.84871 120.112 7.131 120.638 7.51593C120.856 7.68274 120.965 7.83671 120.965 7.97786C120.965 8.06767 120.927 8.17032 120.85 8.2858L119.907 9.78705C119.791 9.94103 119.688 10.018 119.599 10.018C119.534 10.018 119.425 9.97311 119.271 9.88329C118.527 9.3957 117.642 9.15191 116.615 9.15191C116.064 9.15191 115.64 9.24173 115.345 9.42137C115.05 9.601 114.902 9.89612 114.902 10.3067C114.902 10.589 114.979 10.82 115.133 10.9996C115.287 11.1792 115.493 11.3396 115.749 11.4808C116.019 11.6091 116.429 11.7759 116.981 11.9812L117.347 12.1159C118.296 12.488 119.04 12.8473 119.579 13.1937C120.131 13.5273 120.548 13.9444 120.83 14.4448C121.113 14.9324 121.254 15.5483 121.254 16.2925C121.254 17.4344 120.824 18.3455 119.964 19.0255C119.117 19.7056 117.866 20.0456 116.211 20.0456Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M125.343 19.7569C125.151 19.7569 125.003 19.7248 124.9 19.6607C124.798 19.5965 124.721 19.4682 124.67 19.2757L122.187 10.9611C122.161 10.8841 122.148 10.8264 122.148 10.7879C122.148 10.6083 122.277 10.5184 122.533 10.5184H125.074C125.241 10.5184 125.362 10.5505 125.439 10.6147C125.516 10.666 125.568 10.7558 125.593 10.8841L126.633 15.2531L127.941 11.731C128.006 11.577 128.07 11.4744 128.134 11.423C128.211 11.3589 128.339 11.3268 128.519 11.3268H129.731C129.911 11.3268 130.033 11.3589 130.097 11.423C130.174 11.4744 130.245 11.577 130.309 11.731L131.598 15.2531L132.657 10.8841C132.695 10.7558 132.747 10.666 132.811 10.6147C132.875 10.5505 132.991 10.5184 133.157 10.5184H135.717C135.974 10.5184 136.102 10.6083 136.102 10.7879C136.102 10.8264 136.089 10.8841 136.064 10.9611L133.562 19.2757C133.51 19.4682 133.433 19.5965 133.331 19.6607C133.241 19.7248 133.1 19.7569 132.907 19.7569H131.021C130.841 19.7569 130.707 19.7248 130.617 19.6607C130.527 19.5837 130.45 19.4554 130.386 19.2757L129.116 15.7921L127.845 19.2757C127.794 19.4554 127.717 19.5837 127.614 19.6607C127.524 19.7248 127.39 19.7569 127.21 19.7569H125.343Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M140.981 20.0456C139.775 20.0456 138.806 19.6607 138.075 18.8908C137.356 18.1081 136.997 17.011 136.997 15.5996C136.997 14.5218 137.241 13.5787 137.728 12.7703C138.229 11.9619 138.928 11.3396 139.826 10.9034C140.737 10.4543 141.783 10.2297 142.963 10.2297C143.938 10.2297 144.798 10.3388 145.542 10.5569C146.299 10.7622 146.992 11.0638 147.621 11.4615V19.1602C147.621 19.404 147.576 19.5644 147.486 19.6414C147.396 19.7184 147.217 19.7569 146.947 19.7569H144.984C144.843 19.7569 144.734 19.7376 144.657 19.6992C144.58 19.6478 144.516 19.5708 144.465 19.4682L144.214 18.8908C143.842 19.2886 143.393 19.5773 142.867 19.7569C142.354 19.9494 141.725 20.0456 140.981 20.0456ZM142.424 17.428C142.925 17.428 143.316 17.3061 143.598 17.0623C143.881 16.8186 144.022 16.4721 144.022 16.023V13.0205C143.778 12.905 143.47 12.8473 143.098 12.8473C142.418 12.8473 141.873 13.0847 141.462 13.5594C141.064 14.0342 140.865 14.7014 140.865 15.5611C140.865 16.8057 141.385 17.428 142.424 17.428Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M150.28 23.6447C149.908 23.6447 149.645 23.5678 149.491 23.4138C149.35 23.2598 149.279 23.016 149.279 22.6824V11.654C149.857 11.2434 150.582 10.9034 151.454 10.6339C152.327 10.3645 153.238 10.2297 154.187 10.2297C158.062 10.2297 160 11.8721 160 15.1569C160 16.6453 159.589 17.8322 158.768 18.7176C157.947 19.6029 156.786 20.0456 155.284 20.0456C154.861 20.0456 154.45 19.9943 154.053 19.8916C153.668 19.789 153.347 19.6478 153.09 19.4682V22.6824C153.09 23.016 153.013 23.2598 152.859 23.4138C152.705 23.5678 152.442 23.6447 152.07 23.6447H150.28ZM154.457 17.4473C155.009 17.4473 155.419 17.242 155.689 16.8314C155.971 16.408 156.112 15.8434 156.112 15.1377C156.112 14.3036 155.945 13.7198 155.612 13.3862C155.291 13.0398 154.79 12.8665 154.11 12.8665C153.674 12.8665 153.328 12.9243 153.071 13.0398V16.1C153.071 16.5363 153.193 16.8699 153.437 17.1008C153.681 17.3318 154.021 17.4473 154.457 17.4473Z"
                  fill="#494b5a"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.38998 4.50033C4.01476 2.49106 5.55649 0.634766 7.60049 0.634766C9.40427 0.634766 10.8665 2.09701 10.8665 3.90078V7.92728C11.3177 7.89544 11.7761 7.87911 12.2404 7.87911C12.6865 7.87911 13.1272 7.89418 13.5612 7.9236V3.90078C13.5612 2.09701 15.0234 0.634766 16.8272 0.634766C18.8712 0.634766 20.4129 2.49106 20.0377 4.50033L19.1539 9.23326C22.1872 10.5576 24.4809 12.8577 24.4809 15.748V17.4966C24.4809 19.8734 22.9085 21.8634 20.7102 23.2068C18.4948 24.5606 15.4978 25.3654 12.2404 25.3654C8.98304 25.3654 5.98604 24.5606 3.77065 23.2068C1.57242 21.8634 0 19.8734 0 17.4966V15.748C0 12.873 2.2701 10.5817 5.27785 9.25477L4.38998 4.50033ZM18.0212 9.85508L19.0555 4.3169C19.3159 2.92236 18.2459 1.63399 16.8272 1.63399C15.5753 1.63399 14.5604 2.64886 14.5604 3.90078V9.02479C14.2324 8.98273 13.8991 8.9494 13.5612 8.92524C13.128 8.89426 12.6873 8.87833 12.2404 8.87833C11.7753 8.87833 11.3168 8.89559 10.8665 8.92912C10.5286 8.95429 10.1953 8.98862 9.86729 9.03169V3.90078C9.86729 2.64886 8.85241 1.63399 7.60049 1.63399C6.18184 1.63399 5.11179 2.92235 5.37222 4.3169L6.40988 9.87345C3.16599 11.0784 0.999219 13.2586 0.999219 15.748V17.4966C0.999219 21.2906 6.03208 24.3662 12.2404 24.3662C18.4488 24.3662 23.4817 21.2906 23.4817 17.4966V15.748C23.4817 13.2458 21.2927 11.0562 18.0212 9.85508Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M23.4815 17.4967C23.4815 21.2907 18.4486 24.3663 12.2402 24.3663C6.03189 24.3663 0.999023 21.2907 0.999023 17.4967V15.748H23.4815V17.4967Z"
                  fill="#9599B8"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.37202 4.31671C5.1116 2.92216 6.18164 1.63379 7.6003 1.63379C8.85222 1.63379 9.8671 2.64867 9.8671 3.90059V9.0315C10.6321 8.93102 11.4261 8.87813 12.2402 8.87813C13.0356 8.87813 13.8116 8.9286 14.5602 9.02459V3.90059C14.5602 2.64867 15.5751 1.63379 16.827 1.63379C18.2457 1.63379 19.3157 2.92216 19.0553 4.31671L18.021 9.85488C21.2925 11.056 23.4815 13.2457 23.4815 15.7478C23.4815 19.5418 18.4486 22.6174 12.2402 22.6174C6.03189 22.6174 0.999023 19.5418 0.999023 15.7478C0.999023 13.2584 3.16579 11.0782 6.40968 9.87326L5.37202 4.31671Z"
                  fill="#676A80"
                ></path>
                <path
                  d="M9.11817 15.2485C9.11817 16.2833 8.55896 17.1221 7.86914 17.1221C7.17932 17.1221 6.62012 16.2833 6.62012 15.2485C6.62012 14.2138 7.17932 13.375 7.86914 13.375C8.55896 13.375 9.11817 14.2138 9.11817 15.2485Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M17.7363 15.2485C17.7363 16.2833 17.1771 17.1221 16.4873 17.1221C15.7975 17.1221 15.2383 16.2833 15.2383 15.2485C15.2383 14.2138 15.7975 13.375 16.4873 13.375C17.1771 13.375 17.7363 14.2138 17.7363 15.2485Z"
                  fill="#494b5a"
                ></path>
              </svg>
            </a>
            {/* Biswap */}
            <a
              href="https://biswap.org"
              target="_blank"
              rel="noreferrer"
              title="Biswap"
              className="flex flex-row flex-nowrap"
            >
              <svg
                class="w-10 h-8"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0769 54.1537C42.031 54.1537 54.1538 42.031 54.1538 27.0769C54.1538 12.1227 42.031 0 27.0769 0C12.1227 0 0 12.1227 0 27.0769C0 42.031 12.1227 54.1537 27.0769 54.1537Z"
                  fill="white"
                ></path>
                <path
                  d="M48.0498 10.187C46.1719 10.5582 44.3814 11.0823 42.9074 11.4098C39.5446 12.1632 36.4002 14.7399 35.7124 19.4565C35.101 23.6709 36.5203 25.4833 35.898 30.3855C34.8062 38.9453 26.5958 41.8931 22.7635 43.6837C20.5471 44.71 15.1645 47.0683 11.0156 48.8698C15.5139 52.1889 21.0603 54.1542 27.0762 54.1542C42.034 54.1542 54.1531 42.0351 54.1531 27.0773C54.1531 20.7011 51.9476 14.8381 48.2573 10.2198C48.1918 10.2088 48.1263 10.1979 48.0498 10.187Z"
                  fill="url(#paint0_linear)"
                ></path>
                <path
                  d="M24.0307 23.1027C26.1161 18.5935 25.3628 18.5826 26.9459 14.3464C28.9439 8.97467 35.1563 10.5032 36.8704 10.7325C39.6982 11.1146 40.4407 10.1102 46.4019 9.14936C46.6967 9.10569 46.9806 9.06202 47.2645 9.02926C42.3076 3.49379 35.1017 0 27.0769 0C16.3007 0 6.9985 6.28882 2.64218 15.4054C11.5732 17.6218 21.2139 22.4367 24.0307 23.1027ZM18.1131 4.71662C18.8992 4.83671 22.7206 9.58608 23.4412 21.7816C23.4412 21.7816 18.528 20.6024 17.469 18.0694C16.5955 15.9841 17.731 13.2436 18.1131 4.71662ZM48.2143 10.1647C48.2253 10.1866 48.2471 10.1975 48.258 10.2193C48.1925 10.2084 48.1161 10.2084 48.0506 10.1975C48.1052 10.1757 48.1598 10.1757 48.2143 10.1647ZM0 27.0769C0 24.9151 0.251116 22.8188 0.731513 20.8099C1.71414 21.6287 2.76228 22.5349 3.87593 23.5722C10.929 30.1121 22.4039 35.2764 26.5856 30.4724C26.5965 30.4833 26.6074 30.4833 26.6074 30.4942C25.8431 31.4987 22.928 34.6759 17.3598 33.6932L8.55979 46.8277C3.29727 41.8927 0 34.8724 0 27.0769Z"
                  fill="url(#paint1_linear)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="43.3371"
                    y1="17.2788"
                    x2="36.9491"
                    y2="52.4708"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7E819C"></stop>
                    <stop offset="1" stop-color="#65687D"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="13.0692"
                    y1="39.8859"
                    x2="27.193"
                    y2="-1.0612e-05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#494b5a"></stop>
                    <stop offset="1" stop-color="#65687D"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <svg
                viewBox="0 0 122 34"
                color="text"
                className="w-32 h-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M99.0005 12.5965C98.6537 11.775 98.0759 10.9536 97.3824 10.4842C96.5734 9.8974 95.6488 9.428 94.3775 9.07594C92.7594 8.60654 90.4479 8.48918 87.7897 8.60654C87.0963 8.60654 86.4028 8.72389 85.7094 8.72389C85.0159 8.84124 84.3225 8.84124 83.629 8.95859C83.0512 9.07594 82.4733 9.07594 82.011 9.19329V13.6526C82.4733 13.5353 83.0512 13.4179 83.5135 13.3006C84.2069 13.1832 84.9004 13.0659 85.5938 12.9485C86.2873 12.8312 86.9807 12.8312 87.6741 12.7138C89.6389 12.5965 91.257 12.5965 92.1816 12.8312C92.875 12.9485 93.4529 13.1832 93.7996 13.4179C94.1463 13.6526 94.3775 14.0047 94.493 14.4741C94.6086 14.8262 94.7242 15.1782 94.7242 15.6476V15.9997L94.3775 15.8823C92.875 15.4129 91.0258 15.2956 88.9455 15.2956C87.2119 15.2956 85.825 15.4129 84.6692 15.6476C83.5135 15.8823 82.5889 16.2344 81.8954 16.7038C81.202 17.1732 80.7397 17.6426 80.5085 18.2294C80.2774 18.8161 80.1618 19.4029 80.1618 20.107V20.459C80.1618 21.1631 80.2774 21.8673 80.6241 22.454C80.8553 23.0408 81.3176 23.6275 82.011 24.2143C82.7045 24.6837 83.629 25.1531 84.7848 25.3878C85.9405 25.7399 87.443 25.8572 89.1766 25.8572C90.6791 25.8572 92.066 25.7399 93.2217 25.3878C94.3775 25.1531 94.6086 25.0357 95.6488 24.5663C95.9955 24.3316 96.9201 24.2143 97.498 24.449L98.5382 25.0357H99.5783V15.1782C99.5783 14.5915 99.3472 13.5353 99.0005 12.5965ZM94.7242 21.7499H94.493C92.9906 22.2193 91.3725 22.454 89.5233 22.454C88.4832 22.454 87.5586 22.454 86.9807 22.3367C86.4028 22.2193 85.9405 22.2193 85.5938 21.9846C85.2471 21.8673 85.0159 21.6325 84.9004 21.3978C84.7848 21.1631 84.7848 20.9284 84.7848 20.6937C84.7848 20.459 84.7848 20.3417 84.9004 20.107C85.0159 19.8723 85.2471 19.6376 85.4782 19.5202C85.7094 19.4029 86.1717 19.1682 86.7496 19.1682C87.3274 19.0508 88.1365 19.0508 89.061 19.0508C90.1012 19.0508 91.0258 19.0508 91.9504 19.1682C92.7594 19.2855 93.5684 19.4029 94.3775 19.6376H94.6086V21.7499H94.7242Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M18.2139 10.7189C17.5205 10.0148 16.5959 9.42807 15.4402 8.95866C14.2844 8.48925 12.7819 8.25455 10.9328 8.25455C10.0082 8.25455 9.08356 8.3719 8.27454 8.48926C7.46552 8.60661 6.6565 8.84131 5.84748 9.07601L5.50076 9.19336V2.85639L1.6868 0.626709H0.762207V17.76C0.762207 18.9335 0.877783 19.9897 1.22451 20.9285C1.45566 21.8673 2.03353 22.6888 2.72697 23.5102C3.42042 24.2143 4.34501 24.8011 5.50076 25.2705C6.6565 25.7399 8.15897 25.9746 10.0082 25.9746H10.9328C12.7819 25.9746 14.2844 25.7399 15.4402 25.2705C16.5959 24.9185 17.6361 24.3317 18.3295 23.5102C19.023 22.8061 19.4853 21.9847 19.832 20.9285C20.0631 19.8723 20.2943 18.8162 20.2943 17.76V16.4692C20.2943 15.2956 20.1787 14.2395 19.832 13.3007C19.4853 12.2445 18.9074 11.423 18.2139 10.7189ZM15.3246 18.6988C15.3246 19.2856 15.0934 19.755 14.7467 20.2244C14.4 20.5765 13.9377 20.9285 13.2442 21.2806C12.5508 21.5153 11.6262 21.6326 10.4705 21.6326C9.31471 21.6326 8.39012 21.5153 7.69667 21.2806C7.00322 21.0459 6.54093 20.6938 6.1942 20.2244C5.84748 19.755 5.73191 19.2856 5.61633 18.6988C5.61633 18.2294 5.50076 17.6427 5.50076 17.0559V13.418H5.61633C6.30978 13.1833 7.1188 12.9486 7.92782 12.8313C8.73684 12.7139 9.54586 12.5966 10.586 12.5966C11.7418 12.5966 12.6664 12.7139 13.2442 12.9486C13.8221 13.1833 14.4 13.5354 14.6311 13.8874C14.9779 14.3568 15.0934 14.8262 15.209 15.413C15.209 15.8824 15.3246 16.4692 15.3246 17.0559C15.3246 17.6427 15.3246 18.2294 15.3246 18.6988Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M25.9573 0.626709H25.7261C24.686 0.626709 23.9925 0.861412 23.6458 1.21347C23.2991 1.68287 23.0679 2.15228 23.0679 2.85639V3.20844C23.0679 3.7952 23.2991 4.38195 23.6458 4.85136C23.9925 5.32077 24.686 5.43812 25.7261 5.43812H25.9573C26.9975 5.43812 27.6909 5.20341 28.0376 4.85136C28.3844 4.38195 28.4999 3.91255 28.4999 3.20844V2.85639C28.4999 2.26963 28.2688 1.68287 27.9221 1.21347C27.6909 0.861412 26.9975 0.626709 25.9573 0.626709Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M23.4149 8.95874V25.2706H28.269V11.1884L24.455 8.95874H23.4149Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M47.2231 16.8213C46.7608 16.4692 46.1829 16.1172 45.6051 15.8825C45.0272 15.6478 44.3337 15.5304 43.6403 15.4131C43.0624 15.2957 42.369 15.1784 41.7911 15.1784C41.2132 15.1784 40.6353 15.1784 40.2886 15.061C38.9017 15.061 37.9771 14.9437 37.3993 14.8263C36.4747 14.5916 36.3591 14.1222 36.3591 13.6528C36.3591 13.4181 36.3591 13.3008 36.4747 13.1834C36.5903 13.066 36.7058 12.8313 37.0525 12.714C37.2837 12.5966 37.746 12.4793 38.2083 12.4793C38.6706 12.3619 39.364 12.3619 40.2886 12.3619C41.6755 12.3619 43.0624 12.4793 44.3337 12.5966C45.4895 12.714 46.7608 12.9487 48.0321 13.1834V9.0761C46.9919 8.8414 45.9518 8.60669 44.796 8.48934C43.6403 8.37199 42.369 8.25464 41.2132 8.25464H40.0575C38.3239 8.25464 36.937 8.37199 35.7812 8.72405C34.7411 8.95875 33.8165 9.42815 33.123 9.89756C32.4296 10.367 31.9673 10.9537 31.7361 11.5405C31.505 12.1272 31.3894 12.8313 31.3894 13.5355V13.8875C31.3894 14.709 31.505 15.4131 31.8517 15.9998C32.1984 16.5866 32.5451 17.056 33.0074 17.4081C33.4697 17.7601 34.0476 18.1122 34.6255 18.3469C35.2034 18.5816 35.8968 18.6989 36.4747 18.8163C37.1681 18.9336 37.746 19.051 38.3239 19.051C38.9017 19.051 39.4796 19.1683 39.9419 19.1683C41.3288 19.1683 42.2534 19.2857 42.8313 19.403C43.7559 19.5204 43.987 20.1071 43.987 20.5765C43.987 20.6939 43.987 20.9286 43.8714 21.0459C43.7559 21.1633 43.6403 21.398 43.2936 21.5154C43.0624 21.6327 42.6001 21.7501 42.1378 21.7501C41.6755 21.8674 40.9821 21.8674 40.1731 21.8674C38.7862 21.8674 37.1681 21.7501 35.6657 21.6327C34.2788 21.5154 32.7763 21.2807 31.505 20.9286V25.0359C32.7763 25.2706 33.932 25.5053 35.2034 25.6227C36.4747 25.74 37.9771 25.8574 39.364 25.8574H40.2886C42.0222 25.8574 43.4091 25.74 44.4493 25.388C45.6051 25.1532 46.4141 24.6838 47.1075 24.2144C47.801 23.745 48.1477 23.1583 48.4944 22.5715C48.7256 21.9848 48.9567 21.2807 48.9567 20.5765V20.2245C48.9567 19.403 48.8411 18.6989 48.4944 18.1122C48.0321 17.6428 47.6854 17.1734 47.2231 16.8213Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M70.8002 19.6377L66.6395 8.95874H62.9411L58.896 19.6377L54.7354 8.95874H50.4591V10.0149L56.7001 25.2706H60.9764L64.7903 15.4131L68.6043 25.2706H72.8805L79.2371 10.0149V8.95874H74.8453L70.8002 19.6377Z"
                  fill="#494b5a"
                ></path>
                <path
                  d="M121.422 13.5354C121.191 12.5966 120.613 11.7751 119.919 10.9536C119.226 10.2495 118.301 9.66277 117.03 9.19337C115.874 8.72396 114.372 8.48926 112.523 8.48926H111.713C109.864 8.48926 108.362 8.72396 107.206 9.19337C106.05 9.54542 105.126 10.1322 104.432 10.9536C103.739 11.6577 103.277 12.4792 102.93 13.5354C102.699 14.5915 102.468 15.6477 102.468 16.7039V33.8372H103.508L107.322 31.6075V25.2705L107.668 25.3879C108.477 25.6226 109.171 25.8573 110.095 25.9746C110.904 26.092 111.829 26.2093 112.754 26.2093C114.603 26.2093 116.105 25.9746 117.261 25.5052C118.417 25.0358 119.341 24.5664 120.035 23.7449C120.728 23.0408 121.191 22.102 121.537 21.1632C121.768 20.2244 122 19.1682 122 17.9947V16.7039C121.884 15.6477 121.768 14.5915 121.422 13.5354ZM117.03 19.0509C117.03 19.6376 116.799 20.1071 116.452 20.5765C116.105 21.0459 115.643 21.2806 115.065 21.5153C114.487 21.75 113.563 21.8673 112.407 21.8673C111.482 21.8673 110.558 21.75 109.749 21.6326C108.94 21.5153 108.131 21.2806 107.437 21.0459H107.322V17.408C107.322 16.8212 107.322 16.3518 107.437 15.765C107.437 15.1783 107.668 14.7089 108.015 14.2395C108.362 13.7701 108.824 13.5354 109.518 13.1833C110.211 12.9486 111.136 12.8313 112.291 12.8313C113.447 12.8313 114.372 12.9486 115.065 13.1833C115.759 13.418 116.221 13.7701 116.568 14.2395C116.914 14.7089 117.145 15.1783 117.145 15.765C117.145 16.2345 117.261 16.8212 117.261 17.408C117.03 17.9947 117.03 18.5815 117.03 19.0509Z"
                  fill="#494b5a"
                ></path>
              </svg>
            </a>
          </div>{" "}
          <div className="flex flex-row justify-center divide-x-2 divide-bordergray space-x-8 h-6 md:h-8">
            <a
              href={privacy}
              rel="noreferrer"
              target="_blank"
              className="text-md md:text-lg font-bold text-center"
            >
              Privacy policy
            </a>
            <a
              href={terms}
              rel="noreferrer"
              target="_blank"
              className="text-md md:text-lg font-bold text-center pl-8"
            >
              {`Terms & conditions`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
