// Shared design tokens used across the portfolio's card-based sections
// (Experience, Skills, Certifications, Projects) so the whole page reads
// as one consistent system instead of several similar-but-different looks.

export const accentPalette = [
  '#7DD3FC', // sky
  '#C4B5FD', // violet
  '#6EE7B7', // mint
  '#FDBA74', // amber
  '#F9A8D4', // rose
  '#93C5FD', // blue
  '#FCA5A5', // coral
  '#5EEAD4', // teal
  '#FDE68A', // gold
  '#A5B4FC', // indigo
];

export const getAccent = (index) => accentPalette[index % accentPalette.length];

// Common "surface" card treatment: dark panel, hairline border, soft hover lift.
export const surfaceCardSx = (accent) => ({
  borderRadius: '12px',
  bgcolor: '#15161a',
  border: '1px solid rgba(255,255,255,0.07)',
  borderLeft: accent ? `2px solid ${accent}` : undefined,
  transition: 'background-color 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
  '&:hover': {
    bgcolor: '#18181c',
    transform: 'translateY(-2px)',
    borderColor: 'rgba(255,255,255,0.12)',
  },
});

export const mutedText = '#9A9A9E';
export const labelText = '#8A8A8E';
