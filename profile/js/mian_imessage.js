/*

Name    : Responsive HTML5 Chat

Responsive HTML5 Chat helps you to create useful chatbox on your website easly. 
You can change skin and sizes. You can read the installation and support documentation 
before you begin. If you do not find the answer, do not hesitate to send a message to me.

Owner   : Vatanay Ozbeyli
Web     : www.vatanay.com
Support : hi@vatanay.com

*/

function responsiveChat(element) {
    $(element).html('<form class="chat"><span></span><div class="messages"></div></form>');

    function showLatestMessage() {
        $(element).find('.messages').scrollTop($(element).find('.messages').height());
    }
    showLatestMessage();
}

function responsiveChatPush(element, sender, origin, date, message) {
    var originClass;
    if (origin == 'me') {
        originClass = 'myMessage';
    } else {
        originClass = 'fromThem';
    }
    $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p><date><b>' + sender + '</b> ' + date + '</date></div></div>');
}

/* Activating chatbox on element */
responsiveChat('.responsive-html5-chat');

/* Let's push some dummy data */
responsiveChatPush('.chat', '최보민', 'me', '2020.7.30 1:44', '방장 적힌 짤꾸는 이제 못 쓰니까 마지막으로 쓸 겸 하고 싶은 말 글로 써 본다 회의 열기 직전까지 손 떨면서 무섭다고 생각했거든 혹시나 나를 책임감 없는 방장이라고 생각할까 봐 했던 뻘필 중 가장 책임감 없던 방장이라는 생각이 들면 어쩌나 이런 걱정 언금 방장을 가벼운 마음으로 임했던 건 아니었지만 마지막이 이렇게 돼서 나도 아쉽다고 생각하고 모든 멤버에게 정 주려고 많이 노력했었어 내 안에 있는 사람들이니까 놓치고 싶지 않았고 다 챙겨 주고 싶었던 마음이 많이 컸는데 생각보다 그게 실천하기가 어렵더라 미안한 마음 반 고마운 마음 반인데 모자라고 부족한 방장 여기까지 따라와 줘서 너무 고마웠고 앞으로는 우리 주맹이 아니지 주방장이 있으니까 다 같이 으쌰으쌰(ㅋㅋ) 열심히 굴려 봅시다 고마웠다 스쳐갔던 모든 구언금 & 97일 동안 함께 해 준 현언금 다 ㅅㄹㅎ ㅋㅋ');
responsiveChatPush('.chat', '독자1', 'you', '2020.7.30 1:44:56', 'ㅅㄹㅎ ㅋㅋ 고생 많았어요');
responsiveChatPush('.chat', '독자2', 'you', '2020.7.30 1:45:23', '회의 때 나온 말들이 조금이나마 위로가 됐으면 좋겠다 고생했어요 앞으로도 잘 부탁한다');
responsiveChatPush('.chat', '독자3', 'you', '2020.7.30 1:45:29', '최보민 사랑해!! #보민아고생했어_고마워');
responsiveChatPush('.chat', '독자3', 'you', '2020.7.30 1:48:00', '나는 우리 보민이가 최고의 방장이라고 생각해 뽀맹이 같은 방장 어디 또 있어 나는 몰라');
responsiveChatPush('.chat', '독자4', 'you', '2020.7.30 1:45:54', '형들 있어서 행복해요 고생했고 고마워요 앞으로도 잘 부탁해요');
responsiveChatPush('.chat', '독자4', 'you', '2020.7.30 1:46:48', '최보민은 짤꾸 선착 안 들어도 해준다');
responsiveChatPush('.chat', '독자5', 'you', '2020.7.30 1:46:00', 'ㅅㄹㅎ 어이 이제 계급장 떼고 붙자 보민아');
responsiveChatPush('.chat', '독자6', 'you', '2020.7.30 1:46:06', '최고의 방장 최보민');
responsiveChatPush('.chat', '독자7', 'you', '2020.7.30 1:52:52', '형 진짜 수고했고 고생 많았어요 주방장 어감이 너무 웃긴데 요리사 모자 하나 그려줘야겠다 형 이제 짤꾸 짤 별로 없어요?');
responsiveChatPush('.chat', '독자8', 'you', '2020.7.30 1:46:24', '사랑해');
responsiveChatPush('.chat', '독자9', 'you', '2020.7.30 1:46:29', 'ㅅㄹㅎ 최뽀맹');
responsiveChatPush('.chat', '독자10', 'you', '2020.7.30 1:46:44', '최보민 ㅅㄹㅎ 나한테는 니가 최고의 방장이다');
responsiveChatPush('.chat', '독자12', 'you', '2020.7.30 1:47:11', '고생했어요 보민아 최고의 방장 최보민');
responsiveChatPush('.chat', '독자13', 'you', '2020.7.30 1:47:21', '사랑해');
responsiveChatPush('.chat', '독자14', 'you', '2020.7.30 1:47:37', 'ㅅㄹㅎ 항상 고생 많았다 내 멤생 최고의 방장즈 최뽀맹 이주맹...... 계급장 떼고 붙자');
responsiveChatPush('.chat', '독자15', 'you', '2020.7.30 1:47:43', '어이 최보민 니가 내 최고의 구방장이다 고생 많았고 오래 보자');
responsiveChatPush('.chat', '독자17', 'you', '2020.7.30 1:48:23', '어이 ㅋㅋㅋ 최뽀맹 항상 꾸준하게 우리 생각해 줘서 고마웠고 그만큼 우리도 니 생각하고 있었다는 것 알아줬으면...... 5 분 후에 보자 사랑해');
responsiveChatPush('.chat', '독자18', 'you', '2020.7.30 1:51:25', '고생 많았어요');
responsiveChatPush('.chat', '독자19', 'you', '2020.7.30 1:59:15', '고생 많았어요 사랑해요');
responsiveChatPush('.chat', '독자20', 'you', '2020.7.30 2:01:41', '나도 ㅅㄹㅎ 네가 내 인생의 최고의 방장 투 탑이다 하나는 이주맹');
responsiveChatPush('.chat', '독자21', 'you', '2020.7.30 2:03:50', '고생 많았다 보민아 ㅅㄹㅎㅇ');
responsiveChatPush('.chat', '독자22', 'you', '2020.7.30 2:05:58', '고생 많았어요 최보민');
responsiveChatPush('.chat', '독자23', 'you', '2020.7.30 7:02:34', '고생 많았어 보민아 고마워');
//responsiveChatPush('.chat', 'John Doe', 'you', '08.03.2016 14:37:12', 'Yes, this is completely responsive.');

/* DEMO */
if (parent == top) {
  $("a.article").show();
}
