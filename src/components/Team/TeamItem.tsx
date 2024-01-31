const statusStyles = {
  not_written: { bgClass: 'bg-gray-500', text: '미작성', live: false },
  writing: { bgClass: 'bg-red-500', text: '작성중', live: true },
  written: { bgClass: 'bg-green-500', text: '작성완료', live: false },
};

const TeamItem = ({ name, role, status, profileImage, onPoke }) => {
  const { bgClass, text, live } = statusStyles[status] || statusStyles.not_written;

  return (
    <li>
      <div className="flex items-center gap-x-6">
        <div className="relative flex flex-col items-center">
          <img className={`h-16 w-16 rounded-full ${live ? 'border-2 border-red-500' : ''}`}
               src={profileImage}
               alt={name} />
          {live && (
            <span className="absolute right-0 top-0 rounded-full bg-red-500 px-1 text-xs text-white">
              LIVE
            </span>
          )}
          <span className={`mt-2 px-3 py-1 text-sm text-white ${bgClass} rounded-full`}>
            {text}
          </span>
        </div>
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">{role}</p>
          <button
            onClick={onPoke}
            className="mt-2 flex items-center rounded-md bg-blue-500 px-2 py-1 text-xs font-medium leading-5 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >

            <svg className="mr-1 h-8 w-9" xmlns="http://www.w3.org/2000/svg" version="1.0" width="1280.000000pt"
                 height="960.000000pt" viewBox="0 0 1280.000000 960.000000" preserveAspectRatio="xMidYMid meet">
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g transform="translate(0.000000,960.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path
                  d="M6710 7230 c-300 -37 -407 -60 -705 -155 -334 -106 -495 -141 -825 -180 -118 -14 -246 -29 -285 -34 -38 -5 -142 -15 -230 -21 -334 -24 -491 -57 -753 -159 -219 -85 -234 -90 -462 -144 -174 -42 -338 -68 -525 -82 -188 -15 -419 -75 -630 -162 -206 -86 -339 -192 -402 -321 -37 -73 -38 -80 -38 -182 0 -95 3 -111 29 -167 54 -117 164 -196 341 -243 62 -17 120 -23 255 -27 207 -6 314 7 538 68 438 121 766 176 1292 219 139 11 352 34 474 50 483 64 910 109 922 97 17 -17 -70 -138 -211 -292 -146 -159 -243 -295 -327 -462 -88 -172 -113 -249 -128 -385 -14 -132 -13 -183 5 -253 48 -185 213 -332 445 -399 55 -16 84 -29 82 -37 -11 -44 -13 -493 -3 -558 25 -158 114 -278 255 -345 90 -43 140 -55 261 -63 l93 -6 37 -146 c54 -214 63 -241 102 -293 67 -93 161 -153 298 -193 82 -23 262 -24 650 -3 279 15 318 20 388 42 90 30 113 31 187 11 362 -100 912 -119 1160 -39 96 31 137 33 410 20 326 -16 601 29 870 143 160 68 147 67 300 26 193 -51 370 -134 615 -289 77 -49 183 -111 235 -138 52 -27 138 -75 190 -107 167 -102 480 -285 660 -386 206 -115 430 -243 483 -274 l37 -23 -2 1788 -3 1788 -90 34 c-290 107 -374 142 -505 207 -300 150 -634 252 -934 285 -54 6 -113 17 -130 26 -17 8 -78 53 -136 99 -225 180 -386 288 -569 379 -47 24 -104 49 -126 56 -22 7 -67 25 -100 41 -33 15 -88 39 -121 53 -34 14 -106 46 -160 72 -93 43 -299 116 -459 163 -102 30 -199 79 -358 184 -132 86 -176 113 -347 211 -136 79 -374 168 -555 207 -143 31 -230 58 -452 138 -165 59 -372 118 -534 151 -170 35 -283 37 -509 10z" />
              </g>
            </svg>

            콕 찌르기
          </button>
        </div>
      </div>
    </li>
  );
};

export default TeamItem;
