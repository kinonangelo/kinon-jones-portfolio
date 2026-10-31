type DrawingKind = "glider" | "uav" | "structure" | "damper";

/** Decorative schematics, not representations of project evidence. */
export function EngineeringDrawing({
  kind,
  hero = false,
}: {
  kind: DrawingKind;
  hero?: boolean;
}) {
  const id = `${kind}-${hero}`;
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      aria-hidden="true"
      className={`engineering-drawing h-full w-full ${hero ? "hero-plane" : ""}`}
    >
      <defs>
        <pattern
          id={`grid-${id}`}
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M30 0H0V30"
            stroke="currentColor"
            strokeOpacity=".07"
            strokeWidth=".7"
          />
        </pattern>
        <linearGradient id={`metal-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#f8f8f8" />
          <stop offset=".5" stopColor="#cccccc" />
          <stop offset="1" stopColor="#929292" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill={`url(#grid-${id})`} />
      <g stroke="#a7a7a7" strokeWidth=".7" strokeDasharray="4 5">
        <path d="M35 200H565M300 35V365" />
        <circle cx="300" cy="200" r="145" />
        <circle cx="300" cy="200" r="100" />
      </g>
      <g
        stroke="#666666"
        strokeWidth="1.15"
        strokeLinejoin="round"
        fill={`url(#metal-${id})`}
      >
        {(kind === "glider" || kind === "uav") && (
          <g
            transform={`translate(300 200) rotate(${hero ? -29 : -18}) translate(-300 -200)`}
          >
            <path
              d={
                kind === "glider"
                  ? "M291 179 52 221 43 238 293 213 307 213 557 238 548 221 309 179Z"
                  : "M289 173 113 225 101 245 292 215 308 215 499 245 487 225 311 173Z"
              }
            />
            <path d="M295 288 229 312 228 321 299 314 372 321 371 312 305 288Z" />
            <path d="M300 74C284 80 285 133 290 177L296 294 300 330 304 294 310 177C315 133 316 80 300 74Z" />
            <path
              d="M300 95C292 100 292 123 294 143Q300 149 306 143C308 123 308 100 300 95Z"
              fill="#797979"
            />
            <path
              d="M62 230 291 197M309 197 538 230M300 155V305M237 315 294 306M306 306 363 315"
              fill="none"
              strokeWidth=".65"
            />
            {kind === "uav" && (
              <>
                <path d="M266 81H334M299 73V91" strokeWidth="3" />
                <circle cx="300" cy="81" r="4" />
              </>
            )}
            <path
              d="M52 257V270H548V257M300 266V274"
              fill="none"
              stroke="#999999"
              strokeWidth=".6"
            />
          </g>
        )}
        {kind === "structure" && (
          <g transform="translate(300 200) rotate(-16) translate(-300 -200)">
            <path d="M104 139 460 118 511 228 155 276Z" fill="#cecece" />
            <path
              d="M104 139 155 276 155 291 93 150ZM155 276 511 228 510 243 155 291Z"
              fill="#a0a0a0"
            />
            {Array.from({ length: 10 }, (_, i) => {
              const x = 104 + i * 35.6;
              const y = 139 - i * 2.1;
              return (
                <g key={i} fill="none">
                  <path
                    d={`M${x} ${y}l51 ${137 - i * 2.7}M${x} ${y}l86.6 ${132.2 - i * 2.7}`}
                  />
                  <path
                    d={`M${x + 25.5} ${y + (137 - i * 2.7) / 2}l35.6 -3.45`}
                  />
                </g>
              );
            })}
            <path
              d="M98 141 73 108M460 118 448 86M155 291 151 319M510 243 524 277"
              strokeDasharray="3 3"
            />
            <path
              d="M247 86V124M240 113 247 124 254 113M328 80V119M321 108 328 119 335 108M408 74V114M401 103 408 114 415 103"
              fill="none"
            />
          </g>
        )}
        {kind === "damper" && (
          <g transform="translate(300 200) rotate(-23) translate(-300 -200)">
            <path d="M120 185H249V215H120Z" />
            <ellipse cx="121" cy="200" rx="13" ry="25" />
            <ellipse cx="121" cy="200" rx="6" ry="12" fill="#e6e6e6" />
            <path d="M227 164H388V236H227Z" />
            <ellipse cx="227" cy="200" rx="18" ry="36" />
            <ellipse cx="388" cy="200" rx="18" ry="36" />
            <path d="M385 189H479V211H385Z" />
            <ellipse cx="479" cy="200" rx="14" ry="25" />
            <ellipse cx="479" cy="200" rx="6" ry="12" fill="#e6e6e6" />
            <path
              d="M242 168V232M252 168V232M363 167V233M373 167V233M262 178H353M262 221H353"
              fill="none"
            />
            <path
              d="M105 257V278H490V257M221 251V285M404 249V285M93 200H505"
              fill="none"
              strokeDasharray="3 4"
              strokeWidth=".6"
            />
          </g>
        )}
      </g>
      <g stroke="#777777" strokeWidth=".8">
        <path d="M22 32H38M30 24V40M562 368H578M570 360V376" />
      </g>
    </svg>
  );
}
