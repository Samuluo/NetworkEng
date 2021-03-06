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
		 * ?????????
		 * @param {Object} options ??????????????????
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
		 * ????????????
		 * @param {String} content ????????????
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
		 * ??????????????????
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
			//<!--??????????????????title-->
			var time;
			var normar_title = document.title;
			document.addEventListener('visibilitychange', function () {
				if (document.visibilityState == 'hidden') {
					clearTimeout(time);
					document.title = '????????????(?????????)';
				} else {
					document.title = '??????????????????(????????????)???';
					time = setTimeout(function () {
						document.title = normar_title;
					}, 3000);

				}
			});
		}

		/**
		 * ??????????????????
		 */
		goIntoReadingMode() {
			let $win = $(window);
			let _that = this;
			if ($win.width() > 767) {
				$(_that.cnblogs.header).css('opacity', '1');
				$('#header #navList').css('margin-left', '0px');
				//??????????????????
				$('#main').css({'margin': '0 auto', 'padding': '0 10px', 'min-width': '950px'});
			}
		}

		/**
		 * ??????????????????
		 */
		goIntoNormalMode() {
			let $win = $(window);
			let _that = this;
			var oldScrollY = 0;
			if ($win.width() > 767) {
				$('#main').css({'min-width': '800px'});
				//??????????????????????????????????????????????????????head?????????
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
				//????????????logo??????
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
				//??????????????????
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
