import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

interface WordCloudProps {
  emotionData: { text: string; size: number }[];
}

const EmotionCloud = ({ emotionData }: WordCloudProps) => {
  if (!emotionData.length) return <></>;
  const cloudRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const updateCloudSize = () => {
      if (cloudRef.current && emotionData.length > 0) {
        d3.select(cloudRef.current).selectAll('*').remove();
        const parentDiv = cloudRef.current.closest('div');
        const parentDivWidth = parentDiv ? parseInt(getComputedStyle(parentDiv).width) : 800;
        const layout = cloud()
          .size([parentDivWidth, 224])
          .padding(10)
          .words(emotionData)
          .spiral('rectangular')
          .rotate(0)
          .font('Impact')
          .fontSize((d: cloud.Word) => d.size || 0)
          .on('end', (drawnWords) => {
            const svg = d3.select(cloudRef.current);

            const wordsGroup = svg
              .append('g')
              .attr('transform', 'translate(' + parentDivWidth / 2 + ',' + 224 / 2 + ')');

            wordsGroup
              .selectAll('text')
              .data(drawnWords)
              .enter()
              .append('text')
              .style('font-size', (d) => `${d.size}px`)
              .attr('transform', (d) => `translate(${d.x},${d.y})`)
              .attr('text-anchor', 'middle')
              .attr('alignment-baseline', 'middle')
              .text((d) => (d.text !== undefined ? d.text : ''));
          });

        layout.start();
      }
    };
    updateCloudSize();
  }, [emotionData]);

  return <svg ref={cloudRef} height={224} className="w-full" />;
};

export default EmotionCloud;
