(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [9129],
  {
    chunkid: (module) => {
      module.exports = {
        IconContainer: "_6f_B5nDywKxTeX2mN82H",
        ButtonContainer: "_1ShXayKQrFaUxECMORaNmM",
        InfoContainer: "_20mER4KVFt1wYBaOFlnjvL",
        IconImg: "RP1UpBcTVectpTel7p6iH",
        ReactionCount: "_18GX_0BWySenzVNaYO4IsZ",
        IconList: "_2cI0LExX5UtjoTq7F6CTwY",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          AwardIcon: () => _,
          AwardIconList: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.PureComponent {
        render() {
          const _ = (0, _._)(
            "#RewardsReaction_Tooltip",
            this.props.reaction.count || 0,
            (0, _._)(this.props.reaction.reaction_type),
          );
          return _.createElement(
            _._,
            {
              className: (0, _._)(_().InfoContainer, _().IconContainer),
              toolTipContent: _,
            },
            _.createElement("img", {
              className: _().IconImg,
              src: (0, _._)(this.props.reaction.reaction_type, !1),
            }),
            this.props.reaction.count &&
              _.createElement(
                "div",
                {
                  className: _().ReactionCount,
                },
                this.props.reaction.count,
              ),
          );
        }
      }
      class _ extends _.PureComponent {
        render() {
          let _ = [];
          for (const _ of this.props.reactions)
            _.push(
              _.createElement(_, {
                key: _.reaction_type,
                reaction: _,
              }),
            );
          return _.createElement(
            "div",
            {
              className: _().IconList,
            },
            _,
          );
        }
      }
    },
  },
]);
