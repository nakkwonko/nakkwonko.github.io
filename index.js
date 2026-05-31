// 1. HTML의 빈 <main> 요소를 ID값으로 찾아옵니다.
const mainContainer = document.getElementById('resume-main');

// 2. 언제든지 수정 가능한 '진짜 내용'을 백틱(`) 기호 안에 작성합니다.
const changeableBody = `
    <section>
        <h2>소개 (About Me)</h2>
        <p>여기에 본인을 소개하는 간단한 한두 줄의 문장을 입력하세요. 프론트엔드 개발자로서의 목표나 비전을 적으면 좋습니다.</p>
    </section>

    <section>
        <h2>학력 (Education)</h2>
        <ul>
            <li><strong>OO대학교</strong> - 컴퓨터공학과 학사 졸업 (2020.03 ~ 2026.02)</li>
        </ul>
    </section>

    <section>
        <h2>기술 스택 (Skills)</h2>
        <ul>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+)</li>
            <li><strong>Tools:</strong> Git, GitHub, VS Code</li>
        </ul>
    </section>

    <section>
        <h2>프로젝트 (Projects)</h2>
        <div class="project-item">
            <span class="project-title">나만의 포트폴리오 웹사이트</span> (2026.05 ~ 진행 중)
            <ul>
                <li>GitHub Pages를 이용한 개인 정적 블로그 및 이력서 배포</li>
                <li>HTML과 CSS를 활용한 시맨틱 마크업 및 반응형 웹 디자인 구현</li>
            </ul>
        </div>
    </section>
`;

// 3. 찾아온 <main> 태그 내부에 준비된 내용을 주입합니다.
mainContainer.innerHTML = changeableBody;
