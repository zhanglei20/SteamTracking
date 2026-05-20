var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let {
      filter: _,
      onFilterChange: _,
      availableApps: _,
      facetCounts: _,
      drawerOpen: _,
      setDrawerOpen: _,
    } = _,
    _ = _.bSteamItems,
    _ = (_) =>
      _(
        {
          ..._,
          bSteamItems: _,
        },
        !0,
      ),
    _ = _(),
    _ = (0, _.useMemo)(
      () =>
        !_ || _.length === 0
          ? void 0
          : {
              counts: _.reduce((_, _) => {
                if (_.listings && _.listings > 0) {
                  let _ = _.tag.category,
                    _ = _.tag.internal_name;
                  _[_] || (_[_] = {}), (_[_][_] = _.listings);
                }
                return _;
              }, {}),
            },
      [_],
    ),
    [_, _] = _(_.strSearch, (_) =>
      _(
        {
          ..._,
          strSearch: _,
        },
        !0,
      ),
    ),
    _ = () => {
      _(
        _
          ? {
              ..._,
              strSearch: "",
              filterSteam: {
                ..._.filterSteam,
                facets: {},
                accessories: {},
                price: [0, _.maxPrice],
              },
            }
          : {
              ..._,
              strSearch: "",
              filterInGame: {
                ..._.filterInGame,
                facets: {},
                accessories: {},
                price: [0, _.maxPrice],
              },
            },
        !0,
      ),
        _(null);
    },
    _ = _ ? _.filterSteam : _.filterInGame,
    _ =
      _.price[0] !== 0 ||
      _.price[1] !== _.maxPrice ||
      Object.keys(_.facets).length > 0 ||
      Object.keys(_.accessories).length > 0 ||
      _.strSearch;
  return (0, _.jsxs)(_, {
    open: _,
    onClose: () => _(!1),
    children: [
      (0, _.jsx)(_.Title, {
        children: _.Localize("#MarketSearch_FilterColumn_Header"),
      }),
      (0, _.jsx)(_, {
        showSteamItems: _,
        onShowSteamItemsChange: _,
      }),
      (0, _.jsxs)(_, {
        marginTop: "2",
        children: [
          _ &&
            (0, _.jsx)(_, {
              filter: _.filterSteam,
              onFilterChange: (_, _) =>
                _(
                  {
                    ..._,
                    filterSteam: _,
                  },
                  _,
                ),
              facetingInfo: _,
              searchText: _,
              onSearchTextChange: _,
            }),
          !_ &&
            (0, _.jsx)(_, {
              filter: _.filterInGame,
              onFilterChange: (_, _) =>
                _(
                  {
                    ..._,
                    filterInGame: _,
                  },
                  _,
                ),
              availableApps: _,
              facetingInfo: _,
              searchText: _,
              onSearchTextChange: _,
              bSearchDescriptions: _.bSearchDescriptions,
              onSearchDescriptionsChange: (_) =>
                _(
                  {
                    ..._,
                    bSearchDescriptions: _,
                  },
                  !0,
                ),
            }),
        ],
      }),
      _ &&
        (0, _.jsx)(_.ResetButton, {
          onReset: _,
        }),
    ],
  });
}
function _(_) {
  let {
      filter: _,
      onFilterChange: _,
      availableApps: _,
      searchText: _ = "",
      onSearchTextChange: _,
      bSearchDescriptions: _,
      onSearchDescriptionsChange: _,
    } = _,
    _ = (0, _.useMemo)(() => Object.values(_), [_]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        marginBottom: "2",
        children: (0, _.jsx)(_, {
          selectedApp: _.app,
          apps: _,
          onSelectionChange: (_) =>
            _(
              {
                ..._,
                app: _,
                facets: {},
              },
              !0,
            ),
          size: "2",
          clearable: !1,
        }),
      }),
      (0, _.jsx)(_, {
        value: _,
        onTextChange: _,
        clearable: !0,
        placeholder: _.Localize("#FilterResults_Placeholder"),
        variant: "inset-focus",
      }),
      _.app &&
        (0, _.jsx)(_, {
          marginLeft: "4",
          marginTop: "4",
          checked: !!_,
          onChange: (_) => _(_),
          title: _.Localize("#AdvancedSearch_IncludeDescriptions_Tooltip"),
          children: (0, _.jsx)(_, {
            size: "2",
            children: _.Localize("#AdvancedSearch_IncludeDescriptions"),
          }),
        }),
      _.app &&
        (0, _.jsx)(_, {
          ..._,
        }),
      !_.app &&
        (0, _.jsx)(_, {
          appid: 0,
          state: _,
          onStateChange: _,
          facets: {},
          accessories: [],
          assetProperties: [],
        }),
    ],
  });
}
function _(_) {
  let {
      filter: _,
      onFilterChange: _,
      facetingInfo: _,
      searchText: _ = "",
      onSearchTextChange: _,
    } = _,
    _ = _(),
    { facets: _ = {}, rgApps: _, mapAppIDs: _ } = _.data || {};
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        selectedApp: _.app,
        apps: _.data?.rgApps || [],
        onSelectionChange: (_) =>
          _(
            {
              ..._,
              app: _,
              facets: {},
            },
            !0,
          ),
        size: "2",
      }),
      (0, _.jsx)(_, {
        value: _,
        onTextChange: _,
        clearable: !0,
        placeholder: _.Localize("#FilterResults_Placeholder"),
        variant: "inset-focus",
      }),
      (0, _.jsx)(_, {
        marginTop: "3",
        children: (0, _.jsx)(_, {
          facets: _,
          state: _,
          onStateChange: _,
          facetingInfo: _,
        }),
      }),
    ],
  });
}
function _(_) {
  return _(_.filter.app?.appid)
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let { filter: _, onFilterChange: _, facetingInfo: _ } = _;
  _(_.app, "Attempted to render app filters without an app!");
  let _ = _(_.app.appid),
    _ = _(_.app.appid);
  return !_.isSuccess || !_.isSuccess
    ? null
    : (0, _.jsx)(_, {
        appid: _.app.appid,
        facets: _.data,
        facetingInfo: _,
        accessories: [],
        assetProperties: _.data?.property_schemas,
        state: _,
        onStateChange: _,
      });
}
function _(_) {
  let { filter: _, onFilterChange: _ } = _,
    _ = _.app.appid,
    _ = _(_);
  return _.data
    ? (0, _.jsx)(_, {
        mini: !0,
        appid: _,
        facets: _.data,
        state: _,
        onStateChange: _,
        minWidth: "220px",
      })
    : null;
}
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let { total: _ } = _,
    _ = _(_),
    _ = "";
  return (
    typeof _ == "number" && _.length > 0
      ? (_ = _.LocalizePlural("#Search_AmountFoundFor", _(_)))
      : typeof _ == "number"
        ? (_ = _.LocalizePlural("#Search_AmountFound", _(_)))
        : _.length > 0 && (_ = _.Localize("#Search_ResultsFoundFor")),
    (0, _.jsxs)(_, {
      align: "center",
      gap: "2",
      wrap: "wrap",
      children: [
        _
          ? (0, _.jsx)(_, {
              contrast: "description",
              children: _,
            })
          : null,
        _.map(({ key: _, label: _, onClear: _ }) =>
          (0, _.jsxs)(
            _,
            {
              color: "dull",
              onClick: _,
              children: [
                _,
                (0, _.jsx)(_, {
                  marginLeft: "2",
                }),
              ],
            },
            _,
          ),
        ),
      ],
    })
  );
}
function _(_) {
  let { state: _, onChange: _ } = _,
    _ = _(),
    _ = [];
  _.strSearch &&
    _.push({
      key: "q",
      label: `"${_.strSearch}"`,
      onClear: () =>
        _({
          ..._,
          strSearch: "",
        }),
    });
  let _ = _.bSteamItems ? _.filterSteam : _.filterInGame,
    _ = _.app?.appid ?? 0,
    _ = _.bSteamItems ? 753 : _,
    _ = _(_),
    _ = _(_),
    _ = (_) =>
      _({
        ..._,
        filterInGame: _.bSteamItems ? _.filterInGame : _,
        filterSteam: _.bSteamItems ? _ : _.filterSteam,
      });
  _(_.price, _.maxPrice) &&
    _.push({
      key: "p",
      label: `${_(_.price[0], _.currency.eCurrency)} - ${_(_.price[1], _.currency.eCurrency)}`,
      onClear: () =>
        _({
          ..._,
          price: [0, _.maxPrice],
        }),
    });
  for (let [_, _] of Object.entries(_.facets))
    for (let _ of Object.keys(_)) {
      let _ = (_.data ? _.data[`${_}_${_}`] : void 0)?.tags,
        _ = _ ? _[_] : void 0,
        _ = _ ? _.localized_name : _;
      _.push({
        key: `f_${_}_${_}`,
        label: _,
        onClear: () =>
          _({
            ..._,
            facets: _(_.facets, _, _, !1),
          }),
      });
    }
  for (let [_, _] of Object.entries(_.accessories))
    for (let _ of Object.keys(_))
      _.push({
        key: `a_${_}_${_}`,
        label: _,
        onClear: () =>
          _({
            ..._,
            accessories: _(_.accessories, _, _, !1),
          }),
      });
  for (let [_, _] of Object.entries(_.properties)) {
    let _ = _.data ? _.data.get(parseInt(_)) : void 0;
    if (!_) continue;
    let _ = [0, 0];
    _.type === _.k_EAssetPropertyType_Float
      ? ((_[0] = _.float_min ?? _.float_min ?? 0),
        (_[1] = _.float_max ?? _.float_max ?? 1))
      : _.type === _.k_EAssetPropertyType_Int &&
        ((_[0] = _.int_min ?? _.int_min ?? 0),
        (_[1] = _.int_max ?? _.int_max ?? 0));
    let _ = _.Localize(
        "#AssetPropertyNumberFilterRange",
        _.localized_label ?? "",
        _[0],
        _[1],
      ),
      _ = `ap_${_}`;
    _.push({
      key: _,
      label: _,
      onClear: () => {
        let _ = {
          ..._,
          properties: {
            ..._.properties,
          },
        };
        delete _.properties[_._], _(_);
      },
    });
  }
  return _;
}
function _(_, _) {
  let [_, _] = _;
  return (_ > 0 && _ < _) || (_ < _ && _ > 0);
}
function _(_, _, _, _) {
  let _ = {
    ..._,
    [_]: {
      ..._[_],
    },
  };
  return (
    (_[_][_] = !0),
    _ || (Object.keys(_[_]).length === 1 ? delete _[_] : delete _[_][_]),
    _
  );
}
var _ = _(_(), 1),
  _ = _({
    Component: _,
    Actions: {
      SearchMarketListings: _("ZFJAHYDA", "SearchMarketListings"),
      SearchItemDescriptions: _("ZFJAHYDA", "SearchItemDescriptions"),
    },
  }),
  _ = 753;
function _() {
  let {
      marketQuery: _,
      participatingApps: _,
      mapSteamItemApps: _,
      initialSelectedListing: _,
    } = _.useLoaderData(),
    _ = _(),
    [_, _] = (0, _.useState)(() => _()?.marketQuery ?? _),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = new URL(window.location.href);
        (_.search = _(_, _.maxPrice).toString()),
          _(
            (_) => ({
              ..._,
              marketQuery: _,
            }),
            _,
          ),
          _(_);
      },
      [_.maxPrice],
    );
  _(
    (0, _.useCallback)(() => {
      history.state?.marketQuery && _(history.state.marketQuery);
    }, []),
  );
  let _ = _(_, _.Actions.SearchMarketListings, !_.bSearchDescriptions),
    _ = _(_, _.Actions.SearchItemDescriptions, _.bSearchDescriptions),
    _ = _.bSearchDescriptions ? _ : _,
    _ = _(_, _, _, _),
    [_, _] = (0, _.useState)(_),
    [_, _] = (0, _.useState)(),
    _ = (_, _) => {
      _
        ? (_({
            ..._,
            ..._(_, _),
          }),
          _(_),
          _(void 0))
        : _(_);
    },
    _ = _ || _,
    { isFetchingNextPage: _, fetchNextPage: _ } = _,
    _ = (0, _.useCallback)(() => {
      _ || _();
    }, [_, _]),
    _ = (_) => {
      let _ = {
        ..._,
        sort: _ ? _[0] : void 0,
        direction: _ ? _[1] : void 0,
      };
      _(_);
    },
    [_, _] = _(),
    _ = _() === "initial",
    _ = (0, _.useRef)(!1);
  (0, _.useEffect)(() => {
    if (!_.current) {
      _.current = !0;
      return;
    }
    let _ = new URL(window.location.href),
      _ = _.sort;
    _
      ? (_.searchParams.set("sort", _.toString()),
        _.direction === void 0
          ? _.searchParams.delete("dir")
          : _.searchParams.set("dir", _.direction.toString()),
        _((_) => ({
          ..._,
          searchSort: _,
          searchSortDir: _.direction,
        })))
      : (_.searchParams.delete("sort"),
        _.searchParams.delete("dir"),
        _((_) => ({
          ..._,
          searchSort: _.k_EMarketSearchSortColumn_Default,
          searchSortDir: void 0,
        }))),
      _(_);
  }, [_.sort, _.direction, _]);
  let _ = _.data?.pages && _.data.pages[0] && _.data.pages[0].facets,
    _ = _(),
    [_, _] = (0, _.useState)(!1),
    _ =
      !_.bSearchDescriptions && _.isSuccess
        ? (0, _.jsxs)(_, {
            gap: "2",
            align: "center",
            children: [
              _ &&
                (0, _.jsx)(_, {
                  color: "dull",
                  width: {
                    initial: "100%",
                    _: "fit-content",
                  },
                  onClick: () => _(!0),
                  children: _.Localize("#Mobile_FiltersButton"),
                }),
              !_ &&
                (0, _.jsx)(_, {
                  total: _.data.pages[0]?.total_count,
                  state: _,
                  onChange: (_) => _(_, !0),
                }),
            ],
          })
        : (0, _.jsx)(_.Fragment, {});
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _.isError && (0, _.jsx)(_, {}),
      }),
      (0, _.jsxs)(_, {
        gap: "5",
        padding: {
          initial: "3",
          _: "7",
        },
        align: "start",
        position: "relative",
        children: [
          (0, _.jsx)(_, {
            filter: _,
            onFilterChange: _,
            availableApps: _,
            facetCounts: _ || void 0,
            drawerOpen: _,
            setDrawerOpen: _,
          }),
          (0, _.jsx)(_, {
            flexGrow: "1",
            navProps: {
              autoFocus: !0,
            },
            children: (0, _.jsxs)(_.Fragment, {
              children: [
                !_.bSearchDescriptions &&
                  _.isSuccess &&
                  (0, _.jsx)(_, {
                    results: _.data.pages.flatMap((_) => _?.results || []),
                    marketQuery: _,
                    onLoadMore: _,
                    loadingMore: _,
                    loadingNew: _.isFetching && _.isPlaceholderData,
                    total: _.data.pages[0]?.total_count,
                    activeSort: _.sort ? [_.sort, _.direction] : null,
                    onActiveSortChanged: _,
                    grouping:
                      _.data.pages[0]?.grouping ??
                      _.k_EMarketBucketLevel_BucketGroup,
                    breadcrumbs: _,
                  }),
                !!_.bSearchDescriptions &&
                  _.isSuccess &&
                  !!_.appid &&
                  (0, _.jsx)(_, {
                    appid: _.appid,
                    query: _,
                    activeSort: _.searchDescriptionSort,
                    onActiveSortChanged: (_) => {
                      _({
                        ..._,
                        searchDescriptionSort: _,
                      });
                    },
                    initialSelectedListing: _,
                    onShowFilters: _,
                  }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_, _, _, _) {
  let _ = _.appid === _;
  return {
    bSteamItems: _,
    filterInGame: _
      ? {
          app: null,
          facets: {},
          accessories: {},
          properties: {},
          price: [0, _.maxPrice],
        }
      : _(_, _, _, !1),
    filterSteam: _
      ? _(_, _, _, !0)
      : {
          app: null,
          facets: {},
          accessories: {},
          properties: {},
          price: [0, _.maxPrice],
        },
    strSearch: _.strQuery,
    bSearchDescriptions: _.bSearchDescriptions,
  };
}
function _(_, _, _, _) {
  let _ = {},
    _ = _[_.appid || 0] ?? null;
  if (_.filters)
    for (let _ of Object.keys(_.filters)) {
      let _ = _.slice(_.indexOf("_", _.indexOf("_") + 1) + 1),
        _ = _.filters[_];
      for (let _ of _) {
        let _ = _.slice(_.indexOf("_") + 1);
        if (_ && _ == "Game") {
          let _ = parseInt(_.slice(_.indexOf("_") + 1));
          isNaN(_) || (_ = _[_] ?? null);
        } else _ in _ || (_[_] = {}), (_[_][_] = !0);
      }
    }
  let _ = {};
  if (_.accessoryFilters)
    for (let _ of Object.keys(_.accessoryFilters)) {
      let _ = "accessory_";
      if (_.startsWith(_)) {
        let _ = _.slice(_.length);
        if (!_.length) continue;
        let _ = _.accessoryFilters[_];
        for (let _ of _) _ in _ || (_[_] = {}), (_[_][_] = !0);
      }
    }
  let _ = {};
  return {
    app: _,
    price: [_.price?.unMin || 0, _.price?.unMax || _.maxPrice],
    facets: _,
    accessories: _,
    properties: _,
  };
}
function _(_, _) {
  let _ = {},
    _ = {},
    _ = _.bSteamItems ? _(_.filterSteam) : _.filterInGame,
    _ = _.app?.appid;
  if (typeof _ == "number") {
    for (let _ of Object.keys(_.facets)) {
      let _ = `category_${_}_${_}`;
      for (let _ of Object.keys(_.facets[_])) {
        let _ = `tag_${_}`;
        _[_] ? _[_].push(_) : (_[_] = [_]);
      }
    }
    for (let _ of Object.keys(_.accessories)) {
      let _ = `accessory_${_}`;
      for (let _ of Object.keys(_.accessories[_]))
        _[_] ? _[_].push(_) : (_[_] = [_]);
    }
  }
  let [_, _] = _.price;
  return {
    appid: _,
    filters: _,
    accessoryFilters: _,
    price: {
      eCurrency: _.currency.eCurrency,
      unMin: _ > 0 ? _ : void 0,
      unMax: _ > _ && _ < _.maxPrice ? _ : void 0,
    },
    strQuery: _.strSearch,
    bSearchDescriptions: _.bSearchDescriptions,
  };
}
function _() {
  return (0, _.jsx)(_, {
    size: "5",
    children: _.Localize("#Error_LoadingContent"),
  });
}
function _(_) {
  if (!_) return "";
  let [_, _] = _,
    _ = _ === _.k_EMarketSearchSortDirection_Ascending;
  switch (_) {
    case _.k_EMarketSearchSortColumn_Price:
      return _.Localize(_ ? "#SortBy_Price_Asc" : "#SortBy_Price_Desc");
    case _.k_EMarketSearchSortColumn_Quantity:
      return _.Localize(_ ? "#SortBy_Quantity_Asc" : "#SortBy_Quantity_Desc");
    case _.k_EMarketSearchSortColumn_Name:
      return _.Localize(_ ? "#SortBy_Name_Asc" : "#SortBy_Name_Desc");
    case _.k_EMarketSearchSortColumn_Default:
    case _.k_EMarketSearchSortColumn_Popular:
      return _.Localize("#SortBy_Popularity");
    default:
      return "";
  }
}
function _(_) {
  let {
      results: _,
      marketQuery: _,
      onLoadMore: _,
      loadingMore: _,
      loadingNew: _,
      breadcrumbs: _,
      activeSort: _,
      onActiveSortChanged: _,
      grouping: _,
    } = _,
    _ = (0, _.jsx)(_, {
      radius: "sm",
      options: [
        [
          _.k_EMarketSearchSortColumn_Default,
          _.k_EMarketSearchSortDirection_Descending,
        ],
        [
          _.k_EMarketSearchSortColumn_Price,
          _.k_EMarketSearchSortDirection_Ascending,
        ],
        [
          _.k_EMarketSearchSortColumn_Price,
          _.k_EMarketSearchSortDirection_Descending,
        ],
        [
          _.k_EMarketSearchSortColumn_Quantity,
          _.k_EMarketSearchSortDirection_Ascending,
        ],
        [
          _.k_EMarketSearchSortColumn_Quantity,
          _.k_EMarketSearchSortDirection_Descending,
        ],
        [
          _.k_EMarketSearchSortColumn_Name,
          _.k_EMarketSearchSortDirection_Ascending,
        ],
        [
          _.k_EMarketSearchSortColumn_Name,
          _.k_EMarketSearchSortDirection_Descending,
        ],
      ],
      selectedValue: _ ?? [
        _.k_EMarketSearchSortColumn_Default,
        _.k_EMarketSearchSortDirection_Descending,
      ],
      onSelectionChange: _,
      getOptionLabel: _,
    }),
    [_, _] = _("resultsView"),
    _ = _ === "grid" ? _ : _,
    _ = !!_.appid,
    _ = _(),
    _ = {};
  return (0, _.jsx)(_, {
    view: _,
    onViewChange: _,
    breadcrumbs: _,
    sort: _,
    onLoadMore: _,
    loadingMore: _,
    loadingNew: _,
    empty: _.length === 0,
    children: _.map((_) =>
      _[_.strHash]
        ? null
        : ((_[_.strHash] = !0),
          (0, _.jsx)(
            _,
            {
              _: _(_, _, _),
              external: !1,
              className: _(),
              style: {
                display: "contents",
              },
              children: (0, _.jsx)(_, {
                result: _,
                flexGrow: "1",
                hideApp: _,
                grouping: _,
              }),
            },
            _.strHash,
          )),
    ),
  });
}
function _(_, _, _) {
  let _ = _.asset_description.commodity ? void 0 : _(_, _.maxPrice),
    _ = _.asset_description.market_hash_name;
  return (
    _.asset_description.market_bucket_group_id &&
      (_ = _.asset_description.market_bucket_group_id),
    _.Item(_.asset_description.appid, _, {
      search: _,
    })
  );
}
export { _ as route };
