import { ImageResponse } from 'next/og';

export const alt = 'LIFTOFF — Strategic Digital Product Design & Development Studio';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(to bottom, #FAFAF8, #FFFFFF)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: '#3F3F46',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                border: '4px solid white',
                borderTop: 'none',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                position: 'absolute',
                bottom: '8px',
              }}
            />
            <div
              style={{
                width: '12px',
                height: '12px',
                background: '#D4A574',
                position: 'absolute',
                top: '12px',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              }}
            />
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#0B0F19',
              letterSpacing: '-0.02em',
            }}
          >
            LIFTOFF
          </div>
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#0B0F19',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: '20px',
            maxWidth: '1000px',
          }}
        >
          Where Premium Design Meets Strategic Engineering
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#52525B',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          UI/UX, web, and product engineering for startups and growing companies.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


