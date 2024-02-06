import { useRecoilState } from 'recoil';
import { todayKeyword } from '@store/Store.ts';
import * as graph from '@/util/Constants/mindmapConstants';

export const useContextMenuOptions = () => {
  const [keywordList, setKeywordList] = useRecoilState(todayKeyword);
  const newKeywordList = new Set() as Set<string>;

  const handleKeywordList = () => {
    setKeywordList([...newKeywordList]);
  };

  const contextMenuOptions = {
    selector: 'node',
    adaptativeNodeSpotlightRadius: true,
    menuRadius: 50,
    commands: [
      {
        fillColor: 'rgba(0, 0, 0, 0)',
        content: '',
        enabled: false,
      },
      {
        // 즐겨찾기 제거
        content:
          '<svg height="80%" width="80%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 0 70 50" xml:space="preserve" fill="#000000" stroke="#000000" stroke-width="0.00047939999999999994"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#bfbfbf;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg>',
        select: function (ele: any) {
          newKeywordList.delete(ele.id());
          ele.style('outline-color', graph.nodeColor);
          // console.log(newKeywordList);
          handleKeywordList();
        },
      },
      {
        fillColor: 'rgba(0, 0, 0, 0)',
        content: '',
        enabled: false,
      },
      {
        fillColor: 'rgba(0, 0, 0, 0)',
        content: '',
        enabled: false,
      },
      {
        // 즐겨찾기 추가
        content:
          '<svg height="80%" width="80%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 0 70 50" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#fbff00;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg>',
        select: function (ele: any) {
          newKeywordList.add(ele.id());
          ele.style('outline-color', graph.highlightColor);
          // console.log(newKeywordList);
          handleKeywordList();
        },
      },
      {
        fillColor: 'rgba(0, 0, 0, 0)',
        content: '',
        enabled: false,
      },
    ],
  };
  return { contextMenuOptions, keywordList, handler: handleKeywordList };
};
