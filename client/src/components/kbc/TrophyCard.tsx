import React, { FC } from "react";
import "@/styles/trophytable.css";

const TrophyCard: FC<{
  type?: string;
  name: string;
  count: string;
  suffix: string;
  score: string;
}> = ({ name, count, suffix, type, score }) => {
  return (
    <div className="cards">
      <div className="outlinePage">
        {type === "quiz" ? (
          <svg
            className="icon trophy"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="160"
          >
            <path
              d="M469.333333 682.666667h85.333334v128h-85.333334zM435.2 810.666667h153.6c4.693333 0 8.533333 3.84 8.533333 8.533333v34.133333h-170.666666v-34.133333c0-4.693333 3.84-8.533333 8.533333-8.533333z"
              fill="#ea9518"
              data-spm-anchor-id="a313x.search_index.0.i10.40193a81WcxQiT"
              className=""
            ></path>
            <path
              d="M384 853.333333h256a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667H341.333333v-42.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z"
              fill="#6e4a32"
              data-spm-anchor-id="a313x.search_index.0.i1.40193a81WcxQiT"
              className=""
            ></path>
            <path
              d="M213.333333 256v85.333333a42.666667 42.666667 0 0 0 85.333334 0V256H213.333333zM170.666667 213.333333h170.666666v128a85.333333 85.333333 0 1 1-170.666666 0V213.333333zM725.333333 256v85.333333a42.666667 42.666667 0 0 0 85.333334 0V256h-85.333334z m-42.666666-42.666667h170.666666v128a85.333333 85.333333 0 1 1-170.666666 0V213.333333z"
              fill="#f4ea2a"
              data-spm-anchor-id="a313x.search_index.0.i9.40193a81WcxQiT"
              className=""
            ></path>
            <path
              d="M298.666667 85.333333h426.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333a256 256 0 1 1-512 0V128a42.666667 42.666667 0 0 1 42.666667-42.666667z"
              fill="#f2be45"
              data-spm-anchor-id="a313x.search_index.0.i5.40193a81WcxQiT"
              className=""
            ></path>
            <path
              d="M512 469.333333l-100.309333 52.736 19.157333-111.701333-81.152-79.104 112.128-16.298667L512 213.333333l50.176 101.632 112.128 16.298667-81.152 79.104 19.157333 111.701333z"
              fill="#FFF2A0"
            ></path>
          </svg>
        ) : (
          <svg
            className="icon trophy"
            viewBox="0 0 256 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="165"
            height="165"
          >
            <path
              fill="#B8866B"
              d="M64 48C64 39.1634 71.1634 32 80 32H176C184.837 32 192 39.1634 192 48V208C192 216.837 184.837 224 176 224H80C71.1634 224 64 216.837 64 208V48Z"
            ></path>
            <path
              fill="#664737"
              fill-rule="evenodd"
              d="M80.0001 26.6667H176C187.782 26.6667 197.333 36.218 197.333 48.0001V208C197.333 219.782 187.782 229.333 176 229.333H80.0001C68.218 229.333 58.6667 219.782 58.6667 208V48.0001C58.6667 36.218 68.218 26.6667 80.0001 26.6667ZM80.0001 32.0001C71.1635 32.0001 64.0001 39.1635 64.0001 48.0001V208C64.0001 216.837 71.1635 224 80.0001 224H176C184.837 224 192 216.837 192 208V48.0001C192 39.1635 184.837 32.0001 176 32.0001H80.0001Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#AC795C"
              fill-rule="evenodd"
              d="M66.3367 216.33C69.147 220.93 74.2149 224 80 224H176C184.837 224 192 216.837 192 208V48.0002C192 42.2152 188.93 37.1473 184.33 34.3369C185.812 36.7633 186.667 39.6153 186.667 42.6669V202.667C186.667 211.503 179.503 218.667 170.667 218.667H74.6666C71.6151 218.667 68.7631 217.813 66.3367 216.33Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#CE9E85"
              fill-rule="evenodd"
              d="M66.6667 48.0001C66.6667 40.6363 72.6363 34.6667 80.0001 34.6667H112C113.473 34.6667 114.667 35.8607 114.667 37.3334C114.667 38.8062 113.473 40.0001 112 40.0001H80.0001C75.5818 40.0001 72.0001 43.5818 72.0001 48.0001V80.0001C72.0001 81.4728 70.8062 82.6667 69.3334 82.6667C67.8607 82.6667 66.6667 81.4728 66.6667 80.0001V48.0001Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#FB5586"
              d="M64 138.667H192V208C192 216.837 184.837 224 176 224H80C71.1634 224 64 216.837 64 208V138.667Z"
            ></path>
            <path
              fill="#CC1B50"
              fill-rule="evenodd"
              d="M58.6667 138.667C58.6667 135.721 61.0546 133.333 64.0001 133.333H192C194.946 133.333 197.333 135.721 197.333 138.667V208C197.333 219.782 187.782 229.333 176 229.333H80.0001C68.218 229.333 58.6667 219.782 58.6667 208V138.667ZM64.0001 138.667V208C64.0001 216.837 71.1635 224 80.0001 224H176C184.837 224 192 216.837 192 208V138.667H64.0001Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#F03C72"
              fill-rule="evenodd"
              d="M68.0007 218.584C70.9325 221.905 75.2216 224 79.9999 224H176C184.836 224 192 216.837 192 208V138.667H186.667V208C186.667 213.891 181.891 218.667 176 218.667H69.3332C68.882 218.667 68.4373 218.639 68.0007 218.584Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#8F6047"
              d="M77.3333 48.0002C77.3333 46.5274 78.5272 45.3335 79.9999 45.3335H95.9999C97.4727 45.3335 98.6666 46.5274 98.6666 48.0002V58.6668C98.6666 60.1396 97.4727 61.3335 95.9999 61.3335H79.9999C78.5272 61.3335 77.3333 60.1396 77.3333 58.6668V48.0002zM77.3333 72.0002C77.3333 70.5274 78.5272 69.3335 79.9999 69.3335H95.9999C97.4727 69.3335 98.6666 70.5274 98.6666 72.0002V82.6668C98.6666 84.1396 97.4727 85.3335 95.9999 85.3335H79.9999C78.5272 85.3335 77.3333 84.1396 77.3333 82.6668V72.0002zM77.3333 96.0002C77.3333 94.5274 78.5272 93.3335 79.9999 93.3335H95.9999C97.4727 93.3335 98.6666 94.5274 98.6666 96.0002V106.667C98.6666 108.14 97.4727 109.333 95.9999 109.333H79.9999C78.5272 109.333 77.3333 108.14 77.3333 106.667V96.0002zM77.3333 120C77.3333 118.527 78.5272 117.333 79.9999 117.333H95.9999C97.4727 117.333 98.6666 118.527 98.6666 120V130.667C98.6666 132.14 97.4727 133.333 95.9999 133.333H79.9999C78.5272 133.333 77.3333 132.14 77.3333 130.667V120zM104 48.0002C104 46.5274 105.194 45.3335 106.667 45.3335H122.667C124.139 45.3335 125.333 46.5274 125.333 48.0002V58.6668C125.333 60.1396 124.139 61.3335 122.667 61.3335H106.667C105.194 61.3335 104 60.1396 104 58.6668V48.0002zM104 72.0002C104 70.5274 105.194 69.3335 106.667 69.3335H122.667C124.139 69.3335 125.333 70.5274 125.333 72.0002V82.6668C125.333 84.1396 124.139 85.3335 122.667 85.3335H106.667C105.194 85.3335 104 84.1396 104 82.6668V72.0002zM104 96.0002C104 94.5274 105.194 93.3335 106.667 93.3335H122.667C124.139 93.3335 125.333 94.5274 125.333 96.0002V106.667C125.333 108.14 124.139 109.333 122.667 109.333H106.667C105.194 109.333 104 108.14 104 106.667V96.0002zM104 120C104 118.527 105.194 117.333 106.667 117.333H122.667C124.139 117.333 125.333 118.527 125.333 120V130.667C125.333 132.14 124.139 133.333 122.667 133.333H106.667C105.194 133.333 104 132.14 104 130.667V120zM130.667 48.0002C130.667 46.5274 131.86 45.3335 133.333 45.3335H149.333C150.806 45.3335 152 46.5274 152 48.0002V58.6668C152 60.1396 150.806 61.3335 149.333 61.3335H133.333C131.86 61.3335 130.667 60.1396 130.667 58.6668V48.0002zM130.667 72.0002C130.667 70.5274 131.86 69.3335 133.333 69.3335H149.333C150.806 69.3335 152 70.5274 152 72.0002V82.6668C152 84.1396 150.806 85.3335 149.333 85.3335H133.333C131.86 85.3335 130.667 84.1396 130.667 82.6668V72.0002zM130.667 96.0002C130.667 94.5274 131.86 93.3335 133.333 93.3335H149.333C150.806 93.3335 152 94.5274 152 96.0002V106.667C152 108.14 150.806 109.333 149.333 109.333H133.333C131.86 109.333 130.667 108.14 130.667 106.667V96.0002zM130.667 120C130.667 118.527 131.86 117.333 133.333 117.333H149.333C150.806 117.333 152 118.527 152 120V130.667C152 132.14 150.806 133.333 149.333 133.333H133.333C131.86 133.333 130.667 132.14 130.667 130.667V120zM157.333 48.0002C157.333 46.5274 158.527 45.3335 160 45.3335H176C177.473 45.3335 178.667 46.5274 178.667 48.0002V58.6668C178.667 60.1396 177.473 61.3335 176 61.3335H160C158.527 61.3335 157.333 60.1396 157.333 58.6668V48.0002zM157.333 72.0002C157.333 70.5274 158.527 69.3335 160 69.3335H176C177.473 69.3335 178.667 70.5274 178.667 72.0002V82.6668C178.667 84.1396 177.473 85.3335 176 85.3335H160C158.527 85.3335 157.333 84.1396 157.333 82.6668V72.0002zM157.333 96.0002C157.333 94.5274 158.527 93.3335 160 93.3335H176C177.473 93.3335 178.667 94.5274 178.667 96.0002V106.667C178.667 108.14 177.473 109.333 176 109.333H160C158.527 109.333 157.333 108.14 157.333 106.667V96.0002zM157.333 120C157.333 118.527 158.527 117.333 160 117.333H176C177.473 117.333 178.667 118.527 178.667 120V130.667C178.667 132.14 177.473 133.333 176 133.333H160C158.527 133.333 157.333 132.14 157.333 130.667V120z"
            ></path>
            <path
              fill="#FF8CAE"
              d="M69.3333 149.333C69.3333 146.388 71.7211 144 74.6666 144H176C178.945 144 181.333 146.388 181.333 149.333V161.489C181.333 163.785 179.864 165.823 177.686 166.549L76.3531 200.327C72.8996 201.478 69.3333 198.907 69.3333 195.267V149.333Z"
            ></path>
            <path
              fill="#E7225D"
              d="M169.63 163.377C169.63 164.954 168.352 166.233 166.774 166.233 165.197 166.233 163.919 164.954 163.919 163.377 163.919 161.8 165.197 160.521 166.774 160.521 168.352 160.521 169.63 161.8 169.63 163.377zM174.902 211.782C174.902 213.359 173.623 214.638 172.046 214.638 170.469 214.638 169.19 213.359 169.19 211.782 169.19 210.205 170.469 208.926 172.046 208.926 173.623 208.926 174.902 210.205 174.902 211.782zM181.196 170.088C181.196 172.217 179.47 173.943 177.341 173.943 175.212 173.943 173.486 172.217 173.486 170.088 173.486 167.958 175.212 166.232 177.341 166.232 179.47 166.232 181.196 167.958 181.196 170.088zM179.268 157.558C179.268 159.155 177.974 160.45 176.377 160.45 174.78 160.45 173.486 159.155 173.486 157.558 173.486 155.961 174.78 154.667 176.377 154.667 177.974 154.667 179.268 155.961 179.268 157.558zM181.619 186.651C181.619 189.963 178.934 192.648 175.622 192.648 172.31 192.648 169.625 189.963 169.625 186.651 169.625 183.339 172.31 180.654 175.622 180.654 178.934 180.654 181.619 183.339 181.619 186.651zM169.63 175.871C169.63 178 167.904 179.726 165.775 179.726 163.646 179.726 161.92 178 161.92 175.871 161.92 173.741 163.646 172.015 165.775 172.015 167.904 172.015 169.63 173.741 169.63 175.871zM182.594 202.287C182.594 204.417 180.868 206.143 178.739 206.143 176.61 206.143 174.884 204.417 174.884 202.287 174.884 200.158 176.61 198.432 178.739 198.432 180.868 198.432 182.594 200.158 182.594 202.287zM171.452 199.145C171.452 200.437 170.405 201.484 169.113 201.484 167.822 201.484 166.775 200.437 166.775 199.145 166.775 197.853 167.822 196.806 169.113 196.806 170.405 196.806 171.452 197.853 171.452 199.145zM163.342 206.499C163.342 208.628 161.616 210.354 159.487 210.354 157.358 210.354 155.632 208.628 155.632 206.499 155.632 204.369 157.358 202.643 159.487 202.643 161.616 202.643 163.342 204.369 163.342 206.499zM163.919 193.362C163.919 195.491 162.193 197.217 160.064 197.217 157.934 197.217 156.208 195.491 156.208 193.362 156.208 191.233 157.934 189.507 160.064 189.507 162.193 189.507 163.919 191.233 163.919 193.362zM149.783 211.746C149.783 213.343 148.488 214.637 146.891 214.637 145.295 214.637 144 213.343 144 211.746 144 210.149 145.295 208.854 146.891 208.854 148.488 208.854 149.783 210.149 149.783 211.746zM61.3334 162.667L46.6667 146.667 73.3334 133.333 109.333 149.334H86.6667L74.6667 158.667 61.3334 162.667z"
            ></path>
            <path
              fill="#CC1B50"
              fill-rule="evenodd"
              d="M41.422 145.698C41.7259 144.052 42.7846 142.645 44.2815 141.896L70.9482 128.563C72.3736 127.85 74.0431 127.812 75.4994 128.46L111.499 144.46C113.801 145.483 115.073 147.977 114.55 150.44C114.028 152.904 111.852 154.667 109.333 154.667H88.4966L77.941 162.877C77.4209 163.281 76.8303 163.586 76.1992 163.775L62.8658 167.775C60.9067 168.363 58.784 167.778 57.4018 166.271L42.7352 150.271C41.6043 149.037 41.1181 147.344 41.422 145.698ZM86.6666 149.333H109.333L73.3333 133.333L46.6666 146.667L61.3333 162.667L74.6666 158.667L86.6666 149.333Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#E7225D"
              d="M197.333 153.333L218.667 138.667H176L153.333 146.667L197.333 153.333Z"
            ></path>
            <path
              fill="#CC1B50"
              fill-rule="evenodd"
              d="M223.76 137.085C224.453 139.316 223.613 141.738 221.688 143.062L200.355 157.728C199.239 158.496 197.873 158.81 196.534 158.607L152.534 151.94C150.114 151.573 148.255 149.607 148.024 147.17C147.793 144.733 149.25 142.452 151.558 141.638L174.225 133.638C174.795 133.436 175.395 133.333 176 133.333H218.667C221.003 133.333 223.067 134.854 223.76 137.085ZM218.667 138.667H176L153.333 146.667L197.333 153.334L218.667 138.667Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#FFE4A0"
              d="M84.0001 130.667L61.3334 136L46.6667 146.667L70.6667 149.333L81.3334 141.333L108 149.333L130.667 142.667L153.333 146.667L176 138.667L201.333 144L218.667 138.667L205.333 128L193.333 130.667L170.667 116L152 130.667L132 125.333L100 136L84.0001 130.667Z"
            ></path>
            <path
              fill="#DF9300"
              fill-rule="evenodd"
              d="M58.1964 131.687C58.7701 131.27 59.4212 130.971 60.1118 130.809L82.7784 125.475C83.7413 125.249 84.7481 125.294 85.6865 125.607L100 130.378L130.313 120.274C131.303 119.944 132.367 119.912 133.374 120.18L150.8 124.827L167.372 111.806C169.163 110.399 171.651 110.285 173.564 111.522L194.356 124.976L204.176 122.794C205.753 122.443 207.404 122.826 208.665 123.835L221.998 134.502C223.541 135.737 224.275 137.723 223.906 139.664C223.536 141.605 222.124 143.183 220.235 143.764L202.902 149.098C202.037 149.364 201.12 149.405 200.235 149.219L176.365 144.194L155.108 151.696C154.242 152.002 153.311 152.079 152.406 151.919L130.972 148.136L109.505 154.45C108.513 154.742 107.458 154.739 106.467 154.442L82.3795 147.215L73.8666 153.6C72.7812 154.414 71.4262 154.784 70.0777 154.634L46.0777 151.967C43.8893 151.724 42.0753 150.161 41.5113 148.033C40.9472 145.905 41.749 143.649 43.5297 142.354L58.1964 131.687ZM81.3333 141.333L108 149.333L130.667 142.667L153.333 146.667L176 138.667L201.333 144L218.667 138.667L205.333 128L193.333 130.667L170.667 116L152 130.667L132 125.333L100 136L84 130.667L61.3333 136L46.6666 146.667L70.6666 149.333L81.3333 141.333Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M85.2649 134.067C85.5961 135.502 84.7012 136.934 83.2662 137.265L66.4073 141.156 58.8124 146.219C57.587 147.036 55.9313 146.705 55.1144 145.479 54.2975 144.254 54.6286 142.598 55.854 141.781L63.854 136.448C64.1219 136.269 64.4199 136.141 64.7336 136.068L82.0669 132.068C83.502 131.737 84.9338 132.632 85.2649 134.067zM131.286 128.097C131.708 127.98 132.151 127.969 132.578 128.064L144.578 130.73C146.016 131.05 146.923 132.474 146.603 133.912 146.284 135.35 144.859 136.256 143.421 135.936L132.072 133.414 108.714 139.903C107.295 140.297 105.825 139.466 105.43 138.047 105.036 136.628 105.867 135.158 107.286 134.764L131.286 128.097zM168.781 119.448C169.593 118.636 170.833 118.435 171.859 118.948L185.192 125.615C186.51 126.274 187.044 127.875 186.385 129.193 185.726 130.51 184.125 131.044 182.807 130.385L171.193 124.578 165.886 129.886C164.844 130.927 163.156 130.927 162.114 129.886 161.073 128.844 161.073 127.156 162.114 126.115L168.781 119.448z"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
        <p className="ranking_number">
          {count}
          <span className="ranking_word">
            {suffix} {type !== "quiz" && "chocolate"}
          </span>
        </p>
        <div className="splitLine"></div>
        <svg
          className="icon userAvatar"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
        >
          <path
            d="M512 0C228.693 0 0 228.693 0 512s228.693 512 512 512 512-228.693 512-512S795.307 0 512 0z m0 69.973c244.053 0 442.027 197.973 442.027 442.027 0 87.04-25.6 168.96-69.973 237.227-73.387-78.507-170.667-133.12-281.6-151.893 69.973-34.133 119.467-105.813 119.467-187.733 0-116.053-93.867-209.92-209.92-209.92s-209.92 93.867-209.92 209.92c0 83.627 47.787 155.307 119.467 187.733-110.933 20.48-208.213 75.093-281.6 153.6-44.373-68.267-69.973-150.187-69.973-238.933 0-244.053 197.973-442.027 442.027-442.027z"
            fill="#8a8a8a"
          ></path>
        </svg>
        <p className="userName">{name}</p>
      </div>
      <div className="detailPage">
        <svg
          className="icon medals slide-in-top"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
        >
          <path d="M896 42.666667h-128l-170.666667 213.333333h128z" fill="#FF4C4C"></path>
          <path d="M768 42.666667h-128l-170.666667 213.333333h128z" fill="#3B8CFF"></path>
          <path d="M640 42.666667h-128L341.333333 256h128z" fill="#F1F1F1"></path>
          <path d="M128 42.666667h128l170.666667 213.333333H298.666667z" fill="#FF4C4C"></path>
          <path d="M256 42.666667h128l170.666667 213.333333h-128z" fill="#3B8CFF"></path>
          <path d="M384 42.666667h128l170.666667 213.333333h-128z" fill="#FBFBFB"></path>
          <path d="M298.666667 256h426.666666v213.333333H298.666667z" fill="#E3A815"></path>
          <path
            d="M512 661.333333m-320 0a320 320 0 1 0 640 0 320 320 0 1 0-640 0Z"
            fill="#FDDC3A"
          ></path>
          <path
            d="M512 661.333333m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z"
            fill="#E3A815"
          ></path>
          <path
            d="M512 661.333333m-213.333333 0a213.333333 213.333333 0 1 0 426.666666 0 213.333333 213.333333 0 1 0-426.666666 0Z"
            fill="#F5CF41"
          ></path>
          <path
            d="M277.333333 256h469.333334a21.333333 21.333333 0 0 1 0 42.666667h-469.333334a21.333333 21.333333 0 0 1 0-42.666667z"
            fill="#D19A0E"
          ></path>
          <path
            d="M277.333333 264.533333a12.8 12.8 0 1 0 0 25.6h469.333334a12.8 12.8 0 1 0 0-25.6h-469.333334z m0-17.066666h469.333334a29.866667 29.866667 0 1 1 0 59.733333h-469.333334a29.866667 29.866667 0 1 1 0-59.733333z"
            fill="#F9D525"
          ></path>
          <path
            d="M512 746.666667l-100.309333 52.736 19.157333-111.701334-81.152-79.104 112.128-16.298666L512 490.666667l50.176 101.632 112.128 16.298666-81.152 79.104 19.157333 111.701334z"
            fill="#FFF2A0"
          ></path>
        </svg>
        <div className="gradesBox">
          <svg
            className="icon gradesIcon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
          >
            <path
              d="M382.6 805H242.2c-6.7 0-12.2-5.5-12.2-12.2V434.3c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v358.6c0 6.6-5.4 12.1-12.2 12.1z"
              fill="#ea9518"
              data-spm-anchor-id="a313x.search_index.0.i36.40193a81WcxQiT"
              className=""
            ></path>
            <path
              d="M591.1 805H450.7c-6.7 0-12.2-5.5-12.2-12.2V254.9c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v537.9c0 6.7-5.5 12.2-12.2 12.2z"
              fill="#f2be45"
              data-spm-anchor-id="a313x.search_index.0.i35.40193a81WcxQiT"
              className=""
            ></path>
            <path
              d="M804.4 805H663.9c-6.7 0-12.2-5.5-12.2-12.2v-281c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v281c0.1 6.7-5.4 12.2-12.1 12.2z"
              fill="#ea9518"
              data-spm-anchor-id="a313x.search_index.0.i37.40193a81WcxQiT"
              className=""
            ></path>
          </svg>
          <p className="gradesBoxLabel">SCORE</p>
          <p className="gradesBoxNum">{score}</p>
        </div>
      </div>
    </div>
  );
};

export default TrophyCard;
