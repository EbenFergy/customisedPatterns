import React from "react";
import Style from "./style";
import HamburgerIcons from "../sideMenu/HamburgerIcons";
import logo from "../../Assets/logo.png";

const NavBar = () => {
  return (
    <Style>
      <div className="logoCont">
        <svg
          width="1271"
          height="562"
          viewBox="0 0 1271 562"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M361.5 0H394.5L259 257.5H226L361.5 0Z" fill="#02439C" />
          <path d="M361.5 0H394.5L259 257.5H226L361.5 0Z" fill="#02439C" />
          <path d="M361.5 0H394.5L259 257.5H226L361.5 0Z" fill="#02439C" />
          <path d="M361.5 0H394.5L259 257.5H226L361.5 0Z" fill="#02439C" />
          <path d="M361.5 0H394.5L259 257.5H226L361.5 0Z" fill="#F5F5F5" />
          <path d="M435.148 0H461L354.852 205H329L435.148 0Z" fill="#02439C" />
          <path d="M435.148 0H461L354.852 205H329L435.148 0Z" fill="#02439C" />
          <path d="M435.148 0H461L354.852 205H329L435.148 0Z" fill="#02439C" />
          <path d="M435.148 0H461L354.852 205H329L435.148 0Z" fill="#02439C" />
          <path d="M435.148 0H461L354.852 205H329L435.148 0Z" fill="#F5F5F5" />
          <path d="M511.261 0H533L443.739 172H422L511.261 0Z" fill="#02439C" />
          <path d="M511.261 0H533L443.739 172H422L511.261 0Z" fill="#02439C" />
          <path d="M511.261 0H533L443.739 172H422L511.261 0Z" fill="#02439C" />
          <path d="M511.261 0H533L443.739 172H422L511.261 0Z" fill="#02439C" />
          <path d="M511.261 0H533L443.739 172H422L511.261 0Z" fill="#F5F5F5" />
          <path d="M586.961 0H604L534.039 123H517L586.961 0Z" fill="#02439C" />
          <path d="M586.961 0H604L534.039 123H517L586.961 0Z" fill="#02439C" />
          <path d="M586.961 0H604L534.039 123H517L586.961 0Z" fill="#02439C" />
          <path d="M586.961 0H604L534.039 123H517L586.961 0Z" fill="#02439C" />
          <path d="M586.961 0H604L534.039 123H517L586.961 0Z" fill="#F5F5F5" />
          <path d="M306 231L586 287H554L274 231H306Z" fill="#BBC2BB" />
          <path d="M347 218L627 274H595L315 218H347Z" fill="#BBC2BB" />
          <path d="M430 212L710 268H678L398 212H430Z" fill="#BBC2BB" />
          <path d="M512 207L792 263H760L480 207H512Z" fill="#BBC2BB" />
          <path d="M395 0H362L560.5 286.5H593.5L395 0Z" fill="#02439C" />
          <path d="M395 0H362L560.5 286.5H593.5L395 0Z" fill="#02439C" />
          <path d="M395 0H362L560.5 286.5H593.5L395 0Z" fill="#02439C" />
          <path d="M395 0H362L560.5 286.5H593.5L395 0Z" fill="#02439C" />
          <path d="M395 0H362L560.5 286.5H593.5L395 0Z" fill="#C20D12" />
          <path d="M467.076 0H436L622.924 274H654L467.076 0Z" fill="#02439C" />
          <path d="M467.076 0H436L622.924 274H654L467.076 0Z" fill="#02439C" />
          <path d="M467.076 0H436L622.924 274H654L467.076 0Z" fill="#02439C" />
          <path d="M467.076 0H436L622.924 274H654L467.076 0Z" fill="#02439C" />
          <path d="M467.076 0H436L622.924 274H654L467.076 0Z" fill="#C20D12" />
          <path d="M542.363 0H512L694.637 267H725L542.363 0Z" fill="#02439C" />
          <path d="M542.363 0H512L694.637 267H725L542.363 0Z" fill="#02439C" />
          <path d="M542.363 0H512L694.637 267H725L542.363 0Z" fill="#02439C" />
          <path d="M542.363 0H512L694.637 267H725L542.363 0Z" fill="#02439C" />
          <path d="M542.363 0H512L694.637 267H725L542.363 0Z" fill="#C20D12" />
          <path d="M615.365 0H586L762.635 263H792L615.365 0Z" fill="#02439C" />
          <path d="M615.365 0H586L762.635 263H792L615.365 0Z" fill="#02439C" />
          <path d="M615.365 0H586L762.635 263H792L615.365 0Z" fill="#02439C" />
          <path d="M615.365 0H586L762.635 263H792L615.365 0Z" fill="#02439C" />
          <path d="M615.365 0H586L762.635 263H792L615.365 0Z" fill="#C20D12" />
          <path
            d="M88.6847 401.491H66.6676C66.3741 399.231 65.7723 397.191 64.8622 395.371C63.9522 393.551 62.7486 391.995 61.2514 390.703C59.7543 389.411 57.9782 388.428 55.9233 387.753C53.8977 387.048 51.652 386.696 49.1861 386.696C44.812 386.696 41.0398 387.768 37.8693 389.911C34.7282 392.054 32.3063 395.151 30.6037 399.202C28.9304 403.253 28.0938 408.155 28.0938 413.909C28.0938 419.898 28.9451 424.918 30.6477 428.969C32.3797 432.991 34.8016 436.029 37.9134 438.084C41.0545 440.109 44.768 441.122 49.054 441.122C51.4612 441.122 53.6482 440.814 55.6151 440.197C57.6113 439.581 59.358 438.686 60.8551 437.511C62.3816 436.308 63.6293 434.855 64.598 433.152C65.5961 431.42 66.286 429.468 66.6676 427.295L88.6847 427.428C88.303 431.42 87.1435 435.354 85.206 439.229C83.2978 443.104 80.6705 446.641 77.3239 449.841C73.9773 453.011 69.8968 455.536 65.0824 457.415C60.2974 459.294 54.8078 460.233 48.6136 460.233C40.4527 460.233 33.143 458.442 26.6847 454.861C20.2557 451.25 15.1771 445.995 11.4489 439.097C7.72064 432.198 5.85653 423.802 5.85653 413.909C5.85653 403.987 7.75 395.576 11.5369 388.678C15.3239 381.779 20.4465 376.539 26.9048 372.957C33.3632 369.376 40.5994 367.585 48.6136 367.585C54.0739 367.585 59.1231 368.348 63.7614 369.875C68.3996 371.372 72.4801 373.574 76.0028 376.48C79.5256 379.357 82.3878 382.894 84.5895 387.092C86.7912 391.29 88.1562 396.09 88.6847 401.491ZM144.795 429.805V391.364H166.284V459H145.764V446.406H145.059C143.562 450.545 141.008 453.833 137.397 456.27C133.816 458.677 129.486 459.881 124.407 459.881C119.798 459.881 115.747 458.824 112.254 456.71C108.761 454.597 106.045 451.646 104.108 447.859C102.17 444.043 101.187 439.581 101.157 434.473V391.364H122.69V430.246C122.719 433.915 123.688 436.807 125.596 438.92C127.504 441.034 130.102 442.091 133.39 442.091C135.533 442.091 137.456 441.621 139.159 440.682C140.891 439.713 142.256 438.319 143.254 436.499C144.281 434.649 144.795 432.418 144.795 429.805ZM239.039 412.016L219.268 412.544C219.062 411.135 218.504 409.887 217.594 408.801C216.684 407.686 215.496 406.82 214.028 406.203C212.589 405.557 210.916 405.234 209.008 405.234C206.513 405.234 204.384 405.733 202.623 406.732C200.891 407.73 200.04 409.08 200.069 410.783C200.04 412.104 200.568 413.249 201.654 414.217C202.77 415.186 204.751 415.964 207.599 416.551L220.633 419.017C227.385 420.309 232.405 422.452 235.692 425.446C239.01 428.44 240.683 432.403 240.712 437.335C240.683 441.973 239.303 446.01 236.573 449.445C233.872 452.879 230.174 455.551 225.477 457.459C220.78 459.338 215.407 460.277 209.36 460.277C199.702 460.277 192.084 458.295 186.506 454.332C180.958 450.34 177.788 444.997 176.995 438.304L198.263 437.776C198.733 440.241 199.951 442.12 201.918 443.412C203.885 444.704 206.395 445.349 209.448 445.349C212.208 445.349 214.453 444.836 216.185 443.808C217.917 442.781 218.798 441.416 218.827 439.713C218.798 438.187 218.123 436.968 216.802 436.058C215.481 435.119 213.411 434.385 210.593 433.857L198.792 431.611C192.011 430.378 186.961 428.103 183.644 424.786C180.327 421.439 178.683 417.182 178.712 412.016C178.683 407.495 179.887 403.634 182.323 400.435C184.76 397.205 188.224 394.74 192.715 393.037C197.207 391.334 202.505 390.483 208.612 390.483C217.771 390.483 224.992 392.406 230.276 396.251C235.56 400.068 238.481 405.322 239.039 412.016ZM289.491 391.364V407.216H246.822V391.364H289.491ZM255.761 375.159H277.294V437.732C277.294 439.053 277.499 440.124 277.91 440.946C278.35 441.739 278.982 442.311 279.804 442.663C280.626 442.986 281.609 443.148 282.754 443.148C283.576 443.148 284.442 443.074 285.352 442.928C286.291 442.751 286.996 442.605 287.466 442.487L290.724 458.031C289.697 458.325 288.243 458.692 286.365 459.132C284.515 459.572 282.299 459.851 279.716 459.969C274.666 460.204 270.336 459.616 266.725 458.207C263.144 456.769 260.399 454.538 258.491 451.514C256.612 448.491 255.702 444.689 255.761 440.109V375.159ZM331.324 460.277C324.219 460.277 318.113 458.824 313.005 455.918C307.927 452.982 304.008 448.902 301.248 443.676C298.518 438.421 297.153 432.33 297.153 425.402C297.153 418.445 298.518 412.353 301.248 407.128C304.008 401.873 307.927 397.793 313.005 394.886C318.113 391.951 324.219 390.483 331.324 390.483C338.428 390.483 344.519 391.951 349.598 394.886C354.706 397.793 358.625 401.873 361.355 407.128C364.114 412.353 365.494 418.445 365.494 425.402C365.494 432.33 364.114 438.421 361.355 443.676C358.625 448.902 354.706 452.982 349.598 455.918C344.519 458.824 338.428 460.277 331.324 460.277ZM331.456 444.028C334.039 444.028 336.226 443.236 338.017 441.651C339.807 440.065 341.172 437.864 342.112 435.045C343.081 432.227 343.565 428.969 343.565 425.27C343.565 421.512 343.081 418.224 342.112 415.406C341.172 412.588 339.807 410.386 338.017 408.801C336.226 407.216 334.039 406.423 331.456 406.423C328.784 406.423 326.524 407.216 324.674 408.801C322.854 410.386 321.46 412.588 320.491 415.406C319.552 418.224 319.082 421.512 319.082 425.27C319.082 428.969 319.552 432.227 320.491 435.045C321.46 437.864 322.854 440.065 324.674 441.651C326.524 443.236 328.784 444.028 331.456 444.028ZM376.525 459V391.364H397V403.781H397.749C399.158 399.671 401.536 396.428 404.882 394.05C408.229 391.672 412.221 390.483 416.86 390.483C421.557 390.483 425.578 391.687 428.925 394.094C432.272 396.501 434.4 399.73 435.31 403.781H436.015C437.277 399.759 439.743 396.545 443.412 394.138C447.082 391.701 451.412 390.483 456.402 390.483C462.802 390.483 467.998 392.538 471.99 396.648C475.983 400.728 477.979 406.335 477.979 413.469V459H456.446V418.401C456.446 415.025 455.58 412.456 453.848 410.695C452.116 408.904 449.871 408.009 447.111 408.009C444.146 408.009 441.812 408.977 440.11 410.915C438.436 412.823 437.6 415.392 437.6 418.621V459H416.904V418.18C416.904 415.039 416.052 412.559 414.35 410.739C412.647 408.919 410.401 408.009 407.613 408.009C405.734 408.009 404.075 408.464 402.637 409.374C401.198 410.254 400.068 411.517 399.246 413.161C398.453 414.804 398.057 416.742 398.057 418.973V459H376.525ZM491.321 459V391.364H512.854V459H491.321ZM502.11 383.482C499.086 383.482 496.488 382.483 494.316 380.487C492.143 378.462 491.057 376.025 491.057 373.178C491.057 370.359 492.143 367.952 494.316 365.956C496.488 363.93 499.086 362.918 502.11 362.918C505.163 362.918 507.761 363.93 509.904 365.956C512.076 367.952 513.162 370.359 513.162 373.178C513.162 376.025 512.076 378.462 509.904 380.487C507.761 382.483 505.163 383.482 502.11 383.482ZM585.609 412.016L565.838 412.544C565.633 411.135 565.075 409.887 564.165 408.801C563.255 407.686 562.066 406.82 560.598 406.203C559.16 405.557 557.486 405.234 555.578 405.234C553.083 405.234 550.955 405.733 549.193 406.732C547.461 407.73 546.61 409.08 546.639 410.783C546.61 412.104 547.138 413.249 548.224 414.217C549.34 415.186 551.321 415.964 554.169 416.551L567.203 419.017C573.955 420.309 578.975 422.452 582.263 425.446C585.58 428.44 587.253 432.403 587.283 437.335C587.253 441.973 585.874 446.01 583.143 449.445C580.443 452.879 576.744 455.551 572.047 457.459C567.35 459.338 561.978 460.277 555.93 460.277C546.272 460.277 538.654 458.295 533.077 454.332C527.528 450.34 524.358 444.997 523.565 438.304L544.834 437.776C545.304 440.241 546.522 442.12 548.489 443.412C550.455 444.704 552.965 445.349 556.018 445.349C558.778 445.349 561.024 444.836 562.756 443.808C564.488 442.781 565.368 441.416 565.398 439.713C565.368 438.187 564.693 436.968 563.372 436.058C562.051 435.119 559.982 434.385 557.163 433.857L545.362 431.611C538.581 430.378 533.532 428.103 530.214 424.786C526.897 421.439 525.253 417.182 525.283 412.016C525.253 407.495 526.457 403.634 528.893 400.435C531.33 397.205 534.794 394.74 539.286 393.037C543.777 391.334 549.076 390.483 555.182 390.483C564.341 390.483 571.563 392.406 576.847 396.251C582.131 400.068 585.052 405.322 585.609 412.016ZM629.5 460.277C622.426 460.277 616.319 458.883 611.182 456.094C606.074 453.276 602.141 449.268 599.381 444.072C596.651 438.847 595.286 432.638 595.286 425.446C595.286 418.459 596.666 412.353 599.425 407.128C602.185 401.873 606.074 397.793 611.094 394.886C616.114 391.951 622.029 390.483 628.84 390.483C633.654 390.483 638.058 391.232 642.05 392.729C646.042 394.226 649.492 396.442 652.398 399.378C655.304 402.313 657.565 405.939 659.179 410.254C660.794 414.54 661.601 419.457 661.601 425.006V430.378H602.816V417.872H641.566C641.536 415.582 640.993 413.542 639.936 411.751C638.88 409.961 637.426 408.566 635.577 407.568C633.757 406.541 631.658 406.027 629.28 406.027C626.873 406.027 624.715 406.57 622.807 407.656C620.899 408.713 619.387 410.166 618.272 412.016C617.156 413.836 616.569 415.905 616.51 418.224V430.95C616.51 433.71 617.053 436.132 618.14 438.216C619.226 440.271 620.767 441.871 622.763 443.016C624.759 444.161 627.137 444.733 629.897 444.733C631.805 444.733 633.537 444.469 635.093 443.94C636.649 443.412 637.984 442.634 639.1 441.607C640.215 440.579 641.052 439.317 641.61 437.82L661.381 438.392C660.559 442.825 658.754 446.685 655.965 449.973C653.205 453.232 649.58 455.771 645.088 457.591C640.597 459.382 635.401 460.277 629.5 460.277ZM697.302 459.969C692.311 459.969 687.776 458.677 683.695 456.094C679.615 453.51 676.356 449.635 673.92 444.469C671.483 439.302 670.265 432.888 670.265 425.226C670.265 417.27 671.527 410.724 674.052 405.587C676.576 400.449 679.879 396.648 683.96 394.182C688.069 391.716 692.487 390.483 697.214 390.483C700.766 390.483 703.804 391.099 706.329 392.332C708.853 393.536 710.938 395.092 712.582 397C714.226 398.908 715.473 400.89 716.325 402.945H716.765V368.818H738.298V459H716.985V448.036H716.325C715.415 450.12 714.123 452.072 712.45 453.892C710.776 455.712 708.677 457.18 706.153 458.295C703.657 459.411 700.707 459.969 697.302 459.969ZM704.788 443.192C707.4 443.192 709.631 442.458 711.481 440.99C713.33 439.493 714.754 437.394 715.752 434.693C716.75 431.992 717.249 428.822 717.249 425.182C717.249 421.483 716.75 418.298 715.752 415.626C714.783 412.955 713.36 410.9 711.481 409.462C709.631 408.023 707.4 407.304 704.788 407.304C702.116 407.304 699.856 408.038 698.006 409.506C696.157 410.973 694.748 413.043 693.779 415.714C692.84 418.386 692.37 421.542 692.37 425.182C692.37 428.822 692.854 431.992 693.823 434.693C694.792 437.394 696.186 439.493 698.006 440.99C699.856 442.458 702.116 443.192 704.788 443.192Z"
            fill="#C20D12"
          />
          <path
            d="M751.915 459V368.818H789.168C795.92 368.818 801.747 370.139 806.65 372.781C811.581 375.394 815.383 379.049 818.054 383.746C820.726 388.413 822.061 393.844 822.061 400.038C822.061 406.262 820.696 411.707 817.966 416.375C815.266 421.013 811.405 424.609 806.385 427.163C801.365 429.717 795.406 430.994 788.507 430.994H765.522V413.821H784.456C787.744 413.821 790.489 413.249 792.691 412.104C794.922 410.959 796.61 409.359 797.755 407.304C798.9 405.22 799.472 402.798 799.472 400.038C799.472 397.25 798.9 394.842 797.755 392.817C796.61 390.762 794.922 389.177 792.691 388.061C790.46 386.946 787.715 386.388 784.456 386.388H773.712V459H751.915ZM849.451 460.145C845.135 460.145 841.304 459.426 837.958 457.987C834.641 456.519 832.013 454.318 830.076 451.382C828.167 448.417 827.213 444.704 827.213 440.241C827.213 436.484 827.874 433.313 829.195 430.73C830.516 428.147 832.336 426.048 834.655 424.433C836.974 422.819 839.646 421.6 842.669 420.778C845.693 419.927 848.922 419.355 852.357 419.061C856.203 418.709 859.3 418.342 861.648 417.96C863.997 417.549 865.699 416.977 866.756 416.243C867.842 415.48 868.385 414.408 868.385 413.028V412.808C868.385 410.548 867.607 408.801 866.051 407.568C864.496 406.335 862.397 405.719 859.755 405.719C856.907 405.719 854.617 406.335 852.885 407.568C851.153 408.801 850.052 410.504 849.583 412.676L829.723 411.972C830.31 407.862 831.822 404.192 834.259 400.963C836.725 397.705 840.101 395.151 844.387 393.301C848.702 391.422 853.883 390.483 859.931 390.483C864.246 390.483 868.224 390.997 871.864 392.024C875.504 393.022 878.675 394.49 881.375 396.428C884.076 398.336 886.16 400.684 887.628 403.473C889.125 406.262 889.874 409.447 889.874 413.028V459H869.618V449.577H869.09C867.886 451.866 866.345 453.804 864.466 455.389C862.617 456.974 860.43 458.163 857.905 458.956C855.41 459.749 852.592 460.145 849.451 460.145ZM856.1 446.054C858.419 446.054 860.503 445.584 862.353 444.645C864.231 443.705 865.729 442.414 866.844 440.77C867.96 439.097 868.517 437.159 868.517 434.957V428.528C867.901 428.851 867.152 429.145 866.272 429.409C865.42 429.673 864.481 429.923 863.453 430.158C862.426 430.393 861.369 430.598 860.283 430.774C859.197 430.95 858.155 431.112 857.157 431.259C855.131 431.581 853.399 432.08 851.961 432.756C850.551 433.431 849.465 434.312 848.702 435.398C847.968 436.455 847.601 437.717 847.601 439.185C847.601 441.416 848.394 443.118 849.979 444.293C851.594 445.467 853.634 446.054 856.1 446.054ZM941.218 391.364V407.216H898.549V391.364H941.218ZM907.488 375.159H929.02V437.732C929.02 439.053 929.226 440.124 929.637 440.946C930.077 441.739 930.708 442.311 931.53 442.663C932.352 442.986 933.336 443.148 934.48 443.148C935.302 443.148 936.168 443.074 937.078 442.928C938.018 442.751 938.722 442.605 939.192 442.487L942.451 458.031C941.423 458.325 939.97 458.692 938.091 459.132C936.242 459.572 934.025 459.851 931.442 459.969C926.393 460.204 922.063 459.616 918.452 458.207C914.871 456.769 912.126 454.538 910.218 451.514C908.339 448.491 907.429 444.689 907.488 440.109V375.159ZM990.382 391.364V407.216H947.713V391.364H990.382ZM956.652 375.159H978.184V437.732C978.184 439.053 978.39 440.124 978.801 440.946C979.241 441.739 979.872 442.311 980.694 442.663C981.516 442.986 982.5 443.148 983.645 443.148C984.467 443.148 985.333 443.074 986.243 442.928C987.182 442.751 987.886 442.605 988.356 442.487L991.615 458.031C990.587 458.325 989.134 458.692 987.255 459.132C985.406 459.572 983.19 459.851 980.606 459.969C975.557 460.204 971.227 459.616 967.616 458.207C964.035 456.769 961.29 454.538 959.382 451.514C957.503 448.491 956.593 444.689 956.652 440.109V375.159ZM1032.26 460.277C1025.18 460.277 1019.08 458.883 1013.94 456.094C1008.83 453.276 1004.9 449.268 1002.14 444.072C999.409 438.847 998.044 432.638 998.044 425.446C998.044 418.459 999.423 412.353 1002.18 407.128C1004.94 401.873 1008.83 397.793 1013.85 394.886C1018.87 391.951 1024.79 390.483 1031.6 390.483C1036.41 390.483 1040.82 391.232 1044.81 392.729C1048.8 394.226 1052.25 396.442 1055.16 399.378C1058.06 402.313 1060.32 405.939 1061.94 410.254C1063.55 414.54 1064.36 419.457 1064.36 425.006V430.378H1005.57V417.872H1044.32C1044.29 415.582 1043.75 413.542 1042.69 411.751C1041.64 409.961 1040.18 408.566 1038.33 407.568C1036.51 406.541 1034.42 406.027 1032.04 406.027C1029.63 406.027 1027.47 406.57 1025.56 407.656C1023.66 408.713 1022.15 410.166 1021.03 412.016C1019.91 413.836 1019.33 415.905 1019.27 418.224V430.95C1019.27 433.71 1019.81 436.132 1020.9 438.216C1021.98 440.271 1023.52 441.871 1025.52 443.016C1027.52 444.161 1029.9 444.733 1032.65 444.733C1034.56 444.733 1036.29 444.469 1037.85 443.94C1039.41 443.412 1040.74 442.634 1041.86 441.607C1042.97 440.579 1043.81 439.317 1044.37 437.82L1064.14 438.392C1063.32 442.825 1061.51 446.685 1058.72 449.973C1055.96 453.232 1052.34 455.771 1047.85 457.591C1043.35 459.382 1038.16 460.277 1032.26 460.277ZM1075.36 459V391.364H1096.27V403.693H1096.98C1098.21 399.231 1100.22 395.914 1103.01 393.741C1105.8 391.54 1109.04 390.439 1112.74 390.439C1113.74 390.439 1114.77 390.512 1115.82 390.659C1116.88 390.777 1117.86 390.967 1118.77 391.232V409.946C1117.75 409.594 1116.4 409.315 1114.72 409.109C1113.08 408.904 1111.61 408.801 1110.32 408.801C1107.77 408.801 1105.46 409.374 1103.41 410.518C1101.38 411.634 1099.78 413.205 1098.61 415.23C1097.46 417.226 1096.89 419.575 1096.89 422.276V459H1075.36ZM1149.08 420.426V459H1127.55V391.364H1148.02V403.781H1148.77C1150.27 399.642 1152.82 396.398 1156.43 394.05C1160.05 391.672 1164.35 390.483 1169.34 390.483C1174.09 390.483 1178.22 391.554 1181.71 393.697C1185.23 395.811 1187.96 398.776 1189.9 402.592C1191.87 406.379 1192.84 410.812 1192.81 415.891V459H1171.27V420.118C1171.3 416.36 1170.35 413.425 1168.41 411.311C1166.5 409.197 1163.85 408.141 1160.44 408.141C1158.18 408.141 1156.18 408.64 1154.45 409.638C1152.75 410.607 1151.43 412.001 1150.49 413.821C1149.58 415.641 1149.11 417.843 1149.08 420.426ZM1265.19 412.016L1245.42 412.544C1245.21 411.135 1244.65 409.887 1243.74 408.801C1242.83 407.686 1241.64 406.82 1240.18 406.203C1238.74 405.557 1237.06 405.234 1235.16 405.234C1232.66 405.234 1230.53 405.733 1228.77 406.732C1227.04 407.73 1226.19 409.08 1226.22 410.783C1226.19 412.104 1226.72 413.249 1227.8 414.217C1228.92 415.186 1230.9 415.964 1233.75 416.551L1246.78 419.017C1253.53 420.309 1258.55 422.452 1261.84 425.446C1265.16 428.44 1266.83 432.403 1266.86 437.335C1266.83 441.973 1265.45 446.01 1262.72 449.445C1260.02 452.879 1256.32 455.551 1251.62 457.459C1246.93 459.338 1241.56 460.277 1235.51 460.277C1225.85 460.277 1218.23 458.295 1212.65 454.332C1207.11 450.34 1203.94 444.997 1203.14 438.304L1224.41 437.776C1224.88 440.241 1226.1 442.12 1228.07 443.412C1230.03 444.704 1232.54 445.349 1235.6 445.349C1238.36 445.349 1240.6 444.836 1242.33 443.808C1244.07 442.781 1244.95 441.416 1244.98 439.713C1244.95 438.187 1244.27 436.968 1242.95 436.058C1241.63 435.119 1239.56 434.385 1236.74 433.857L1224.94 431.611C1218.16 430.378 1213.11 428.103 1209.79 424.786C1206.48 421.439 1204.83 417.182 1204.86 412.016C1204.83 407.495 1206.04 403.634 1208.47 400.435C1210.91 397.205 1214.37 394.74 1218.86 393.037C1223.36 391.334 1228.65 390.483 1234.76 390.483C1243.92 390.483 1251.14 392.406 1256.42 396.251C1261.71 400.068 1264.63 405.322 1265.19 412.016Z"
            fill="white"
          />
          <path
            d="M56.2287 480.909V542H46.3849L17.5994 500.388H17.0923V542H6.02557V480.909H15.929L44.6847 522.551H45.2216V480.909H56.2287ZM79.354 480.909V542H68.2873V480.909H79.354ZM132.264 500.418C131.767 498.807 131.081 497.365 130.206 496.092C129.351 494.8 128.317 493.696 127.104 492.781C125.911 491.866 124.538 491.18 122.987 490.723C121.436 490.246 119.746 490.007 117.916 490.007C114.635 490.007 111.712 490.832 109.146 492.483C106.581 494.134 104.563 496.56 103.091 499.761C101.639 502.943 100.913 506.821 100.913 511.395C100.913 516.009 101.639 519.916 103.091 523.118C104.543 526.32 106.561 528.756 109.146 530.426C111.732 532.077 114.734 532.902 118.155 532.902C121.257 532.902 123.942 532.305 126.209 531.112C128.496 529.919 130.256 528.229 131.489 526.041C132.722 523.834 133.338 521.249 133.338 518.286L135.844 518.673H119.259V510.023H144.047V517.361C144.047 522.591 142.933 527.115 140.706 530.933C138.479 534.751 135.416 537.695 131.518 539.763C127.621 541.811 123.146 542.835 118.095 542.835C112.467 542.835 107.526 541.572 103.27 539.047C99.0341 536.501 95.723 532.892 93.3366 528.219C90.9702 523.526 89.7869 517.957 89.7869 511.514C89.7869 506.582 90.483 502.178 91.875 498.3C93.2869 494.422 95.2557 491.131 97.7812 488.426C100.307 485.702 103.27 483.634 106.67 482.222C110.071 480.79 113.77 480.074 117.767 480.074C121.148 480.074 124.3 480.571 127.223 481.565C130.146 482.54 132.741 483.932 135.009 485.741C137.295 487.551 139.175 489.699 140.646 492.185C142.118 494.67 143.082 497.415 143.54 500.418H132.264ZM175.584 542V480.909H186.651V532.723H213.557V542H175.584ZM212.685 490.186V480.909H261.426V490.186H242.544V542H231.567V490.186H212.685ZM291.524 542H270.822V480.909H291.942C298.007 480.909 303.217 482.132 307.572 484.578C311.947 487.004 315.308 490.494 317.655 495.048C320.001 499.602 321.175 505.051 321.175 511.395C321.175 517.759 319.991 523.227 317.625 527.801C315.278 532.375 311.888 535.885 307.453 538.331C303.038 540.777 297.729 542 291.524 542ZM281.889 532.425H290.987C295.243 532.425 298.793 531.649 301.636 530.098C304.48 528.527 306.618 526.19 308.05 523.088C309.482 519.966 310.197 516.068 310.197 511.395C310.197 506.722 309.482 502.844 308.05 499.761C306.618 496.659 304.5 494.342 301.696 492.811C298.912 491.26 295.452 490.484 291.315 490.484H281.889V532.425ZM334.009 542.656C332.199 542.656 330.648 542.02 329.355 540.747C328.063 539.474 327.426 537.923 327.446 536.094C327.426 534.304 328.063 532.773 329.355 531.5C330.648 530.227 332.199 529.591 334.009 529.591C335.759 529.591 337.28 530.227 338.573 531.5C339.885 532.773 340.551 534.304 340.571 536.094C340.551 537.307 340.233 538.411 339.617 539.405C339.02 540.399 338.225 541.195 337.23 541.791C336.256 542.368 335.182 542.656 334.009 542.656ZM368.564 542V507.091H381.655C384.337 507.091 386.587 507.557 388.405 508.489C390.235 509.42 391.615 510.727 392.547 512.409C393.49 514.08 393.962 516.028 393.962 518.256C393.962 520.494 393.485 522.437 392.53 524.085C391.587 525.722 390.195 526.989 388.354 527.886C386.513 528.773 384.252 529.216 381.57 529.216H372.246V523.966H380.718C382.286 523.966 383.57 523.75 384.57 523.318C385.57 522.875 386.309 522.233 386.786 521.392C387.275 520.54 387.519 519.494 387.519 518.256C387.519 517.017 387.275 515.96 386.786 515.085C386.297 514.199 385.553 513.528 384.553 513.074C383.553 512.608 382.263 512.375 380.684 512.375H374.888V542H368.564ZM386.598 526.182L395.24 542H388.184L379.695 526.182H386.598ZM429.664 518.869H423.289C423.107 517.824 422.772 516.898 422.283 516.091C421.794 515.273 421.186 514.58 420.459 514.011C419.732 513.443 418.902 513.017 417.971 512.733C417.05 512.438 416.056 512.29 414.988 512.29C413.09 512.29 411.408 512.767 409.942 513.722C408.476 514.665 407.328 516.051 406.499 517.881C405.669 519.699 405.255 521.92 405.255 524.545C405.255 527.216 405.669 529.466 406.499 531.295C407.34 533.114 408.488 534.489 409.942 535.42C411.408 536.341 413.084 536.801 414.971 536.801C416.016 536.801 416.993 536.665 417.902 536.392C418.823 536.108 419.647 535.693 420.374 535.148C421.113 534.602 421.732 533.932 422.232 533.136C422.743 532.341 423.096 531.432 423.289 530.409L429.664 530.443C429.425 532.102 428.908 533.659 428.113 535.114C427.328 536.568 426.3 537.852 425.027 538.966C423.755 540.068 422.266 540.932 420.561 541.557C418.857 542.17 416.965 542.477 414.885 542.477C411.817 542.477 409.078 541.767 406.669 540.347C404.26 538.926 402.363 536.875 400.976 534.193C399.59 531.511 398.897 528.295 398.897 524.545C398.897 520.784 399.596 517.568 400.993 514.898C402.391 512.216 404.294 510.165 406.703 508.744C409.113 507.324 411.84 506.614 414.885 506.614C416.828 506.614 418.635 506.886 420.306 507.432C421.976 507.977 423.465 508.778 424.772 509.835C426.078 510.881 427.152 512.165 427.993 513.688C428.846 515.199 429.402 516.926 429.664 518.869ZM459.429 542.477C456.895 542.477 454.645 542.051 452.679 541.199C450.725 540.347 449.191 539.182 448.077 537.705C446.975 536.216 446.429 534.528 446.441 532.642C446.429 531.176 446.748 529.83 447.395 528.602C448.043 527.375 448.918 526.352 450.02 525.534C451.134 524.705 452.373 524.176 453.736 523.949V523.71C451.941 523.312 450.486 522.398 449.373 520.966C448.27 519.523 447.725 517.858 447.736 515.972C447.725 514.176 448.225 512.574 449.236 511.165C450.248 509.756 451.634 508.648 453.395 507.841C455.157 507.023 457.168 506.614 459.429 506.614C461.668 506.614 463.662 507.023 465.412 507.841C467.174 508.648 468.56 509.756 469.571 511.165C470.594 512.574 471.105 514.176 471.105 515.972C471.105 517.858 470.543 519.523 469.418 520.966C468.304 522.398 466.867 523.312 465.105 523.71V523.949C466.469 524.176 467.696 524.705 468.787 525.534C469.89 526.352 470.765 527.375 471.412 528.602C472.071 529.83 472.401 531.176 472.401 532.642C472.401 534.528 471.844 536.216 470.73 537.705C469.617 539.182 468.083 540.347 466.128 541.199C464.185 542.051 461.952 542.477 459.429 542.477ZM459.429 537.602C460.736 537.602 461.873 537.381 462.838 536.938C463.804 536.483 464.554 535.847 465.088 535.028C465.623 534.21 465.895 533.267 465.907 532.199C465.895 531.085 465.605 530.102 465.037 529.25C464.48 528.386 463.713 527.71 462.736 527.222C461.77 526.733 460.668 526.489 459.429 526.489C458.179 526.489 457.066 526.733 456.088 527.222C455.111 527.71 454.338 528.386 453.77 529.25C453.213 530.102 452.941 531.085 452.952 532.199C452.941 533.267 453.202 534.21 453.736 535.028C454.27 535.835 455.02 536.466 455.986 536.92C456.963 537.375 458.111 537.602 459.429 537.602ZM459.429 521.699C460.498 521.699 461.441 521.483 462.259 521.051C463.088 520.619 463.742 520.017 464.219 519.244C464.696 518.472 464.941 517.58 464.952 516.568C464.941 515.568 464.702 514.693 464.236 513.943C463.77 513.182 463.123 512.597 462.293 512.188C461.463 511.767 460.509 511.557 459.429 511.557C458.327 511.557 457.355 511.767 456.515 512.188C455.685 512.597 455.037 513.182 454.571 513.943C454.117 514.693 453.895 515.568 453.907 516.568C453.895 517.58 454.123 518.472 454.588 519.244C455.066 520.006 455.719 520.608 456.549 521.051C457.39 521.483 458.35 521.699 459.429 521.699ZM490.414 542.477C487.88 542.477 485.63 542.051 483.664 541.199C481.709 540.347 480.175 539.182 479.061 537.705C477.959 536.216 477.414 534.528 477.425 532.642C477.414 531.176 477.732 529.83 478.38 528.602C479.027 527.375 479.902 526.352 481.005 525.534C482.118 524.705 483.357 524.176 484.721 523.949V523.71C482.925 523.312 481.471 522.398 480.357 520.966C479.255 519.523 478.709 517.858 478.721 515.972C478.709 514.176 479.209 512.574 480.221 511.165C481.232 509.756 482.618 508.648 484.38 507.841C486.141 507.023 488.152 506.614 490.414 506.614C492.652 506.614 494.647 507.023 496.397 507.841C498.158 508.648 499.544 509.756 500.556 511.165C501.578 512.574 502.09 514.176 502.09 515.972C502.09 517.858 501.527 519.523 500.402 520.966C499.289 522.398 497.851 523.312 496.09 523.71V523.949C497.453 524.176 498.681 524.705 499.772 525.534C500.874 526.352 501.749 527.375 502.397 528.602C503.056 529.83 503.385 531.176 503.385 532.642C503.385 534.528 502.828 536.216 501.715 537.705C500.601 539.182 499.067 540.347 497.113 541.199C495.169 542.051 492.936 542.477 490.414 542.477ZM490.414 537.602C491.721 537.602 492.857 537.381 493.823 536.938C494.789 536.483 495.539 535.847 496.073 535.028C496.607 534.21 496.88 533.267 496.891 532.199C496.88 531.085 496.59 530.102 496.022 529.25C495.465 528.386 494.698 527.71 493.721 527.222C492.755 526.733 491.652 526.489 490.414 526.489C489.164 526.489 488.05 526.733 487.073 527.222C486.096 527.71 485.323 528.386 484.755 529.25C484.198 530.102 483.925 531.085 483.936 532.199C483.925 533.267 484.186 534.21 484.721 535.028C485.255 535.835 486.005 536.466 486.971 536.92C487.948 537.375 489.096 537.602 490.414 537.602ZM490.414 521.699C491.482 521.699 492.425 521.483 493.243 521.051C494.073 520.619 494.726 520.017 495.203 519.244C495.681 518.472 495.925 517.58 495.936 516.568C495.925 515.568 495.686 514.693 495.221 513.943C494.755 513.182 494.107 512.597 493.277 512.188C492.448 511.767 491.493 511.557 490.414 511.557C489.311 511.557 488.34 511.767 487.499 512.188C486.669 512.597 486.022 513.182 485.556 513.943C485.101 514.693 484.88 515.568 484.891 516.568C484.88 517.58 485.107 518.472 485.573 519.244C486.05 520.006 486.703 520.608 487.533 521.051C488.374 521.483 489.334 521.699 490.414 521.699ZM508.358 535.523V530.494L523.171 507.091H527.364V514.25H524.807L514.836 530.051V530.324H535.512V535.523H508.358ZM525.012 542V533.989L525.08 531.739V507.091H531.046V542H525.012ZM540.327 535.523V530.494L555.14 507.091H559.333V514.25H556.776L546.804 530.051V530.324H567.48V535.523H540.327ZM556.98 542V533.989L557.049 531.739V507.091H563.015V542H556.98ZM585.455 542.477C583 542.477 580.819 542.057 578.909 541.216C577.012 540.375 575.512 539.205 574.409 537.705C573.307 536.205 572.722 534.472 572.654 532.506H579.063C579.12 533.449 579.432 534.273 580 534.977C580.569 535.67 581.324 536.21 582.267 536.597C583.211 536.983 584.267 537.176 585.438 537.176C586.688 537.176 587.796 536.96 588.762 536.528C589.728 536.085 590.483 535.472 591.029 534.688C591.574 533.903 591.841 533 591.83 531.977C591.841 530.92 591.569 529.989 591.012 529.182C590.455 528.375 589.648 527.744 588.591 527.29C587.546 526.835 586.284 526.608 584.807 526.608H581.722V521.733H584.807C586.023 521.733 587.086 521.523 587.995 521.102C588.915 520.682 589.637 520.091 590.159 519.33C590.682 518.557 590.938 517.665 590.926 516.653C590.938 515.665 590.716 514.807 590.262 514.08C589.819 513.341 589.188 512.767 588.37 512.358C587.563 511.949 586.614 511.744 585.523 511.744C584.455 511.744 583.466 511.937 582.557 512.324C581.648 512.71 580.915 513.261 580.358 513.977C579.801 514.682 579.506 515.523 579.472 516.5H573.387C573.432 514.545 573.995 512.83 575.074 511.352C576.165 509.864 577.62 508.705 579.438 507.875C581.256 507.034 583.296 506.614 585.557 506.614C587.887 506.614 589.909 507.051 591.625 507.926C593.353 508.79 594.688 509.955 595.631 511.42C596.574 512.886 597.046 514.506 597.046 516.278C597.057 518.244 596.478 519.892 595.307 521.222C594.148 522.551 592.625 523.42 590.739 523.83V524.102C593.194 524.443 595.074 525.352 596.381 526.83C597.699 528.295 598.353 530.119 598.341 532.301C598.341 534.256 597.784 536.006 596.671 537.551C595.569 539.085 594.046 540.29 592.103 541.165C590.171 542.04 587.955 542.477 585.455 542.477ZM616.601 542.477C614.067 542.477 611.817 542.051 609.851 541.199C607.897 540.347 606.363 539.182 605.249 537.705C604.147 536.216 603.601 534.528 603.613 532.642C603.601 531.176 603.919 529.83 604.567 528.602C605.215 527.375 606.09 526.352 607.192 525.534C608.306 524.705 609.544 524.176 610.908 523.949V523.71C609.113 523.312 607.658 522.398 606.544 520.966C605.442 519.523 604.897 517.858 604.908 515.972C604.897 514.176 605.397 512.574 606.408 511.165C607.419 509.756 608.806 508.648 610.567 507.841C612.328 507.023 614.34 506.614 616.601 506.614C618.84 506.614 620.834 507.023 622.584 507.841C624.346 508.648 625.732 509.756 626.743 511.165C627.766 512.574 628.277 514.176 628.277 515.972C628.277 517.858 627.715 519.523 626.59 520.966C625.476 522.398 624.039 523.312 622.277 523.71V523.949C623.641 524.176 624.868 524.705 625.959 525.534C627.061 526.352 627.936 527.375 628.584 528.602C629.243 529.83 629.573 531.176 629.573 532.642C629.573 534.528 629.016 536.216 627.902 537.705C626.789 539.182 625.255 540.347 623.3 541.199C621.357 542.051 619.124 542.477 616.601 542.477ZM616.601 537.602C617.908 537.602 619.044 537.381 620.01 536.938C620.976 536.483 621.726 535.847 622.26 535.028C622.794 534.21 623.067 533.267 623.078 532.199C623.067 531.085 622.777 530.102 622.209 529.25C621.652 528.386 620.885 527.71 619.908 527.222C618.942 526.733 617.84 526.489 616.601 526.489C615.351 526.489 614.238 526.733 613.26 527.222C612.283 527.71 611.51 528.386 610.942 529.25C610.385 530.102 610.113 531.085 610.124 532.199C610.113 533.267 610.374 534.21 610.908 535.028C611.442 535.835 612.192 536.466 613.158 536.92C614.135 537.375 615.283 537.602 616.601 537.602ZM616.601 521.699C617.669 521.699 618.613 521.483 619.431 521.051C620.26 520.619 620.914 520.017 621.391 519.244C621.868 518.472 622.113 517.58 622.124 516.568C622.113 515.568 621.874 514.693 621.408 513.943C620.942 513.182 620.294 512.597 619.465 512.188C618.635 511.767 617.681 511.557 616.601 511.557C615.499 511.557 614.527 511.767 613.686 512.188C612.857 512.597 612.209 513.182 611.743 513.943C611.289 514.693 611.067 515.568 611.078 516.568C611.067 517.58 611.294 518.472 611.76 519.244C612.238 520.006 612.891 520.608 613.721 521.051C614.561 521.483 615.522 521.699 616.601 521.699Z"
            fill="white"
          />
        </svg>
      </div>
      <HamburgerIcons />
    </Style>
  );
};

export default NavBar;
