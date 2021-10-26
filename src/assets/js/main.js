(function ($) {
	$.extend({
		silence: (options) => {
			var silence = new Silence();
			silence.init(options);
		}
	});
	class Silence {
		constructor() {
			this.defaluts = {
				profile: {
					enable: false,
					avatar: null,
					favicon: null,
				},
				catalog: {
					enable: false,
					move: true,
					index: true,
					level1: 'h2',
					level2: 'h3',
					level3: 'h4',
				},
				signature: {
					author: null,
					enable: false,
					home: 'https://www.cnblogs.com',
					license: 'CC BY 4.0',
					link: 'https://creativecommons.org/licenses/by/4.0'
				},
				sponsor: {
					enable: true,
					paypal: null,
					wechat: 'https://www.cnblogs.com/images/cnblogs_com/zouwangblog/1477590/t_%e5%be%ae%e4%bf%a1%e5%9b%be%e7%89%87_20190704175553.png',
					alipay: 'https://www.cnblogs.com/images/cnblogs_com/zouwangblog/1477590/t_%e5%be%ae%e4%bf%a1%e5%9b%be%e7%89%87_20190704174158.png'
				},
				github: {
					enable: false,
					color: '#fff',
					fill: null,
					link: null,
				},
				topImg: {
					homeTopImg: [
						"https://img2018.cnblogs.com/blog/1646268/201908/1646268-20190806172418911-2037584311.jpg",
					],
					notHomeTopImg: [
						"https://img2018.cnblogs.com/blog/1646268/201908/1646268-20190806172418911-2037584311.jpg"
					]
				},
				topInfo: {
					title: 'Hi,Toretto',
					text: 'You got to put the past behind you before you can move on.',
					github: "",
					weibo: "",
					telegram: "",
					music: "",
					twitter: "",
					zhihu: "",
					mail: "",
				}
			};

			this.version = '1.0.0';
		}

		get cnblogs() {
			return {
				header: '#header',
				blogTitle: '#blogTitle',
				publicProfile: '#profile_block',
				navigator: '#navigator',
				navList: '#navList',
				sideBar: '#sideBar',
				sideBarMain: '#sideBarMain',
				forFlow: '.forFlow',
				postTitle: '#cb_post_title_url',
				postDetail: '#post_detail',
				postBody: '#cnblogs_post_body',
				postDigg: '#div_digg',
				postCommentBody: '.blog_comment_body',
				feedbackContent: '.feedbackCon',
				postSignature: '#MySignature',
				footer: '#footer',
			};
		}

		get isPostPage() {
			return $(this.cnblogs.postDetail).length > 0;
		}

		/**
		 * 初始化
		 * @param {Object} options 全局配置选项
		 */
		init(options) {
			if (options) {
				$.extend(true, this.defaluts, options);
			}
			this.buildCustomElements();
			this.buildGithubCorner();
			this.buildCopyright();
			this.buildBloggerProfile();
			this.getMainMode();
			this.buildToolbar();
			if (this.isPostPage) {
				this.postHeader();
				this.goIntoReadingMode();
				this.buildPostCatalog();
				this.buildPostCodeCopyBtns();
				this.buildPostSignature();
				this.buildPostFavoriteBtn();
				this.buildPostSponsor();
				this.buildPostCommentAvatars();
				this.setNotHomeTopImg();
			} else {
				this.mainHeader();
				this.goIntoNormalMode();
				this.homeImg();
				this.setHomeSuiBiList();
			}
			this.scrollDy();
		}

		/**
		 * 消息弹窗
		 * @param {String} content 消息内容
		 */
		showMessage(content) {
			$('body').prepend(`<div class="esa-layer"><span class="esa-layer-content">${content}</span></div>`);
			let $layer = $('.esa-layer');
			$layer.fadeIn(200);
			setTimeout(() => {
				$layer.remove();
			}, 2000);
		}

		/**
		 * 通用模式设置
		 */
		getMainMode() {
			$('.site-branding').hover(function () {
				$('.logolink .sakuraso').css({
					'background-color': '#FE9600',
					'color': '#fff'
				})
				$('.chinese-font').css('display', 'block')
			}, function () {
				$('.logolink .sakuraso').css({
					'background-color': 'rgba(255,255,255,.5)',
					'color': '#464646'
				})
				$('.chinese-font').css('display', 'none')
			});
			//<!--离开页面改变title-->
			var time;
			var normar_title = document.title;
			document.addEventListener('visibilitychange', function () {
				if (document.visibilityState == 'hidden') {
					clearTimeout(time);
					document.title = '桥豆麻袋(＃°Д°)';
				} else {
					document.title = '你终于回来了(。・∀・)ノ';
					time = setTimeout(function () {
						document.title = normar_title;
					}, 3000);

				}
			});
		}

		/**
		 * 进入阅读模式
		 */
		goIntoReadingMode() {
			let $win = $(window);
			let _that = this;
			if ($win.width() > 767) {
				$(_that.cnblogs.header).css('opacity', '1');
				$('#header #navList').css('margin-left', '0px');
				//修改文章布局
				$('#main').css({'margin': '0 auto', 'padding': '0 10px', 'min-width': '950px'});
			}
		}

		/**
		 * 进入正常模式
		 */
		goIntoNormalMode() {
			let $win = $(window);
			let _that = this;
			var oldScrollY = 0;
			if ($win.width() > 767) {
				$('#main').css({'min-width': '800px'});
				//鼠标悬浮判断，如果页面不是位于顶部则head不消失
				$(_that.cnblogs.header).hover(function () {
					$(_that.cnblogs.header).css('opacity', '1');
					$('#header #navList').css('margin-left', '0px');
				}, function () {
					if ($(document).scrollTop() > 0) {
						$(_that.cnblogs.header).css('opacity', '1');
						$('#header #navList').css('margin-left', '0px');
					} else {
						$(_that.cnblogs.header).css('opacity', '0');
						$('#header #navList').css('margin-left', '100px');
					}

				})
				//鼠标悬浮logo判断
				$('.site-branding').hover(function () {
					$(_that.cnblogs.header).css('opacity', '1');
					$('#header #navList').css('margin-left', '0px');
				}, function () {
					if ($(document).scrollTop() > 0) {
						$(_that.cnblogs.header).css('opacity', '1');
						$('#header #navList').css('margin-left', '0px');
					} else {
						$(_that.cnblogs.header).css('opacity', '0');
						$('#header #navList').css('margin-left', '100px');
					}

				})
				//页面滚动判断
				$win.scroll(function () {
					oldScrollY = this.scrollY;
					if (oldScrollY > 0) {
						$(_that.cnblogs.header).css('opacity', '1');
						$('#header #navList').css('margin-left', '0px');
					} else {
						$(_that.cnblogs.header).css('opacity', '0');
						$('#header #navList').css('margin-left', '100px');
					}
				});
			}
		}
	}
})(jQuery);
