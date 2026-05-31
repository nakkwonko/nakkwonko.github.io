// 1. HTML의 빈 <main> 요소를 ID값으로 찾아옵니다.
const mainContainer = document.getElementById('resume-main');

// 2. 언제든지 수정 가능한 '진짜 내용'을 백틱(`) 기호 안에 작성합니다.
const changeableBody = `
    <section>
        <h2>소개 (About Me)</h2>
        <p> 본인은 국내 가전 유통 그룹인 롯데 하이마트에서 지게차 기사로서 다년간의 근무 경험과 다양한 상화에서도
           안전한 작업을 수행해온 바, 그간 쌓아온 스킬을 바탕으로 새로운 경험을 하고자 지원하게 되었습니다.</p>
           
        <p>하이마트 물류에서 지게차 기사로서 본인이 담당하였던 상품은 냉장고, 세탁기, 건조기, 에어컨 등의 상/하차
           업무와 PDA입출고 처리, WMS 재고 관리, 하이마트 인터넷 출고등 이었습니다.</p>

        <p>더불어 PDA일일 간이 재고 조사, WMS 입고 스케줄 확인/제품 적치 공간 조정, WMS 기반 주간 재고 조사 실시.</p>
    </section>

    <section>
        <h2>학력 (Education)</h2>
        <ul>
            <li><strong>서울 관악 고등학교</strong> - 졸업 (1976.03)</li>
        </ul>
    </section>

    <section>
        <h2>기술 스택 (Skills)</h2>
        <ul>
            <li><strong>WMS, PDA</strong></li>
            <li><strong>지게차 운전(좌식, 입식), 건설 기계조종사 면허증 보유</strong></li>
        </ul>
    </section>

    <section>
        <h2>경력 (Experience)</h2>
        <div class="project-item">
            <span class="project-title">롯데 하이마트 - 지게차 기사</span> (2003.06 ~ 2022.07)
            <ul>
            <!-- 프로젝트 상세 내용에 따라 하이퍼 링크 적용  -->
                <li>GitHub Pages를 이용한 개인 정적 블로그 및 이력서 배포</li>
                <li>HTML과 CSS를 활용한 시맨틱 마크업 및 반응형 웹 디자인 구현</li>
            </ul>
        </div>
    </section>
`;

// 3. 찾아온 <main> 태그 내부에 준비된 내용을 주입합니다.
mainContainer.innerHTML = changeableBody;
