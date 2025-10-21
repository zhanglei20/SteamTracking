(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4523],
  {
    chunkid: (module) => {
      module.exports = {
        BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
        BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
        BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
        BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
      };
    },
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        AppCarouselTrailerCtn: "_2DzJ9TSrYmyo1tY_R-1jym",
        AutoplayCheckbox: "ZZgGaqlJvV83f4CYl3O3N",
        AppVideo: "_3sG-J5T8SrzM0Hjkda7sgL",
        Microtrailer: "_24GFDabY2zeyuzhvACpldO",
        PlayFullTrailer: "_115ZF6m0XsEieocbL7zjo-",
        "microtrailer-trans-out": "HMoi7fPFNjxiHeyrfkgmO",
        PlayMicrotrailer: "_2edFDJ0B9YjtlfqugPTxw0",
        "microtrailer-trans-in": "_3D_pgT8sxFP3ieDxVt_1zp",
        NoTrailer: "WtSN6aaEz7vEnRjVrq2hS",
        Trailer: "_1_z8vE2vYRzSyf1HQIcm5O",
        "trailer-trans-in": "_3kp7PkbzSVQPFoobA3Xx7N",
        AppMainCap: "_3cc6kgsSpd-DeLRDHEM_lD",
        AppMainCapFadeIn: "_2tGHq2pbqmrGJVCXoN5f0r",
        PlayButton: "_1y11BvPq_nL5EZFF8GLuD9",
        PlayButtonCapFadeIn: "_3Nk6pNRuMCIddyuE9mWS55",
        AutoplayCheckboxCtn: "_2HvO_RKtxiyyhZsELjYyq5",
        AOWarning: "_19l-UjQZVVGNK5SKnOrmJB",
        Text: "VoAJhMdtQTylTg3G03nJo",
        "capsule-trans-out": "hckHU2LXCJNx0X37OqCsx",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          BroadcastDetails: () => _,
          LinkOverlay: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        m_elCanvas;
        m_Context;
        m_schUpdate = new _._();
        m_bSetupComplete = !1;
        componentDidMount() {
          0 == this.props.updateRate && this.updateCanvas();
        }
        componentWillUnmount() {
          this.m_schUpdate.Cancel();
        }
        componentDidUpdate() {
          this.updateCanvas();
        }
        BindCanvasRef(_) {
          this.m_elCanvas = _;
        }
        updateCanvas() {
          if (
            null == this.props.elementRef ||
            null == this.m_elCanvas ||
            this.m_bSetupComplete
          )
            return;
          let _ = this.props.scaleFactor || [1, 1],
            _ = this.props.elementRef,
            _ = this.props.updateRate;
          this.m_Context = this.m_elCanvas.getContext("2d");
          let _ = Math.floor(
              this.m_elCanvas.clientWidth / this.props.reductionFactor,
            ),
            _ = Math.floor(
              this.m_elCanvas.clientHeight / this.props.reductionFactor,
            );
          (this.m_elCanvas.width = _),
            (this.m_elCanvas.height = _),
            this.props.blurAmount > 0 &&
              (this.m_Context.filter = "blur(" + this.props.blurAmount + "px)");
          let _ = () => {
            this.m_Context.drawImage(_, 0, 0, _ * _[0], _ * _[1]),
              _ > 0 && this.m_schUpdate.Schedule(_, _);
          };
          _(), (this.m_bSetupComplete = !0);
        }
        render() {
          return _.createElement("canvas", {
            _: this.props._,
            className: this.props.className,
            ref: this.BindCanvasRef,
            width: this.props.width,
            height: this.props.height,
          });
        }
      }
      (0, _._)([_._], _.prototype, "BindCanvasRef", null),
        (0, _._)([_._], _.prototype, "updateCanvas", null);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 500;
      class _ extends _.Component {
        render() {
          let {
            keyExtractor: _,
            style: _,
            duration: __webpack_require__ = _,
            className: _,
            children: _,
            childRef: _,
            ..._
          } = this.props;
          const _ = {
            ...(_ || {}),
            transitionDuration: __webpack_require__ / 1e3 + "s",
          };
          return _.createElement(
            _._,
            {
              ..._,
              className: (0, _._)("crossfade", _),
            },
            _.createElement(
              _._,
              {
                nodeRef: _,
                classNames: "crossfade-anim",
                timeout: __webpack_require__,
                key: _(),
                style: _,
              },
              _,
            ),
          );
        }
      }
      function _(_) {
        const { src: _, ...__webpack_require__ } = _,
          _ = {
            backgroundImage: `url(${_})`,
          },
          _ = _.useRef(null);
        return _.createElement(
          _,
          {
            style: _,
            keyExtractor: () => _,
            childRef: _,
            ...__webpack_require__,
          },
          _.createElement("div", {
            ref: _,
            className: "crossfade-img",
          }),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _() {
        return _.createElement(
          "div",
          {
            className: "STV_ReplayBanner",
          },
          (0, _._)("#DASHPlayerControls_IsReplay"),
        );
      }
      const _ = (0, _._)((_) => {
        let _ = _.video;
        if (_ && (_.IsBroadcastClip() || _.IsBroadcastVOD())) return null;
        let _ = _._.Loading,
          _ = "";
        if (_) {
          (_ = _.GetBroadcastState()), (_ = _.GetBroadcastStateDescription());
          let _ = _.IsBuffering();
          _ == _._.Unlocking && ((_ = _._.Loading), (_ = "")),
            _ == _._.Ready && _ && ((_ = _._.Loading), (_ = ""));
        }
        if (_ && _ != _._.Error && _.GetUserInputNeeded()) return null;
        if (_ == _._.Ready) return null;
        let _ = _ == _._.Loading;
        return _.createElement(
          "div",
          {
            className: "BroadcastVideoWatchState",
            style: {
              filter: "hue-rotate(40deg)",
            },
          },
          _ && _.createElement(_._, null),
          !_ &&
            _.createElement(
              "div",
              {
                className: "BroadcastVideoWatchState_Text",
              },
              _,
            ),
        );
      });
      class _ extends _.Component {
        OnClick() {
          _._.UserInputClickVideo(this.props.video);
        }
        render() {
          return _.createElement(
            "div",
            {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
            },
            _.createElement(_.jGG, null),
            _.createElement(
              "span",
              null,
              (0, _._)("#DASHPlayerControls_ClickToPlay"),
            ),
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnClick", null);
      let _ = class extends _.Component {
        constructor(_) {
          super(_);
        }
        HideStats() {
          this.props.closeStats && this.props.closeStats();
        }
        render() {
          let _ = this.props.stats;
          return _.createElement(
            "div",
            {
              className: "dash_video_stats",
            },
            _.createElement(
              "button",
              {
                className: "dash_stat_close_button",
                onClick: this.HideStats,
              },
              _.createElement(_.sED, null),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_BufferingResolution"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetBufferingResolutionToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_PlaybackResolution"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetPlaybackResolutionToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_HtmlResolution"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetHTMLVideoResolutionToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_ContentServer"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetContentServerToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_StallEvents"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetStalledEventsToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_FailedDownloads"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetFailedDownloadsToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_TimeToFirstFrame"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetTimeToFirstFrameToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_PlaybackRate"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetPlaybackRateForDisplay(),
              ),
            ),
            _.createElement(_, {
              stats: _,
            }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "HideStats", null), (_ = (0, _._)([_._], _));
      let _ = class extends _.Component {
        constructor(_) {
          super(_);
        }
        createBufferedRange(_) {
          let _ = this.props.stats,
            _ = [],
            _ = _ ? "vidbuf" : "audbuf",
            _ = _
              ? _.GetNumBufferedVideoRanges()
              : _.GetNumBufferedAudioRanges();
          if (_ > 0)
            for (let _ = 0; _ < _; ++_) {
              let _ = (0, _._)(
                  _
                    ? "#DASHPlayerStats_VideoBufferRange"
                    : "#DASHPlayerStats_AudioBufferRange",
                  _,
                ),
                _ = _
                  ? _.GetBufferedVideoSegmentForDisplay(_)
                  : _.GetBufferedAudioSegmentForDisplay(_);
              __webpack_require__.push(
                _.createElement(
                  "div",
                  {
                    key: _ + _,
                  },
                  _,
                  " ",
                  _.createElement(
                    "span",
                    {
                      className: "videoStatsValue",
                    },
                    _,
                  ),
                ),
              );
            }
          else {
            let _ = (0, _._)(
              _
                ? "#DASHPlayerStats_VideoNoRangeInformation"
                : "#DASHPlayerStats_AudioNoRangeInformation",
            );
            __webpack_require__.push(
              _.createElement(
                "div",
                {
                  key: _ + "none",
                },
                _,
              ),
            );
          }
          return _;
        }
        render() {
          let _ = this.props.stats;
          return _.createElement(
            "div",
            {
              className: "dash_video_quick_stats",
            },
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_BytesReceived"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetBytesReceivedToDisplay(),
              ),
            ),
            this.props.stats.BHasFrameInformation() &&
              _.createElement(
                "div",
                null,
                (0, _._)("#DASHPlayerStats_DroppedFrames"),
                " ",
                _.createElement(
                  "span",
                  {
                    className: "videoStatsValue",
                  },
                  _.GetDroppedFramesToDisplay(),
                ),
              ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_VideoBuffered"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetVideoBufferedToDisplay(),
                " ",
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_AudioBuffered"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetAudioBufferedToDisplay(),
                " ",
              ),
            ),
            this.createBufferedRange(!0),
            this.createBufferedRange(!1),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_BandwidthRequired"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetBandwidthRequiredToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_BandwidthVideo"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetBandwithVideoToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_BandwidthNums"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetBandwidthStatsToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_DownloadNums"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetDownloadTimeStatsToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_ActiveDownloads"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetActiveDownloadsToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_VideoDownloadProgress"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetVideoDownloadProgressToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_DroppingFrames"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetPersistentFrameDropsForDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_CurrentFPS"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetCurrentFPSForDisplay(),
              ),
            ),
          );
        }
      };
      _ = (0, _._)([_._], _);
      var _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        m_elSettingsButton;
        m_SettingsButtonPos;
        m_elClickListener;
        m_elSettingsPanel;
        m_elSubtitlesButton = _.createRef();
        m_elSubtitlesPanel = _.createRef();
        m_SubtitlesButtonPos;
        constructor(_) {
          super(_),
            (this.state = {
              bSettingsOpen: !1,
              bSubtitlesOpen: !1,
            });
        }
        OnVideoControlClick(_) {
          this.setState({
            bSettingsOpen: !this.state.bSettingsOpen,
          }),
            (this.m_SettingsButtonPos = [
              this.m_elSettingsButton.offsetLeft,
              this.m_elSettingsButton.offsetTop,
            ]),
            (this.m_elClickListener =
              _.currentTarget.ownerDocument.defaultView),
            this.m_elClickListener.addEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            );
        }
        OnSubtitlesClick(_) {
          this.setState({
            bSubtitlesOpen: !this.state.bSubtitlesOpen,
          }),
            (this.m_SubtitlesButtonPos = [
              this.m_elSubtitlesButton.current.offsetLeft,
              this.m_elSubtitlesButton.current.offsetTop,
            ]),
            (this.m_elClickListener =
              _.currentTarget.ownerDocument.defaultView),
            this.m_elClickListener.addEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            );
        }
        OnMouseUp(_) {
          this.m_elClickListener.removeEventListener(
            "mouseup",
            this.OnMouseUp,
            !0,
          ),
            (0, _._)(this.m_elSettingsPanel, _.target) ||
              this.setState({
                bSettingsOpen: !1,
              }),
            (0, _._)(this.m_elSubtitlesPanel.current, _.target) ||
              this.setState({
                bSubtitlesOpen: !1,
              });
        }
        bindSettingsButton(_) {
          this.m_elSettingsButton = _;
        }
        BindSettingsPanel(_) {
          this.m_elSettingsPanel = _;
        }
        OnShowStats(_) {
          this.props.onShowStats(_),
            this.setState({
              bSettingsOpen: !this.state.bSettingsOpen,
            });
        }
        render() {
          let _ = !1,
            _ = !1;
          const { video: __webpack_require__, actions: _ } = this.props;
          let _,
            _,
            _ = 0,
            _ = _.createElement("div", {
              key: "separator",
              className: "settingsMenuSeparator",
            });
          if (
            (this.state.bSettingsOpen &&
              ((_ = !0),
              (_ = this.props.video.GetVideoRepresentations()),
              (_ = _.map((_) =>
                _.createElement(
                  _._,
                  {
                    key: _._,
                    onClick: () => {
                      this.props.video.SetVideoRepresentation(_),
                        this.setState({
                          bSettingsOpen: !this.state.bSettingsOpen,
                        });
                    },
                    bChecked: _.selected,
                  },
                  _.displayName,
                ),
              )),
              _.push(_),
              _.push(
                _.createElement(
                  _._,
                  {
                    key: "statsToggle",
                    onClick: this.OnShowStats,
                  },
                  (0, _._)("#Broadcast_VideoContext_ToggleStats"),
                  "\t",
                ),
              ),
              (_ = 0 - (21 * _.length + 32))),
            this.state.bSubtitlesOpen)
          ) {
            (_ = !0),
              (_ = []),
              _.push(
                _.createElement(
                  _._,
                  {
                    key: "none",
                    onClick: () => {
                      this.props.video.SetSubtitles(null),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    className: "NoSubtitles",
                    bChecked: !1,
                  },
                  (0, _._)("#Broadcast_None"),
                ),
              );
            for (let _ = 0; _ < this.props.video.ListSubtitles().length; _++) {
              const _ = this.props.video.ListSubtitles()[_];
              _.push(
                _.createElement(
                  _._,
                  {
                    key: _.language,
                    onClick: () => {
                      this.props.video.SetSubtitles(_.language),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    bChecked: "showing" === _.mode,
                  },
                  _.label,
                ),
              );
            }
            _ = -292;
          }
          const _ =
            this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
          return _.createElement(
            "div",
            {
              className: "STV_BroadcastSettings",
            },
            _ &&
              _.createElement(
                "div",
                {
                  className:
                    "videoControlButton" + (_ ? " ClosedCaptionsActive" : ""),
                  onClick: this.OnSubtitlesClick,
                  ref: this.m_elSubtitlesButton,
                },
                _.createElement(_.N8C, null),
              ),
            _.createElement(
              "div",
              {
                className:
                  "videoControlButton VideoSettings " +
                  (_ ? " VideoSettingsOpen" : ""),
                onClick: this.OnVideoControlClick,
                ref: this.bindSettingsButton,
              },
              _.createElement(_.wB_, null),
            ),
            _.createElement(_, {
              video: __webpack_require__,
            }),
            _ &&
              _.map((_) =>
                _.createElement(
                  "div",
                  {
                    key: _.key,
                    className: "videoControlButton videoControlFitWidth",
                  },
                  _,
                ),
              ),
            _ &&
              _.createElement(
                "div",
                {
                  ref: this.BindSettingsPanel,
                  className: "STV_BroadcastSettingsPanel",
                  style: {
                    left: this.m_SettingsButtonPos[0],
                    top: this.m_SettingsButtonPos[1],
                    marginTop: _,
                  },
                },
                _.createElement(
                  "div",
                  {
                    className: "STV_BroadcastSettingsMenuItems",
                  },
                  _,
                ),
              ),
            _ &&
              _.createElement(
                "div",
                {
                  ref: this.m_elSubtitlesPanel,
                  className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                  style: {
                    maxHeight: "260px",
                    left: this.m_SubtitlesButtonPos[0],
                    top: this.m_SubtitlesButtonPos[1],
                    marginTop: _,
                  },
                },
                _.createElement(
                  "div",
                  {
                    className: "STV_BroadcastSettingsMenuItems",
                  },
                  _,
                ),
              ),
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnVideoControlClick", null),
        (0, _._)([_._], _.prototype, "OnSubtitlesClick", null),
        (0, _._)([_._], _.prototype, "OnMouseUp", null),
        (0, _._)([_._], _.prototype, "bindSettingsButton", null),
        (0, _._)([_._], _.prototype, "BindSettingsPanel", null),
        (0, _._)([_._], _.prototype, "OnShowStats", null);
      let _ = class extends _.Component {
        constructor(_) {
          super(_), (0, _._)(this);
        }
        k_nHideSliderTimeout = 1500;
        m_bShowSlider = true;
        m_schHideSlider = new _._();
        m_bChildDragging = !1;
        m_bMouseOver = !1;
        componentWillUnmount() {
          this.m_schHideSlider.Cancel();
        }
        ToggleMute() {
          let _ = this.props.video,
            _ = _.IsMuted();
          _.SetMute(!_), _.GetVolume() < 0.01 && _.SetVolume(0.5);
        }
        OnMouseEnter(_) {
          (this.m_bShowSlider = !0),
            (this.m_bMouseOver = !0),
            this.m_schHideSlider.Cancel();
        }
        OnMouseLeave(_) {
          (this.m_bMouseOver = !1), this.ScheduleHide();
        }
        OnChildDrag(_) {
          (this.m_bChildDragging = _), this.ScheduleHide();
        }
        ScheduleHide() {
          this.m_bMouseOver ||
            this.m_bChildDragging ||
            this.m_schHideSlider.Schedule(
              this.k_nHideSliderTimeout,
              () => (this.m_bShowSlider = true),
            );
        }
        render() {
          let _ = this.props.video,
            _ = _.IsMuted(),
            _ = 100 * _.GetVolume(),
            _ = "videoControlButton";
          _ > 65
            ? (_ += " HighestVolume")
            : _ > 45
              ? (_ += " HighVolume")
              : _ < 46 && _ > 24
                ? (_ += " MedVolume")
                : _ < 25 && (_ += " LowVolume");
          let _ = "BroadcastVolumeControl";
          return (
            this.m_bShowSlider && (_ += " ShowVolumeSlider"),
            _ && (_ += " muted"),
            _.createElement(
              "div",
              {
                className: _,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              _.createElement(
                "div",
                {
                  className: "BroadcastVolumeControl_FixedLayout",
                },
                _.createElement(
                  "div",
                  {
                    className: _,
                    onClick: this.ToggleMute,
                  },
                  _.createElement(_.fSs, null),
                ),
                _.createElement(_, {
                  video: _,
                  onDrag: this.OnChildDrag,
                }),
              ),
            )
          );
        }
      };
      (0, _._)([_._], _.prototype, "m_bShowSlider", void 0),
        (0, _._)([_._], _.prototype, "ToggleMute", null),
        (0, _._)([_._], _.prototype, "OnMouseEnter", null),
        (0, _._)([_._], _.prototype, "OnMouseLeave", null),
        (0, _._)([_._], _.prototype, "OnChildDrag", null),
        (_ = (0, _._)([_._], _));
      let _ = class extends _.Component {
        constructor(_) {
          super(_), (0, _._)(this);
        }
        m_elSlider = null;
        m_nVolumeStartOfDrag = 0;
        OnMouseDown(_) {
          let _ = _.currentTarget;
          (this.m_elSlider = _),
            (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
            this.SetVolumeWithCoord(_, _.clientX),
            _.ownerDocument.defaultView.addEventListener(
              "mousemove",
              this.OnMouseMove,
            ),
            _.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp,
            ),
            this.props.onDrag(!0);
        }
        OnMouseMove(_) {
          this.m_elSlider &&
            this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
        }
        OnMouseUp(_) {
          if (!this.m_elSlider) return;
          this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
          let _ = this.props.video;
          _.IsMuted() && _.SetVolume(this.m_nVolumeStartOfDrag),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mousemove",
              this.OnMouseMove,
            ),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp,
            ),
            (this.m_nVolumeStartOfDrag = 0),
            (this.m_elSlider = null),
            this.props.onDrag(!1);
        }
        SetVolumeWithCoord(_, _) {
          let _ = _.getBoundingClientRect(),
            _ = _._(_, _.left, _.right, 0, 1),
            _ = _._(_, 0, 1),
            _ = this.props.video;
          _.SetMute(_ < 0.01), _.SetVolume(_);
        }
        render() {
          let _ = this.props.video,
            _ = 100 * _.GetVolume();
          _.IsMuted() && (_ = 0);
          let _ = {
              left: `${_}%`,
            },
            _ = {
              width: `${_}%`,
            };
          return _.createElement(
            "div",
            {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
            },
            _.createElement("div", {
              className: "BroadcastVolumeSlider_Track",
            }),
            _.createElement("div", {
              className: "BroadcastVolumeSlider_Fill",
              style: _,
            }),
            _.createElement("div", {
              className: "BroadcastVolumeSlider_Thumb",
              style: _,
            }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "OnMouseDown", null),
        (0, _._)([_._], _.prototype, "OnMouseMove", null),
        (0, _._)([_._], _.prototype, "OnMouseUp", null),
        (0, _._)([_._], _.prototype, "SetVolumeWithCoord", null),
        (_ = (0, _._)([_._], _));
      var _ = __webpack_require__("chunkid");
      const _ = 15;
      let _ = class extends _.Component {
        m_schHideControls = new _._();
        m_schUnmountControls = new _._();
        m_elVideo = null;
        m_elBroadcastPlayer = null;
        m_bMouseDown = !1;
        m_elMouseDown = null;
        m_listeners = new _._();
        constructor(_) {
          super(_),
            (this.state = {
              bMountControls: !1,
              bControlsVisible: !1,
              bShowStats: !1,
              video: null,
              nResizedHeight: null,
              bFullscreen: !1,
            });
        }
        StopVideo() {
          let _ = this.state.video;
          _ &&
            (_._.StopVideo(_),
            this.setState({
              video: null,
            }),
            this.props.fnSetBroadcastVideo?.(null));
        }
        IsMuted() {
          let _ = this.state.video;
          return !_ || _.IsMuted();
        }
        StopPlaybackTillUserInput() {
          let _ = this.state.video;
          _ && _.StopPlaybackTillUserInput();
        }
        componentDidUpdate(_, _) {
          !_.bMountControls && this.state.bMountControls
            ? setTimeout(() => {
                this.setState((_) => ({
                  bControlsVisible: _.bMountControls,
                }));
              }, 15)
            : _.bControlsVisible &&
              !this.state.bControlsVisible &&
              this.state.video &&
              !this.state.video.IsPaused() &&
              this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
            this.props.steamIDBroadcast !== _.steamIDBroadcast &&
              this.BindVideoRef(this.m_elVideo),
            !this.props.nAppIDVOD ||
              (void 0 !== _.strInitialCapsuleImageUrl &&
                _.nAppIDVOD == this.props.nAppIDVOD) ||
              _._.Get()
                .QueueAppRequest(this.props.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const _ = _._.Get().GetApp(this.props.nAppIDVOD),
                    _ = _?.GetAssets().GetMainCapsuleURL() || "";
                  this.setState({
                    strInitialCapsuleImageUrl: _,
                  });
                });
        }
        componentWillUnmount() {
          this.m_listeners.Unregister(),
            this.m_schHideControls.Cancel(),
            this.m_schUnmountControls.Cancel(),
            this.StopVideo();
        }
        BindBroadcastPlayerRef(_) {
          this.m_listeners.Unregister(),
            (this.m_elBroadcastPlayer = _),
            _ &&
              (this.m_listeners.AddEventListener(
                _,
                "fullscreenchange",
                this.OnFullscreenChange,
              ),
              this.m_listeners.AddEventListener(
                _,
                "mozfullscreenchange",
                this.OnFullscreenChange,
              ),
              this.m_listeners.AddEventListener(
                _,
                "webkitfullscreenchange",
                this.OnFullscreenChange,
              ),
              this.m_listeners.AddEventListener(
                _,
                "msfullscreenchange",
                this.OnFullscreenChange,
              ));
        }
        BindVideoRef(_) {
          let _;
          this.StopVideo(),
            this.props.steamIDBroadcast
              ? _ &&
                (_ = _._.CreateBroadcastVideo(
                  _,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC,
                ))
              : this.props.broadcastClipID
                ? _ &&
                  (_ = _._.CreateClipVideo(
                    _,
                    this.props.broadcastClipID,
                    this.props.watchLocation,
                  ))
                : this.props.nAppIDVOD &&
                  _ &&
                  ((_ = _._.CreateVODVideo(
                    _,
                    this.props.nAppIDVOD,
                    this.props.watchLocation,
                  )),
                  this.props.fnOnVideoEnd &&
                    _.SetOnVideoCallback(this.props.fnOnVideoEnd)),
            _ &&
              (this.props.bStartMuted && _.SetMute(!0),
              this.props.bStartWithSubtitles && _.SetStartWithSubtitles(!0),
              this.props.bStartPaused
                ? _.StopPlaybackTillUserInput()
                : _.Play()),
            this.setState({
              video: _,
            }),
            this.props.fnSetBroadcastVideo?.(_),
            (this.m_elVideo = _);
        }
        OnMouseDown(_) {
          (this.m_bMouseDown = !0),
            (this.m_elMouseDown = _.currentTarget),
            this.m_elMouseDown.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp,
            );
        }
        OnMouseUp(_) {
          (this.m_bMouseDown = !1),
            this.m_elMouseDown.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp,
            ),
            this.m_schHideControls.Schedule(3200, this.HideControls);
        }
        OnMouseMove(_) {
          this.m_schHideControls.Cancel(),
            this.m_schUnmountControls.Cancel(),
            this.state.bMountControls
              ? this.state.bControlsVisible ||
                this.setState({
                  bControlsVisible: !0,
                })
              : this.setState({
                  bMountControls: !0,
                }),
            this.m_schHideControls.Schedule(3200, this.HideControls);
        }
        OnMouseLeave(_) {
          this.HideControls();
        }
        HideControls() {
          this.state.bControlsVisible &&
            !this.m_bMouseDown &&
            this.setState({
              bControlsVisible: !1,
            });
        }
        UmountControls() {
          this.setState((_) => {
            if (!_.bControlsVisible && _.bMountControls)
              return {
                bMountControls: !1,
              };
          });
        }
        ShowStatsView() {
          let _ = this.state.video;
          _ &&
            (this.state.bShowStats ||
              (this.setState({
                bShowStats: !0,
              }),
              _.SetStatsViewIsVisible(!0)));
        }
        OnContextMenu(_) {
          this.state.bFullscreen ||
            ((0, _._)(
              _.createElement(_._, null, this.GetContextMenuItems()),
              _,
            ),
            _.preventDefault());
        }
        ToggleStatsView(_) {
          let _ = !this.state.bShowStats;
          this.setState({
            bShowStats: _,
          });
          let _ = this.state.video;
          _ && __webpack_require__.SetStatsViewIsVisible(_);
        }
        ShowStorePage(_) {
          let _ = this.state.video;
          if (!_ || !this.props.onOpenLinkInNewWindow) return;
          let _ = _.GetBroadcastInfo();
          if (!_) return;
          let _ = (0, _._)(`${_._.STORE_BASE_URL}app/${_.m_strAppId}`);
          this.props.onOpenLinkInNewWindow(_, _), _.stopPropagation();
        }
        GetContextMenuItems() {
          let _ = [],
            _ = this.state.video;
          if (!_) return _;
          let _ = _.GetBroadcastInfo();
          return (
            _.push(
              _.createElement(
                _._,
                {
                  key: "togglestats",
                  bChecked: this.state.bShowStats,
                  onSelected: (_) => {
                    this.ToggleStatsView(_);
                  },
                },
                (0, _._)("#Broadcast_VideoContext_ToggleStats"),
              ),
            ),
            _ &&
              "0" != _.m_strAppId &&
              Number.parseInt(_.m_strAppId) != _._ &&
              _.push(
                _.createElement(
                  _._,
                  {
                    key: "visitstore",
                    onSelected: (_) => {
                      this.ShowStorePage(_);
                    },
                  },
                  (0, _._)("#Broadcast_VideoContext_OpenStore"),
                ),
              ),
            _
          );
        }
        CloseStats() {
          let _ = this.state.video;
          _ &&
            this.state.bShowStats &&
            (this.setState({
              bShowStats: !1,
            }),
            _.SetStatsViewIsVisible(!1));
        }
        OnToggleFullscreen() {
          this.m_elBroadcastPlayer &&
            ((0, _._)(this.m_elBroadcastPlayer)
              ? (0, _._)(this.m_elBroadcastPlayer)
              : (0, _._)(this.m_elBroadcastPlayer, this.m_elVideo));
        }
        OnFullscreenChange(_) {
          if (!this.m_elBroadcastPlayer) return;
          let _ = (0, _._)(this.m_elBroadcastPlayer);
          this.setState({
            bFullscreen: _,
          });
        }
        BHideVideoControls() {
          let _ = this.state.video;
          return (
            !_ ||
            !!_.GetUserInputNeeded() ||
            _._.GetBroadcastState(_) == _._.Error
          );
        }
        render() {
          const _ = this.state.video,
            _ = _ && _.IsPaused(),
            _ = _ && _.BHasDASHStats() && this.state.bShowStats,
            _ = Boolean(_ && _.IsReplay()),
            _ = this.state.bMountControls,
            _ = this.state.bControlsVisible || _,
            _ = _ && _.GetUserInputNeeded(),
            _ =
              _?.IsBroadcastVOD() && _ && this.state.strInitialCapsuleImageUrl;
          let _ = "videoContainer";
          _ || (_ += " HidePlayerControls"),
            _ && (_ += " VideoPaused"),
            this.state.bFullscreen && (_ += " fullscreenVideo"),
            this.props.classes && (_ += " " + this.props.classes);
          let _ = [];
          !this.state.bFullscreen &&
            this.props.actions &&
            (_ = _.concat(this.props.actions)),
            !this.state.bFullscreen &&
              this.props.onTheaterMode &&
              _.push(
                _.createElement("div", {
                  key: "ChatPosToggle ChatTheaterToggle",
                  onClick: this.props.onTheaterMode,
                  title: (0, _._)("#Broadcast_View_Theater"),
                  className: "BroadcastTheaterToggle",
                }),
              ),
            _.push(
              _.createElement("div", {
                key: "FullscreenToggle",
                title: (0, _._)("#Broadcast_View_Fullscreen"),
                onClick: this.OnToggleFullscreen,
                className: "BroadcastFullscreenToggle",
              }),
            );
          const _ = _ && !this.BHideVideoControls(),
            _ = _ && !this.state.bFullscreen,
            _ =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return _.createElement(
            "div",
            {
              ref: this.BindBroadcastPlayerRef,
              className: _,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
            },
            _ &&
              _.createElement(
                "div",
                {
                  className: _().BroadcastContext,
                },
                _,
              ),
            _ && _.createElement(_, null),
            this.props.showVideoBackgroundBlur &&
              _.createElement(_, {
                className: "videoBlur",
                elementRef: this.m_elVideo,
                updateRate: 33,
                width: 320,
                height: 180,
                reductionFactor: 10,
                blurAmount: 5,
              }),
            _.createElement("video", {
              className: "videoSrc",
              ref: this.BindVideoRef,
              muted: this.props.bMuted ?? !0,
              autoPlay: !0,
              playsInline: !0,
              controls: !1,
              onVolumeChange: this.props.fnVolumeChanged,
              onClick: this.props.fnVideoClick,
            }),
            this.props.linkRegions
              ? _.createElement(_, {
                  linkRegions: this.props.linkRegions,
                  editMode: this.props.editMode,
                  onSaveLinkRegions: this.props.onSaveLinkRegions,
                })
              : null,
            this.props.linkElement,
            _ &&
              _.createElement("img", {
                loading: "lazy",
                className: (0, _._)(
                  _().BroadcastPlaceholderImg,
                  "BroadcastPlaceholderImg",
                ),
                src: this.state.strInitialCapsuleImageUrl,
              }),
            _ &&
              _.createElement(_, {
                video: _,
                actions: _,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                onShowStats: this.ToggleStatsView,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
            _ &&
              _.createElement(_, {
                onClick: this.props.onRequestClose,
              }),
            _ &&
              _.createElement(_, {
                stats: _.GetDASHPlayerStats(),
                closeStats: this.CloseStats,
              }),
            _.createElement(_, {
              video: _,
            }),
            _ &&
              _.createElement(_, {
                video: _,
              }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "BindBroadcastPlayerRef", null),
        (0, _._)([_._], _.prototype, "BindVideoRef", null),
        (0, _._)([_._], _.prototype, "OnMouseDown", null),
        (0, _._)([_._], _.prototype, "OnMouseUp", null),
        (0, _._)([_._], _.prototype, "OnMouseMove", null),
        (0, _._)([_._], _.prototype, "OnMouseLeave", null),
        (0, _._)([_._], _.prototype, "HideControls", null),
        (0, _._)([_._], _.prototype, "UmountControls", null),
        (0, _._)([_._], _.prototype, "ShowStatsView", null),
        (0, _._)([_._], _.prototype, "OnContextMenu", null),
        (0, _._)([_._], _.prototype, "ToggleStatsView", null),
        (0, _._)([_._], _.prototype, "ShowStorePage", null),
        (0, _._)([_._], _.prototype, "CloseStats", null),
        (0, _._)([_._], _.prototype, "OnToggleFullscreen", null),
        (0, _._)([_._], _.prototype, "OnFullscreenChange", null),
        (_ = (0, _._)([_._], _));
      const _ = _;
      let _ = class extends _.Component {
        render() {
          const { video: _ } = this.props;
          if (!_) return null;
          let _ = _.has_segments;
          return _.createElement(
            "div",
            {
              className: "videoControls",
            },
            _.createElement(_, {
              steamID: this.props.video.GetBroadcastSteamID(),
              bHideThumbnail: !0,
              bVerticalBroadcastChat: !0,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
            }),
            _.createElement(
              "div",
              {
                className: "videoControlsBottom" + (_ ? "" : " noSegments"),
              },
              _.createElement(_, {
                video: _,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              _.createElement(
                "div",
                {
                  className: "STV_BroadcastController",
                },
                _.createElement("div", {
                  className: "videoControlsButtons LeftSpacer",
                }),
                _.createElement(_, {
                  video: _,
                }),
                _.createElement(_, {
                  video: _,
                }),
                _.createElement(_, {
                  video: _,
                  actions: this.props.actions,
                  onShowStats: this.props.onShowStats,
                }),
              ),
            ),
          );
        }
      };
      _ = (0, _._)([_._], _);
      class _ extends _.PureComponent {
        render() {
          return this.props.onClick
            ? _.createElement(
                "div",
                {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                },
                _.createElement(_.sED, null),
              )
            : null;
        }
      }
      class _ extends _.Component {
        OnJumpBackward() {
          this.props.video.JumpTime(-15);
        }
        OnJumpForward() {
          this.props.video.JumpTime(_);
        }
        render() {
          let _ = this.props.video,
            _ = _.CanSeek();
          return _.createElement(
            "div",
            {
              className: "videoControlsButtons PlayControls",
            },
            _.createElement(_, {
              video: _,
            }),
            _ &&
              _.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump controlFlip",
                  onClick: this.OnJumpBackward,
                },
                _.createElement(_.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                _.createElement(
                  "div",
                  {
                    className: "jumpAheadValue",
                  },
                  _,
                ),
              ),
            _.createElement(_, {
              video: _,
            }),
            _ &&
              _.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                },
                _.createElement(_.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                _.createElement(
                  "div",
                  {
                    className: "jumpAheadValue",
                  },
                  _,
                ),
              ),
            _ &&
              _.createElement(_, {
                video: _,
              }),
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnJumpBackward", null),
        (0, _._)([_._], _.prototype, "OnJumpForward", null);
      const _ = (0, _._)((_) => {
        if (_.video.IsBroadcastClip() || _.video.IsBroadcastVOD()) return null;
        let _ = _.video.IsOnLiveEdge();
        return _.createElement(
          "div",
          {
            className: "videoControlsButtons GoLive",
          },
          _.createElement(
            "div",
            {
              className:
                "videoControlButton videoControlGoLive" +
                (_ ? " isLiveEdge" : ""),
              onClick: _
                ? null
                : (_) => {
                    _.video.JumpToLiveEdge();
                  },
            },
            _.createElement(_.tID, {
              bHidePreArrow: !0,
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
            _.createElement(
              "div",
              {
                className: "jumpGoLive",
              },
              (0, _._)(
                _ ? "#DASHPlayerControls_IsLive" : "#DASHPlayerControls_GoLive",
              ),
            ),
          ),
        );
      });
      let _ = class extends _.Component {
        OnTogglePlayPause() {
          this.props.video.TogglePlayPause();
        }
        render() {
          let _ = this.props.video.IsPaused();
          return _.createElement(
            "div",
            {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
            },
            _ ? _.createElement(_.jGG, null) : _.createElement(_.vRz, null),
          );
        }
      };
      (0, _._)([_._], _.prototype, "OnTogglePlayPause", null),
        (_ = (0, _._)([_._], _));
      let _ = class extends _.Component {
        constructor(_) {
          super(_), (0, _._)(this), (this.video = _.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
        video = void 0;
        get has_previous_marker() {
          return void 0 !== this.GetPreviousMarkerTime();
        }
        GetPreviousMarkerTime() {
          if (!this.video.has_markers) return;
          let _ = this.video.GetTimelineMarkers(),
            _ = this.video.GetPlaybackTime();
          for (let _ = _.length - 1; _ >= 0; _--)
            if (!(_[_].nTime >= _)) return _[_].nTime;
        }
        OnJumpToPreviousMarkerClicked(_) {
          let _ = this.GetPreviousMarkerTime();
          void 0 !== _ && this.props.video.Seek(_ - 0.2);
        }
        render() {
          let _ = this.props.video.BHasMarkersOrSegments();
          return _.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (_ ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
            },
            _.createElement(_.tID, {
              bHidePostArrow: !0,
              bFlipHorizontal: !0,
            }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "video", void 0),
        (0, _._)([_._], _.prototype, "has_previous_marker", null),
        (0, _._)([_._], _.prototype, "OnJumpToPreviousMarkerClicked", null),
        (_ = (0, _._)([_._], _));
      let _ = class extends _.Component {
        constructor(_) {
          super(_), (0, _._)(this), (this.video = _.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
        video = void 0;
        get has_next_marker() {
          return void 0 !== this.GetNextMarkerTime();
        }
        GetNextMarkerTime() {
          if (!this.video.has_markers) return;
          let _ = this.video.GetTimelineMarkers(),
            _ = this.video.GetPlaybackTime();
          for (let _ = 0; _ < _.length; _++)
            if (!(_[_].nTime <= _)) return _[_].nTime;
        }
        OnJumpToNextMarkerClicked(_) {
          let _ = this.GetNextMarkerTime();
          void 0 !== _ && this.props.video.Seek(_);
        }
        render() {
          let _ = this.props.video.BHasMarkersOrSegments();
          return _.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker" +
                (_ ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
            },
            _.createElement(_.tID, {
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "video", void 0),
        (0, _._)([_._], _.prototype, "has_next_marker", null),
        (0, _._)([_._], _.prototype, "OnJumpToNextMarkerClicked", null),
        (_ = (0, _._)([_._], _));
      const _ = (_) =>
        _.createElement(
          "div",
          {
            className: "timelineMarker",
            title: _.label,
            style: {
              left: _.pos + "%",
            },
            onMouseEnter: () => _.onMouseEnter(_.pos),
            onMouseLeave: _.onMouseLeave,
            onMouseDown: _.onMouseDown ? _.onMouseDown : void 0,
          },
          _.createElement(
            "div",
            {
              className: "timelineMarkerIcon",
            },
            _.createElement(_.Dp6, null),
          ),
        );
      function _(_) {
        let _ = _.startPos,
          _ = _.endPos,
          _ = "",
          _ = 1;
        return (
          _ < 0 && ((_ = (_ - _) / 10), (_ = 0), (_ = " hideFront")),
          _.createElement(
            "div",
            {
              className: "STV_timelineSegment" + _,
              style: {
                left: _ + "%",
                width: _ - _ + "%",
                opacity: _,
              },
              onClick: _.onClick,
            },
            _.createElement("div", {
              className: "STV_timelineSegmentFrontFill",
              style: {
                borderColor: "rgb(" + _.color + ")",
              },
            }),
            _.createElement(
              "div",
              {
                className: "STV_timelineSegmentLabel",
                style: {
                  color: "rgb(" + _.color + ")",
                },
              },
              _.label,
            ),
            _.createElement("div", {
              className: "STV_timelineSegmentBackFill",
              style: {
                borderColor: "rgb(" + _.color + ")",
              },
            }),
          )
        );
      }
      let _ = class extends _.Component {
        m_elSlider = _.createRef();
        m_rectSlider = void 0;
        constructor(_) {
          super(_),
            (this.state = {
              nGrabberMouseDownTime: 0,
              bGrabberMouseDown: !1,
              nHoverValue: void 0,
              hoverX: 0,
              bStartMouseDown: !1,
              bEndMouseDown: !1,
              thumbnailURL: "",
            });
        }
        OnMouseDown(_, _) {
          if (this.m_elSlider) {
            _.persist(),
              (this.m_rectSlider =
                this.m_elSlider.current &&
                this.m_elSlider.current.getBoundingClientRect());
            let _ = {};
            "start" === _
              ? ((_ = {
                  bStartMouseDown: !0,
                }),
                _.stopPropagation())
              : "end" === _
                ? ((_ = {
                    bEndMouseDown: !0,
                  }),
                  _.stopPropagation())
                : (_ = {
                    bGrabberMouseDown: !0,
                  }),
              this.setState(_, () => this.AdjustSliderForClientX(_.clientX)),
              this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
        }
        OnMouseMove(_) {
          this.AdjustSliderForClientX(_.clientX);
        }
        OnMouseUp(_) {
          this.state.bStartMouseDown
            ? this.setState({
                bStartMouseDown: !1,
              })
            : this.state.bEndMouseDown
              ? this.setState({
                  bEndMouseDown: !1,
                })
              : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
                this.setState({
                  bGrabberMouseDown: !1,
                  nGrabberMouseDownTime: 0,
                })),
            this.m_elSlider.current &&
              (this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ));
        }
        OnKeyDown(_) {
          37 == _.keyCode
            ? (this.props.video.JumpTime(-15), _.preventDefault())
            : 39 == _.keyCode &&
              (this.props.video.JumpTime(15), _.preventDefault());
        }
        AdjustSliderForClientX(_) {
          let _ = this.props.video,
            _ = _.GetTimelineStartPos(),
            _ = _.GetTimelineStartPos() + _.GetTimelineDuration(),
            _ = _.GetTimeAtMousePosition(_, this.m_rectSlider, _, _);
          if (this.state.bStartMouseDown) {
            const _ = _._(_, _, _.m_editorEndTime - 5);
            _.m_editorStartTime = _;
          } else if (this.state.bEndMouseDown) {
            const _ = _._(_, _.m_editorStartTime + 5, _);
            _.m_editorEndTime = _;
          } else
            _ != this.state.nGrabberMouseDownTime &&
              this.setState({
                nGrabberMouseDownTime: _,
              });
        }
        OnMouseHoverMove(_) {
          this.AdjustHoverForClientX(_.clientX);
        }
        OnMouseHoverLeave(_) {
          this.setState({
            hoverX: 0,
          });
        }
        AdjustHoverForClientX(_) {
          let _ = this.props.video,
            _ = _.GetTimelineStartPos(),
            _ = _.GetTimelineStartPos() + _.GetTimelineDuration();
          this.m_rectSlider =
            this.m_elSlider.current &&
            this.m_elSlider.current.getBoundingClientRect();
          _.GetTimeAtMousePosition(_, this.m_rectSlider, _, _);
        }
        OnSegmentClick(_) {
          this.props.video.Seek(_);
        }
        OnMarkerMouseEnter(_) {
          this.setState({
            nHoverValue: _,
          });
        }
        OnMarkerMouseLeave() {
          this.setState({
            nHoverValue: void 0,
          });
        }
        render() {
          let _ = this.props.video,
            _ = this.state.bGrabberMouseDown,
            _ = _.GetPercentOffsetFromTime(
              this.state.nGrabberMouseDownTime,
              _._.Timeline,
            ),
            _ = _.GetPercentOffsetFromTime(_.GetPlaybackTime(), _._.Timeline),
            _ = _.GetPercentOffsetFromTime(
              _.GetVideoAvailableStartTime(),
              _._.Timeline,
            );
          _ < 0.05 && (_ = 0);
          let _ = _._(_, 0, 100).toFixed(1) + "%",
            _ = _._(_, 0, 100).toFixed(1) + "%",
            _ = _._(_, 0, 100).toFixed(1) + "%",
            _ = {},
            _ = {},
            _ = {},
            _ = {};
          _
            ? ((_.left = _), (_.width = _), (_.width = _), (_.width = _))
            : ((_.left = _), (_.width = _), (_.width = _));
          let _ = (0, _._)(_.GetPlaybackTime()),
            _ = (0, _._)(this.state.nHoverValue),
            _ = "STV_timelineContainer";
          this.state.bGrabberMouseDown && (_ += " grabberDown"),
            _.IsTimelineMapActive() && (_ += " minimapActive");
          let _ = "";
          (_ = _ ? _ : _),
            _ > 100
              ? (_ = " grabberOffScreenRight grabberOffscreen")
              : _ < 0 && (_ = " grabberOffScreenLeft grabberOffscreen");
          let _ = [];
          _.GetTimelineMarkers().forEach((_, _) => {
            let _ = _.GetPercentOffsetFromTime(_.nTime, _._.Timeline);
            _ < 0 ||
              _ > 100 ||
              _.push(
                _.createElement(_, {
                  key: _,
                  pos: _,
                  label: _.strTemplateName,
                  onMouseEnter: this.OnMarkerMouseEnter,
                  onMouseLeave: this.OnMarkerMouseLeave,
                }),
              );
          });
          let _ = [];
          _.GetTimelineSegments().forEach((_, _) => {
            let _ = _.GetPercentOffsetFromTime(_.nTimeStart, _._.Timeline);
            if (_ > 100) return;
            let _ = _.GetPercentOffsetFromTime(_.nTimeEnd, _._.Timeline);
            _ < 0 ||
              _.push(
                _.createElement(_, {
                  key: _,
                  startPos: _,
                  endPos: _,
                  label: _.strTemplateName,
                  color: _.color,
                  onClick: (_) => this.OnSegmentClick(_.nTimeStart),
                }),
              );
          });
          const _ = _.GetPercentOffsetFromTime(
              _.m_editorStartTime,
              _._.Timeline,
            ),
            _ = _.GetPercentOffsetFromTime(_.m_editorEndTime, _._.Timeline),
            _ = this.props.bIncludeClipEditor
              ? [
                  _.createElement(_, {
                    key: "start",
                    pos: _,
                    label: (0, _._)("#DASHPlayerControls_Start"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (_) => this.OnMouseDown(_, "start"),
                  }),
                  _.createElement(_, {
                    key: "end",
                    pos: _,
                    label: (0, _._)("#DASHPlayerControls_End"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (_) => this.OnMouseDown(_, "end"),
                  }),
                ]
              : [];
          return _.createElement(
            "div",
            {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
            },
            _.createElement(
              "div",
              {
                className: _,
              },
              _.createElement(
                "div",
                {
                  className: "DialogLabel",
                },
                _,
              ),
              _.createElement(
                "div",
                {
                  className: "STV_timelineSegmentsContainer",
                },
                _,
              ),
              _.createElement(
                "div",
                {
                  onMouseDown: this.OnMouseDown,
                  onMouseMove: this.OnMouseHoverMove,
                  onMouseLeave: this.OnMouseHoverLeave,
                  ref: this.m_elSlider,
                },
                _.createElement(
                  "div",
                  {
                    className: "VideoTimelineSlider",
                  },
                  _.createElement("div", {
                    className: "STV_timelineValue",
                    style: _,
                  }),
                  _.createElement("div", {
                    className: "STV_timelineGhostValue",
                    style: _,
                  }),
                  _.createElement("div", {
                    className: "STV_timelineNoVideo",
                    style: _,
                  }),
                  _,
                  _,
                  Boolean(this.state.hoverX) &&
                    _.createElement(
                      "div",
                      {
                        key: "grabbertime",
                        style: {
                          position: "absolute",
                          left: this.state.hoverX - 75,
                          bottom: "30px",
                        },
                      },
                      _.createElement(
                        "div",
                        {
                          style: {
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                          },
                        },
                        this.state.thumbnailURL &&
                          _.createElement("img", {
                            style: {
                              width: "150px",
                            },
                            src: this.state.thumbnailURL,
                          }),
                        _.createElement(
                          "span",
                          {
                            className: "STV_timelineGrabberValue",
                            style: {
                              position: "absolute",
                              bottom: "4px",
                            },
                          },
                          _,
                        ),
                      ),
                    ),
                  _.createElement(
                    "div",
                    {
                      className: "STV_timelineGrabber_Wrapper",
                      style: _,
                    },
                    _.createElement(
                      "div",
                      {
                        className: "STV_timelineGrabber" + _,
                      },
                      _.createElement(
                        "div",
                        {
                          className: "STV_timelineGrabberArrow",
                        },
                        _.createElement(_.apU, null),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
      };
      (0, _._)([_._], _.prototype, "OnMouseDown", null),
        (0, _._)([_._], _.prototype, "OnMouseMove", null),
        (0, _._)([_._], _.prototype, "OnMouseUp", null),
        (0, _._)([_._], _.prototype, "OnKeyDown", null),
        (0, _._)([_._], _.prototype, "OnMouseHoverMove", null),
        (0, _._)([_._], _.prototype, "OnMouseHoverLeave", null),
        (0, _._)([_._], _.prototype, "AdjustHoverForClientX", null),
        (0, _._)([_._], _.prototype, "OnSegmentClick", null),
        (0, _._)([_._], _.prototype, "OnMarkerMouseEnter", null),
        (0, _._)([_._], _.prototype, "OnMarkerMouseLeave", null),
        (_ = (0, _._)([_._], _));
      let _ = class extends _.Component {
        state = {
          info: null,
        };
        static getDerivedStateFromProps(_, _) {
          if (
            (!_.info || _.info.m_steamIDBroadcast !== _.steamID) &&
            (_.info && (_._.StopInfo(_.info), (_.info = null)), _.steamID)
          ) {
            return {
              info: _._.StartInfo(_.steamID),
            };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && _._.StopInfo(this.state.info);
        }
        RenderStreamSwitcher() {
          const _ = this.props.steamID;
          return _._.stream[_]
            ? _.createElement(_, {
                value: _,
                options: _._.stream,
                onChange: this.props.onLocalStreamChange,
              })
            : null;
        }
        render() {
          let { info: _ } = this.state;
          if (!_) return null;
          let _ = "";
          _.m_nViewerCount && (_ = (0, _._)(_.m_nViewerCount));
          let _ = _._.bValid && _._.stream && _._.stream[_.m_steamIDBroadcast],
            _ =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(_.m_strAppId) > 0 || _);
          const _ =
            !this.props.bHideThumbnail &&
            this.props.bVerticalBroadcastChat &&
            _ &&
            _._.gidEvent;
          return _.createElement(
            "div",
            {
              className: "BroadcastDetails",
            },
            !this.props.bHideThumbnail &&
              _.createElement(_, {
                className: "broadcastDetailsThumbBlur",
                src: _.m_strThumbnailUrl,
                draggable: !1,
                duration: 2500,
              }),
            _.createElement(
              "div",
              {
                className: "BroadcastDetailsHeader",
              },
              _ &&
                _.m_strAppTitle &&
                _.createElement(
                  "div",
                  {
                    className: "displayColumn",
                  },
                  _.createElement(
                    "div",
                    {
                      className: "Info",
                    },
                    _.createElement(
                      "span",
                      {
                        className: "AppTitle",
                      },
                      _.m_strAppTitle,
                    ),
                    _.m_strTitle &&
                      _.createElement(
                        "span",
                        {
                          className: "BroadcastTitle",
                        },
                        " - ",
                        _.m_strTitle,
                      ),
                    this.props.onLocalStreamChange &&
                      this.RenderStreamSwitcher(),
                  ),
                  _ &&
                    _.createElement(
                      "div",
                      {
                        className: "BroadcastDetailsHeader_ViewerCount",
                      },
                      _.createElement(_.y_e, null),
                      (0, _._)("#Broadcast_ViewerCount", _),
                    ),
                ),
              _ &&
                this.props.onOpenLinkInNewWindow &&
                _.createElement(
                  "div",
                  {
                    className: "Actions",
                  },
                  _.createElement(
                    "div",
                    {
                      onClick: (_) =>
                        this.props.onOpenLinkInNewWindow(_, _._.link),
                      className: "BroadcastLink",
                    },
                    _._.linkName,
                  ),
                ),
            ),
            _ &&
              _.createElement(_._, {
                gidEvent: _._.gidEvent,
              }),
            _ &&
              _.createElement(_._, {
                _:
                  _._.bValid && _._.stream && _._.stream[_.m_steamIDBroadcast]
                    ? _._.appID
                    : parseInt(_.m_strAppId),
                type: "game",
              }),
          );
        }
      };
      _ = (0, _._)([_._], _);
      class _ extends _.Component {
        showContextMenu(_) {
          const {
              options: _,
              value: __webpack_require__,
              onChange: _,
            } = this.props,
            _ = Object.keys(_).map((_) =>
              _.createElement(
                _._,
                {
                  key: _,
                  onSelected: () => _(_),
                  bChecked: _ === __webpack_require__,
                },
                (0, _._)(_[_]),
              ),
            );
          (0, _._)(_.createElement(_._, null, _), _);
        }
        render() {
          const { value: _, options: _ } = this.props,
            _ = _[_];
          return _.createElement(
            "div",
            {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
            },
            _.createElement("span", null, " - ", (0, _._)(_)),
            _.createElement(
              "div",
              {
                className: "ContextMenuButton",
              },
              _.createElement(_.GB9, null),
            ),
          );
        }
      }
      (0, _._)([_._], _.prototype, "showContextMenu", null);
      let _ = class extends _.Component {
        constructor(_) {
          super(_),
            (this.state = {
              sizableRegion: [],
            });
        }
        async AddLinkRegion() {
          let _ = this.state.sizableRegion.length;
          this.state.sizableRegion.push({
            xPosPct: 2.5 + _,
            yPosPct: 2.5 + _,
            widthPct: 20,
            heightPct: 15,
          }),
            this.setState(
              {
                sizableRegion: this.state.sizableRegion,
              },
              () => this.OnSaveRegions(),
            );
        }
        componentDidUpdate(_) {
          0 == _.linkRegions.length &&
            this.props.linkRegions.forEach((_, _) => {
              this.LoadLinkRegion(_, _);
            });
        }
        async LoadLinkRegion(_, _) {
          this.state.sizableRegion.length;
          this.state.sizableRegion.push({
            xPosPct: _.left,
            yPosPct: _.top,
            widthPct: _.width,
            heightPct: _.height,
            link_url: _.url,
            link_description: _.link_description,
            link_index: _.link_index,
          }),
            await this.setState({
              sizableRegion: this.state.sizableRegion,
            });
        }
        OnSaveRegions() {
          let _;
          _ = {
            links: [],
          };
          for (let _ = 0; _ < this.state.sizableRegion.length; _++) {
            let _;
            (_ = {
              left: Math.floor(100 * this.state.sizableRegion[_].xPosPct),
              top: Math.floor(100 * this.state.sizableRegion[_].yPosPct),
              width: Math.floor(100 * this.state.sizableRegion[_].widthPct),
              height: Math.floor(100 * this.state.sizableRegion[_].heightPct),
              url: this.state.sizableRegion[_].link_url,
              link_description: this.state.sizableRegion[_].link_description,
              link_index: _,
            }),
              _.links.push(_);
          }
          this.props.onSaveLinkRegions(_);
        }
        async DeleteRegion(_) {
          this.state.sizableRegion.splice(_, 1),
            console.log("keys: ", this.state.sizableRegion.keys),
            this.setState(
              {
                sizableRegion: this.state.sizableRegion,
              },
              () => this.OnSaveRegions(),
            );
        }
        async UpdatePanel(_, _) {
          const _ = [...this.state.sizableRegion];
          (_[_] = _),
            this.setState(
              {
                sizableRegion: _,
              },
              () => this.OnSaveRegions(),
            );
        }
        render() {
          return _.createElement(
            "div",
            {
              className: "LinkOverlayContainer",
            },
            _.createElement(
              "div",
              {
                className: "LinkOverlayValidRegion",
              },
              !this.props.editMode && this.props.linkRegions
                ? this.props.linkRegions.map((_) => {
                    const _ = (0, _._)(_.url);
                    return _.createElement(
                      _._,
                      {
                        key: _.link_index,
                        href: _.url,
                        bForceExternal: _,
                        bUseLinkFilter: _,
                      },
                      _.createElement(
                        "div",
                        {
                          className: "LinkRegion",
                          style: {
                            left: _.left + "%",
                            top: _.top + "%",
                            width: _.width + "%",
                            height: _.height + "%",
                          },
                        },
                        _.createElement(
                          "div",
                          {
                            className: "LinkRegionText",
                          },
                          _.link_description,
                          " ",
                        ),
                      ),
                    );
                  })
                : null,
              this.props.editMode &&
                this.state.sizableRegion.map((_, _) =>
                  _.createElement(_._, {
                    key: 100 * _ + _.xPosPct,
                    index: _,
                    deleteFn: this.DeleteRegion,
                    updateFn: this.UpdatePanel,
                    xPosPct: _.xPosPct,
                    yPosPct: _.yPosPct,
                    widthPct: _.widthPct,
                    heightPct: _.heightPct,
                    link_url: _.link_url,
                    link_description: _.link_description,
                  }),
                ),
              this.props.editMode &&
                _.createElement(
                  "div",
                  {
                    className: "AddLinkRegion",
                    onClick: this.AddLinkRegion,
                  },
                  (0, _._)("#SteamTV_AddLinkRegion"),
                ),
            ),
            _.createElement(
              "div",
              {
                className: "LinkOverlayInvalidRegion",
              },
              _.createElement(
                "div",
                null,
                (0, _._)("#SteamTV_LinkRegionReserved"),
              ),
            ),
          );
        }
      };
      (0, _._)([_._], _.prototype, "AddLinkRegion", null),
        (0, _._)([_._], _.prototype, "LoadLinkRegion", null),
        (0, _._)([_._], _.prototype, "OnSaveRegions", null),
        (0, _._)([_._], _.prototype, "DeleteRegion", null),
        (0, _._)([_._], _.prototype, "UpdatePanel", null),
        (_ = (0, _._)([_._], _));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => null != _;
      function _(_, _) {
        const [__webpack_require__, _] = _.useState(() =>
            window.localStorage.getItem(_),
          ),
          _ = _.useRef(_),
          _ = _.useCallback(
            (_) => {
              const _ = _(_) ? String(_) : null;
              window.localStorage.setItem(_, _),
                _(_),
                _.Get().GetLocalStoreChangeCallback(_).Dispatch(_);
            },
            [_, _],
          );
        _.useEffect(() => {
          _ != _.current &&
            (_(window.localStorage.getItem(_)), (_.current = _));
        }, [_]);
        const _ =
          _ == _.current ? __webpack_require__ : window.localStorage.getItem(_);
        let _ = _;
        return (
          _(_) &&
            (_ = _(_)
              ? "boolean" == typeof _
                ? _.constructor("false" !== _)
                : _.constructor(_)
              : _),
          (0, _._)(_.Get().GetLocalStoreChangeCallback(_), _),
          [_, _]
        );
      }
      class _ {
        m_mapChangeCallback = new Map();
        GetLocalStoreChangeCallback(_) {
          return (
            this.m_mapChangeCallback.has(_) ||
              this.m_mapChangeCallback.set(_, new _._()),
            this.m_mapChangeCallback.get(_)
          );
        }
        static s_Singleton;
        static Get() {
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new _._("TrailerAppVideo"),
        _ = "bGameHighlightAutoplayDisabled",
        _ = "discovery-queue-volume",
        _ = "discovery-queue-mute";
      function _(_) {
        const {
            storeItem: _,
            bCurrentlyActive: __webpack_require__,
            autoPlayCookieName: _,
            bPlayWithBroadcastPlayer: _,
            showScreenshotInsteadOfMainCap: _,
            autoplayCheckboxPosition: _,
            refTogglePlayPause: _,
            bShowAOAutoPlayWarning: _,
            ..._
          } = _,
          [_, _] = _.useState(!1),
          [_, _] = _.useState(!1),
          _ = (0, _._)(),
          _ = (function (_, _) {
            const _ = _?.GetAllTrailers().GetAllTrailers("blocked" == _);
            return _ && _.length > 0 ? _[0] : void 0;
          })(_, _),
          _ = (_ ?? !0) && _ && !_.BIsAllAges() && "masked" == _,
          _ = (0, _._)(),
          [_, _] = _.useState(!1),
          [_, _] = _.useState(0),
          _ = _.useRef(void 0),
          _ = _.useRef(void 0),
          [_, _] = _.useState(),
          { bCookieLoaded: _ } = (function (_, _, _) {
            const _ = _.useCallback(() => {
              const _ = (0, _._)(_ ?? _),
                _ = !(!_ || "true" !== _.toLowerCase());
              __webpack_require__(!_);
            }, [_, _]);
            return (function (_, _) {
              const [_, _] = _.useState(!1);
              return (
                _.useEffect(() => (_ && (_(), _(!0)), () => _(!1)), [_, _]),
                {
                  bCookieLoaded: _,
                }
              );
            })(_, _);
          })(_, __webpack_require__, _),
          _ = _;
        _.useEffect(() => {
          __webpack_require__ && _ && (_ || _) && !_ && _(!0);
        }, [_, _, __webpack_require__, _, _]),
          _.useEffect(() => {
            _ && _ && _ && _();
          }, [_, _, _, _]);
        const _ = (function (_, _, _, _, _) {
          return _.useCallback(() => {
            0 == _
              ? _(!0)
              : 1 == _ && _.current
                ? _.current.paused
                  ? _.current.play()
                  : _.current.pause()
                : 2 == _ && _.current
                  ? _.current.IsPaused()
                    ? _.current.Play()
                    : _.current.Pause()
                  : 2 == _ && _ && _.TogglePlayPause();
          }, [_, _, _, _, _]);
        })(_, _, _, _, _);
        _.useEffect(() => {
          _ && (_.current = _);
        }, [_, _]);
        const _ = _.GetScreenshots("allowed" != _),
          _ = _ && _.length > 0 ? _[0] : _.GetAssets().GetMainCapsuleURL();
        return _.createElement(
          _._,
          {
            className: _().AppCarouselTrailerCtn,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
          },
          _.createElement("img", {
            className: (0, _._)(_().AppMainCap, 0 != _ && _().Hidden),
            src: _,
            onClick: _,
          }),
          !_ &&
            _.createElement(_, {
              storeItem: _,
              bAutoplayVideos: _,
              autoplayCheckboxPosition: _,
              fnSetAutoPlayVideos: (_) => {
                (0, _._)(_ ?? _, String(!_), 3650), _(_), _(_);
              },
            }),
          _.createElement(_._, {
            name: _.GetName(),
            trailerCategory: _?.GetTrailerCategory(),
            trailerDisplay: _,
            mouseOver: _,
          }),
          _.createElement(_, {
            eTrailerDisplay: _,
            setTrailerDisplay: _,
            featuredTrailer: _,
            refMicroTrailer: _,
            refMainTrailer: _,
            loadedAndActive: _ && __webpack_require__,
            setVideoShouldStart: _,
            bMouseOverVideo: _,
            storeItem: _,
            broadcastVideo: _,
            fnSetBroadcastVideo: _,
            fnTogglePlayPause: _,
            bAutoplayVideos: _,
            bVideoShouldStart: _,
            bPlayWithBroadcastPlayer: _,
            ..._,
          }),
          _ &&
            _ &&
            _.createElement(
              "div",
              {
                className: _().AOWarning,
              },
              _.createElement(
                "div",
                {
                  className: _().Text,
                },
                (0, _._)("#StoreTrailer_AOWarning_1"),
              ),
              _.createElement(
                "div",
                {
                  className: _().Text,
                },
                (0, _._)("#StoreTrailer_AOWarning_2"),
              ),
            ),
        );
      }
      function _(_) {
        const {
            storeItem: _,
            featuredTrailer: __webpack_require__,
            bPlayWithBroadcastPlayer: _,
            bSkipMicroTrailer: _,
            nFadeRatio: _,
            fnPlayPause: _,
            bRequestPause: _,
            fnComplete: _,
            eTrailerDisplay: _,
            setTrailerDisplay: _,
            refMainTrailer: _,
            refMicroTrailer: _,
            loadedAndActive: _,
            setVideoShouldStart: _,
            broadcastVideo: _,
            fnSetBroadcastVideo: _,
            fnTogglePlayPause: _,
            bAutoplayVideos: _,
            bVideoShouldStart: _,
          } = _,
          [_, _] = _.useState(!1),
          [_, _] = _.useState(!1),
          [_, _] = _.useState(!1),
          [_, _] = _.useState(!1),
          [_, _] = _.useState(!1),
          _ = (0, _._)(),
          _ = _?.GetMicroTrailer("blocked" == _),
          _ = !!_ || !!__webpack_require__;
        _.useEffect(() => {
          let _ = !1;
          _ && _ && _ && (_ = 0 === _ || (1 === _ && !_) || (2 === _ && !_)),
            _(_),
            _?.(_ && _);
        }, [_, _, _, _, _, _, _, _]),
          (function (_, _) {
            _.useEffect(() => {
              const _ = _.current;
              if (!_) return;
              const _ = () => _(!0),
                _ = () => _(!1);
              return (
                __webpack_require__.addEventListener("play", _),
                __webpack_require__.addEventListener("pause", _),
                () => {
                  __webpack_require__.removeEventListener("play", _),
                    __webpack_require__.removeEventListener("pause", _);
                }
              );
            }, [_, _]);
          })(_, _),
          _.useEffect(() => {
            _ ||
              (_(0),
              _(!1),
              _(!1),
              _.current && (_.current.pause(), (_.current.currentTime = 0)),
              _.current && (_.current.Pause(), _.current.SeekToStart()));
          }, [_, _, _, _]);
        const _ = _.useRef(!1);
        return (
          _.useEffect(() => {
            if (_ && 0 === _)
              if ((_(!0), _))
                if (_.current) {
                  _.Debug("Starting microtrailer"), _(1);
                  const _ = () =>
                    (function (_, _, _) {
                      if (_.current) return;
                      (_.current = !0),
                        _.Debug("Starting main trailer"),
                        _(2),
                        __webpack_require__.Play();
                    })(_, _, _.current);
                  _ || !_.current
                    ? _()
                    : (_(!0),
                      (_.current.onended = _),
                      (_ = _.current),
                      (_ = "microtrailer"),
                      (__webpack_require__ = () => _(!1)),
                      _.play().catch((_) => {
                        __webpack_require__(),
                          _.Warning(`Failed to play ${_}: `, _);
                      }));
                } else
                  _ && (_.Debug("Starting broadcast player"), _(2), _.Play());
              else _.Debug("Showing image");
            var _, _, _;
          }, [_, _, _, _, _, _, _, _, _]),
          (function (_, _) {
            _.useEffect(() => {
              if (!_.current || !_.current.onended) return;
              if (!_) return;
              let _ = _.current.onended,
                _ = setTimeout(() => {
                  __webpack_require__();
                }, 6e3);
              return () => clearTimeout(_);
            }, [_, _]);
          })(_, _),
          _.useEffect(() => {
            _ || _(!1);
          }, [_, _]),
          _.useEffect(() => {
            const _ = (0, _._)(() => {
              _(_?.GetUserInputNeeded()), _(!_?.IsPaused());
            });
            return () => _();
          }, [_]),
          (function (_, _, _, _, _, _, _) {
            const [_, _] = _.useState(!1);
            _.useEffect(() => {
              _ && !_
                ? 1 == _ && _ && _
                  ? (__webpack_require__.pause(), _(!0))
                  : 2 == _ && _ && _
                    ? (_.Pause(), _(!0))
                    : 2 == _ && _ && !_.IsPaused() && (_.Pause(), _(!0))
                : !_ &&
                  _ &&
                  (1 == _ && _
                    ? __webpack_require__.play()
                    : 2 == _ && _
                      ? _.Play()
                      : 2 == _ && _ && _.IsPaused() && _.Play(),
                  _(!1));
            }, [_, _, _, _, _, _, _, _]);
          })(_, _, _.current, _, _.current, _, _),
          _ && _.BIsVisible()
            ? (__webpack_require__ || _) &&
              _.createElement(
                _.Fragment,
                null,
                _ &&
                  !_ &&
                  _.createElement(
                    _._,
                    {
                      focusable: !0,
                      onClick: _,
                      className: _().PlayButton,
                    },
                    _.createElement(_.IOc, null),
                  ),
                _ &&
                  _.createElement(
                    "video",
                    {
                      className: _(!0, _),
                      ref: _,
                      preload: "auto",
                      playsInline: !0,
                      muted: !0,
                      onClick: _,
                    },
                    _.createElement("source", {
                      src: _.strWebMURL,
                      type: "video/webm",
                    }),
                    Boolean(!_._.IN_CLIENT) &&
                      _.createElement("source", {
                        src: _.strMP4URL,
                        type: "video/mp4",
                      }),
                  ),
                __webpack_require__ &&
                  !_ &&
                  _.createElement(_, {
                    ref: _,
                    trailer: __webpack_require__,
                    eTrailerDisplay: _,
                    fadeRatio: _,
                    onPlayPauseChange: _,
                    onPlaybackEnd: _,
                  }),
                _ &&
                  _.createElement(_.default, {
                    classes: _(!1, _),
                    nAppIDVOD: _.GetAppID(),
                    watchLocation: 15,
                    fnOnVideoEnd: _,
                    fnVideoClick: _,
                    fnSetBroadcastVideo: _,
                    bStartWithSubtitles: !0,
                    bStartMuted: !0,
                  }),
              )
            : null
        );
      }
      function _(_) {
        let {
          ref: _,
          trailer: __webpack_require__,
          eTrailerDisplay: _,
          fadeRatio: _,
          onPlayPauseChange: _,
          onPlaybackEnd: _,
        } = _;
        (0, _.useEffect)(() => {
          if (void 0 !== _ && _.current) {
            let _ = _.current.GetVolume() * _;
            const _ = !0;
            _.current.SetVolume(_, _);
          }
        }, [_, _]);
        let _ = 2 != _,
          _ = _(!1, _);
        return _.createElement(
          _,
          null,
          _.createElement(
            "div",
            {
              className: _,
            },
            _.createElement(_._, {
              ref: _,
              dashManifests: __webpack_require__.GetTrailersDash(),
              hlsManifest: __webpack_require__.GetTrailerHls(),
              screenshot: "",
              altText: "",
              forcePause: _,
              muteWhenAutoplayBlocked: !0,
              onPlaybackEnd: _,
              onPlayPauseChange: _,
            }),
          ),
        );
      }
      function _(_) {
        let { children: _ } = _;
        const [__webpack_require__, _] = (0, _._)(_, 0.8),
          [_, _] = (0, _._)(_, !0);
        return _.createElement(
          _._,
          {
            playerVolume: __webpack_require__,
            setPlayerVolume: _,
            audioMuted: _,
            setAudioMuted: _,
          },
          _,
        );
      }
      function _(_, _) {
        return (0, _._)({
          [_().AppVideo]: !0,
          [_().PlayFullTrailer]: 2 == _,
          [_().PlayMicrotrailer]: 1 == _,
          [_().NoTrailer]: 0 == _,
          [_().Microtrailer]: _,
          [_().Trailer]: !_,
        });
      }
      function _(_) {
        const {
            storeItem: _,
            bAutoplayVideos: __webpack_require__,
            fnSetAutoPlayVideos: _,
            autoplayCheckboxPosition: _,
          } = _,
          _ = {
            [_ || "top"]: 0,
          };
        return _.createElement(
          "div",
          {
            onClick: (_) => {
              _.preventDefault(), _.stopPropagation();
            },
            className: _().AutoplayCheckboxCtn,
          },
          _.createElement(_._, {
            controlled: !0,
            checked: __webpack_require__,
            key: _.GetAppID(),
            className: _().AutoplayCheckbox,
            style: _,
            label: (0, _._)("#StoreTrailer_AutoPlayVideos"),
            onChange: _,
          }),
        );
      }
    },
  },
]);
