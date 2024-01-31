interface nodeData {
  id: string;
  label: string;
  cnt: string;
}

export const nodePopper = (target: any) => {
  const tooltipId = `popper-target-${target.id()}`;
  const existingTarget = document.getElementById(tooltipId);
  if (existingTarget && String(existingTarget).length !== 0) {
    existingTarget.remove();
  }

  const popper = target.popper({
    content: () => {
      const tooltip = document.createElement('div');
      tooltip.id = tooltipId;
      tooltip.classList.add('target-popper');
      const textcontainer = document.createElement('span');

      // popper 데이터 추가
      const targetData: nodeData = target.data();
      textcontainer.append('검색 횟수: ' + targetData.cnt);
      tooltip.append(textcontainer);
      document.body.appendChild(tooltip);

      return tooltip;
    },
  });

  target.on('position', () => {
    popper.update();
  });

  target.cy().on('pan zoom resize', () => {
    popper.update();
  });

  target
    .on('mouseover', () => {
      popper.update();
      if (document.getElementById(tooltipId)) {
        document.getElementById(tooltipId)?.classList.add('active');
      }
    })
    .on('mouseout', () => {
      if (document.getElementById(tooltipId)) {
        document.getElementById(tooltipId)?.classList.remove('active');
      }
    })
    .on('mousedown', () => {
      if (document.getElementById(tooltipId)) {
        document.getElementById(tooltipId)?.classList.remove('active');
      }
    });
};
