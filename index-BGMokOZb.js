function OA(a, i) {
  for (var s = 0; s < i.length; s++) {
    const u = i[s];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const d in u)
        if (d !== "default" && !(d in a)) {
          const p = Object.getOwnPropertyDescriptor(u, d);
          p && Object.defineProperty(a, d, p.get ? p : { enumerable: !0, get: () => u[d] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) u(d);
  new MutationObserver((d) => {
    for (const p of d)
      if (p.type === "childList")
        for (const f of p.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && u(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(d) {
    const p = {};
    return (
      d.integrity && (p.integrity = d.integrity),
      d.referrerPolicy && (p.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (p.credentials = "include")
        : d.crossOrigin === "anonymous"
          ? (p.credentials = "omit")
          : (p.credentials = "same-origin"),
      p
    );
  }
  function u(d) {
    if (d.ep) return;
    d.ep = !0;
    const p = s(d);
    fetch(d.href, p);
  }
})();
function US(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Mh = { exports: {} },
  Kf = {},
  Lh = { exports: {} },
  Au = { exports: {} };
Au.exports;
var FE;
function kA() {
  return (
    FE ||
      ((FE = 1),
      (function (a, i) {
        /**
         * @license React
         * react.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ (function () {
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          var s = "18.3.1",
            u = Symbol.for("react.element"),
            d = Symbol.for("react.portal"),
            p = Symbol.for("react.fragment"),
            f = Symbol.for("react.strict_mode"),
            E = Symbol.for("react.profiler"),
            b = Symbol.for("react.provider"),
            y = Symbol.for("react.context"),
            w = Symbol.for("react.forward_ref"),
            g = Symbol.for("react.suspense"),
            _ = Symbol.for("react.suspense_list"),
            T = Symbol.for("react.memo"),
            O = Symbol.for("react.lazy"),
            L = Symbol.for("react.offscreen"),
            B = Symbol.iterator,
            j = "@@iterator";
          function I(h) {
            if (h === null || typeof h != "object") return null;
            var D = (B && h[B]) || h[j];
            return typeof D == "function" ? D : null;
          }
          var G = { current: null },
            J = { transition: null },
            q = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
            oe = { current: null },
            X = {},
            ne = null;
          function Ne(h) {
            ne = h;
          }
          (X.setExtraStackFrame = function (h) {
            ne = h;
          }),
            (X.getCurrentStack = null),
            (X.getStackAddendum = function () {
              var h = "";
              ne && (h += ne);
              var D = X.getCurrentStack;
              return D && (h += D() || ""), h;
            });
          var He = !1,
            Xe = !1,
            Le = !1,
            le = !1,
            _e = !1,
            ke = { ReactCurrentDispatcher: G, ReactCurrentBatchConfig: J, ReactCurrentOwner: oe };
          (ke.ReactDebugCurrentFrame = X), (ke.ReactCurrentActQueue = q);
          function pe(h) {
            {
              for (var D = arguments.length, P = new Array(D > 1 ? D - 1 : 0), $ = 1; $ < D; $++)
                P[$ - 1] = arguments[$];
              Q("warn", h, P);
            }
          }
          function ie(h) {
            {
              for (var D = arguments.length, P = new Array(D > 1 ? D - 1 : 0), $ = 1; $ < D; $++)
                P[$ - 1] = arguments[$];
              Q("error", h, P);
            }
          }
          function Q(h, D, P) {
            {
              var $ = ke.ReactDebugCurrentFrame,
                ue = $.getStackAddendum();
              ue !== "" && ((D += "%s"), (P = P.concat([ue])));
              var ze = P.map(function (Se) {
                return String(Se);
              });
              ze.unshift("Warning: " + D), Function.prototype.apply.call(console[h], console, ze);
            }
          }
          var Je = {};
          function Ze(h, D) {
            {
              var P = h.constructor,
                $ = (P && (P.displayName || P.name)) || "ReactClass",
                ue = $ + "." + D;
              if (Je[ue]) return;
              ie(
                "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
                D,
                $
              ),
                (Je[ue] = !0);
            }
          }
          var Mt = {
              isMounted: function (h) {
                return !1;
              },
              enqueueForceUpdate: function (h, D, P) {
                Ze(h, "forceUpdate");
              },
              enqueueReplaceState: function (h, D, P, $) {
                Ze(h, "replaceState");
              },
              enqueueSetState: function (h, D, P, $) {
                Ze(h, "setState");
              }
            },
            Et = Object.assign,
            xe = {};
          Object.freeze(xe);
          function Me(h, D, P) {
            (this.props = h), (this.context = D), (this.refs = xe), (this.updater = P || Mt);
          }
          (Me.prototype.isReactComponent = {}),
            (Me.prototype.setState = function (h, D) {
              if (typeof h != "object" && typeof h != "function" && h != null)
                throw new Error(
                  "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                );
              this.updater.enqueueSetState(this, h, D, "setState");
            }),
            (Me.prototype.forceUpdate = function (h) {
              this.updater.enqueueForceUpdate(this, h, "forceUpdate");
            });
          {
            var tt = {
                isMounted: [
                  "isMounted",
                  "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
                ],
                replaceState: [
                  "replaceState",
                  "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
                ]
              },
              St = function (h, D) {
                Object.defineProperty(Me.prototype, h, {
                  get: function () {
                    pe("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
                  }
                });
              };
            for (var Ue in tt) tt.hasOwnProperty(Ue) && St(Ue, tt[Ue]);
          }
          function $e() {}
          $e.prototype = Me.prototype;
          function dt(h, D, P) {
            (this.props = h), (this.context = D), (this.refs = xe), (this.updater = P || Mt);
          }
          var mt = (dt.prototype = new $e());
          (mt.constructor = dt), Et(mt, Me.prototype), (mt.isPureReactComponent = !0);
          function Nt() {
            var h = { current: null };
            return Object.seal(h), h;
          }
          var wt = Array.isArray;
          function Ft(h) {
            return wt(h);
          }
          function fn(h) {
            {
              var D = typeof Symbol == "function" && Symbol.toStringTag,
                P = (D && h[Symbol.toStringTag]) || h.constructor.name || "Object";
              return P;
            }
          }
          function Qt(h) {
            try {
              return zt(h), !1;
            } catch {
              return !0;
            }
          }
          function zt(h) {
            return "" + h;
          }
          function dn(h) {
            if (Qt(h))
              return (
                ie(
                  "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  fn(h)
                ),
                zt(h)
              );
          }
          function nr(h, D, P) {
            var $ = h.displayName;
            if ($) return $;
            var ue = D.displayName || D.name || "";
            return ue !== "" ? P + "(" + ue + ")" : P;
          }
          function It(h) {
            return h.displayName || "Context";
          }
          function kn(h) {
            if (h == null) return null;
            if (
              (typeof h.tag == "number" &&
                ie(
                  "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
                ),
              typeof h == "function")
            )
              return h.displayName || h.name || null;
            if (typeof h == "string") return h;
            switch (h) {
              case p:
                return "Fragment";
              case d:
                return "Portal";
              case E:
                return "Profiler";
              case f:
                return "StrictMode";
              case g:
                return "Suspense";
              case _:
                return "SuspenseList";
            }
            if (typeof h == "object")
              switch (h.$$typeof) {
                case y:
                  var D = h;
                  return It(D) + ".Consumer";
                case b:
                  var P = h;
                  return It(P._context) + ".Provider";
                case w:
                  return nr(h, h.render, "ForwardRef");
                case T:
                  var $ = h.displayName || null;
                  return $ !== null ? $ : kn(h.type) || "Memo";
                case O: {
                  var ue = h,
                    ze = ue._payload,
                    Se = ue._init;
                  try {
                    return kn(Se(ze));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var mn = Object.prototype.hasOwnProperty,
            pt = { key: !0, ref: !0, __self: !0, __source: !0 },
            Zt,
            pr,
            en;
          en = {};
          function on(h) {
            if (mn.call(h, "ref")) {
              var D = Object.getOwnPropertyDescriptor(h, "ref").get;
              if (D && D.isReactWarning) return !1;
            }
            return h.ref !== void 0;
          }
          function En(h) {
            if (mn.call(h, "key")) {
              var D = Object.getOwnPropertyDescriptor(h, "key").get;
              if (D && D.isReactWarning) return !1;
            }
            return h.key !== void 0;
          }
          function Rr(h, D) {
            var P = function () {
              Zt ||
                ((Zt = !0),
                ie(
                  "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                  D
                ));
            };
            (P.isReactWarning = !0), Object.defineProperty(h, "key", { get: P, configurable: !0 });
          }
          function Kn(h, D) {
            var P = function () {
              pr ||
                ((pr = !0),
                ie(
                  "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                  D
                ));
            };
            (P.isReactWarning = !0), Object.defineProperty(h, "ref", { get: P, configurable: !0 });
          }
          function se(h) {
            if (
              typeof h.ref == "string" &&
              oe.current &&
              h.__self &&
              oe.current.stateNode !== h.__self
            ) {
              var D = kn(oe.current.type);
              en[D] ||
                (ie(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  D,
                  h.ref
                ),
                (en[D] = !0));
            }
          }
          var Re = function (h, D, P, $, ue, ze, Se) {
            var Ge = { $$typeof: u, type: h, key: D, ref: P, props: Se, _owner: ze };
            return (
              (Ge._store = {}),
              Object.defineProperty(Ge._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1
              }),
              Object.defineProperty(Ge, "_self", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: $
              }),
              Object.defineProperty(Ge, "_source", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: ue
              }),
              Object.freeze && (Object.freeze(Ge.props), Object.freeze(Ge)),
              Ge
            );
          };
          function Ie(h, D, P) {
            var $,
              ue = {},
              ze = null,
              Se = null,
              Ge = null,
              st = null;
            if (D != null) {
              on(D) && ((Se = D.ref), se(D)),
                En(D) && (dn(D.key), (ze = "" + D.key)),
                (Ge = D.__self === void 0 ? null : D.__self),
                (st = D.__source === void 0 ? null : D.__source);
              for ($ in D) mn.call(D, $) && !pt.hasOwnProperty($) && (ue[$] = D[$]);
            }
            var _t = arguments.length - 2;
            if (_t === 1) ue.children = P;
            else if (_t > 1) {
              for (var qt = Array(_t), Kt = 0; Kt < _t; Kt++) qt[Kt] = arguments[Kt + 2];
              Object.freeze && Object.freeze(qt), (ue.children = qt);
            }
            if (h && h.defaultProps) {
              var at = h.defaultProps;
              for ($ in at) ue[$] === void 0 && (ue[$] = at[$]);
            }
            if (ze || Se) {
              var an = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
              ze && Rr(ue, an), Se && Kn(ue, an);
            }
            return Re(h, ze, Se, Ge, st, oe.current, ue);
          }
          function vt(h, D) {
            var P = Re(h.type, D, h.ref, h._self, h._source, h._owner, h.props);
            return P;
          }
          function Lt(h, D, P) {
            if (h == null)
              throw new Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  h +
                  "."
              );
            var $,
              ue = Et({}, h.props),
              ze = h.key,
              Se = h.ref,
              Ge = h._self,
              st = h._source,
              _t = h._owner;
            if (D != null) {
              on(D) && ((Se = D.ref), (_t = oe.current)), En(D) && (dn(D.key), (ze = "" + D.key));
              var qt;
              h.type && h.type.defaultProps && (qt = h.type.defaultProps);
              for ($ in D)
                mn.call(D, $) &&
                  !pt.hasOwnProperty($) &&
                  (D[$] === void 0 && qt !== void 0 ? (ue[$] = qt[$]) : (ue[$] = D[$]));
            }
            var Kt = arguments.length - 2;
            if (Kt === 1) ue.children = P;
            else if (Kt > 1) {
              for (var at = Array(Kt), an = 0; an < Kt; an++) at[an] = arguments[an + 2];
              ue.children = at;
            }
            return Re(h.type, ze, Se, Ge, st, _t, ue);
          }
          function jt(h) {
            return typeof h == "object" && h !== null && h.$$typeof === u;
          }
          var Vt = ".",
            vn = ":";
          function Dt(h) {
            var D = /[=:]/g,
              P = { "=": "=0", ":": "=2" },
              $ = h.replace(D, function (ue) {
                return P[ue];
              });
            return "$" + $;
          }
          var rt = !1,
            Rt = /\/+/g;
          function zn(h) {
            return h.replace(Rt, "$&/");
          }
          function An(h, D) {
            return typeof h == "object" && h !== null && h.key != null
              ? (dn(h.key), Dt("" + h.key))
              : D.toString(36);
          }
          function Mn(h, D, P, $, ue) {
            var ze = typeof h;
            (ze === "undefined" || ze === "boolean") && (h = null);
            var Se = !1;
            if (h === null) Se = !0;
            else
              switch (ze) {
                case "string":
                case "number":
                  Se = !0;
                  break;
                case "object":
                  switch (h.$$typeof) {
                    case u:
                    case d:
                      Se = !0;
                  }
              }
            if (Se) {
              var Ge = h,
                st = ue(Ge),
                _t = $ === "" ? Vt + An(Ge, 0) : $;
              if (Ft(st)) {
                var qt = "";
                _t != null && (qt = zn(_t) + "/"),
                  Mn(st, D, qt, "", function (kd) {
                    return kd;
                  });
              } else
                st != null &&
                  (jt(st) &&
                    (st.key && (!Ge || Ge.key !== st.key) && dn(st.key),
                    (st = vt(
                      st,
                      P + (st.key && (!Ge || Ge.key !== st.key) ? zn("" + st.key) + "/" : "") + _t
                    ))),
                  D.push(st));
              return 1;
            }
            var Kt,
              at,
              an = 0,
              gn = $ === "" ? Vt : $ + vn;
            if (Ft(h))
              for (var Bo = 0; Bo < h.length; Bo++)
                (Kt = h[Bo]), (at = gn + An(Kt, Bo)), (an += Mn(Kt, D, P, at, ue));
            else {
              var Zl = I(h);
              if (typeof Zl == "function") {
                var Aa = h;
                Zl === Aa.entries &&
                  (rt ||
                    pe(
                      "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                    ),
                  (rt = !0));
                for (var es = Zl.call(Aa), ts, Od = 0; !(ts = es.next()).done; )
                  (Kt = ts.value), (at = gn + An(Kt, Od++)), (an += Mn(Kt, D, P, at, ue));
              } else if (ze === "object") {
                var Ku = String(h);
                throw new Error(
                  "Objects are not valid as a React child (found: " +
                    (Ku === "[object Object]"
                      ? "object with keys {" + Object.keys(h).join(", ") + "}"
                      : Ku) +
                    "). If you meant to render a collection of children, use an array instead."
                );
              }
            }
            return an;
          }
          function Fe(h, D, P) {
            if (h == null) return h;
            var $ = [],
              ue = 0;
            return (
              Mn(h, $, "", "", function (ze) {
                return D.call(P, ze, ue++);
              }),
              $
            );
          }
          function Pt(h) {
            var D = 0;
            return (
              Fe(h, function () {
                D++;
              }),
              D
            );
          }
          function $t(h, D, P) {
            Fe(
              h,
              function () {
                D.apply(this, arguments);
              },
              P
            );
          }
          function ln(h) {
            return (
              Fe(h, function (D) {
                return D;
              }) || []
            );
          }
          function mr(h) {
            if (!jt(h))
              throw new Error(
                "React.Children.only expected to receive a single React element child."
              );
            return h;
          }
          function Ht(h) {
            var D = {
              $$typeof: y,
              _currentValue: h,
              _currentValue2: h,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null
            };
            D.Provider = { $$typeof: b, _context: D };
            var P = !1,
              $ = !1,
              ue = !1;
            {
              var ze = { $$typeof: y, _context: D };
              Object.defineProperties(ze, {
                Provider: {
                  get: function () {
                    return (
                      $ ||
                        (($ = !0),
                        ie(
                          "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?"
                        )),
                      D.Provider
                    );
                  },
                  set: function (Se) {
                    D.Provider = Se;
                  }
                },
                _currentValue: {
                  get: function () {
                    return D._currentValue;
                  },
                  set: function (Se) {
                    D._currentValue = Se;
                  }
                },
                _currentValue2: {
                  get: function () {
                    return D._currentValue2;
                  },
                  set: function (Se) {
                    D._currentValue2 = Se;
                  }
                },
                _threadCount: {
                  get: function () {
                    return D._threadCount;
                  },
                  set: function (Se) {
                    D._threadCount = Se;
                  }
                },
                Consumer: {
                  get: function () {
                    return (
                      P ||
                        ((P = !0),
                        ie(
                          "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
                        )),
                      D.Consumer
                    );
                  }
                },
                displayName: {
                  get: function () {
                    return D.displayName;
                  },
                  set: function (Se) {
                    ue ||
                      (pe(
                        "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                        Se
                      ),
                      (ue = !0));
                  }
                }
              }),
                (D.Consumer = ze);
            }
            return (D._currentRenderer = null), (D._currentRenderer2 = null), D;
          }
          var Yt = -1,
            hn = 0,
            Ut = 1,
            tn = 2;
          function Vr(h) {
            if (h._status === Yt) {
              var D = h._result,
                P = D();
              if (
                (P.then(
                  function (ze) {
                    if (h._status === hn || h._status === Yt) {
                      var Se = h;
                      (Se._status = Ut), (Se._result = ze);
                    }
                  },
                  function (ze) {
                    if (h._status === hn || h._status === Yt) {
                      var Se = h;
                      (Se._status = tn), (Se._result = ze);
                    }
                  }
                ),
                h._status === Yt)
              ) {
                var $ = h;
                ($._status = hn), ($._result = P);
              }
            }
            if (h._status === Ut) {
              var ue = h._result;
              return (
                ue === void 0 &&
                  ie(
                    `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
                    ue
                  ),
                "default" in ue ||
                  ie(
                    `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
                    ue
                  ),
                ue.default
              );
            } else throw h._result;
          }
          function N(h) {
            var D = { _status: Yt, _result: h },
              P = { $$typeof: O, _payload: D, _init: Vr };
            {
              var $, ue;
              Object.defineProperties(P, {
                defaultProps: {
                  configurable: !0,
                  get: function () {
                    return $;
                  },
                  set: function (ze) {
                    ie(
                      "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
                    ),
                      ($ = ze),
                      Object.defineProperty(P, "defaultProps", { enumerable: !0 });
                  }
                },
                propTypes: {
                  configurable: !0,
                  get: function () {
                    return ue;
                  },
                  set: function (ze) {
                    ie(
                      "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
                    ),
                      (ue = ze),
                      Object.defineProperty(P, "propTypes", { enumerable: !0 });
                  }
                }
              });
            }
            return P;
          }
          function te(h) {
            h != null && h.$$typeof === T
              ? ie(
                  "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
                )
              : typeof h != "function"
                ? ie(
                    "forwardRef requires a render function but was given %s.",
                    h === null ? "null" : typeof h
                  )
                : h.length !== 0 &&
                  h.length !== 2 &&
                  ie(
                    "forwardRef render functions accept exactly two parameters: props and ref. %s",
                    h.length === 1
                      ? "Did you forget to use the ref parameter?"
                      : "Any additional parameter will be undefined."
                  ),
              h != null &&
                (h.defaultProps != null || h.propTypes != null) &&
                ie(
                  "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"
                );
            var D = { $$typeof: w, render: h };
            {
              var P;
              Object.defineProperty(D, "displayName", {
                enumerable: !1,
                configurable: !0,
                get: function () {
                  return P;
                },
                set: function ($) {
                  (P = $), !h.name && !h.displayName && (h.displayName = $);
                }
              });
            }
            return D;
          }
          var C;
          C = Symbol.for("react.module.reference");
          function F(h) {
            return !!(
              typeof h == "string" ||
              typeof h == "function" ||
              h === p ||
              h === E ||
              _e ||
              h === f ||
              h === g ||
              h === _ ||
              le ||
              h === L ||
              He ||
              Xe ||
              Le ||
              (typeof h == "object" &&
                h !== null &&
                (h.$$typeof === O ||
                  h.$$typeof === T ||
                  h.$$typeof === b ||
                  h.$$typeof === y ||
                  h.$$typeof === w ||
                  h.$$typeof === C ||
                  h.getModuleId !== void 0))
            );
          }
          function Z(h, D) {
            F(h) ||
              ie(
                "memo: The first argument must be a component. Instead received: %s",
                h === null ? "null" : typeof h
              );
            var P = { $$typeof: T, type: h, compare: D === void 0 ? null : D };
            {
              var $;
              Object.defineProperty(P, "displayName", {
                enumerable: !1,
                configurable: !0,
                get: function () {
                  return $;
                },
                set: function (ue) {
                  ($ = ue), !h.name && !h.displayName && (h.displayName = ue);
                }
              });
            }
            return P;
          }
          function ae() {
            var h = G.current;
            return (
              h === null &&
                ie(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
              h
            );
          }
          function he(h) {
            var D = ae();
            if (h._context !== void 0) {
              var P = h._context;
              P.Consumer === h
                ? ie(
                    "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"
                  )
                : P.Provider === h &&
                  ie(
                    "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?"
                  );
            }
            return D.useContext(h);
          }
          function ce(h) {
            var D = ae();
            return D.useState(h);
          }
          function je(h, D, P) {
            var $ = ae();
            return $.useReducer(h, D, P);
          }
          function Te(h) {
            var D = ae();
            return D.useRef(h);
          }
          function nt(h, D) {
            var P = ae();
            return P.useEffect(h, D);
          }
          function lt(h, D) {
            var P = ae();
            return P.useInsertionEffect(h, D);
          }
          function Tt(h, D) {
            var P = ae();
            return P.useLayoutEffect(h, D);
          }
          function nn(h, D) {
            var P = ae();
            return P.useCallback(h, D);
          }
          function Wt(h, D) {
            var P = ae();
            return P.useMemo(h, D);
          }
          function rr(h, D, P) {
            var $ = ae();
            return $.useImperativeHandle(h, D, P);
          }
          function Gt(h, D) {
            {
              var P = ae();
              return P.useDebugValue(h, D);
            }
          }
          function Qe() {
            var h = ae();
            return h.useTransition();
          }
          function _a(h) {
            var D = ae();
            return D.useDeferredValue(h);
          }
          function Si() {
            var h = ae();
            return h.useId();
          }
          function zu(h, D, P) {
            var $ = ae();
            return $.useSyncExternalStore(h, D, P);
          }
          var ro = 0,
            zl,
            Pl,
            Hl,
            Bl,
            Il,
            Pu,
            Hu;
          function Ci() {}
          Ci.__reactDisabledLog = !0;
          function $l() {
            {
              if (ro === 0) {
                (zl = console.log),
                  (Pl = console.info),
                  (Hl = console.warn),
                  (Bl = console.error),
                  (Il = console.group),
                  (Pu = console.groupCollapsed),
                  (Hu = console.groupEnd);
                var h = { configurable: !0, enumerable: !0, value: Ci, writable: !0 };
                Object.defineProperties(console, {
                  info: h,
                  log: h,
                  warn: h,
                  error: h,
                  group: h,
                  groupCollapsed: h,
                  groupEnd: h
                });
              }
              ro++;
            }
          }
          function ua() {
            {
              if ((ro--, ro === 0)) {
                var h = { configurable: !0, enumerable: !0, writable: !0 };
                Object.defineProperties(console, {
                  log: Et({}, h, { value: zl }),
                  info: Et({}, h, { value: Pl }),
                  warn: Et({}, h, { value: Hl }),
                  error: Et({}, h, { value: Bl }),
                  group: Et({}, h, { value: Il }),
                  groupCollapsed: Et({}, h, { value: Pu }),
                  groupEnd: Et({}, h, { value: Hu })
                });
              }
              ro < 0 &&
                ie("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
          var Uo = ke.ReactCurrentDispatcher,
            ao;
          function wi(h, D, P) {
            {
              if (ao === void 0)
                try {
                  throw Error();
                } catch (ue) {
                  var $ = ue.stack.trim().match(/\n( *(at )?)/);
                  ao = ($ && $[1]) || "";
                }
              return (
                `
` +
                ao +
                h
              );
            }
          }
          var Fo = !1,
            Ri;
          {
            var Yl = typeof WeakMap == "function" ? WeakMap : Map;
            Ri = new Yl();
          }
          function Bu(h, D) {
            if (!h || Fo) return "";
            {
              var P = Ri.get(h);
              if (P !== void 0) return P;
            }
            var $;
            Fo = !0;
            var ue = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var ze;
            (ze = Uo.current), (Uo.current = null), $l();
            try {
              if (D) {
                var Se = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(Se.prototype, "props", {
                    set: function () {
                      throw Error();
                    }
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(Se, []);
                  } catch (gn) {
                    $ = gn;
                  }
                  Reflect.construct(h, [], Se);
                } else {
                  try {
                    Se.call();
                  } catch (gn) {
                    $ = gn;
                  }
                  h.call(Se.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (gn) {
                  $ = gn;
                }
                h();
              }
            } catch (gn) {
              if (gn && $ && typeof gn.stack == "string") {
                for (
                  var Ge = gn.stack.split(`
`),
                    st = $.stack.split(`
`),
                    _t = Ge.length - 1,
                    qt = st.length - 1;
                  _t >= 1 && qt >= 0 && Ge[_t] !== st[qt];

                )
                  qt--;
                for (; _t >= 1 && qt >= 0; _t--, qt--)
                  if (Ge[_t] !== st[qt]) {
                    if (_t !== 1 || qt !== 1)
                      do
                        if ((_t--, qt--, qt < 0 || Ge[_t] !== st[qt])) {
                          var Kt =
                            `
` + Ge[_t].replace(" at new ", " at ");
                          return (
                            h.displayName &&
                              Kt.includes("<anonymous>") &&
                              (Kt = Kt.replace("<anonymous>", h.displayName)),
                            typeof h == "function" && Ri.set(h, Kt),
                            Kt
                          );
                        }
                      while (_t >= 1 && qt >= 0);
                    break;
                  }
              }
            } finally {
              (Fo = !1), (Uo.current = ze), ua(), (Error.prepareStackTrace = ue);
            }
            var at = h ? h.displayName || h.name : "",
              an = at ? wi(at) : "";
            return typeof h == "function" && Ri.set(h, an), an;
          }
          function Wl(h, D, P) {
            return Bu(h, !1);
          }
          function Rd(h) {
            var D = h.prototype;
            return !!(D && D.isReactComponent);
          }
          function zo(h, D, P) {
            if (h == null) return "";
            if (typeof h == "function") return Bu(h, Rd(h));
            if (typeof h == "string") return wi(h);
            switch (h) {
              case g:
                return wi("Suspense");
              case _:
                return wi("SuspenseList");
            }
            if (typeof h == "object")
              switch (h.$$typeof) {
                case w:
                  return Wl(h.render);
                case T:
                  return zo(h.type, D, P);
                case O: {
                  var $ = h,
                    ue = $._payload,
                    ze = $._init;
                  try {
                    return zo(ze(ue), D, P);
                  } catch {}
                }
              }
            return "";
          }
          var Iu = {},
            Gl = ke.ReactDebugCurrentFrame;
          function yt(h) {
            if (h) {
              var D = h._owner,
                P = zo(h.type, h._source, D ? D.type : null);
              Gl.setExtraStackFrame(P);
            } else Gl.setExtraStackFrame(null);
          }
          function Td(h, D, P, $, ue) {
            {
              var ze = Function.call.bind(mn);
              for (var Se in h)
                if (ze(h, Se)) {
                  var Ge = void 0;
                  try {
                    if (typeof h[Se] != "function") {
                      var st = Error(
                        ($ || "React class") +
                          ": " +
                          P +
                          " type `" +
                          Se +
                          "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                          typeof h[Se] +
                          "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                      );
                      throw ((st.name = "Invariant Violation"), st);
                    }
                    Ge = h[Se](D, Se, $, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (_t) {
                    Ge = _t;
                  }
                  Ge &&
                    !(Ge instanceof Error) &&
                    (yt(ue),
                    ie(
                      "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                      $ || "React class",
                      P,
                      Se,
                      typeof Ge
                    ),
                    yt(null)),
                    Ge instanceof Error &&
                      !(Ge.message in Iu) &&
                      ((Iu[Ge.message] = !0),
                      yt(ue),
                      ie("Failed %s type: %s", P, Ge.message),
                      yt(null));
                }
            }
          }
          function Oa(h) {
            if (h) {
              var D = h._owner,
                P = zo(h.type, h._source, D ? D.type : null);
              Ne(P);
            } else Ne(null);
          }
          var Ke;
          Ke = !1;
          function ql() {
            if (oe.current) {
              var h = kn(oe.current.type);
              if (h)
                return (
                  `

Check the render method of \`` +
                  h +
                  "`."
                );
            }
            return "";
          }
          function ar(h) {
            if (h !== void 0) {
              var D = h.fileName.replace(/^.*[\\\/]/, ""),
                P = h.lineNumber;
              return (
                `

Check your code at ` +
                D +
                ":" +
                P +
                "."
              );
            }
            return "";
          }
          function Po(h) {
            return h != null ? ar(h.__source) : "";
          }
          var oo = {};
          function Nd(h) {
            var D = ql();
            if (!D) {
              var P = typeof h == "string" ? h : h.displayName || h.name;
              P &&
                (D =
                  `

Check the top-level render call using <` +
                  P +
                  ">.");
            }
            return D;
          }
          function Ln(h, D) {
            if (!(!h._store || h._store.validated || h.key != null)) {
              h._store.validated = !0;
              var P = Nd(D);
              if (!oo[P]) {
                oo[P] = !0;
                var $ = "";
                h &&
                  h._owner &&
                  h._owner !== oe.current &&
                  ($ = " It was passed a child from " + kn(h._owner.type) + "."),
                  Oa(h),
                  ie(
                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                    P,
                    $
                  ),
                  Oa(null);
              }
            }
          }
          function rn(h, D) {
            if (typeof h == "object") {
              if (Ft(h))
                for (var P = 0; P < h.length; P++) {
                  var $ = h[P];
                  jt($) && Ln($, D);
                }
              else if (jt(h)) h._store && (h._store.validated = !0);
              else if (h) {
                var ue = I(h);
                if (typeof ue == "function" && ue !== h.entries)
                  for (var ze = ue.call(h), Se; !(Se = ze.next()).done; )
                    jt(Se.value) && Ln(Se.value, D);
              }
            }
          }
          function $u(h) {
            {
              var D = h.type;
              if (D == null || typeof D == "string") return;
              var P;
              if (typeof D == "function") P = D.propTypes;
              else if (typeof D == "object" && (D.$$typeof === w || D.$$typeof === T))
                P = D.propTypes;
              else return;
              if (P) {
                var $ = kn(D);
                Td(P, h.props, "prop", $, h);
              } else if (D.PropTypes !== void 0 && !Ke) {
                Ke = !0;
                var ue = kn(D);
                ie(
                  "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                  ue || "Unknown"
                );
              }
              typeof D.getDefaultProps == "function" &&
                !D.getDefaultProps.isReactClassApproved &&
                ie(
                  "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
                );
            }
          }
          function Ur(h) {
            {
              for (var D = Object.keys(h.props), P = 0; P < D.length; P++) {
                var $ = D[P];
                if ($ !== "children" && $ !== "key") {
                  Oa(h),
                    ie(
                      "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                      $
                    ),
                    Oa(null);
                  break;
                }
              }
              h.ref !== null &&
                (Oa(h), ie("Invalid attribute `ref` supplied to `React.Fragment`."), Oa(null));
            }
          }
          function or(h, D, P) {
            var $ = F(h);
            if (!$) {
              var ue = "";
              (h === void 0 ||
                (typeof h == "object" && h !== null && Object.keys(h).length === 0)) &&
                (ue +=
                  " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var ze = Po(D);
              ze ? (ue += ze) : (ue += ql());
              var Se;
              h === null
                ? (Se = "null")
                : Ft(h)
                  ? (Se = "array")
                  : h !== void 0 && h.$$typeof === u
                    ? ((Se = "<" + (kn(h.type) || "Unknown") + " />"),
                      (ue = " Did you accidentally export a JSX literal instead of a component?"))
                    : (Se = typeof h),
                ie(
                  "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                  Se,
                  ue
                );
            }
            var Ge = Ie.apply(this, arguments);
            if (Ge == null) return Ge;
            if ($) for (var st = 2; st < arguments.length; st++) rn(arguments[st], h);
            return h === p ? Ur(Ge) : $u(Ge), Ge;
          }
          var Yr = !1;
          function Dd(h) {
            var D = or.bind(null, h);
            return (
              (D.type = h),
              Yr ||
                ((Yr = !0),
                pe(
                  "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead."
                )),
              Object.defineProperty(D, "type", {
                enumerable: !1,
                get: function () {
                  return (
                    pe(
                      "Factory.type is deprecated. Access the class directly before passing it to createFactory."
                    ),
                    Object.defineProperty(this, "type", { value: h }),
                    h
                  );
                }
              }),
              D
            );
          }
          function Kl(h, D, P) {
            for (var $ = Lt.apply(this, arguments), ue = 2; ue < arguments.length; ue++)
              rn(arguments[ue], $.type);
            return $u($), $;
          }
          function Yu(h, D) {
            var P = J.transition;
            J.transition = {};
            var $ = J.transition;
            J.transition._updatedFibers = new Set();
            try {
              h();
            } finally {
              if (((J.transition = P), P === null && $._updatedFibers)) {
                var ue = $._updatedFibers.size;
                ue > 10 &&
                  pe(
                    "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
                  ),
                  $._updatedFibers.clear();
              }
            }
          }
          var Xl = !1,
            Ti = null;
          function _d(h) {
            if (Ti === null)
              try {
                var D = ("require" + Math.random()).slice(0, 7),
                  P = a && a[D];
                Ti = P.call(a, "timers").setImmediate;
              } catch {
                Ti = function (ue) {
                  Xl === !1 &&
                    ((Xl = !0),
                    typeof MessageChannel > "u" &&
                      ie(
                        "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                      ));
                  var ze = new MessageChannel();
                  (ze.port1.onmessage = ue), ze.port2.postMessage(void 0);
                };
              }
            return Ti(h);
          }
          var io = 0,
            Ho = !1;
          function Ql(h) {
            {
              var D = io;
              io++, q.current === null && (q.current = []);
              var P = q.isBatchingLegacy,
                $;
              try {
                if (((q.isBatchingLegacy = !0), ($ = h()), !P && q.didScheduleLegacyUpdate)) {
                  var ue = q.current;
                  ue !== null && ((q.didScheduleLegacyUpdate = !1), _i(ue));
                }
              } catch (at) {
                throw (ka(D), at);
              } finally {
                q.isBatchingLegacy = P;
              }
              if ($ !== null && typeof $ == "object" && typeof $.then == "function") {
                var ze = $,
                  Se = !1,
                  Ge = {
                    then: function (at, an) {
                      (Se = !0),
                        ze.then(
                          function (gn) {
                            ka(D), io === 0 ? Ni(gn, at, an) : at(gn);
                          },
                          function (gn) {
                            ka(D), an(gn);
                          }
                        );
                    }
                  };
                return (
                  !Ho &&
                    typeof Promise < "u" &&
                    Promise.resolve()
                      .then(function () {})
                      .then(function () {
                        Se ||
                          ((Ho = !0),
                          ie(
                            "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
                          ));
                      }),
                  Ge
                );
              } else {
                var st = $;
                if ((ka(D), io === 0)) {
                  var _t = q.current;
                  _t !== null && (_i(_t), (q.current = null));
                  var qt = {
                    then: function (at, an) {
                      q.current === null ? ((q.current = []), Ni(st, at, an)) : at(st);
                    }
                  };
                  return qt;
                } else {
                  var Kt = {
                    then: function (at, an) {
                      at(st);
                    }
                  };
                  return Kt;
                }
              }
            }
          }
          function ka(h) {
            h !== io - 1 &&
              ie(
                "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
              ),
              (io = h);
          }
          function Ni(h, D, P) {
            {
              var $ = q.current;
              if ($ !== null)
                try {
                  _i($),
                    _d(function () {
                      $.length === 0 ? ((q.current = null), D(h)) : Ni(h, D, P);
                    });
                } catch (ue) {
                  P(ue);
                }
              else D(h);
            }
          }
          var Di = !1;
          function _i(h) {
            if (!Di) {
              Di = !0;
              var D = 0;
              try {
                for (; D < h.length; D++) {
                  var P = h[D];
                  do P = P(!0);
                  while (P !== null);
                }
                h.length = 0;
              } catch ($) {
                throw ((h = h.slice(D + 1)), $);
              } finally {
                Di = !1;
              }
            }
          }
          var Wu = or,
            Gu = Kl,
            Jl = Dd,
            qu = { map: Fe, forEach: $t, count: Pt, toArray: ln, only: mr };
          (i.Children = qu),
            (i.Component = Me),
            (i.Fragment = p),
            (i.Profiler = E),
            (i.PureComponent = dt),
            (i.StrictMode = f),
            (i.Suspense = g),
            (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke),
            (i.act = Ql),
            (i.cloneElement = Gu),
            (i.createContext = Ht),
            (i.createElement = Wu),
            (i.createFactory = Jl),
            (i.createRef = Nt),
            (i.forwardRef = te),
            (i.isValidElement = jt),
            (i.lazy = N),
            (i.memo = Z),
            (i.startTransition = Yu),
            (i.unstable_act = Ql),
            (i.useCallback = nn),
            (i.useContext = he),
            (i.useDebugValue = Gt),
            (i.useDeferredValue = _a),
            (i.useEffect = nt),
            (i.useId = Si),
            (i.useImperativeHandle = rr),
            (i.useInsertionEffect = lt),
            (i.useLayoutEffect = Tt),
            (i.useMemo = Wt),
            (i.useReducer = je),
            (i.useRef = Te),
            (i.useState = ce),
            (i.useSyncExternalStore = zu),
            (i.useTransition = Qe),
            (i.version = s),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        })();
      })(Au, Au.exports)),
    Au.exports
  );
}
var zE;
function ju() {
  return zE || ((zE = 1), (Lh.exports = kA())), Lh.exports;
}
var PE;
function AA() {
  if (PE) return Kf;
  PE = 1;
  /**
   * @license React
   * react-jsx-dev-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ return (
    (function () {
      var a = ju(),
        i = Symbol.for("react.element"),
        s = Symbol.for("react.portal"),
        u = Symbol.for("react.fragment"),
        d = Symbol.for("react.strict_mode"),
        p = Symbol.for("react.profiler"),
        f = Symbol.for("react.provider"),
        E = Symbol.for("react.context"),
        b = Symbol.for("react.forward_ref"),
        y = Symbol.for("react.suspense"),
        w = Symbol.for("react.suspense_list"),
        g = Symbol.for("react.memo"),
        _ = Symbol.for("react.lazy"),
        T = Symbol.for("react.offscreen"),
        O = Symbol.iterator,
        L = "@@iterator";
      function B(N) {
        if (N === null || typeof N != "object") return null;
        var te = (O && N[O]) || N[L];
        return typeof te == "function" ? te : null;
      }
      var j = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function I(N) {
        {
          for (var te = arguments.length, C = new Array(te > 1 ? te - 1 : 0), F = 1; F < te; F++)
            C[F - 1] = arguments[F];
          G("error", N, C);
        }
      }
      function G(N, te, C) {
        {
          var F = j.ReactDebugCurrentFrame,
            Z = F.getStackAddendum();
          Z !== "" && ((te += "%s"), (C = C.concat([Z])));
          var ae = C.map(function (he) {
            return String(he);
          });
          ae.unshift("Warning: " + te), Function.prototype.apply.call(console[N], console, ae);
        }
      }
      var J = !1,
        q = !1,
        oe = !1,
        X = !1,
        ne = !1,
        Ne;
      Ne = Symbol.for("react.module.reference");
      function He(N) {
        return !!(
          typeof N == "string" ||
          typeof N == "function" ||
          N === u ||
          N === p ||
          ne ||
          N === d ||
          N === y ||
          N === w ||
          X ||
          N === T ||
          J ||
          q ||
          oe ||
          (typeof N == "object" &&
            N !== null &&
            (N.$$typeof === _ ||
              N.$$typeof === g ||
              N.$$typeof === f ||
              N.$$typeof === E ||
              N.$$typeof === b ||
              N.$$typeof === Ne ||
              N.getModuleId !== void 0))
        );
      }
      function Xe(N, te, C) {
        var F = N.displayName;
        if (F) return F;
        var Z = te.displayName || te.name || "";
        return Z !== "" ? C + "(" + Z + ")" : C;
      }
      function Le(N) {
        return N.displayName || "Context";
      }
      function le(N) {
        if (N == null) return null;
        if (
          (typeof N.tag == "number" &&
            I(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          typeof N == "function")
        )
          return N.displayName || N.name || null;
        if (typeof N == "string") return N;
        switch (N) {
          case u:
            return "Fragment";
          case s:
            return "Portal";
          case p:
            return "Profiler";
          case d:
            return "StrictMode";
          case y:
            return "Suspense";
          case w:
            return "SuspenseList";
        }
        if (typeof N == "object")
          switch (N.$$typeof) {
            case E:
              var te = N;
              return Le(te) + ".Consumer";
            case f:
              var C = N;
              return Le(C._context) + ".Provider";
            case b:
              return Xe(N, N.render, "ForwardRef");
            case g:
              var F = N.displayName || null;
              return F !== null ? F : le(N.type) || "Memo";
            case _: {
              var Z = N,
                ae = Z._payload,
                he = Z._init;
              try {
                return le(he(ae));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var _e = Object.assign,
        ke = 0,
        pe,
        ie,
        Q,
        Je,
        Ze,
        Mt,
        Et;
      function xe() {}
      xe.__reactDisabledLog = !0;
      function Me() {
        {
          if (ke === 0) {
            (pe = console.log),
              (ie = console.info),
              (Q = console.warn),
              (Je = console.error),
              (Ze = console.group),
              (Mt = console.groupCollapsed),
              (Et = console.groupEnd);
            var N = { configurable: !0, enumerable: !0, value: xe, writable: !0 };
            Object.defineProperties(console, {
              info: N,
              log: N,
              warn: N,
              error: N,
              group: N,
              groupCollapsed: N,
              groupEnd: N
            });
          }
          ke++;
        }
      }
      function tt() {
        {
          if ((ke--, ke === 0)) {
            var N = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: _e({}, N, { value: pe }),
              info: _e({}, N, { value: ie }),
              warn: _e({}, N, { value: Q }),
              error: _e({}, N, { value: Je }),
              group: _e({}, N, { value: Ze }),
              groupCollapsed: _e({}, N, { value: Mt }),
              groupEnd: _e({}, N, { value: Et })
            });
          }
          ke < 0 &&
            I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var St = j.ReactCurrentDispatcher,
        Ue;
      function $e(N, te, C) {
        {
          if (Ue === void 0)
            try {
              throw Error();
            } catch (Z) {
              var F = Z.stack.trim().match(/\n( *(at )?)/);
              Ue = (F && F[1]) || "";
            }
          return (
            `
` +
            Ue +
            N
          );
        }
      }
      var dt = !1,
        mt;
      {
        var Nt = typeof WeakMap == "function" ? WeakMap : Map;
        mt = new Nt();
      }
      function wt(N, te) {
        if (!N || dt) return "";
        {
          var C = mt.get(N);
          if (C !== void 0) return C;
        }
        var F;
        dt = !0;
        var Z = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ae;
        (ae = St.current), (St.current = null), Me();
        try {
          if (te) {
            var he = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(he.prototype, "props", {
                set: function () {
                  throw Error();
                }
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(he, []);
              } catch (Wt) {
                F = Wt;
              }
              Reflect.construct(N, [], he);
            } else {
              try {
                he.call();
              } catch (Wt) {
                F = Wt;
              }
              N.call(he.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Wt) {
              F = Wt;
            }
            N();
          }
        } catch (Wt) {
          if (Wt && F && typeof Wt.stack == "string") {
            for (
              var ce = Wt.stack.split(`
`),
                je = F.stack.split(`
`),
                Te = ce.length - 1,
                nt = je.length - 1;
              Te >= 1 && nt >= 0 && ce[Te] !== je[nt];

            )
              nt--;
            for (; Te >= 1 && nt >= 0; Te--, nt--)
              if (ce[Te] !== je[nt]) {
                if (Te !== 1 || nt !== 1)
                  do
                    if ((Te--, nt--, nt < 0 || ce[Te] !== je[nt])) {
                      var lt =
                        `
` + ce[Te].replace(" at new ", " at ");
                      return (
                        N.displayName &&
                          lt.includes("<anonymous>") &&
                          (lt = lt.replace("<anonymous>", N.displayName)),
                        typeof N == "function" && mt.set(N, lt),
                        lt
                      );
                    }
                  while (Te >= 1 && nt >= 0);
                break;
              }
          }
        } finally {
          (dt = !1), (St.current = ae), tt(), (Error.prepareStackTrace = Z);
        }
        var Tt = N ? N.displayName || N.name : "",
          nn = Tt ? $e(Tt) : "";
        return typeof N == "function" && mt.set(N, nn), nn;
      }
      function Ft(N, te, C) {
        return wt(N, !1);
      }
      function fn(N) {
        var te = N.prototype;
        return !!(te && te.isReactComponent);
      }
      function Qt(N, te, C) {
        if (N == null) return "";
        if (typeof N == "function") return wt(N, fn(N));
        if (typeof N == "string") return $e(N);
        switch (N) {
          case y:
            return $e("Suspense");
          case w:
            return $e("SuspenseList");
        }
        if (typeof N == "object")
          switch (N.$$typeof) {
            case b:
              return Ft(N.render);
            case g:
              return Qt(N.type, te, C);
            case _: {
              var F = N,
                Z = F._payload,
                ae = F._init;
              try {
                return Qt(ae(Z), te, C);
              } catch {}
            }
          }
        return "";
      }
      var zt = Object.prototype.hasOwnProperty,
        dn = {},
        nr = j.ReactDebugCurrentFrame;
      function It(N) {
        if (N) {
          var te = N._owner,
            C = Qt(N.type, N._source, te ? te.type : null);
          nr.setExtraStackFrame(C);
        } else nr.setExtraStackFrame(null);
      }
      function kn(N, te, C, F, Z) {
        {
          var ae = Function.call.bind(zt);
          for (var he in N)
            if (ae(N, he)) {
              var ce = void 0;
              try {
                if (typeof N[he] != "function") {
                  var je = Error(
                    (F || "React class") +
                      ": " +
                      C +
                      " type `" +
                      he +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof N[he] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  throw ((je.name = "Invariant Violation"), je);
                }
                ce = N[he](te, he, F, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Te) {
                ce = Te;
              }
              ce &&
                !(ce instanceof Error) &&
                (It(Z),
                I(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  F || "React class",
                  C,
                  he,
                  typeof ce
                ),
                It(null)),
                ce instanceof Error &&
                  !(ce.message in dn) &&
                  ((dn[ce.message] = !0), It(Z), I("Failed %s type: %s", C, ce.message), It(null));
            }
        }
      }
      var mn = Array.isArray;
      function pt(N) {
        return mn(N);
      }
      function Zt(N) {
        {
          var te = typeof Symbol == "function" && Symbol.toStringTag,
            C = (te && N[Symbol.toStringTag]) || N.constructor.name || "Object";
          return C;
        }
      }
      function pr(N) {
        try {
          return en(N), !1;
        } catch {
          return !0;
        }
      }
      function en(N) {
        return "" + N;
      }
      function on(N) {
        if (pr(N))
          return (
            I(
              "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
              Zt(N)
            ),
            en(N)
          );
      }
      var En = j.ReactCurrentOwner,
        Rr = { key: !0, ref: !0, __self: !0, __source: !0 },
        Kn,
        se,
        Re;
      Re = {};
      function Ie(N) {
        if (zt.call(N, "ref")) {
          var te = Object.getOwnPropertyDescriptor(N, "ref").get;
          if (te && te.isReactWarning) return !1;
        }
        return N.ref !== void 0;
      }
      function vt(N) {
        if (zt.call(N, "key")) {
          var te = Object.getOwnPropertyDescriptor(N, "key").get;
          if (te && te.isReactWarning) return !1;
        }
        return N.key !== void 0;
      }
      function Lt(N, te) {
        if (typeof N.ref == "string" && En.current && te && En.current.stateNode !== te) {
          var C = le(En.current.type);
          Re[C] ||
            (I(
              'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
              le(En.current.type),
              N.ref
            ),
            (Re[C] = !0));
        }
      }
      function jt(N, te) {
        {
          var C = function () {
            Kn ||
              ((Kn = !0),
              I(
                "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                te
              ));
          };
          (C.isReactWarning = !0), Object.defineProperty(N, "key", { get: C, configurable: !0 });
        }
      }
      function Vt(N, te) {
        {
          var C = function () {
            se ||
              ((se = !0),
              I(
                "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                te
              ));
          };
          (C.isReactWarning = !0), Object.defineProperty(N, "ref", { get: C, configurable: !0 });
        }
      }
      var vn = function (N, te, C, F, Z, ae, he) {
        var ce = { $$typeof: i, type: N, key: te, ref: C, props: he, _owner: ae };
        return (
          (ce._store = {}),
          Object.defineProperty(ce._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: !1
          }),
          Object.defineProperty(ce, "_self", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: F
          }),
          Object.defineProperty(ce, "_source", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: Z
          }),
          Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)),
          ce
        );
      };
      function Dt(N, te, C, F, Z) {
        {
          var ae,
            he = {},
            ce = null,
            je = null;
          C !== void 0 && (on(C), (ce = "" + C)),
            vt(te) && (on(te.key), (ce = "" + te.key)),
            Ie(te) && ((je = te.ref), Lt(te, Z));
          for (ae in te) zt.call(te, ae) && !Rr.hasOwnProperty(ae) && (he[ae] = te[ae]);
          if (N && N.defaultProps) {
            var Te = N.defaultProps;
            for (ae in Te) he[ae] === void 0 && (he[ae] = Te[ae]);
          }
          if (ce || je) {
            var nt = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
            ce && jt(he, nt), je && Vt(he, nt);
          }
          return vn(N, ce, je, Z, F, En.current, he);
        }
      }
      var rt = j.ReactCurrentOwner,
        Rt = j.ReactDebugCurrentFrame;
      function zn(N) {
        if (N) {
          var te = N._owner,
            C = Qt(N.type, N._source, te ? te.type : null);
          Rt.setExtraStackFrame(C);
        } else Rt.setExtraStackFrame(null);
      }
      var An;
      An = !1;
      function Mn(N) {
        return typeof N == "object" && N !== null && N.$$typeof === i;
      }
      function Fe() {
        {
          if (rt.current) {
            var N = le(rt.current.type);
            if (N)
              return (
                `

Check the render method of \`` +
                N +
                "`."
              );
          }
          return "";
        }
      }
      function Pt(N) {
        {
          if (N !== void 0) {
            var te = N.fileName.replace(/^.*[\\\/]/, ""),
              C = N.lineNumber;
            return (
              `

Check your code at ` +
              te +
              ":" +
              C +
              "."
            );
          }
          return "";
        }
      }
      var $t = {};
      function ln(N) {
        {
          var te = Fe();
          if (!te) {
            var C = typeof N == "string" ? N : N.displayName || N.name;
            C &&
              (te =
                `

Check the top-level render call using <` +
                C +
                ">.");
          }
          return te;
        }
      }
      function mr(N, te) {
        {
          if (!N._store || N._store.validated || N.key != null) return;
          N._store.validated = !0;
          var C = ln(te);
          if ($t[C]) return;
          $t[C] = !0;
          var F = "";
          N &&
            N._owner &&
            N._owner !== rt.current &&
            (F = " It was passed a child from " + le(N._owner.type) + "."),
            zn(N),
            I(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              C,
              F
            ),
            zn(null);
        }
      }
      function Ht(N, te) {
        {
          if (typeof N != "object") return;
          if (pt(N))
            for (var C = 0; C < N.length; C++) {
              var F = N[C];
              Mn(F) && mr(F, te);
            }
          else if (Mn(N)) N._store && (N._store.validated = !0);
          else if (N) {
            var Z = B(N);
            if (typeof Z == "function" && Z !== N.entries)
              for (var ae = Z.call(N), he; !(he = ae.next()).done; )
                Mn(he.value) && mr(he.value, te);
          }
        }
      }
      function Yt(N) {
        {
          var te = N.type;
          if (te == null || typeof te == "string") return;
          var C;
          if (typeof te == "function") C = te.propTypes;
          else if (typeof te == "object" && (te.$$typeof === b || te.$$typeof === g))
            C = te.propTypes;
          else return;
          if (C) {
            var F = le(te);
            kn(C, N.props, "prop", F, N);
          } else if (te.PropTypes !== void 0 && !An) {
            An = !0;
            var Z = le(te);
            I(
              "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
              Z || "Unknown"
            );
          }
          typeof te.getDefaultProps == "function" &&
            !te.getDefaultProps.isReactClassApproved &&
            I(
              "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
            );
        }
      }
      function hn(N) {
        {
          for (var te = Object.keys(N.props), C = 0; C < te.length; C++) {
            var F = te[C];
            if (F !== "children" && F !== "key") {
              zn(N),
                I(
                  "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                  F
                ),
                zn(null);
              break;
            }
          }
          N.ref !== null &&
            (zn(N), I("Invalid attribute `ref` supplied to `React.Fragment`."), zn(null));
        }
      }
      var Ut = {};
      function tn(N, te, C, F, Z, ae) {
        {
          var he = He(N);
          if (!he) {
            var ce = "";
            (N === void 0 || (typeof N == "object" && N !== null && Object.keys(N).length === 0)) &&
              (ce +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var je = Pt(Z);
            je ? (ce += je) : (ce += Fe());
            var Te;
            N === null
              ? (Te = "null")
              : pt(N)
                ? (Te = "array")
                : N !== void 0 && N.$$typeof === i
                  ? ((Te = "<" + (le(N.type) || "Unknown") + " />"),
                    (ce = " Did you accidentally export a JSX literal instead of a component?"))
                  : (Te = typeof N),
              I(
                "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                Te,
                ce
              );
          }
          var nt = Dt(N, te, C, Z, ae);
          if (nt == null) return nt;
          if (he) {
            var lt = te.children;
            if (lt !== void 0)
              if (F)
                if (pt(lt)) {
                  for (var Tt = 0; Tt < lt.length; Tt++) Ht(lt[Tt], N);
                  Object.freeze && Object.freeze(lt);
                } else
                  I(
                    "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                  );
              else Ht(lt, N);
          }
          if (zt.call(te, "key")) {
            var nn = le(N),
              Wt = Object.keys(te).filter(function (Qe) {
                return Qe !== "key";
              }),
              rr =
                Wt.length > 0
                  ? "{key: someKey, " + Wt.join(": ..., ") + ": ...}"
                  : "{key: someKey}";
            if (!Ut[nn + rr]) {
              var Gt = Wt.length > 0 ? "{" + Wt.join(": ..., ") + ": ...}" : "{}";
              I(
                `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                rr,
                nn,
                Gt,
                nn
              ),
                (Ut[nn + rr] = !0);
            }
          }
          return N === u ? hn(nt) : Yt(nt), nt;
        }
      }
      var Vr = tn;
      (Kf.Fragment = u), (Kf.jsxDEV = Vr);
    })(),
    Kf
  );
}
var HE;
function MA() {
  return HE || ((HE = 1), (Mh.exports = AA())), Mh.exports;
}
var M = MA(),
  Xf = {},
  jh = { exports: {} },
  Er = {},
  Vh = { exports: {} },
  Uh = {},
  BE;
function LA() {
  return (
    BE ||
      ((BE = 1),
      (function (a) {
        /**
         * @license React
         * scheduler.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ (function () {
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          var i = !1,
            s = 5;
          function u(se, Re) {
            var Ie = se.length;
            se.push(Re), f(se, Re, Ie);
          }
          function d(se) {
            return se.length === 0 ? null : se[0];
          }
          function p(se) {
            if (se.length === 0) return null;
            var Re = se[0],
              Ie = se.pop();
            return Ie !== Re && ((se[0] = Ie), E(se, Ie, 0)), Re;
          }
          function f(se, Re, Ie) {
            for (var vt = Ie; vt > 0; ) {
              var Lt = (vt - 1) >>> 1,
                jt = se[Lt];
              if (b(jt, Re) > 0) (se[Lt] = Re), (se[vt] = jt), (vt = Lt);
              else return;
            }
          }
          function E(se, Re, Ie) {
            for (var vt = Ie, Lt = se.length, jt = Lt >>> 1; vt < jt; ) {
              var Vt = (vt + 1) * 2 - 1,
                vn = se[Vt],
                Dt = Vt + 1,
                rt = se[Dt];
              if (b(vn, Re) < 0)
                Dt < Lt && b(rt, vn) < 0
                  ? ((se[vt] = rt), (se[Dt] = Re), (vt = Dt))
                  : ((se[vt] = vn), (se[Vt] = Re), (vt = Vt));
              else if (Dt < Lt && b(rt, Re) < 0) (se[vt] = rt), (se[Dt] = Re), (vt = Dt);
              else return;
            }
          }
          function b(se, Re) {
            var Ie = se.sortIndex - Re.sortIndex;
            return Ie !== 0 ? Ie : se.id - Re.id;
          }
          var y = 1,
            w = 2,
            g = 3,
            _ = 4,
            T = 5;
          function O(se, Re) {}
          var L = typeof performance == "object" && typeof performance.now == "function";
          if (L) {
            var B = performance;
            a.unstable_now = function () {
              return B.now();
            };
          } else {
            var j = Date,
              I = j.now();
            a.unstable_now = function () {
              return j.now() - I;
            };
          }
          var G = 1073741823,
            J = -1,
            q = 250,
            oe = 5e3,
            X = 1e4,
            ne = G,
            Ne = [],
            He = [],
            Xe = 1,
            Le = null,
            le = g,
            _e = !1,
            ke = !1,
            pe = !1,
            ie = typeof setTimeout == "function" ? setTimeout : null,
            Q = typeof clearTimeout == "function" ? clearTimeout : null,
            Je = typeof setImmediate < "u" ? setImmediate : null;
          typeof navigator < "u" &&
            navigator.scheduling !== void 0 &&
            navigator.scheduling.isInputPending !== void 0 &&
            navigator.scheduling.isInputPending.bind(navigator.scheduling);
          function Ze(se) {
            for (var Re = d(He); Re !== null; ) {
              if (Re.callback === null) p(He);
              else if (Re.startTime <= se) p(He), (Re.sortIndex = Re.expirationTime), u(Ne, Re);
              else return;
              Re = d(He);
            }
          }
          function Mt(se) {
            if (((pe = !1), Ze(se), !ke))
              if (d(Ne) !== null) (ke = !0), en(Et);
              else {
                var Re = d(He);
                Re !== null && on(Mt, Re.startTime - se);
              }
          }
          function Et(se, Re) {
            (ke = !1), pe && ((pe = !1), En()), (_e = !0);
            var Ie = le;
            try {
              var vt;
              if (!i) return xe(se, Re);
            } finally {
              (Le = null), (le = Ie), (_e = !1);
            }
          }
          function xe(se, Re) {
            var Ie = Re;
            for (Ze(Ie), Le = d(Ne); Le !== null && !(Le.expirationTime > Ie && (!se || nr())); ) {
              var vt = Le.callback;
              if (typeof vt == "function") {
                (Le.callback = null), (le = Le.priorityLevel);
                var Lt = Le.expirationTime <= Ie,
                  jt = vt(Lt);
                (Ie = a.unstable_now()),
                  typeof jt == "function" ? (Le.callback = jt) : Le === d(Ne) && p(Ne),
                  Ze(Ie);
              } else p(Ne);
              Le = d(Ne);
            }
            if (Le !== null) return !0;
            var Vt = d(He);
            return Vt !== null && on(Mt, Vt.startTime - Ie), !1;
          }
          function Me(se, Re) {
            switch (se) {
              case y:
              case w:
              case g:
              case _:
              case T:
                break;
              default:
                se = g;
            }
            var Ie = le;
            le = se;
            try {
              return Re();
            } finally {
              le = Ie;
            }
          }
          function tt(se) {
            var Re;
            switch (le) {
              case y:
              case w:
              case g:
                Re = g;
                break;
              default:
                Re = le;
                break;
            }
            var Ie = le;
            le = Re;
            try {
              return se();
            } finally {
              le = Ie;
            }
          }
          function St(se) {
            var Re = le;
            return function () {
              var Ie = le;
              le = Re;
              try {
                return se.apply(this, arguments);
              } finally {
                le = Ie;
              }
            };
          }
          function Ue(se, Re, Ie) {
            var vt = a.unstable_now(),
              Lt;
            if (typeof Ie == "object" && Ie !== null) {
              var jt = Ie.delay;
              typeof jt == "number" && jt > 0 ? (Lt = vt + jt) : (Lt = vt);
            } else Lt = vt;
            var Vt;
            switch (se) {
              case y:
                Vt = J;
                break;
              case w:
                Vt = q;
                break;
              case T:
                Vt = ne;
                break;
              case _:
                Vt = X;
                break;
              case g:
              default:
                Vt = oe;
                break;
            }
            var vn = Lt + Vt,
              Dt = {
                id: Xe++,
                callback: Re,
                priorityLevel: se,
                startTime: Lt,
                expirationTime: vn,
                sortIndex: -1
              };
            return (
              Lt > vt
                ? ((Dt.sortIndex = Lt),
                  u(He, Dt),
                  d(Ne) === null && Dt === d(He) && (pe ? En() : (pe = !0), on(Mt, Lt - vt)))
                : ((Dt.sortIndex = vn), u(Ne, Dt), !ke && !_e && ((ke = !0), en(Et))),
              Dt
            );
          }
          function $e() {}
          function dt() {
            !ke && !_e && ((ke = !0), en(Et));
          }
          function mt() {
            return d(Ne);
          }
          function Nt(se) {
            se.callback = null;
          }
          function wt() {
            return le;
          }
          var Ft = !1,
            fn = null,
            Qt = -1,
            zt = s,
            dn = -1;
          function nr() {
            var se = a.unstable_now() - dn;
            return !(se < zt);
          }
          function It() {}
          function kn(se) {
            if (se < 0 || se > 125) {
              console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              );
              return;
            }
            se > 0 ? (zt = Math.floor(1e3 / se)) : (zt = s);
          }
          var mn = function () {
              if (fn !== null) {
                var se = a.unstable_now();
                dn = se;
                var Re = !0,
                  Ie = !0;
                try {
                  Ie = fn(Re, se);
                } finally {
                  Ie ? pt() : ((Ft = !1), (fn = null));
                }
              } else Ft = !1;
            },
            pt;
          if (typeof Je == "function")
            pt = function () {
              Je(mn);
            };
          else if (typeof MessageChannel < "u") {
            var Zt = new MessageChannel(),
              pr = Zt.port2;
            (Zt.port1.onmessage = mn),
              (pt = function () {
                pr.postMessage(null);
              });
          } else
            pt = function () {
              ie(mn, 0);
            };
          function en(se) {
            (fn = se), Ft || ((Ft = !0), pt());
          }
          function on(se, Re) {
            Qt = ie(function () {
              se(a.unstable_now());
            }, Re);
          }
          function En() {
            Q(Qt), (Qt = -1);
          }
          var Rr = It,
            Kn = null;
          (a.unstable_IdlePriority = T),
            (a.unstable_ImmediatePriority = y),
            (a.unstable_LowPriority = _),
            (a.unstable_NormalPriority = g),
            (a.unstable_Profiling = Kn),
            (a.unstable_UserBlockingPriority = w),
            (a.unstable_cancelCallback = Nt),
            (a.unstable_continueExecution = dt),
            (a.unstable_forceFrameRate = kn),
            (a.unstable_getCurrentPriorityLevel = wt),
            (a.unstable_getFirstCallbackNode = mt),
            (a.unstable_next = tt),
            (a.unstable_pauseExecution = $e),
            (a.unstable_requestPaint = Rr),
            (a.unstable_runWithPriority = Me),
            (a.unstable_scheduleCallback = Ue),
            (a.unstable_shouldYield = nr),
            (a.unstable_wrapCallback = St),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        })();
      })(Uh)),
    Uh
  );
}
var IE;
function jA() {
  return IE || ((IE = 1), (Vh.exports = LA())), Vh.exports;
}
var $E;
function VA() {
  if ($E) return Er;
  $E = 1;
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ return (
    (function () {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var a = ju(),
        i = jA(),
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        u = !1;
      function d(e) {
        u = e;
      }
      function p(e) {
        if (!u) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
          E("warn", e, n);
        }
      }
      function f(e) {
        if (!u) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
          E("error", e, n);
        }
      }
      function E(e, t, n) {
        {
          var r = s.ReactDebugCurrentFrame,
            o = r.getStackAddendum();
          o !== "" && ((t += "%s"), (n = n.concat([o])));
          var l = n.map(function (c) {
            return String(c);
          });
          l.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, l);
        }
      }
      var b = 0,
        y = 1,
        w = 2,
        g = 3,
        _ = 4,
        T = 5,
        O = 6,
        L = 7,
        B = 8,
        j = 9,
        I = 10,
        G = 11,
        J = 12,
        q = 13,
        oe = 14,
        X = 15,
        ne = 16,
        Ne = 17,
        He = 18,
        Xe = 19,
        Le = 21,
        le = 22,
        _e = 23,
        ke = 24,
        pe = 25,
        ie = !0,
        Q = !1,
        Je = !1,
        Ze = !1,
        Mt = !1,
        Et = !0,
        xe = !0,
        Me = !0,
        tt = !0,
        St = new Set(),
        Ue = {},
        $e = {};
      function dt(e, t) {
        mt(e, t), mt(e + "Capture", t);
      }
      function mt(e, t) {
        Ue[e] &&
          f(
            "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
            e
          ),
          (Ue[e] = t);
        {
          var n = e.toLowerCase();
          ($e[n] = e), e === "onDoubleClick" && ($e.ondblclick = e);
        }
        for (var r = 0; r < t.length; r++) St.add(t[r]);
      }
      var Nt =
          typeof window < "u" &&
          typeof window.document < "u" &&
          typeof window.document.createElement < "u",
        wt = Object.prototype.hasOwnProperty;
      function Ft(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag,
            n = (t && e[Symbol.toStringTag]) || e.constructor.name || "Object";
          return n;
        }
      }
      function fn(e) {
        try {
          return Qt(e), !1;
        } catch {
          return !0;
        }
      }
      function Qt(e) {
        return "" + e;
      }
      function zt(e, t) {
        if (fn(e))
          return (
            f(
              "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",
              t,
              Ft(e)
            ),
            Qt(e)
          );
      }
      function dn(e) {
        if (fn(e))
          return (
            f(
              "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
              Ft(e)
            ),
            Qt(e)
          );
      }
      function nr(e, t) {
        if (fn(e))
          return (
            f(
              "The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",
              t,
              Ft(e)
            ),
            Qt(e)
          );
      }
      function It(e, t) {
        if (fn(e))
          return (
            f(
              "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
              t,
              Ft(e)
            ),
            Qt(e)
          );
      }
      function kn(e) {
        if (fn(e))
          return (
            f(
              "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
              Ft(e)
            ),
            Qt(e)
          );
      }
      function mn(e) {
        if (fn(e))
          return (
            f(
              "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",
              Ft(e)
            ),
            Qt(e)
          );
      }
      var pt = 0,
        Zt = 1,
        pr = 2,
        en = 3,
        on = 4,
        En = 5,
        Rr = 6,
        Kn =
          ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
        se = Kn + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
        Re = new RegExp("^[" + Kn + "][" + se + "]*$"),
        Ie = {},
        vt = {};
      function Lt(e) {
        return wt.call(vt, e)
          ? !0
          : wt.call(Ie, e)
            ? !1
            : Re.test(e)
              ? ((vt[e] = !0), !0)
              : ((Ie[e] = !0), f("Invalid attribute name: `%s`", e), !1);
      }
      function jt(e, t, n) {
        return t !== null
          ? t.type === pt
          : n
            ? !1
            : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
      }
      function Vt(e, t, n, r) {
        if (n !== null && n.type === pt) return !1;
        switch (typeof t) {
          case "function":
          case "symbol":
            return !0;
          case "boolean": {
            if (r) return !1;
            if (n !== null) return !n.acceptsBooleans;
            var o = e.toLowerCase().slice(0, 5);
            return o !== "data-" && o !== "aria-";
          }
          default:
            return !1;
        }
      }
      function vn(e, t, n, r) {
        if (t === null || typeof t > "u" || Vt(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null)
          switch (n.type) {
            case en:
              return !t;
            case on:
              return t === !1;
            case En:
              return isNaN(t);
            case Rr:
              return isNaN(t) || t < 1;
          }
        return !1;
      }
      function Dt(e) {
        return Rt.hasOwnProperty(e) ? Rt[e] : null;
      }
      function rt(e, t, n, r, o, l, c) {
        (this.acceptsBooleans = t === pr || t === en || t === on),
          (this.attributeName = r),
          (this.attributeNamespace = o),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = l),
          (this.removeEmptyString = c);
      }
      var Rt = {},
        zn = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style"
        ];
      zn.forEach(function (e) {
        Rt[e] = new rt(e, pt, !1, e, null, !1, !1);
      }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"]
        ].forEach(function (e) {
          var t = e[0],
            n = e[1];
          Rt[t] = new rt(t, Zt, !1, n, null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
          Rt[e] = new rt(e, pr, !1, e.toLowerCase(), null, !1, !1);
        }),
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
          function (e) {
            Rt[e] = new rt(e, pr, !1, e, null, !1, !1);
          }
        ),
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope"
        ].forEach(function (e) {
          Rt[e] = new rt(e, en, !1, e.toLowerCase(), null, !1, !1);
        }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          Rt[e] = new rt(e, en, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          Rt[e] = new rt(e, on, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          Rt[e] = new rt(e, Rr, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          Rt[e] = new rt(e, En, !1, e.toLowerCase(), null, !1, !1);
        });
      var An = /[\-\:]([a-z])/g,
        Mn = function (e) {
          return e[1].toUpperCase();
        };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height"
      ].forEach(function (e) {
        var t = e.replace(An, Mn);
        Rt[t] = new rt(t, Zt, !1, e, null, !1, !1);
      }),
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type"
        ].forEach(function (e) {
          var t = e.replace(An, Mn);
          Rt[t] = new rt(t, Zt, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(An, Mn);
          Rt[t] = new rt(t, Zt, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          Rt[e] = new rt(e, Zt, !1, e.toLowerCase(), null, !1, !1);
        });
      var Fe = "xlinkHref";
      (Rt[Fe] = new rt("xlinkHref", Zt, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          Rt[e] = new rt(e, Zt, !1, e.toLowerCase(), null, !0, !0);
        });
      var Pt =
          /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
        $t = !1;
      function ln(e) {
        !$t &&
          Pt.test(e) &&
          (($t = !0),
          f(
            "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
            JSON.stringify(e)
          ));
      }
      function mr(e, t, n, r) {
        if (r.mustUseProperty) {
          var o = r.propertyName;
          return e[o];
        } else {
          zt(n, t), r.sanitizeURL && ln("" + n);
          var l = r.attributeName,
            c = null;
          if (r.type === on) {
            if (e.hasAttribute(l)) {
              var m = e.getAttribute(l);
              return m === "" ? !0 : vn(t, n, r, !1) ? m : m === "" + n ? n : m;
            }
          } else if (e.hasAttribute(l)) {
            if (vn(t, n, r, !1)) return e.getAttribute(l);
            if (r.type === en) return n;
            c = e.getAttribute(l);
          }
          return vn(t, n, r, !1) ? (c === null ? n : c) : c === "" + n ? n : c;
        }
      }
      function Ht(e, t, n, r) {
        {
          if (!Lt(t)) return;
          if (!e.hasAttribute(t)) return n === void 0 ? void 0 : null;
          var o = e.getAttribute(t);
          return zt(n, t), o === "" + n ? n : o;
        }
      }
      function Yt(e, t, n, r) {
        var o = Dt(t);
        if (!jt(t, o, r)) {
          if ((vn(t, n, o, r) && (n = null), r || o === null)) {
            if (Lt(t)) {
              var l = t;
              n === null ? e.removeAttribute(l) : (zt(n, t), e.setAttribute(l, "" + n));
            }
            return;
          }
          var c = o.mustUseProperty;
          if (c) {
            var m = o.propertyName;
            if (n === null) {
              var v = o.type;
              e[m] = v === en ? !1 : "";
            } else e[m] = n;
            return;
          }
          var x = o.attributeName,
            S = o.attributeNamespace;
          if (n === null) e.removeAttribute(x);
          else {
            var A = o.type,
              k;
            A === en || (A === on && n === !0)
              ? (k = "")
              : (zt(n, x), (k = "" + n), o.sanitizeURL && ln(k.toString())),
              S ? e.setAttributeNS(S, x, k) : e.setAttribute(x, k);
          }
        }
      }
      var hn = Symbol.for("react.element"),
        Ut = Symbol.for("react.portal"),
        tn = Symbol.for("react.fragment"),
        Vr = Symbol.for("react.strict_mode"),
        N = Symbol.for("react.profiler"),
        te = Symbol.for("react.provider"),
        C = Symbol.for("react.context"),
        F = Symbol.for("react.forward_ref"),
        Z = Symbol.for("react.suspense"),
        ae = Symbol.for("react.suspense_list"),
        he = Symbol.for("react.memo"),
        ce = Symbol.for("react.lazy"),
        je = Symbol.for("react.scope"),
        Te = Symbol.for("react.debug_trace_mode"),
        nt = Symbol.for("react.offscreen"),
        lt = Symbol.for("react.legacy_hidden"),
        Tt = Symbol.for("react.cache"),
        nn = Symbol.for("react.tracing_marker"),
        Wt = Symbol.iterator,
        rr = "@@iterator";
      function Gt(e) {
        if (e === null || typeof e != "object") return null;
        var t = (Wt && e[Wt]) || e[rr];
        return typeof t == "function" ? t : null;
      }
      var Qe = Object.assign,
        _a = 0,
        Si,
        zu,
        ro,
        zl,
        Pl,
        Hl,
        Bl;
      function Il() {}
      Il.__reactDisabledLog = !0;
      function Pu() {
        {
          if (_a === 0) {
            (Si = console.log),
              (zu = console.info),
              (ro = console.warn),
              (zl = console.error),
              (Pl = console.group),
              (Hl = console.groupCollapsed),
              (Bl = console.groupEnd);
            var e = { configurable: !0, enumerable: !0, value: Il, writable: !0 };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          _a++;
        }
      }
      function Hu() {
        {
          if ((_a--, _a === 0)) {
            var e = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: Qe({}, e, { value: Si }),
              info: Qe({}, e, { value: zu }),
              warn: Qe({}, e, { value: ro }),
              error: Qe({}, e, { value: zl }),
              group: Qe({}, e, { value: Pl }),
              groupCollapsed: Qe({}, e, { value: Hl }),
              groupEnd: Qe({}, e, { value: Bl })
            });
          }
          _a < 0 &&
            f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ci = s.ReactCurrentDispatcher,
        $l;
      function ua(e, t, n) {
        {
          if ($l === void 0)
            try {
              throw Error();
            } catch (o) {
              var r = o.stack.trim().match(/\n( *(at )?)/);
              $l = (r && r[1]) || "";
            }
          return (
            `
` +
            $l +
            e
          );
        }
      }
      var Uo = !1,
        ao;
      {
        var wi = typeof WeakMap == "function" ? WeakMap : Map;
        ao = new wi();
      }
      function Fo(e, t) {
        if (!e || Uo) return "";
        {
          var n = ao.get(e);
          if (n !== void 0) return n;
        }
        var r;
        Uo = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var l;
        (l = Ci.current), (Ci.current = null), Pu();
        try {
          if (t) {
            var c = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(c.prototype, "props", {
                set: function () {
                  throw Error();
                }
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(c, []);
              } catch (H) {
                r = H;
              }
              Reflect.construct(e, [], c);
            } else {
              try {
                c.call();
              } catch (H) {
                r = H;
              }
              e.call(c.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (H) {
              r = H;
            }
            e();
          }
        } catch (H) {
          if (H && r && typeof H.stack == "string") {
            for (
              var m = H.stack.split(`
`),
                v = r.stack.split(`
`),
                x = m.length - 1,
                S = v.length - 1;
              x >= 1 && S >= 0 && m[x] !== v[S];

            )
              S--;
            for (; x >= 1 && S >= 0; x--, S--)
              if (m[x] !== v[S]) {
                if (x !== 1 || S !== 1)
                  do
                    if ((x--, S--, S < 0 || m[x] !== v[S])) {
                      var A =
                        `
` + m[x].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          A.includes("<anonymous>") &&
                          (A = A.replace("<anonymous>", e.displayName)),
                        typeof e == "function" && ao.set(e, A),
                        A
                      );
                    }
                  while (x >= 1 && S >= 0);
                break;
              }
          }
        } finally {
          (Uo = !1), (Ci.current = l), Hu(), (Error.prepareStackTrace = o);
        }
        var k = e ? e.displayName || e.name : "",
          z = k ? ua(k) : "";
        return typeof e == "function" && ao.set(e, z), z;
      }
      function Ri(e, t, n) {
        return Fo(e, !0);
      }
      function Yl(e, t, n) {
        return Fo(e, !1);
      }
      function Bu(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function Wl(e, t, n) {
        if (e == null) return "";
        if (typeof e == "function") return Fo(e, Bu(e));
        if (typeof e == "string") return ua(e);
        switch (e) {
          case Z:
            return ua("Suspense");
          case ae:
            return ua("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case F:
              return Yl(e.render);
            case he:
              return Wl(e.type, t, n);
            case ce: {
              var r = e,
                o = r._payload,
                l = r._init;
              try {
                return Wl(l(o), t, n);
              } catch {}
            }
          }
        return "";
      }
      function Rd(e) {
        switch ((e._debugOwner && e._debugOwner.type, e._debugSource, e.tag)) {
          case T:
            return ua(e.type);
          case ne:
            return ua("Lazy");
          case q:
            return ua("Suspense");
          case Xe:
            return ua("SuspenseList");
          case b:
          case w:
          case X:
            return Yl(e.type);
          case G:
            return Yl(e.type.render);
          case y:
            return Ri(e.type);
          default:
            return "";
        }
      }
      function zo(e) {
        try {
          var t = "",
            n = e;
          do (t += Rd(n)), (n = n.return);
          while (n);
          return t;
        } catch (r) {
          return (
            `
Error generating stack: ` +
            r.message +
            `
` +
            r.stack
          );
        }
      }
      function Iu(e, t, n) {
        var r = e.displayName;
        if (r) return r;
        var o = t.displayName || t.name || "";
        return o !== "" ? n + "(" + o + ")" : n;
      }
      function Gl(e) {
        return e.displayName || "Context";
      }
      function yt(e) {
        if (e == null) return null;
        if (
          (typeof e.tag == "number" &&
            f(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          typeof e == "function")
        )
          return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case tn:
            return "Fragment";
          case Ut:
            return "Portal";
          case N:
            return "Profiler";
          case Vr:
            return "StrictMode";
          case Z:
            return "Suspense";
          case ae:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case C:
              var t = e;
              return Gl(t) + ".Consumer";
            case te:
              var n = e;
              return Gl(n._context) + ".Provider";
            case F:
              return Iu(e, e.render, "ForwardRef");
            case he:
              var r = e.displayName || null;
              return r !== null ? r : yt(e.type) || "Memo";
            case ce: {
              var o = e,
                l = o._payload,
                c = o._init;
              try {
                return yt(c(l));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      function Td(e, t, n) {
        var r = t.displayName || t.name || "";
        return e.displayName || (r !== "" ? n + "(" + r + ")" : n);
      }
      function Oa(e) {
        return e.displayName || "Context";
      }
      function Ke(e) {
        var t = e.tag,
          n = e.type;
        switch (t) {
          case ke:
            return "Cache";
          case j:
            var r = n;
            return Oa(r) + ".Consumer";
          case I:
            var o = n;
            return Oa(o._context) + ".Provider";
          case He:
            return "DehydratedFragment";
          case G:
            return Td(n, n.render, "ForwardRef");
          case L:
            return "Fragment";
          case T:
            return n;
          case _:
            return "Portal";
          case g:
            return "Root";
          case O:
            return "Text";
          case ne:
            return yt(n);
          case B:
            return n === Vr ? "StrictMode" : "Mode";
          case le:
            return "Offscreen";
          case J:
            return "Profiler";
          case Le:
            return "Scope";
          case q:
            return "Suspense";
          case Xe:
            return "SuspenseList";
          case pe:
            return "TracingMarker";
          case y:
          case b:
          case Ne:
          case w:
          case oe:
          case X:
            if (typeof n == "function") return n.displayName || n.name || null;
            if (typeof n == "string") return n;
            break;
        }
        return null;
      }
      var ql = s.ReactDebugCurrentFrame,
        ar = null,
        Po = !1;
      function oo() {
        {
          if (ar === null) return null;
          var e = ar._debugOwner;
          if (e !== null && typeof e < "u") return Ke(e);
        }
        return null;
      }
      function Nd() {
        return ar === null ? "" : zo(ar);
      }
      function Ln() {
        (ql.getCurrentStack = null), (ar = null), (Po = !1);
      }
      function rn(e) {
        (ql.getCurrentStack = e === null ? null : Nd), (ar = e), (Po = !1);
      }
      function $u() {
        return ar;
      }
      function Ur(e) {
        Po = e;
      }
      function or(e) {
        return "" + e;
      }
      function Yr(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return e;
          case "object":
            return mn(e), e;
          default:
            return "";
        }
      }
      var Dd = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
      };
      function Kl(e, t) {
        Dd[t.type] ||
          t.onChange ||
          t.onInput ||
          t.readOnly ||
          t.disabled ||
          t.value == null ||
          f(
            "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
          ),
          t.onChange ||
            t.readOnly ||
            t.disabled ||
            t.checked == null ||
            f(
              "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
            );
      }
      function Yu(e) {
        var t = e.type,
          n = e.nodeName;
        return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
      }
      function Xl(e) {
        return e._valueTracker;
      }
      function Ti(e) {
        e._valueTracker = null;
      }
      function _d(e) {
        var t = "";
        return e && (Yu(e) ? (t = e.checked ? "true" : "false") : (t = e.value)), t;
      }
      function io(e) {
        var t = Yu(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        mn(e[t]);
        var r = "" + e[t];
        if (
          !(
            e.hasOwnProperty(t) ||
            typeof n > "u" ||
            typeof n.get != "function" ||
            typeof n.set != "function"
          )
        ) {
          var o = n.get,
            l = n.set;
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return o.call(this);
            },
            set: function (m) {
              mn(m), (r = "" + m), l.call(this, m);
            }
          }),
            Object.defineProperty(e, t, { enumerable: n.enumerable });
          var c = {
            getValue: function () {
              return r;
            },
            setValue: function (m) {
              mn(m), (r = "" + m);
            },
            stopTracking: function () {
              Ti(e), delete e[t];
            }
          };
          return c;
        }
      }
      function Ho(e) {
        Xl(e) || (e._valueTracker = io(e));
      }
      function Ql(e) {
        if (!e) return !1;
        var t = Xl(e);
        if (!t) return !0;
        var n = t.getValue(),
          r = _d(e);
        return r !== n ? (t.setValue(r), !0) : !1;
      }
      function ka(e) {
        if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
        try {
          return e.activeElement || e.body;
        } catch {
          return e.body;
        }
      }
      var Ni = !1,
        Di = !1,
        _i = !1,
        Wu = !1;
      function Gu(e) {
        var t = e.type === "checkbox" || e.type === "radio";
        return t ? e.checked != null : e.value != null;
      }
      function Jl(e, t) {
        var n = e,
          r = t.checked,
          o = Qe({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: r ?? n._wrapperState.initialChecked
          });
        return o;
      }
      function qu(e, t) {
        Kl("input", t),
          t.checked !== void 0 &&
            t.defaultChecked !== void 0 &&
            !Di &&
            (f(
              "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
              oo() || "A component",
              t.type
            ),
            (Di = !0)),
          t.value !== void 0 &&
            t.defaultValue !== void 0 &&
            !Ni &&
            (f(
              "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
              oo() || "A component",
              t.type
            ),
            (Ni = !0));
        var n = e,
          r = t.defaultValue == null ? "" : t.defaultValue;
        n._wrapperState = {
          initialChecked: t.checked != null ? t.checked : t.defaultChecked,
          initialValue: Yr(t.value != null ? t.value : r),
          controlled: Gu(t)
        };
      }
      function h(e, t) {
        var n = e,
          r = t.checked;
        r != null && Yt(n, "checked", r, !1);
      }
      function D(e, t) {
        var n = e;
        {
          var r = Gu(t);
          !n._wrapperState.controlled &&
            r &&
            !Wu &&
            (f(
              "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"
            ),
            (Wu = !0)),
            n._wrapperState.controlled &&
              !r &&
              !_i &&
              (f(
                "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"
              ),
              (_i = !0));
        }
        h(e, t);
        var o = Yr(t.value),
          l = t.type;
        if (o != null)
          l === "number"
            ? ((o === 0 && n.value === "") || n.value != o) && (n.value = or(o))
            : n.value !== or(o) && (n.value = or(o));
        else if (l === "submit" || l === "reset") {
          n.removeAttribute("value");
          return;
        }
        t.hasOwnProperty("value")
          ? ze(n, t.type, o)
          : t.hasOwnProperty("defaultValue") && ze(n, t.type, Yr(t.defaultValue)),
          t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
      }
      function P(e, t, n) {
        var r = e;
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var o = t.type,
            l = o === "submit" || o === "reset";
          if (l && (t.value === void 0 || t.value === null)) return;
          var c = or(r._wrapperState.initialValue);
          n || (c !== r.value && (r.value = c)), (r.defaultValue = c);
        }
        var m = r.name;
        m !== "" && (r.name = ""),
          (r.defaultChecked = !r.defaultChecked),
          (r.defaultChecked = !!r._wrapperState.initialChecked),
          m !== "" && (r.name = m);
      }
      function $(e, t) {
        var n = e;
        D(n, t), ue(n, t);
      }
      function ue(e, t) {
        var n = t.name;
        if (t.type === "radio" && n != null) {
          for (var r = e; r.parentNode; ) r = r.parentNode;
          zt(n, "name");
          for (
            var o = r.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'),
              l = 0;
            l < o.length;
            l++
          ) {
            var c = o[l];
            if (!(c === e || c.form !== e.form)) {
              var m = Lc(c);
              if (!m)
                throw new Error(
                  "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                );
              Ql(c), D(c, m);
            }
          }
        }
      }
      function ze(e, t, n) {
        (t !== "number" || ka(e.ownerDocument) !== e) &&
          (n == null
            ? (e.defaultValue = or(e._wrapperState.initialValue))
            : e.defaultValue !== or(n) && (e.defaultValue = or(n)));
      }
      var Se = !1,
        Ge = !1,
        st = !1;
      function _t(e, t) {
        t.value == null &&
          (typeof t.children == "object" && t.children !== null
            ? a.Children.forEach(t.children, function (n) {
                n != null &&
                  (typeof n == "string" ||
                    typeof n == "number" ||
                    Ge ||
                    ((Ge = !0),
                    f(
                      "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
                    )));
              })
            : t.dangerouslySetInnerHTML != null &&
              (st ||
                ((st = !0),
                f(
                  "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
                )))),
          t.selected != null &&
            !Se &&
            (f(
              "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
            ),
            (Se = !0));
      }
      function qt(e, t) {
        t.value != null && e.setAttribute("value", or(Yr(t.value)));
      }
      var Kt = Array.isArray;
      function at(e) {
        return Kt(e);
      }
      var an;
      an = !1;
      function gn() {
        var e = oo();
        return e
          ? `

Check the render method of \`` +
              e +
              "`."
          : "";
      }
      var Bo = ["value", "defaultValue"];
      function Zl(e) {
        {
          Kl("select", e);
          for (var t = 0; t < Bo.length; t++) {
            var n = Bo[t];
            if (e[n] != null) {
              var r = at(e[n]);
              e.multiple && !r
                ? f(
                    "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
                    n,
                    gn()
                  )
                : !e.multiple &&
                  r &&
                  f(
                    "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
                    n,
                    gn()
                  );
            }
          }
        }
      }
      function Aa(e, t, n, r) {
        var o = e.options;
        if (t) {
          for (var l = n, c = {}, m = 0; m < l.length; m++) c["$" + l[m]] = !0;
          for (var v = 0; v < o.length; v++) {
            var x = c.hasOwnProperty("$" + o[v].value);
            o[v].selected !== x && (o[v].selected = x), x && r && (o[v].defaultSelected = !0);
          }
        } else {
          for (var S = or(Yr(n)), A = null, k = 0; k < o.length; k++) {
            if (o[k].value === S) {
              (o[k].selected = !0), r && (o[k].defaultSelected = !0);
              return;
            }
            A === null && !o[k].disabled && (A = o[k]);
          }
          A !== null && (A.selected = !0);
        }
      }
      function es(e, t) {
        return Qe({}, t, { value: void 0 });
      }
      function ts(e, t) {
        var n = e;
        Zl(t),
          (n._wrapperState = { wasMultiple: !!t.multiple }),
          t.value !== void 0 &&
            t.defaultValue !== void 0 &&
            !an &&
            (f(
              "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"
            ),
            (an = !0));
      }
      function Od(e, t) {
        var n = e;
        n.multiple = !!t.multiple;
        var r = t.value;
        r != null
          ? Aa(n, !!t.multiple, r, !1)
          : t.defaultValue != null && Aa(n, !!t.multiple, t.defaultValue, !0);
      }
      function Ku(e, t) {
        var n = e,
          r = n._wrapperState.wasMultiple;
        n._wrapperState.wasMultiple = !!t.multiple;
        var o = t.value;
        o != null
          ? Aa(n, !!t.multiple, o, !1)
          : r !== !!t.multiple &&
            (t.defaultValue != null
              ? Aa(n, !!t.multiple, t.defaultValue, !0)
              : Aa(n, !!t.multiple, t.multiple ? [] : "", !1));
      }
      function kd(e, t) {
        var n = e,
          r = t.value;
        r != null && Aa(n, !!t.multiple, r, !1);
      }
      var Og = !1;
      function Ad(e, t) {
        var n = e;
        if (t.dangerouslySetInnerHTML != null)
          throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
        var r = Qe({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: or(n._wrapperState.initialValue)
        });
        return r;
      }
      function kg(e, t) {
        var n = e;
        Kl("textarea", t),
          t.value !== void 0 &&
            t.defaultValue !== void 0 &&
            !Og &&
            (f(
              "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",
              oo() || "A component"
            ),
            (Og = !0));
        var r = t.value;
        if (r == null) {
          var o = t.children,
            l = t.defaultValue;
          if (o != null) {
            f("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
            {
              if (l != null)
                throw new Error(
                  "If you supply `defaultValue` on a <textarea>, do not pass children."
                );
              if (at(o)) {
                if (o.length > 1) throw new Error("<textarea> can only have at most one child.");
                o = o[0];
              }
              l = o;
            }
          }
          l == null && (l = ""), (r = l);
        }
        n._wrapperState = { initialValue: Yr(r) };
      }
      function Ag(e, t) {
        var n = e,
          r = Yr(t.value),
          o = Yr(t.defaultValue);
        if (r != null) {
          var l = or(r);
          l !== n.value && (n.value = l),
            t.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l);
        }
        o != null && (n.defaultValue = or(o));
      }
      function Mg(e, t) {
        var n = e,
          r = n.textContent;
        r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
      }
      function gw(e, t) {
        Ag(e, t);
      }
      var Ma = "http://www.w3.org/1999/xhtml",
        yw = "http://www.w3.org/1998/Math/MathML",
        Md = "http://www.w3.org/2000/svg";
      function Ld(e) {
        switch (e) {
          case "svg":
            return Md;
          case "math":
            return yw;
          default:
            return Ma;
        }
      }
      function jd(e, t) {
        return e == null || e === Ma ? Ld(t) : e === Md && t === "foreignObject" ? Ma : e;
      }
      var bw = function (e) {
          return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                MSApp.execUnsafeLocalFunction(function () {
                  return e(t, n, r, o);
                });
              }
            : e;
        },
        Xu,
        Lg = bw(function (e, t) {
          if (e.namespaceURI === Md && !("innerHTML" in e)) {
            (Xu = Xu || document.createElement("div")),
              (Xu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>");
            for (var n = Xu.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
            for (; n.firstChild; ) e.appendChild(n.firstChild);
            return;
          }
          e.innerHTML = t;
        }),
        vr = 1,
        La = 3,
        yn = 8,
        ja = 9,
        Vd = 11,
        Qu = function (e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === La) {
              n.nodeValue = t;
              return;
            }
          }
          e.textContent = t;
        },
        xw = {
          animation: [
            "animationDelay",
            "animationDirection",
            "animationDuration",
            "animationFillMode",
            "animationIterationCount",
            "animationName",
            "animationPlayState",
            "animationTimingFunction"
          ],
          background: [
            "backgroundAttachment",
            "backgroundClip",
            "backgroundColor",
            "backgroundImage",
            "backgroundOrigin",
            "backgroundPositionX",
            "backgroundPositionY",
            "backgroundRepeat",
            "backgroundSize"
          ],
          backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
          border: [
            "borderBottomColor",
            "borderBottomStyle",
            "borderBottomWidth",
            "borderImageOutset",
            "borderImageRepeat",
            "borderImageSlice",
            "borderImageSource",
            "borderImageWidth",
            "borderLeftColor",
            "borderLeftStyle",
            "borderLeftWidth",
            "borderRightColor",
            "borderRightStyle",
            "borderRightWidth",
            "borderTopColor",
            "borderTopStyle",
            "borderTopWidth"
          ],
          borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
          borderBlockStart: [
            "borderBlockStartColor",
            "borderBlockStartStyle",
            "borderBlockStartWidth"
          ],
          borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
          borderColor: [
            "borderBottomColor",
            "borderLeftColor",
            "borderRightColor",
            "borderTopColor"
          ],
          borderImage: [
            "borderImageOutset",
            "borderImageRepeat",
            "borderImageSlice",
            "borderImageSource",
            "borderImageWidth"
          ],
          borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
          borderInlineStart: [
            "borderInlineStartColor",
            "borderInlineStartStyle",
            "borderInlineStartWidth"
          ],
          borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
          borderRadius: [
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
            "borderTopLeftRadius",
            "borderTopRightRadius"
          ],
          borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
          borderStyle: [
            "borderBottomStyle",
            "borderLeftStyle",
            "borderRightStyle",
            "borderTopStyle"
          ],
          borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
          borderWidth: [
            "borderBottomWidth",
            "borderLeftWidth",
            "borderRightWidth",
            "borderTopWidth"
          ],
          columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
          columns: ["columnCount", "columnWidth"],
          flex: ["flexBasis", "flexGrow", "flexShrink"],
          flexFlow: ["flexDirection", "flexWrap"],
          font: [
            "fontFamily",
            "fontFeatureSettings",
            "fontKerning",
            "fontLanguageOverride",
            "fontSize",
            "fontSizeAdjust",
            "fontStretch",
            "fontStyle",
            "fontVariant",
            "fontVariantAlternates",
            "fontVariantCaps",
            "fontVariantEastAsian",
            "fontVariantLigatures",
            "fontVariantNumeric",
            "fontVariantPosition",
            "fontWeight",
            "lineHeight"
          ],
          fontVariant: [
            "fontVariantAlternates",
            "fontVariantCaps",
            "fontVariantEastAsian",
            "fontVariantLigatures",
            "fontVariantNumeric",
            "fontVariantPosition"
          ],
          gap: ["columnGap", "rowGap"],
          grid: [
            "gridAutoColumns",
            "gridAutoFlow",
            "gridAutoRows",
            "gridTemplateAreas",
            "gridTemplateColumns",
            "gridTemplateRows"
          ],
          gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
          gridColumn: ["gridColumnEnd", "gridColumnStart"],
          gridColumnGap: ["columnGap"],
          gridGap: ["columnGap", "rowGap"],
          gridRow: ["gridRowEnd", "gridRowStart"],
          gridRowGap: ["rowGap"],
          gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
          listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
          margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
          marker: ["markerEnd", "markerMid", "markerStart"],
          mask: [
            "maskClip",
            "maskComposite",
            "maskImage",
            "maskMode",
            "maskOrigin",
            "maskPositionX",
            "maskPositionY",
            "maskRepeat",
            "maskSize"
          ],
          maskPosition: ["maskPositionX", "maskPositionY"],
          outline: ["outlineColor", "outlineStyle", "outlineWidth"],
          overflow: ["overflowX", "overflowY"],
          padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
          placeContent: ["alignContent", "justifyContent"],
          placeItems: ["alignItems", "justifyItems"],
          placeSelf: ["alignSelf", "justifySelf"],
          textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
          textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
          transition: [
            "transitionDelay",
            "transitionDuration",
            "transitionProperty",
            "transitionTimingFunction"
          ],
          wordWrap: ["overflowWrap"]
        },
        ns = {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        };
      function Ew(e, t) {
        return e + t.charAt(0).toUpperCase() + t.substring(1);
      }
      var Sw = ["Webkit", "ms", "Moz", "O"];
      Object.keys(ns).forEach(function (e) {
        Sw.forEach(function (t) {
          ns[Ew(t, e)] = ns[e];
        });
      });
      function Ud(e, t, n) {
        var r = t == null || typeof t == "boolean" || t === "";
        return r
          ? ""
          : !n && typeof t == "number" && t !== 0 && !(ns.hasOwnProperty(e) && ns[e])
            ? t + "px"
            : (It(t, e), ("" + t).trim());
      }
      var Cw = /([A-Z])/g,
        ww = /^ms-/;
      function Rw(e) {
        return e.replace(Cw, "-$1").toLowerCase().replace(ww, "-ms-");
      }
      var jg = function () {};
      {
        var Tw = /^(?:webkit|moz|o)[A-Z]/,
          Nw = /^-ms-/,
          Dw = /-(.)/g,
          Vg = /;\s*$/,
          Oi = {},
          Fd = {},
          Ug = !1,
          Fg = !1,
          _w = function (e) {
            return e.replace(Dw, function (t, n) {
              return n.toUpperCase();
            });
          },
          Ow = function (e) {
            (Oi.hasOwnProperty(e) && Oi[e]) ||
              ((Oi[e] = !0),
              f("Unsupported style property %s. Did you mean %s?", e, _w(e.replace(Nw, "ms-"))));
          },
          kw = function (e) {
            (Oi.hasOwnProperty(e) && Oi[e]) ||
              ((Oi[e] = !0),
              f(
                "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                e,
                e.charAt(0).toUpperCase() + e.slice(1)
              ));
          },
          Aw = function (e, t) {
            (Fd.hasOwnProperty(t) && Fd[t]) ||
              ((Fd[t] = !0),
              f(
                `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                e,
                t.replace(Vg, "")
              ));
          },
          Mw = function (e, t) {
            Ug || ((Ug = !0), f("`NaN` is an invalid value for the `%s` css style property.", e));
          },
          Lw = function (e, t) {
            Fg ||
              ((Fg = !0), f("`Infinity` is an invalid value for the `%s` css style property.", e));
          };
        jg = function (e, t) {
          e.indexOf("-") > -1 ? Ow(e) : Tw.test(e) ? kw(e) : Vg.test(t) && Aw(e, t),
            typeof t == "number" && (isNaN(t) ? Mw(e, t) : isFinite(t) || Lw(e, t));
        };
      }
      var jw = jg;
      function Vw(e) {
        {
          var t = "",
            n = "";
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var o = e[r];
              if (o != null) {
                var l = r.indexOf("--") === 0;
                (t += n + (l ? r : Rw(r)) + ":"), (t += Ud(r, o, l)), (n = ";");
              }
            }
          return t || null;
        }
      }
      function zg(e, t) {
        var n = e.style;
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var o = r.indexOf("--") === 0;
            o || jw(r, t[r]);
            var l = Ud(r, t[r], o);
            r === "float" && (r = "cssFloat"), o ? n.setProperty(r, l) : (n[r] = l);
          }
      }
      function Uw(e) {
        return e == null || typeof e == "boolean" || e === "";
      }
      function Pg(e) {
        var t = {};
        for (var n in e) for (var r = xw[n] || [n], o = 0; o < r.length; o++) t[r[o]] = n;
        return t;
      }
      function Fw(e, t) {
        {
          if (!t) return;
          var n = Pg(e),
            r = Pg(t),
            o = {};
          for (var l in n) {
            var c = n[l],
              m = r[l];
            if (m && c !== m) {
              var v = c + "," + m;
              if (o[v]) continue;
              (o[v] = !0),
                f(
                  "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                  Uw(e[c]) ? "Removing" : "Updating",
                  c,
                  m
                );
            }
          }
        }
      }
      var zw = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0
        },
        Pw = Qe({ menuitem: !0 }, zw),
        Hw = "__html";
      function zd(e, t) {
        if (t) {
          if (Pw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw new Error(
              e +
                " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
            );
          if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if (typeof t.dangerouslySetInnerHTML != "object" || !(Hw in t.dangerouslySetInnerHTML))
              throw new Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
              );
          }
          if (
            (!t.suppressContentEditableWarning &&
              t.contentEditable &&
              t.children != null &&
              f(
                "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
              ),
            t.style != null && typeof t.style != "object")
          )
            throw new Error(
              "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
            );
        }
      }
      function Io(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var Ju = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          imagesizes: "imageSizes",
          imagesrcset: "imageSrcSet",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan"
        },
        Hg = {
          "aria-current": 0,
          "aria-description": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0
        },
        ki = {},
        Bw = new RegExp("^(aria)-[" + se + "]*$"),
        Iw = new RegExp("^(aria)[A-Z][" + se + "]*$");
      function $w(e, t) {
        {
          if (wt.call(ki, t) && ki[t]) return !0;
          if (Iw.test(t)) {
            var n = "aria-" + t.slice(4).toLowerCase(),
              r = Hg.hasOwnProperty(n) ? n : null;
            if (r == null)
              return (
                f(
                  "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                  t
                ),
                (ki[t] = !0),
                !0
              );
            if (t !== r)
              return f("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, r), (ki[t] = !0), !0;
          }
          if (Bw.test(t)) {
            var o = t.toLowerCase(),
              l = Hg.hasOwnProperty(o) ? o : null;
            if (l == null) return (ki[t] = !0), !1;
            if (t !== l)
              return f("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, l), (ki[t] = !0), !0;
          }
        }
        return !0;
      }
      function Yw(e, t) {
        {
          var n = [];
          for (var r in t) {
            var o = $w(e, r);
            o || n.push(r);
          }
          var l = n
            .map(function (c) {
              return "`" + c + "`";
            })
            .join(", ");
          n.length === 1
            ? f(
                "Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                l,
                e
              )
            : n.length > 1 &&
              f(
                "Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                l,
                e
              );
        }
      }
      function Ww(e, t) {
        Io(e, t) || Yw(e, t);
      }
      var Bg = !1;
      function Gw(e, t) {
        {
          if (e !== "input" && e !== "textarea" && e !== "select") return;
          t != null &&
            t.value === null &&
            !Bg &&
            ((Bg = !0),
            e === "select" && t.multiple
              ? f(
                  "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
                  e
                )
              : f(
                  "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
                  e
                ));
        }
      }
      var Ig = function () {};
      {
        var ir = {},
          $g = /^on./,
          qw = /^on[^A-Z]/,
          Kw = new RegExp("^(aria)-[" + se + "]*$"),
          Xw = new RegExp("^(aria)[A-Z][" + se + "]*$");
        Ig = function (e, t, n, r) {
          if (wt.call(ir, t) && ir[t]) return !0;
          var o = t.toLowerCase();
          if (o === "onfocusin" || o === "onfocusout")
            return (
              f(
                "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
              ),
              (ir[t] = !0),
              !0
            );
          if (r != null) {
            var l = r.registrationNameDependencies,
              c = r.possibleRegistrationNames;
            if (l.hasOwnProperty(t)) return !0;
            var m = c.hasOwnProperty(o) ? c[o] : null;
            if (m != null)
              return (
                f("Invalid event handler property `%s`. Did you mean `%s`?", t, m), (ir[t] = !0), !0
              );
            if ($g.test(t))
              return (
                f("Unknown event handler property `%s`. It will be ignored.", t), (ir[t] = !0), !0
              );
          } else if ($g.test(t))
            return (
              qw.test(t) &&
                f(
                  "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
                  t
                ),
              (ir[t] = !0),
              !0
            );
          if (Kw.test(t) || Xw.test(t)) return !0;
          if (o === "innerhtml")
            return (
              f(
                "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
              ),
              (ir[t] = !0),
              !0
            );
          if (o === "aria")
            return (
              f(
                "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
              ),
              (ir[t] = !0),
              !0
            );
          if (o === "is" && n !== null && n !== void 0 && typeof n != "string")
            return (
              f(
                "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
                typeof n
              ),
              (ir[t] = !0),
              !0
            );
          if (typeof n == "number" && isNaN(n))
            return (
              f(
                "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
                t
              ),
              (ir[t] = !0),
              !0
            );
          var v = Dt(t),
            x = v !== null && v.type === pt;
          if (Ju.hasOwnProperty(o)) {
            var S = Ju[o];
            if (S !== t)
              return f("Invalid DOM property `%s`. Did you mean `%s`?", t, S), (ir[t] = !0), !0;
          } else if (!x && t !== o)
            return (
              f(
                "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
                t,
                o
              ),
              (ir[t] = !0),
              !0
            );
          return typeof n == "boolean" && Vt(t, n, v, !1)
            ? (n
                ? f(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                    n,
                    t,
                    t,
                    n,
                    t
                  )
                : f(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                    n,
                    t,
                    t,
                    n,
                    t,
                    t,
                    t
                  ),
              (ir[t] = !0),
              !0)
            : x
              ? !0
              : Vt(t, n, v, !1)
                ? ((ir[t] = !0), !1)
                : ((n === "false" || n === "true") &&
                    v !== null &&
                    v.type === en &&
                    (f(
                      "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
                      n,
                      t,
                      n === "false"
                        ? "The browser will interpret it as a truthy value."
                        : 'Although this works, it will not work as expected if you pass the string "false".',
                      t,
                      n
                    ),
                    (ir[t] = !0)),
                  !0);
        };
      }
      var Qw = function (e, t, n) {
        {
          var r = [];
          for (var o in t) {
            var l = Ig(e, o, t[o], n);
            l || r.push(o);
          }
          var c = r
            .map(function (m) {
              return "`" + m + "`";
            })
            .join(", ");
          r.length === 1
            ? f(
                "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                c,
                e
              )
            : r.length > 1 &&
              f(
                "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                c,
                e
              );
        }
      };
      function Jw(e, t, n) {
        Io(e, t) || Qw(e, t, n);
      }
      var Yg = 1,
        Pd = 2,
        rs = 4,
        Zw = Yg | Pd | rs,
        as = null;
      function eR(e) {
        as !== null &&
          f(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ),
          (as = e);
      }
      function tR() {
        as === null &&
          f(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ),
          (as = null);
      }
      function nR(e) {
        return e === as;
      }
      function Hd(e) {
        var t = e.target || e.srcElement || window;
        return (
          t.correspondingUseElement && (t = t.correspondingUseElement),
          t.nodeType === La ? t.parentNode : t
        );
      }
      var Bd = null,
        Ai = null,
        Mi = null;
      function Wg(e) {
        var t = ho(e);
        if (t) {
          if (typeof Bd != "function")
            throw new Error(
              "setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue."
            );
          var n = t.stateNode;
          if (n) {
            var r = Lc(n);
            Bd(t.stateNode, t.type, r);
          }
        }
      }
      function rR(e) {
        Bd = e;
      }
      function Gg(e) {
        Ai ? (Mi ? Mi.push(e) : (Mi = [e])) : (Ai = e);
      }
      function aR() {
        return Ai !== null || Mi !== null;
      }
      function qg() {
        if (Ai) {
          var e = Ai,
            t = Mi;
          if (((Ai = null), (Mi = null), Wg(e), t)) for (var n = 0; n < t.length; n++) Wg(t[n]);
        }
      }
      var Kg = function (e, t) {
          return e(t);
        },
        Xg = function () {},
        Id = !1;
      function oR() {
        var e = aR();
        e && (Xg(), qg());
      }
      function Qg(e, t, n) {
        if (Id) return e(t, n);
        Id = !0;
        try {
          return Kg(e, t, n);
        } finally {
          (Id = !1), oR();
        }
      }
      function iR(e, t, n) {
        (Kg = e), (Xg = n);
      }
      function lR(e) {
        return e === "button" || e === "input" || e === "select" || e === "textarea";
      }
      function sR(e, t, n) {
        switch (e) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            return !!(n.disabled && lR(t));
          default:
            return !1;
        }
      }
      function os(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Lc(n);
        if (r === null) return null;
        var o = r[t];
        if (sR(t, e.type, r)) return null;
        if (o && typeof o != "function")
          throw new Error(
            "Expected `" +
              t +
              "` listener to be a function, instead got a value of `" +
              typeof o +
              "` type."
          );
        return o;
      }
      var $d = !1;
      if (Nt)
        try {
          var is = {};
          Object.defineProperty(is, "passive", {
            get: function () {
              $d = !0;
            }
          }),
            window.addEventListener("test", is, is),
            window.removeEventListener("test", is, is);
        } catch {
          $d = !1;
        }
      function Jg(e, t, n, r, o, l, c, m, v) {
        var x = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, x);
        } catch (S) {
          this.onError(S);
        }
      }
      var Zg = Jg;
      if (
        typeof window < "u" &&
        typeof window.dispatchEvent == "function" &&
        typeof document < "u" &&
        typeof document.createEvent == "function"
      ) {
        var Yd = document.createElement("react");
        Zg = function (t, n, r, o, l, c, m, v, x) {
          if (typeof document > "u" || document === null)
            throw new Error(
              "The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous."
            );
          var S = document.createEvent("Event"),
            A = !1,
            k = !0,
            z = window.event,
            H = Object.getOwnPropertyDescriptor(window, "event");
          function Y() {
            Yd.removeEventListener(W, Ae, !1),
              typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
          }
          var me = Array.prototype.slice.call(arguments, 3);
          function Ae() {
            (A = !0), Y(), n.apply(r, me), (k = !1);
          }
          var De,
            ft = !1,
            ot = !1;
          function V(U) {
            if (
              ((De = U.error),
              (ft = !0),
              De === null && U.colno === 0 && U.lineno === 0 && (ot = !0),
              U.defaultPrevented && De != null && typeof De == "object")
            )
              try {
                De._suppressLogging = !0;
              } catch {}
          }
          var W = "react-" + (t || "invokeguardedcallback");
          if (
            (window.addEventListener("error", V),
            Yd.addEventListener(W, Ae, !1),
            S.initEvent(W, !1, !1),
            Yd.dispatchEvent(S),
            H && Object.defineProperty(window, "event", H),
            A &&
              k &&
              (ft
                ? ot &&
                  (De = new Error(
                    "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information."
                  ))
                : (De = new Error(
                    `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
                  )),
              this.onError(De)),
            window.removeEventListener("error", V),
            !A)
          )
            return Y(), Jg.apply(this, arguments);
        };
      }
      var uR = Zg,
        Li = !1,
        Zu = null,
        ec = !1,
        Wd = null,
        cR = {
          onError: function (e) {
            (Li = !0), (Zu = e);
          }
        };
      function Gd(e, t, n, r, o, l, c, m, v) {
        (Li = !1), (Zu = null), uR.apply(cR, arguments);
      }
      function fR(e, t, n, r, o, l, c, m, v) {
        if ((Gd.apply(this, arguments), Li)) {
          var x = qd();
          ec || ((ec = !0), (Wd = x));
        }
      }
      function dR() {
        if (ec) {
          var e = Wd;
          throw ((ec = !1), (Wd = null), e);
        }
      }
      function pR() {
        return Li;
      }
      function qd() {
        if (Li) {
          var e = Zu;
          return (Li = !1), (Zu = null), e;
        } else
          throw new Error(
            "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      function ji(e) {
        return e._reactInternals;
      }
      function mR(e) {
        return e._reactInternals !== void 0;
      }
      function vR(e, t) {
        e._reactInternals = t;
      }
      var Pe = 0,
        Vi = 1,
        bn = 2,
        bt = 4,
        $o = 16,
        ls = 32,
        ey = 64,
        xt = 128,
        Va = 256,
        Yo = 512,
        Ui = 1024,
        lo = 2048,
        Ua = 4096,
        Wo = 8192,
        Kd = 16384,
        hR = 32767,
        tc = 32768,
        lr = 65536,
        Xd = 131072,
        ty = 1048576,
        Qd = 2097152,
        Go = 4194304,
        Jd = 8388608,
        so = 16777216,
        Zd = 33554432,
        ep = bt | Ui | 0,
        tp = bn | bt | $o | ls | Yo | Ua | Wo,
        ss = bt | ey | Yo | Wo,
        Fi = lo | $o,
        Fa = Go | Jd | Qd,
        gR = s.ReactCurrentOwner;
      function qo(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          var r = t;
          do (t = r), (t.flags & (bn | Ua)) !== Pe && (n = t.return), (r = t.return);
          while (r);
        }
        return t.tag === g ? n : null;
      }
      function ny(e) {
        if (e.tag === q) {
          var t = e.memoizedState;
          if (t === null) {
            var n = e.alternate;
            n !== null && (t = n.memoizedState);
          }
          if (t !== null) return t.dehydrated;
        }
        return null;
      }
      function ry(e) {
        return e.tag === g ? e.stateNode.containerInfo : null;
      }
      function yR(e) {
        return qo(e) === e;
      }
      function bR(e) {
        {
          var t = gR.current;
          if (t !== null && t.tag === y) {
            var n = t,
              r = n.stateNode;
            r._warnedAboutRefsInRender ||
              f(
                "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
                Ke(n) || "A component"
              ),
              (r._warnedAboutRefsInRender = !0);
          }
        }
        var o = ji(e);
        return o ? qo(o) === o : !1;
      }
      function ay(e) {
        if (qo(e) !== e) throw new Error("Unable to find node on an unmounted component.");
      }
      function oy(e) {
        var t = e.alternate;
        if (!t) {
          var n = qo(e);
          if (n === null) throw new Error("Unable to find node on an unmounted component.");
          return n !== e ? null : e;
        }
        for (var r = e, o = t; ; ) {
          var l = r.return;
          if (l === null) break;
          var c = l.alternate;
          if (c === null) {
            var m = l.return;
            if (m !== null) {
              r = o = m;
              continue;
            }
            break;
          }
          if (l.child === c.child) {
            for (var v = l.child; v; ) {
              if (v === r) return ay(l), e;
              if (v === o) return ay(l), t;
              v = v.sibling;
            }
            throw new Error("Unable to find node on an unmounted component.");
          }
          if (r.return !== o.return) (r = l), (o = c);
          else {
            for (var x = !1, S = l.child; S; ) {
              if (S === r) {
                (x = !0), (r = l), (o = c);
                break;
              }
              if (S === o) {
                (x = !0), (o = l), (r = c);
                break;
              }
              S = S.sibling;
            }
            if (!x) {
              for (S = c.child; S; ) {
                if (S === r) {
                  (x = !0), (r = c), (o = l);
                  break;
                }
                if (S === o) {
                  (x = !0), (o = c), (r = l);
                  break;
                }
                S = S.sibling;
              }
              if (!x)
                throw new Error(
                  "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
                );
            }
          }
          if (r.alternate !== o)
            throw new Error(
              "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
            );
        }
        if (r.tag !== g) throw new Error("Unable to find node on an unmounted component.");
        return r.stateNode.current === r ? e : t;
      }
      function iy(e) {
        var t = oy(e);
        return t !== null ? ly(t) : null;
      }
      function ly(e) {
        if (e.tag === T || e.tag === O) return e;
        for (var t = e.child; t !== null; ) {
          var n = ly(t);
          if (n !== null) return n;
          t = t.sibling;
        }
        return null;
      }
      function xR(e) {
        var t = oy(e);
        return t !== null ? sy(t) : null;
      }
      function sy(e) {
        if (e.tag === T || e.tag === O) return e;
        for (var t = e.child; t !== null; ) {
          if (t.tag !== _) {
            var n = sy(t);
            if (n !== null) return n;
          }
          t = t.sibling;
        }
        return null;
      }
      var uy = i.unstable_scheduleCallback,
        ER = i.unstable_cancelCallback,
        SR = i.unstable_shouldYield,
        CR = i.unstable_requestPaint,
        jn = i.unstable_now,
        wR = i.unstable_getCurrentPriorityLevel,
        nc = i.unstable_ImmediatePriority,
        np = i.unstable_UserBlockingPriority,
        Ko = i.unstable_NormalPriority,
        RR = i.unstable_LowPriority,
        rp = i.unstable_IdlePriority,
        TR = i.unstable_yieldValue,
        NR = i.unstable_setDisableYieldValue,
        zi = null,
        Xn = null,
        ge = null,
        ca = !1,
        Wr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
      function DR(e) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled) return !0;
        if (!t.supportsFiber)
          return (
            f(
              "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"
            ),
            !0
          );
        try {
          xe && (e = Qe({}, e, { getLaneLabelMap: LR, injectProfilingHooks: MR })),
            (zi = t.inject(e)),
            (Xn = t);
        } catch (n) {
          f("React instrumentation encountered an error: %s.", n);
        }
        return !!t.checkDCE;
      }
      function _R(e, t) {
        if (Xn && typeof Xn.onScheduleFiberRoot == "function")
          try {
            Xn.onScheduleFiberRoot(zi, e, t);
          } catch (n) {
            ca || ((ca = !0), f("React instrumentation encountered an error: %s", n));
          }
      }
      function OR(e, t) {
        if (Xn && typeof Xn.onCommitFiberRoot == "function")
          try {
            var n = (e.current.flags & xt) === xt;
            if (Me) {
              var r;
              switch (t) {
                case Dr:
                  r = nc;
                  break;
                case Pa:
                  r = np;
                  break;
                case Ha:
                  r = Ko;
                  break;
                case uc:
                  r = rp;
                  break;
                default:
                  r = Ko;
                  break;
              }
              Xn.onCommitFiberRoot(zi, e, r, n);
            }
          } catch (o) {
            ca || ((ca = !0), f("React instrumentation encountered an error: %s", o));
          }
      }
      function kR(e) {
        if (Xn && typeof Xn.onPostCommitFiberRoot == "function")
          try {
            Xn.onPostCommitFiberRoot(zi, e);
          } catch (t) {
            ca || ((ca = !0), f("React instrumentation encountered an error: %s", t));
          }
      }
      function AR(e) {
        if (Xn && typeof Xn.onCommitFiberUnmount == "function")
          try {
            Xn.onCommitFiberUnmount(zi, e);
          } catch (t) {
            ca || ((ca = !0), f("React instrumentation encountered an error: %s", t));
          }
      }
      function Vn(e) {
        if ((typeof TR == "function" && (NR(e), d(e)), Xn && typeof Xn.setStrictMode == "function"))
          try {
            Xn.setStrictMode(zi, e);
          } catch (t) {
            ca || ((ca = !0), f("React instrumentation encountered an error: %s", t));
          }
      }
      function MR(e) {
        ge = e;
      }
      function LR() {
        {
          for (var e = new Map(), t = 1, n = 0; n < op; n++) {
            var r = eT(t);
            e.set(t, r), (t *= 2);
          }
          return e;
        }
      }
      function jR(e) {
        ge !== null && typeof ge.markCommitStarted == "function" && ge.markCommitStarted(e);
      }
      function cy() {
        ge !== null && typeof ge.markCommitStopped == "function" && ge.markCommitStopped();
      }
      function us(e) {
        ge !== null &&
          typeof ge.markComponentRenderStarted == "function" &&
          ge.markComponentRenderStarted(e);
      }
      function Pi() {
        ge !== null &&
          typeof ge.markComponentRenderStopped == "function" &&
          ge.markComponentRenderStopped();
      }
      function VR(e) {
        ge !== null &&
          typeof ge.markComponentPassiveEffectMountStarted == "function" &&
          ge.markComponentPassiveEffectMountStarted(e);
      }
      function UR() {
        ge !== null &&
          typeof ge.markComponentPassiveEffectMountStopped == "function" &&
          ge.markComponentPassiveEffectMountStopped();
      }
      function FR(e) {
        ge !== null &&
          typeof ge.markComponentPassiveEffectUnmountStarted == "function" &&
          ge.markComponentPassiveEffectUnmountStarted(e);
      }
      function zR() {
        ge !== null &&
          typeof ge.markComponentPassiveEffectUnmountStopped == "function" &&
          ge.markComponentPassiveEffectUnmountStopped();
      }
      function PR(e) {
        ge !== null &&
          typeof ge.markComponentLayoutEffectMountStarted == "function" &&
          ge.markComponentLayoutEffectMountStarted(e);
      }
      function HR() {
        ge !== null &&
          typeof ge.markComponentLayoutEffectMountStopped == "function" &&
          ge.markComponentLayoutEffectMountStopped();
      }
      function fy(e) {
        ge !== null &&
          typeof ge.markComponentLayoutEffectUnmountStarted == "function" &&
          ge.markComponentLayoutEffectUnmountStarted(e);
      }
      function dy() {
        ge !== null &&
          typeof ge.markComponentLayoutEffectUnmountStopped == "function" &&
          ge.markComponentLayoutEffectUnmountStopped();
      }
      function BR(e, t, n) {
        ge !== null &&
          typeof ge.markComponentErrored == "function" &&
          ge.markComponentErrored(e, t, n);
      }
      function IR(e, t, n) {
        ge !== null &&
          typeof ge.markComponentSuspended == "function" &&
          ge.markComponentSuspended(e, t, n);
      }
      function $R(e) {
        ge !== null &&
          typeof ge.markLayoutEffectsStarted == "function" &&
          ge.markLayoutEffectsStarted(e);
      }
      function YR() {
        ge !== null &&
          typeof ge.markLayoutEffectsStopped == "function" &&
          ge.markLayoutEffectsStopped();
      }
      function WR(e) {
        ge !== null &&
          typeof ge.markPassiveEffectsStarted == "function" &&
          ge.markPassiveEffectsStarted(e);
      }
      function GR() {
        ge !== null &&
          typeof ge.markPassiveEffectsStopped == "function" &&
          ge.markPassiveEffectsStopped();
      }
      function py(e) {
        ge !== null && typeof ge.markRenderStarted == "function" && ge.markRenderStarted(e);
      }
      function qR() {
        ge !== null && typeof ge.markRenderYielded == "function" && ge.markRenderYielded();
      }
      function my() {
        ge !== null && typeof ge.markRenderStopped == "function" && ge.markRenderStopped();
      }
      function KR(e) {
        ge !== null && typeof ge.markRenderScheduled == "function" && ge.markRenderScheduled(e);
      }
      function XR(e, t) {
        ge !== null &&
          typeof ge.markForceUpdateScheduled == "function" &&
          ge.markForceUpdateScheduled(e, t);
      }
      function ap(e, t) {
        ge !== null &&
          typeof ge.markStateUpdateScheduled == "function" &&
          ge.markStateUpdateScheduled(e, t);
      }
      var Ve = 0,
        ut = 1,
        Ot = 2,
        un = 8,
        fa = 16,
        vy = Math.clz32 ? Math.clz32 : ZR,
        QR = Math.log,
        JR = Math.LN2;
      function ZR(e) {
        var t = e >>> 0;
        return t === 0 ? 32 : (31 - ((QR(t) / JR) | 0)) | 0;
      }
      var op = 31,
        ee = 0,
        Un = 0,
        Ye = 1,
        Hi = 2,
        za = 4,
        Xo = 8,
        da = 16,
        cs = 32,
        Bi = 4194240,
        fs = 64,
        ip = 128,
        lp = 256,
        sp = 512,
        up = 1024,
        cp = 2048,
        fp = 4096,
        dp = 8192,
        pp = 16384,
        mp = 32768,
        vp = 65536,
        hp = 131072,
        gp = 262144,
        yp = 524288,
        bp = 1048576,
        xp = 2097152,
        rc = 130023424,
        Ii = 4194304,
        Ep = 8388608,
        Sp = 16777216,
        Cp = 33554432,
        wp = 67108864,
        hy = Ii,
        ds = 134217728,
        gy = 268435455,
        ps = 268435456,
        Qo = 536870912,
        Tr = 1073741824;
      function eT(e) {
        {
          if (e & Ye) return "Sync";
          if (e & Hi) return "InputContinuousHydration";
          if (e & za) return "InputContinuous";
          if (e & Xo) return "DefaultHydration";
          if (e & da) return "Default";
          if (e & cs) return "TransitionHydration";
          if (e & Bi) return "Transition";
          if (e & rc) return "Retry";
          if (e & ds) return "SelectiveHydration";
          if (e & ps) return "IdleHydration";
          if (e & Qo) return "Idle";
          if (e & Tr) return "Offscreen";
        }
      }
      var Xt = -1,
        ac = fs,
        oc = Ii;
      function ms(e) {
        switch (Jo(e)) {
          case Ye:
            return Ye;
          case Hi:
            return Hi;
          case za:
            return za;
          case Xo:
            return Xo;
          case da:
            return da;
          case cs:
            return cs;
          case fs:
          case ip:
          case lp:
          case sp:
          case up:
          case cp:
          case fp:
          case dp:
          case pp:
          case mp:
          case vp:
          case hp:
          case gp:
          case yp:
          case bp:
          case xp:
            return e & Bi;
          case Ii:
          case Ep:
          case Sp:
          case Cp:
          case wp:
            return e & rc;
          case ds:
            return ds;
          case ps:
            return ps;
          case Qo:
            return Qo;
          case Tr:
            return Tr;
          default:
            return f("Should have found matching lanes. This is a bug in React."), e;
        }
      }
      function ic(e, t) {
        var n = e.pendingLanes;
        if (n === ee) return ee;
        var r = ee,
          o = e.suspendedLanes,
          l = e.pingedLanes,
          c = n & gy;
        if (c !== ee) {
          var m = c & ~o;
          if (m !== ee) r = ms(m);
          else {
            var v = c & l;
            v !== ee && (r = ms(v));
          }
        } else {
          var x = n & ~o;
          x !== ee ? (r = ms(x)) : l !== ee && (r = ms(l));
        }
        if (r === ee) return ee;
        if (t !== ee && t !== r && (t & o) === ee) {
          var S = Jo(r),
            A = Jo(t);
          if (S >= A || (S === da && (A & Bi) !== ee)) return t;
        }
        (r & za) !== ee && (r |= n & da);
        var k = e.entangledLanes;
        if (k !== ee)
          for (var z = e.entanglements, H = r & k; H > 0; ) {
            var Y = Zo(H),
              me = 1 << Y;
            (r |= z[Y]), (H &= ~me);
          }
        return r;
      }
      function tT(e, t) {
        for (var n = e.eventTimes, r = Xt; t > 0; ) {
          var o = Zo(t),
            l = 1 << o,
            c = n[o];
          c > r && (r = c), (t &= ~l);
        }
        return r;
      }
      function nT(e, t) {
        switch (e) {
          case Ye:
          case Hi:
          case za:
            return t + 250;
          case Xo:
          case da:
          case cs:
          case fs:
          case ip:
          case lp:
          case sp:
          case up:
          case cp:
          case fp:
          case dp:
          case pp:
          case mp:
          case vp:
          case hp:
          case gp:
          case yp:
          case bp:
          case xp:
            return t + 5e3;
          case Ii:
          case Ep:
          case Sp:
          case Cp:
          case wp:
            return Xt;
          case ds:
          case ps:
          case Qo:
          case Tr:
            return Xt;
          default:
            return f("Should have found matching lanes. This is a bug in React."), Xt;
        }
      }
      function rT(e, t) {
        for (
          var n = e.pendingLanes,
            r = e.suspendedLanes,
            o = e.pingedLanes,
            l = e.expirationTimes,
            c = n;
          c > 0;

        ) {
          var m = Zo(c),
            v = 1 << m,
            x = l[m];
          x === Xt
            ? ((v & r) === ee || (v & o) !== ee) && (l[m] = nT(v, t))
            : x <= t && (e.expiredLanes |= v),
            (c &= ~v);
        }
      }
      function aT(e) {
        return ms(e.pendingLanes);
      }
      function Rp(e) {
        var t = e.pendingLanes & ~Tr;
        return t !== ee ? t : t & Tr ? Tr : ee;
      }
      function oT(e) {
        return (e & Ye) !== ee;
      }
      function Tp(e) {
        return (e & gy) !== ee;
      }
      function yy(e) {
        return (e & rc) === e;
      }
      function iT(e) {
        var t = Ye | za | da;
        return (e & t) === ee;
      }
      function lT(e) {
        return (e & Bi) === e;
      }
      function lc(e, t) {
        var n = Hi | za | Xo | da;
        return (t & n) !== ee;
      }
      function sT(e, t) {
        return (t & e.expiredLanes) !== ee;
      }
      function by(e) {
        return (e & Bi) !== ee;
      }
      function xy() {
        var e = ac;
        return (ac <<= 1), (ac & Bi) === ee && (ac = fs), e;
      }
      function uT() {
        var e = oc;
        return (oc <<= 1), (oc & rc) === ee && (oc = Ii), e;
      }
      function Jo(e) {
        return e & -e;
      }
      function vs(e) {
        return Jo(e);
      }
      function Zo(e) {
        return 31 - vy(e);
      }
      function Np(e) {
        return Zo(e);
      }
      function Nr(e, t) {
        return (e & t) !== ee;
      }
      function $i(e, t) {
        return (e & t) === t;
      }
      function et(e, t) {
        return e | t;
      }
      function sc(e, t) {
        return e & ~t;
      }
      function Ey(e, t) {
        return e & t;
      }
      function zF(e) {
        return e;
      }
      function cT(e, t) {
        return e !== Un && e < t ? e : t;
      }
      function Dp(e) {
        for (var t = [], n = 0; n < op; n++) t.push(e);
        return t;
      }
      function hs(e, t, n) {
        (e.pendingLanes |= t), t !== Qo && ((e.suspendedLanes = ee), (e.pingedLanes = ee));
        var r = e.eventTimes,
          o = Np(t);
        r[o] = n;
      }
      function fT(e, t) {
        (e.suspendedLanes |= t), (e.pingedLanes &= ~t);
        for (var n = e.expirationTimes, r = t; r > 0; ) {
          var o = Zo(r),
            l = 1 << o;
          (n[o] = Xt), (r &= ~l);
        }
      }
      function Sy(e, t, n) {
        e.pingedLanes |= e.suspendedLanes & t;
      }
      function dT(e, t) {
        var n = e.pendingLanes & ~t;
        (e.pendingLanes = t),
          (e.suspendedLanes = ee),
          (e.pingedLanes = ee),
          (e.expiredLanes &= t),
          (e.mutableReadLanes &= t),
          (e.entangledLanes &= t);
        for (var r = e.entanglements, o = e.eventTimes, l = e.expirationTimes, c = n; c > 0; ) {
          var m = Zo(c),
            v = 1 << m;
          (r[m] = ee), (o[m] = Xt), (l[m] = Xt), (c &= ~v);
        }
      }
      function _p(e, t) {
        for (var n = (e.entangledLanes |= t), r = e.entanglements, o = n; o; ) {
          var l = Zo(o),
            c = 1 << l;
          (c & t) | (r[l] & t) && (r[l] |= t), (o &= ~c);
        }
      }
      function pT(e, t) {
        var n = Jo(t),
          r;
        switch (n) {
          case za:
            r = Hi;
            break;
          case da:
            r = Xo;
            break;
          case fs:
          case ip:
          case lp:
          case sp:
          case up:
          case cp:
          case fp:
          case dp:
          case pp:
          case mp:
          case vp:
          case hp:
          case gp:
          case yp:
          case bp:
          case xp:
          case Ii:
          case Ep:
          case Sp:
          case Cp:
          case wp:
            r = cs;
            break;
          case Qo:
            r = ps;
            break;
          default:
            r = Un;
            break;
        }
        return (r & (e.suspendedLanes | t)) !== Un ? Un : r;
      }
      function Cy(e, t, n) {
        if (Wr)
          for (var r = e.pendingUpdatersLaneMap; n > 0; ) {
            var o = Np(n),
              l = 1 << o,
              c = r[o];
            c.add(t), (n &= ~l);
          }
      }
      function wy(e, t) {
        if (Wr)
          for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; t > 0; ) {
            var o = Np(t),
              l = 1 << o,
              c = n[o];
            c.size > 0 &&
              (c.forEach(function (m) {
                var v = m.alternate;
                (v === null || !r.has(v)) && r.add(m);
              }),
              c.clear()),
              (t &= ~l);
          }
      }
      function Ry(e, t) {
        return null;
      }
      var Dr = Ye,
        Pa = za,
        Ha = da,
        uc = Qo,
        gs = Un;
      function Gr() {
        return gs;
      }
      function Fn(e) {
        gs = e;
      }
      function mT(e, t) {
        var n = gs;
        try {
          return (gs = e), t();
        } finally {
          gs = n;
        }
      }
      function vT(e, t) {
        return e !== 0 && e < t ? e : t;
      }
      function hT(e, t) {
        return e > t ? e : t;
      }
      function Op(e, t) {
        return e !== 0 && e < t;
      }
      function Ty(e) {
        var t = Jo(e);
        return Op(Dr, t) ? (Op(Pa, t) ? (Tp(t) ? Ha : uc) : Pa) : Dr;
      }
      function cc(e) {
        var t = e.current.memoizedState;
        return t.isDehydrated;
      }
      var Ny;
      function gT(e) {
        Ny = e;
      }
      function yT(e) {
        Ny(e);
      }
      var kp;
      function bT(e) {
        kp = e;
      }
      var Dy;
      function xT(e) {
        Dy = e;
      }
      var _y;
      function ET(e) {
        _y = e;
      }
      var Oy;
      function ST(e) {
        Oy = e;
      }
      var Ap = !1,
        fc = [],
        uo = null,
        co = null,
        fo = null,
        ys = new Map(),
        bs = new Map(),
        po = [],
        CT = [
          "mousedown",
          "mouseup",
          "touchcancel",
          "touchend",
          "touchstart",
          "auxclick",
          "dblclick",
          "pointercancel",
          "pointerdown",
          "pointerup",
          "dragend",
          "dragstart",
          "drop",
          "compositionend",
          "compositionstart",
          "keydown",
          "keypress",
          "keyup",
          "input",
          "textInput",
          "copy",
          "cut",
          "paste",
          "click",
          "change",
          "contextmenu",
          "reset",
          "submit"
        ];
      function wT(e) {
        return CT.indexOf(e) > -1;
      }
      function RT(e, t, n, r, o) {
        return {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: n,
          nativeEvent: o,
          targetContainers: [r]
        };
      }
      function ky(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            uo = null;
            break;
          case "dragenter":
          case "dragleave":
            co = null;
            break;
          case "mouseover":
          case "mouseout":
            fo = null;
            break;
          case "pointerover":
          case "pointerout": {
            var n = t.pointerId;
            ys.delete(n);
            break;
          }
          case "gotpointercapture":
          case "lostpointercapture": {
            var r = t.pointerId;
            bs.delete(r);
            break;
          }
        }
      }
      function xs(e, t, n, r, o, l) {
        if (e === null || e.nativeEvent !== l) {
          var c = RT(t, n, r, o, l);
          if (t !== null) {
            var m = ho(t);
            m !== null && kp(m);
          }
          return c;
        }
        e.eventSystemFlags |= r;
        var v = e.targetContainers;
        return o !== null && v.indexOf(o) === -1 && v.push(o), e;
      }
      function TT(e, t, n, r, o) {
        switch (t) {
          case "focusin": {
            var l = o;
            return (uo = xs(uo, e, t, n, r, l)), !0;
          }
          case "dragenter": {
            var c = o;
            return (co = xs(co, e, t, n, r, c)), !0;
          }
          case "mouseover": {
            var m = o;
            return (fo = xs(fo, e, t, n, r, m)), !0;
          }
          case "pointerover": {
            var v = o,
              x = v.pointerId;
            return ys.set(x, xs(ys.get(x) || null, e, t, n, r, v)), !0;
          }
          case "gotpointercapture": {
            var S = o,
              A = S.pointerId;
            return bs.set(A, xs(bs.get(A) || null, e, t, n, r, S)), !0;
          }
        }
        return !1;
      }
      function Ay(e) {
        var t = ni(e.target);
        if (t !== null) {
          var n = qo(t);
          if (n !== null) {
            var r = n.tag;
            if (r === q) {
              var o = ny(n);
              if (o !== null) {
                (e.blockedOn = o),
                  Oy(e.priority, function () {
                    Dy(n);
                  });
                return;
              }
            } else if (r === g) {
              var l = n.stateNode;
              if (cc(l)) {
                e.blockedOn = ry(n);
                return;
              }
            }
          }
        }
        e.blockedOn = null;
      }
      function NT(e) {
        for (
          var t = _y(), n = { blockedOn: null, target: e, priority: t }, r = 0;
          r < po.length && Op(t, po[r].priority);
          r++
        );
        po.splice(r, 0, n), r === 0 && Ay(n);
      }
      function dc(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; t.length > 0; ) {
          var n = t[0],
            r = jp(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
          if (r === null) {
            var o = e.nativeEvent,
              l = new o.constructor(o.type, o);
            eR(l), o.target.dispatchEvent(l), tR();
          } else {
            var c = ho(r);
            return c !== null && kp(c), (e.blockedOn = r), !1;
          }
          t.shift();
        }
        return !0;
      }
      function My(e, t, n) {
        dc(e) && n.delete(t);
      }
      function DT() {
        (Ap = !1),
          uo !== null && dc(uo) && (uo = null),
          co !== null && dc(co) && (co = null),
          fo !== null && dc(fo) && (fo = null),
          ys.forEach(My),
          bs.forEach(My);
      }
      function Es(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          Ap || ((Ap = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, DT)));
      }
      function Ss(e) {
        if (fc.length > 0) {
          Es(fc[0], e);
          for (var t = 1; t < fc.length; t++) {
            var n = fc[t];
            n.blockedOn === e && (n.blockedOn = null);
          }
        }
        uo !== null && Es(uo, e), co !== null && Es(co, e), fo !== null && Es(fo, e);
        var r = function (m) {
          return Es(m, e);
        };
        ys.forEach(r), bs.forEach(r);
        for (var o = 0; o < po.length; o++) {
          var l = po[o];
          l.blockedOn === e && (l.blockedOn = null);
        }
        for (; po.length > 0; ) {
          var c = po[0];
          if (c.blockedOn !== null) break;
          Ay(c), c.blockedOn === null && po.shift();
        }
      }
      var Yi = s.ReactCurrentBatchConfig,
        Mp = !0;
      function Ly(e) {
        Mp = !!e;
      }
      function _T() {
        return Mp;
      }
      function OT(e, t, n) {
        var r = jy(t),
          o;
        switch (r) {
          case Dr:
            o = kT;
            break;
          case Pa:
            o = AT;
            break;
          case Ha:
          default:
            o = Lp;
            break;
        }
        return o.bind(null, t, n, e);
      }
      function kT(e, t, n, r) {
        var o = Gr(),
          l = Yi.transition;
        Yi.transition = null;
        try {
          Fn(Dr), Lp(e, t, n, r);
        } finally {
          Fn(o), (Yi.transition = l);
        }
      }
      function AT(e, t, n, r) {
        var o = Gr(),
          l = Yi.transition;
        Yi.transition = null;
        try {
          Fn(Pa), Lp(e, t, n, r);
        } finally {
          Fn(o), (Yi.transition = l);
        }
      }
      function Lp(e, t, n, r) {
        Mp && MT(e, t, n, r);
      }
      function MT(e, t, n, r) {
        var o = jp(e, t, n, r);
        if (o === null) {
          Kp(e, t, r, pc, n), ky(e, r);
          return;
        }
        if (TT(o, e, t, n, r)) {
          r.stopPropagation();
          return;
        }
        if ((ky(e, r), t & rs && wT(e))) {
          for (; o !== null; ) {
            var l = ho(o);
            l !== null && yT(l);
            var c = jp(e, t, n, r);
            if ((c === null && Kp(e, t, r, pc, n), c === o)) break;
            o = c;
          }
          o !== null && r.stopPropagation();
          return;
        }
        Kp(e, t, r, null, n);
      }
      var pc = null;
      function jp(e, t, n, r) {
        pc = null;
        var o = Hd(r),
          l = ni(o);
        if (l !== null) {
          var c = qo(l);
          if (c === null) l = null;
          else {
            var m = c.tag;
            if (m === q) {
              var v = ny(c);
              if (v !== null) return v;
              l = null;
            } else if (m === g) {
              var x = c.stateNode;
              if (cc(x)) return ry(c);
              l = null;
            } else c !== l && (l = null);
          }
        }
        return (pc = l), null;
      }
      function jy(e) {
        switch (e) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return Dr;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return Pa;
          case "message": {
            var t = wR();
            switch (t) {
              case nc:
                return Dr;
              case np:
                return Pa;
              case Ko:
              case RR:
                return Ha;
              case rp:
                return uc;
              default:
                return Ha;
            }
          }
          default:
            return Ha;
        }
      }
      function LT(e, t, n) {
        return e.addEventListener(t, n, !1), n;
      }
      function jT(e, t, n) {
        return e.addEventListener(t, n, !0), n;
      }
      function VT(e, t, n, r) {
        return e.addEventListener(t, n, { capture: !0, passive: r }), n;
      }
      function UT(e, t, n, r) {
        return e.addEventListener(t, n, { passive: r }), n;
      }
      var Cs = null,
        Vp = null,
        ws = null;
      function FT(e) {
        return (Cs = e), (Vp = Uy()), !0;
      }
      function zT() {
        (Cs = null), (Vp = null), (ws = null);
      }
      function Vy() {
        if (ws) return ws;
        var e,
          t = Vp,
          n = t.length,
          r,
          o = Uy(),
          l = o.length;
        for (e = 0; e < n && t[e] === o[e]; e++);
        var c = n - e;
        for (r = 1; r <= c && t[n - r] === o[l - r]; r++);
        var m = r > 1 ? 1 - r : void 0;
        return (ws = o.slice(e, m)), ws;
      }
      function Uy() {
        return "value" in Cs ? Cs.value : Cs.textContent;
      }
      function mc(e) {
        var t,
          n = e.keyCode;
        return (
          "charCode" in e ? ((t = e.charCode), t === 0 && n === 13 && (t = 13)) : (t = n),
          t === 10 && (t = 13),
          t >= 32 || t === 13 ? t : 0
        );
      }
      function vc() {
        return !0;
      }
      function Fy() {
        return !1;
      }
      function _r(e) {
        function t(n, r, o, l, c) {
          (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = l),
            (this.target = c),
            (this.currentTarget = null);
          for (var m in e)
            if (e.hasOwnProperty(m)) {
              var v = e[m];
              v ? (this[m] = v(l)) : (this[m] = l[m]);
            }
          var x = l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1;
          return (
            x ? (this.isDefaultPrevented = vc) : (this.isDefaultPrevented = Fy),
            (this.isPropagationStopped = Fy),
            this
          );
        }
        return (
          Qe(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var n = this.nativeEvent;
              n &&
                (n.preventDefault
                  ? n.preventDefault()
                  : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                (this.isDefaultPrevented = vc));
            },
            stopPropagation: function () {
              var n = this.nativeEvent;
              n &&
                (n.stopPropagation
                  ? n.stopPropagation()
                  : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                (this.isPropagationStopped = vc));
            },
            persist: function () {},
            isPersistent: vc
          }),
          t
        );
      }
      var Wi = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0
        },
        Up = _r(Wi),
        Rs = Qe({}, Wi, { view: 0, detail: 0 }),
        PT = _r(Rs),
        Fp,
        zp,
        Ts;
      function HT(e) {
        e !== Ts &&
          (Ts && e.type === "mousemove"
            ? ((Fp = e.screenX - Ts.screenX), (zp = e.screenY - Ts.screenY))
            : ((Fp = 0), (zp = 0)),
          (Ts = e));
      }
      var hc = Qe({}, Rs, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: Hp,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return e.relatedTarget === void 0
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e ? e.movementX : (HT(e), Fp);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : zp;
          }
        }),
        zy = _r(hc),
        BT = Qe({}, hc, { dataTransfer: 0 }),
        IT = _r(BT),
        $T = Qe({}, Rs, { relatedTarget: 0 }),
        Pp = _r($T),
        YT = Qe({}, Wi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        WT = _r(YT),
        GT = Qe({}, Wi, {
          clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
          }
        }),
        qT = _r(GT),
        KT = Qe({}, Wi, { data: 0 }),
        Py = _r(KT),
        XT = Py,
        QT = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified"
        },
        JT = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta"
        };
      function ZT(e) {
        if (e.key) {
          var t = QT[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        if (e.type === "keypress") {
          var n = mc(e);
          return n === 13 ? "Enter" : String.fromCharCode(n);
        }
        return e.type === "keydown" || e.type === "keyup" ? JT[e.keyCode] || "Unidentified" : "";
      }
      var eN = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function tN(e) {
        var t = this,
          n = t.nativeEvent;
        if (n.getModifierState) return n.getModifierState(e);
        var r = eN[e];
        return r ? !!n[r] : !1;
      }
      function Hp(e) {
        return tN;
      }
      var nN = Qe({}, Rs, {
          key: ZT,
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Hp,
          charCode: function (e) {
            return e.type === "keypress" ? mc(e) : 0;
          },
          keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === "keypress"
              ? mc(e)
              : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
          }
        }),
        rN = _r(nN),
        aN = Qe({}, hc, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0
        }),
        Hy = _r(aN),
        oN = Qe({}, Rs, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Hp
        }),
        iN = _r(oN),
        lN = Qe({}, Wi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        sN = _r(lN),
        uN = Qe({}, hc, {
          deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0
        }),
        cN = _r(uN),
        fN = [9, 13, 27, 32],
        By = 229,
        Bp = Nt && "CompositionEvent" in window,
        Ns = null;
      Nt && "documentMode" in document && (Ns = document.documentMode);
      var dN = Nt && "TextEvent" in window && !Ns,
        Iy = Nt && (!Bp || (Ns && Ns > 8 && Ns <= 11)),
        $y = 32,
        Yy = String.fromCharCode($y);
      function pN() {
        dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
          dt("onCompositionEnd", [
            "compositionend",
            "focusout",
            "keydown",
            "keypress",
            "keyup",
            "mousedown"
          ]),
          dt("onCompositionStart", [
            "compositionstart",
            "focusout",
            "keydown",
            "keypress",
            "keyup",
            "mousedown"
          ]),
          dt("onCompositionUpdate", [
            "compositionupdate",
            "focusout",
            "keydown",
            "keypress",
            "keyup",
            "mousedown"
          ]);
      }
      var Wy = !1;
      function mN(e) {
        return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
      }
      function vN(e) {
        switch (e) {
          case "compositionstart":
            return "onCompositionStart";
          case "compositionend":
            return "onCompositionEnd";
          case "compositionupdate":
            return "onCompositionUpdate";
        }
      }
      function hN(e, t) {
        return e === "keydown" && t.keyCode === By;
      }
      function Gy(e, t) {
        switch (e) {
          case "keyup":
            return fN.indexOf(t.keyCode) !== -1;
          case "keydown":
            return t.keyCode !== By;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function qy(e) {
        var t = e.detail;
        return typeof t == "object" && "data" in t ? t.data : null;
      }
      function Ky(e) {
        return e.locale === "ko";
      }
      var Gi = !1;
      function gN(e, t, n, r, o) {
        var l, c;
        if (
          (Bp
            ? (l = vN(t))
            : Gi
              ? Gy(t, r) && (l = "onCompositionEnd")
              : hN(t, r) && (l = "onCompositionStart"),
          !l)
        )
          return null;
        Iy &&
          !Ky(r) &&
          (!Gi && l === "onCompositionStart"
            ? (Gi = FT(o))
            : l === "onCompositionEnd" && Gi && (c = Vy()));
        var m = Ec(n, l);
        if (m.length > 0) {
          var v = new Py(l, t, null, r, o);
          if ((e.push({ event: v, listeners: m }), c)) v.data = c;
          else {
            var x = qy(r);
            x !== null && (v.data = x);
          }
        }
      }
      function yN(e, t) {
        switch (e) {
          case "compositionend":
            return qy(t);
          case "keypress":
            var n = t.which;
            return n !== $y ? null : ((Wy = !0), Yy);
          case "textInput":
            var r = t.data;
            return r === Yy && Wy ? null : r;
          default:
            return null;
        }
      }
      function bN(e, t) {
        if (Gi) {
          if (e === "compositionend" || (!Bp && Gy(e, t))) {
            var n = Vy();
            return zT(), (Gi = !1), n;
          }
          return null;
        }
        switch (e) {
          case "paste":
            return null;
          case "keypress":
            if (!mN(t)) {
              if (t.char && t.char.length > 1) return t.char;
              if (t.which) return String.fromCharCode(t.which);
            }
            return null;
          case "compositionend":
            return Iy && !Ky(t) ? null : t.data;
          default:
            return null;
        }
      }
      function xN(e, t, n, r, o) {
        var l;
        if ((dN ? (l = yN(t, r)) : (l = bN(t, r)), !l)) return null;
        var c = Ec(n, "onBeforeInput");
        if (c.length > 0) {
          var m = new XT("onBeforeInput", "beforeinput", null, r, o);
          e.push({ event: m, listeners: c }), (m.data = l);
        }
      }
      function EN(e, t, n, r, o, l, c) {
        gN(e, t, n, r, o), xN(e, t, n, r, o);
      }
      var SN = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
      };
      function Xy(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!SN[e.type] : t === "textarea";
      }
      /**
       * Checks if an event is supported in the current execution environment.
       *
       * NOTE: This will not work correctly for non-generic events such as `change`,
       * `reset`, `load`, `error`, and `select`.
       *
       * Borrows from Modernizr.
       *
       * @param {string} eventNameSuffix Event name, e.g. "click".
       * @return {boolean} True if the event is supported.
       * @internal
       * @license Modernizr 3.0.0pre (Custom Build) | MIT
       */ function CN(e) {
        if (!Nt) return !1;
        var t = "on" + e,
          n = t in document;
        if (!n) {
          var r = document.createElement("div");
          r.setAttribute(t, "return;"), (n = typeof r[t] == "function");
        }
        return n;
      }
      function wN() {
        dt("onChange", [
          "change",
          "click",
          "focusin",
          "focusout",
          "input",
          "keydown",
          "keyup",
          "selectionchange"
        ]);
      }
      function Qy(e, t, n, r) {
        Gg(r);
        var o = Ec(t, "onChange");
        if (o.length > 0) {
          var l = new Up("onChange", "change", null, n, r);
          e.push({ event: l, listeners: o });
        }
      }
      var Ds = null,
        _s = null;
      function RN(e) {
        var t = e.nodeName && e.nodeName.toLowerCase();
        return t === "select" || (t === "input" && e.type === "file");
      }
      function TN(e) {
        var t = [];
        Qy(t, _s, e, Hd(e)), Qg(NN, t);
      }
      function NN(e) {
        vb(e, 0);
      }
      function gc(e) {
        var t = Zi(e);
        if (Ql(t)) return e;
      }
      function DN(e, t) {
        if (e === "change") return t;
      }
      var Jy = !1;
      Nt && (Jy = CN("input") && (!document.documentMode || document.documentMode > 9));
      function _N(e, t) {
        (Ds = e), (_s = t), Ds.attachEvent("onpropertychange", eb);
      }
      function Zy() {
        Ds && (Ds.detachEvent("onpropertychange", eb), (Ds = null), (_s = null));
      }
      function eb(e) {
        e.propertyName === "value" && gc(_s) && TN(e);
      }
      function ON(e, t, n) {
        e === "focusin" ? (Zy(), _N(t, n)) : e === "focusout" && Zy();
      }
      function kN(e, t) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return gc(_s);
      }
      function AN(e) {
        var t = e.nodeName;
        return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
      }
      function MN(e, t) {
        if (e === "click") return gc(t);
      }
      function LN(e, t) {
        if (e === "input" || e === "change") return gc(t);
      }
      function jN(e) {
        var t = e._wrapperState;
        !t || !t.controlled || e.type !== "number" || ze(e, "number", e.value);
      }
      function VN(e, t, n, r, o, l, c) {
        var m = n ? Zi(n) : window,
          v,
          x;
        if (
          (RN(m) ? (v = DN) : Xy(m) ? (Jy ? (v = LN) : ((v = kN), (x = ON))) : AN(m) && (v = MN), v)
        ) {
          var S = v(t, n);
          if (S) {
            Qy(e, S, r, o);
            return;
          }
        }
        x && x(t, m, n), t === "focusout" && jN(m);
      }
      function UN() {
        mt("onMouseEnter", ["mouseout", "mouseover"]),
          mt("onMouseLeave", ["mouseout", "mouseover"]),
          mt("onPointerEnter", ["pointerout", "pointerover"]),
          mt("onPointerLeave", ["pointerout", "pointerover"]);
      }
      function FN(e, t, n, r, o, l, c) {
        var m = t === "mouseover" || t === "pointerover",
          v = t === "mouseout" || t === "pointerout";
        if (m && !nR(r)) {
          var x = r.relatedTarget || r.fromElement;
          if (x && (ni(x) || $s(x))) return;
        }
        if (!(!v && !m)) {
          var S;
          if (o.window === o) S = o;
          else {
            var A = o.ownerDocument;
            A ? (S = A.defaultView || A.parentWindow) : (S = window);
          }
          var k, z;
          if (v) {
            var H = r.relatedTarget || r.toElement;
            if (((k = n), (z = H ? ni(H) : null), z !== null)) {
              var Y = qo(z);
              (z !== Y || (z.tag !== T && z.tag !== O)) && (z = null);
            }
          } else (k = null), (z = n);
          if (k !== z) {
            var me = zy,
              Ae = "onMouseLeave",
              De = "onMouseEnter",
              ft = "mouse";
            (t === "pointerout" || t === "pointerover") &&
              ((me = Hy), (Ae = "onPointerLeave"), (De = "onPointerEnter"), (ft = "pointer"));
            var ot = k == null ? S : Zi(k),
              V = z == null ? S : Zi(z),
              W = new me(Ae, ft + "leave", k, r, o);
            (W.target = ot), (W.relatedTarget = V);
            var U = null,
              re = ni(o);
            if (re === n) {
              var be = new me(De, ft + "enter", z, r, o);
              (be.target = V), (be.relatedTarget = ot), (U = be);
            }
            sD(e, W, U, k, z);
          }
        }
      }
      function zN(e, t) {
        return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
      }
      var Or = typeof Object.is == "function" ? Object.is : zN;
      function Os(e, t) {
        if (Or(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = 0; o < n.length; o++) {
          var l = n[o];
          if (!wt.call(t, l) || !Or(e[l], t[l])) return !1;
        }
        return !0;
      }
      function tb(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function PN(e) {
        for (; e; ) {
          if (e.nextSibling) return e.nextSibling;
          e = e.parentNode;
        }
      }
      function nb(e, t) {
        for (var n = tb(e), r = 0, o = 0; n; ) {
          if (n.nodeType === La) {
            if (((o = r + n.textContent.length), r <= t && o >= t))
              return { node: n, offset: t - r };
            r = o;
          }
          n = tb(PN(n));
        }
      }
      function HN(e) {
        var t = e.ownerDocument,
          n = (t && t.defaultView) || window,
          r = n.getSelection && n.getSelection();
        if (!r || r.rangeCount === 0) return null;
        var o = r.anchorNode,
          l = r.anchorOffset,
          c = r.focusNode,
          m = r.focusOffset;
        try {
          o.nodeType, c.nodeType;
        } catch {
          return null;
        }
        return BN(e, o, l, c, m);
      }
      function BN(e, t, n, r, o) {
        var l = 0,
          c = -1,
          m = -1,
          v = 0,
          x = 0,
          S = e,
          A = null;
        e: for (;;) {
          for (
            var k = null;
            S === t && (n === 0 || S.nodeType === La) && (c = l + n),
              S === r && (o === 0 || S.nodeType === La) && (m = l + o),
              S.nodeType === La && (l += S.nodeValue.length),
              (k = S.firstChild) !== null;

          )
            (A = S), (S = k);
          for (;;) {
            if (S === e) break e;
            if (
              (A === t && ++v === n && (c = l),
              A === r && ++x === o && (m = l),
              (k = S.nextSibling) !== null)
            )
              break;
            (S = A), (A = S.parentNode);
          }
          S = k;
        }
        return c === -1 || m === -1 ? null : { start: c, end: m };
      }
      function IN(e, t) {
        var n = e.ownerDocument || document,
          r = (n && n.defaultView) || window;
        if (r.getSelection) {
          var o = r.getSelection(),
            l = e.textContent.length,
            c = Math.min(t.start, l),
            m = t.end === void 0 ? c : Math.min(t.end, l);
          if (!o.extend && c > m) {
            var v = m;
            (m = c), (c = v);
          }
          var x = nb(e, c),
            S = nb(e, m);
          if (x && S) {
            if (
              o.rangeCount === 1 &&
              o.anchorNode === x.node &&
              o.anchorOffset === x.offset &&
              o.focusNode === S.node &&
              o.focusOffset === S.offset
            )
              return;
            var A = n.createRange();
            A.setStart(x.node, x.offset),
              o.removeAllRanges(),
              c > m
                ? (o.addRange(A), o.extend(S.node, S.offset))
                : (A.setEnd(S.node, S.offset), o.addRange(A));
          }
        }
      }
      function rb(e) {
        return e && e.nodeType === La;
      }
      function ab(e, t) {
        return !e || !t
          ? !1
          : e === t
            ? !0
            : rb(e)
              ? !1
              : rb(t)
                ? ab(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1;
      }
      function $N(e) {
        return e && e.ownerDocument && ab(e.ownerDocument.documentElement, e);
      }
      function YN(e) {
        try {
          return typeof e.contentWindow.location.href == "string";
        } catch {
          return !1;
        }
      }
      function ob() {
        for (var e = window, t = ka(); t instanceof e.HTMLIFrameElement; ) {
          if (YN(t)) e = t.contentWindow;
          else return t;
          t = ka(e.document);
        }
        return t;
      }
      function Ip(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          ((t === "input" &&
            (e.type === "text" ||
              e.type === "search" ||
              e.type === "tel" ||
              e.type === "url" ||
              e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
        );
      }
      function WN() {
        var e = ob();
        return { focusedElem: e, selectionRange: Ip(e) ? qN(e) : null };
      }
      function GN(e) {
        var t = ob(),
          n = e.focusedElem,
          r = e.selectionRange;
        if (t !== n && $N(n)) {
          r !== null && Ip(n) && KN(n, r);
          for (var o = [], l = n; (l = l.parentNode); )
            l.nodeType === vr && o.push({ element: l, left: l.scrollLeft, top: l.scrollTop });
          typeof n.focus == "function" && n.focus();
          for (var c = 0; c < o.length; c++) {
            var m = o[c];
            (m.element.scrollLeft = m.left), (m.element.scrollTop = m.top);
          }
        }
      }
      function qN(e) {
        var t;
        return (
          "selectionStart" in e
            ? (t = { start: e.selectionStart, end: e.selectionEnd })
            : (t = HN(e)),
          t || { start: 0, end: 0 }
        );
      }
      function KN(e, t) {
        var n = t.start,
          r = t.end;
        r === void 0 && (r = n),
          "selectionStart" in e
            ? ((e.selectionStart = n), (e.selectionEnd = Math.min(r, e.value.length)))
            : IN(e, t);
      }
      var XN = Nt && "documentMode" in document && document.documentMode <= 11;
      function QN() {
        dt("onSelect", [
          "focusout",
          "contextmenu",
          "dragend",
          "focusin",
          "keydown",
          "keyup",
          "mousedown",
          "mouseup",
          "selectionchange"
        ]);
      }
      var qi = null,
        $p = null,
        ks = null,
        Yp = !1;
      function JN(e) {
        if ("selectionStart" in e && Ip(e)) return { start: e.selectionStart, end: e.selectionEnd };
        var t = (e.ownerDocument && e.ownerDocument.defaultView) || window,
          n = t.getSelection();
        return {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset
        };
      }
      function ZN(e) {
        return e.window === e ? e.document : e.nodeType === ja ? e : e.ownerDocument;
      }
      function ib(e, t, n) {
        var r = ZN(n);
        if (!(Yp || qi == null || qi !== ka(r))) {
          var o = JN(qi);
          if (!ks || !Os(ks, o)) {
            ks = o;
            var l = Ec($p, "onSelect");
            if (l.length > 0) {
              var c = new Up("onSelect", "select", null, t, n);
              e.push({ event: c, listeners: l }), (c.target = qi);
            }
          }
        }
      }
      function eD(e, t, n, r, o, l, c) {
        var m = n ? Zi(n) : window;
        switch (t) {
          case "focusin":
            (Xy(m) || m.contentEditable === "true") && ((qi = m), ($p = n), (ks = null));
            break;
          case "focusout":
            (qi = null), ($p = null), (ks = null);
            break;
          case "mousedown":
            Yp = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Yp = !1), ib(e, r, o);
            break;
          case "selectionchange":
            if (XN) break;
          case "keydown":
          case "keyup":
            ib(e, r, o);
        }
      }
      function yc(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var Ki = {
          animationend: yc("Animation", "AnimationEnd"),
          animationiteration: yc("Animation", "AnimationIteration"),
          animationstart: yc("Animation", "AnimationStart"),
          transitionend: yc("Transition", "TransitionEnd")
        },
        Wp = {},
        lb = {};
      Nt &&
        ((lb = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete Ki.animationend.animation,
          delete Ki.animationiteration.animation,
          delete Ki.animationstart.animation),
        "TransitionEvent" in window || delete Ki.transitionend.transition);
      function bc(e) {
        if (Wp[e]) return Wp[e];
        if (!Ki[e]) return e;
        var t = Ki[e];
        for (var n in t) if (t.hasOwnProperty(n) && n in lb) return (Wp[e] = t[n]);
        return e;
      }
      var sb = bc("animationend"),
        ub = bc("animationiteration"),
        cb = bc("animationstart"),
        fb = bc("transitionend"),
        db = new Map(),
        pb = [
          "abort",
          "auxClick",
          "cancel",
          "canPlay",
          "canPlayThrough",
          "click",
          "close",
          "contextMenu",
          "copy",
          "cut",
          "drag",
          "dragEnd",
          "dragEnter",
          "dragExit",
          "dragLeave",
          "dragOver",
          "dragStart",
          "drop",
          "durationChange",
          "emptied",
          "encrypted",
          "ended",
          "error",
          "gotPointerCapture",
          "input",
          "invalid",
          "keyDown",
          "keyPress",
          "keyUp",
          "load",
          "loadedData",
          "loadedMetadata",
          "loadStart",
          "lostPointerCapture",
          "mouseDown",
          "mouseMove",
          "mouseOut",
          "mouseOver",
          "mouseUp",
          "paste",
          "pause",
          "play",
          "playing",
          "pointerCancel",
          "pointerDown",
          "pointerMove",
          "pointerOut",
          "pointerOver",
          "pointerUp",
          "progress",
          "rateChange",
          "reset",
          "resize",
          "seeked",
          "seeking",
          "stalled",
          "submit",
          "suspend",
          "timeUpdate",
          "touchCancel",
          "touchEnd",
          "touchStart",
          "volumeChange",
          "scroll",
          "toggle",
          "touchMove",
          "waiting",
          "wheel"
        ];
      function mo(e, t) {
        db.set(e, t), dt(t, [e]);
      }
      function tD() {
        for (var e = 0; e < pb.length; e++) {
          var t = pb[e],
            n = t.toLowerCase(),
            r = t[0].toUpperCase() + t.slice(1);
          mo(n, "on" + r);
        }
        mo(sb, "onAnimationEnd"),
          mo(ub, "onAnimationIteration"),
          mo(cb, "onAnimationStart"),
          mo("dblclick", "onDoubleClick"),
          mo("focusin", "onFocus"),
          mo("focusout", "onBlur"),
          mo(fb, "onTransitionEnd");
      }
      function nD(e, t, n, r, o, l, c) {
        var m = db.get(t);
        if (m !== void 0) {
          var v = Up,
            x = t;
          switch (t) {
            case "keypress":
              if (mc(r) === 0) return;
            case "keydown":
            case "keyup":
              v = rN;
              break;
            case "focusin":
              (x = "focus"), (v = Pp);
              break;
            case "focusout":
              (x = "blur"), (v = Pp);
              break;
            case "beforeblur":
            case "afterblur":
              v = Pp;
              break;
            case "click":
              if (r.button === 2) return;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              v = zy;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = IT;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = iN;
              break;
            case sb:
            case ub:
            case cb:
              v = WT;
              break;
            case fb:
              v = sN;
              break;
            case "scroll":
              v = PT;
              break;
            case "wheel":
              v = cN;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = qT;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = Hy;
              break;
          }
          var S = (l & rs) !== 0;
          {
            var A = !S && t === "scroll",
              k = iD(n, m, r.type, S, A);
            if (k.length > 0) {
              var z = new v(m, x, null, r, o);
              e.push({ event: z, listeners: k });
            }
          }
        }
      }
      tD(), UN(), wN(), QN(), pN();
      function rD(e, t, n, r, o, l, c) {
        nD(e, t, n, r, o, l);
        var m = (l & Zw) === 0;
        m && (FN(e, t, n, r, o), VN(e, t, n, r, o), eD(e, t, n, r, o), EN(e, t, n, r, o));
      }
      var As = [
          "abort",
          "canplay",
          "canplaythrough",
          "durationchange",
          "emptied",
          "encrypted",
          "ended",
          "error",
          "loadeddata",
          "loadedmetadata",
          "loadstart",
          "pause",
          "play",
          "playing",
          "progress",
          "ratechange",
          "resize",
          "seeked",
          "seeking",
          "stalled",
          "suspend",
          "timeupdate",
          "volumechange",
          "waiting"
        ],
        Gp = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(As));
      function mb(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n), fR(r, t, void 0, e), (e.currentTarget = null);
      }
      function aD(e, t, n) {
        var r;
        if (n)
          for (var o = t.length - 1; o >= 0; o--) {
            var l = t[o],
              c = l.instance,
              m = l.currentTarget,
              v = l.listener;
            if (c !== r && e.isPropagationStopped()) return;
            mb(e, v, m), (r = c);
          }
        else
          for (var x = 0; x < t.length; x++) {
            var S = t[x],
              A = S.instance,
              k = S.currentTarget,
              z = S.listener;
            if (A !== r && e.isPropagationStopped()) return;
            mb(e, z, k), (r = A);
          }
      }
      function vb(e, t) {
        for (var n = (t & rs) !== 0, r = 0; r < e.length; r++) {
          var o = e[r],
            l = o.event,
            c = o.listeners;
          aD(l, c, n);
        }
        dR();
      }
      function oD(e, t, n, r, o) {
        var l = Hd(n),
          c = [];
        rD(c, e, r, n, l, t), vb(c, t);
      }
      function Jt(e, t) {
        Gp.has(e) ||
          f(
            'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
            e
          );
        var n = !1,
          r = j_(t),
          o = uD(e);
        r.has(o) || (hb(t, e, Pd, n), r.add(o));
      }
      function qp(e, t, n) {
        Gp.has(e) &&
          !t &&
          f(
            'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
            e
          );
        var r = 0;
        t && (r |= rs), hb(n, e, r, t);
      }
      var xc = "_reactListening" + Math.random().toString(36).slice(2);
      function Ms(e) {
        if (!e[xc]) {
          (e[xc] = !0),
            St.forEach(function (n) {
              n !== "selectionchange" && (Gp.has(n) || qp(n, !1, e), qp(n, !0, e));
            });
          var t = e.nodeType === ja ? e : e.ownerDocument;
          t !== null && (t[xc] || ((t[xc] = !0), qp("selectionchange", !1, t)));
        }
      }
      function hb(e, t, n, r, o) {
        var l = OT(e, t, n),
          c = void 0;
        $d && (t === "touchstart" || t === "touchmove" || t === "wheel") && (c = !0),
          (e = e),
          r
            ? c !== void 0
              ? VT(e, t, l, c)
              : jT(e, t, l)
            : c !== void 0
              ? UT(e, t, l, c)
              : LT(e, t, l);
      }
      function gb(e, t) {
        return e === t || (e.nodeType === yn && e.parentNode === t);
      }
      function Kp(e, t, n, r, o) {
        var l = r;
        if ((t & Yg) === 0 && (t & Pd) === 0) {
          var c = o;
          if (r !== null) {
            var m = r;
            e: for (;;) {
              if (m === null) return;
              var v = m.tag;
              if (v === g || v === _) {
                var x = m.stateNode.containerInfo;
                if (gb(x, c)) break;
                if (v === _)
                  for (var S = m.return; S !== null; ) {
                    var A = S.tag;
                    if (A === g || A === _) {
                      var k = S.stateNode.containerInfo;
                      if (gb(k, c)) return;
                    }
                    S = S.return;
                  }
                for (; x !== null; ) {
                  var z = ni(x);
                  if (z === null) return;
                  var H = z.tag;
                  if (H === T || H === O) {
                    m = l = z;
                    continue e;
                  }
                  x = x.parentNode;
                }
              }
              m = m.return;
            }
          }
        }
        Qg(function () {
          return oD(e, t, n, l);
        });
      }
      function Ls(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function iD(e, t, n, r, o, l) {
        for (
          var c = t !== null ? t + "Capture" : null, m = r ? c : t, v = [], x = e, S = null;
          x !== null;

        ) {
          var A = x,
            k = A.stateNode,
            z = A.tag;
          if (z === T && k !== null && ((S = k), m !== null)) {
            var H = os(x, m);
            H != null && v.push(Ls(x, H, S));
          }
          if (o) break;
          x = x.return;
        }
        return v;
      }
      function Ec(e, t) {
        for (var n = t + "Capture", r = [], o = e; o !== null; ) {
          var l = o,
            c = l.stateNode,
            m = l.tag;
          if (m === T && c !== null) {
            var v = c,
              x = os(o, n);
            x != null && r.unshift(Ls(o, x, v));
            var S = os(o, t);
            S != null && r.push(Ls(o, S, v));
          }
          o = o.return;
        }
        return r;
      }
      function Xi(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== T);
        return e || null;
      }
      function lD(e, t) {
        for (var n = e, r = t, o = 0, l = n; l; l = Xi(l)) o++;
        for (var c = 0, m = r; m; m = Xi(m)) c++;
        for (; o - c > 0; ) (n = Xi(n)), o--;
        for (; c - o > 0; ) (r = Xi(r)), c--;
        for (var v = o; v--; ) {
          if (n === r || (r !== null && n === r.alternate)) return n;
          (n = Xi(n)), (r = Xi(r));
        }
        return null;
      }
      function yb(e, t, n, r, o) {
        for (var l = t._reactName, c = [], m = n; m !== null && m !== r; ) {
          var v = m,
            x = v.alternate,
            S = v.stateNode,
            A = v.tag;
          if (x !== null && x === r) break;
          if (A === T && S !== null) {
            var k = S;
            if (o) {
              var z = os(m, l);
              z != null && c.unshift(Ls(m, z, k));
            } else if (!o) {
              var H = os(m, l);
              H != null && c.push(Ls(m, H, k));
            }
          }
          m = m.return;
        }
        c.length !== 0 && e.push({ event: t, listeners: c });
      }
      function sD(e, t, n, r, o) {
        var l = r && o ? lD(r, o) : null;
        r !== null && yb(e, t, r, l, !1), o !== null && n !== null && yb(e, n, o, l, !0);
      }
      function uD(e, t) {
        return e + "__bubble";
      }
      var hr = !1,
        js = "dangerouslySetInnerHTML",
        Sc = "suppressContentEditableWarning",
        vo = "suppressHydrationWarning",
        bb = "autoFocus",
        ei = "children",
        ti = "style",
        Cc = "__html",
        Xp,
        wc,
        Vs,
        xb,
        Rc,
        Eb,
        Sb;
      (Xp = { dialog: !0, webview: !0 }),
        (wc = function (e, t) {
          Ww(e, t),
            Gw(e, t),
            Jw(e, t, { registrationNameDependencies: Ue, possibleRegistrationNames: $e });
        }),
        (Eb = Nt && !document.documentMode),
        (Vs = function (e, t, n) {
          if (!hr) {
            var r = Tc(n),
              o = Tc(t);
            o !== r &&
              ((hr = !0),
              f(
                "Prop `%s` did not match. Server: %s Client: %s",
                e,
                JSON.stringify(o),
                JSON.stringify(r)
              ));
          }
        }),
        (xb = function (e) {
          if (!hr) {
            hr = !0;
            var t = [];
            e.forEach(function (n) {
              t.push(n);
            }),
              f("Extra attributes from the server: %s", t);
          }
        }),
        (Rc = function (e, t) {
          t === !1
            ? f(
                "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
                e,
                e,
                e
              )
            : f(
                "Expected `%s` listener to be a function, instead got a value of `%s` type.",
                e,
                typeof t
              );
        }),
        (Sb = function (e, t) {
          var n =
            e.namespaceURI === Ma
              ? e.ownerDocument.createElement(e.tagName)
              : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
          return (n.innerHTML = t), n.innerHTML;
        });
      var cD = /\r\n?/g,
        fD = /\u0000|\uFFFD/g;
      function Tc(e) {
        kn(e);
        var t = typeof e == "string" ? e : "" + e;
        return t
          .replace(
            cD,
            `
`
          )
          .replace(fD, "");
      }
      function Nc(e, t, n, r) {
        var o = Tc(t),
          l = Tc(e);
        if (
          l !== o &&
          (r &&
            (hr || ((hr = !0), f('Text content did not match. Server: "%s" Client: "%s"', l, o))),
          n && ie)
        )
          throw new Error("Text content does not match server-rendered HTML.");
      }
      function Cb(e) {
        return e.nodeType === ja ? e : e.ownerDocument;
      }
      function dD() {}
      function Dc(e) {
        e.onclick = dD;
      }
      function pD(e, t, n, r, o) {
        for (var l in r)
          if (r.hasOwnProperty(l)) {
            var c = r[l];
            if (l === ti) c && Object.freeze(c), zg(t, c);
            else if (l === js) {
              var m = c ? c[Cc] : void 0;
              m != null && Lg(t, m);
            } else if (l === ei)
              if (typeof c == "string") {
                var v = e !== "textarea" || c !== "";
                v && Qu(t, c);
              } else typeof c == "number" && Qu(t, "" + c);
            else
              l === Sc ||
                l === vo ||
                l === bb ||
                (Ue.hasOwnProperty(l)
                  ? c != null &&
                    (typeof c != "function" && Rc(l, c), l === "onScroll" && Jt("scroll", t))
                  : c != null && Yt(t, l, c, o));
          }
      }
      function mD(e, t, n, r) {
        for (var o = 0; o < t.length; o += 2) {
          var l = t[o],
            c = t[o + 1];
          l === ti ? zg(e, c) : l === js ? Lg(e, c) : l === ei ? Qu(e, c) : Yt(e, l, c, r);
        }
      }
      function vD(e, t, n, r) {
        var o,
          l = Cb(n),
          c,
          m = r;
        if ((m === Ma && (m = Ld(e)), m === Ma)) {
          if (
            ((o = Io(e, t)),
            !o &&
              e !== e.toLowerCase() &&
              f(
                "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                e
              ),
            e === "script")
          ) {
            var v = l.createElement("div");
            v.innerHTML = "<script></script>";
            var x = v.firstChild;
            c = v.removeChild(x);
          } else if (typeof t.is == "string") c = l.createElement(e, { is: t.is });
          else if (((c = l.createElement(e)), e === "select")) {
            var S = c;
            t.multiple ? (S.multiple = !0) : t.size && (S.size = t.size);
          }
        } else c = l.createElementNS(m, e);
        return (
          m === Ma &&
            !o &&
            Object.prototype.toString.call(c) === "[object HTMLUnknownElement]" &&
            !wt.call(Xp, e) &&
            ((Xp[e] = !0),
            f(
              "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
              e
            )),
          c
        );
      }
      function hD(e, t) {
        return Cb(t).createTextNode(e);
      }
      function gD(e, t, n, r) {
        var o = Io(t, n);
        wc(t, n);
        var l;
        switch (t) {
          case "dialog":
            Jt("cancel", e), Jt("close", e), (l = n);
            break;
          case "iframe":
          case "object":
          case "embed":
            Jt("load", e), (l = n);
            break;
          case "video":
          case "audio":
            for (var c = 0; c < As.length; c++) Jt(As[c], e);
            l = n;
            break;
          case "source":
            Jt("error", e), (l = n);
            break;
          case "img":
          case "image":
          case "link":
            Jt("error", e), Jt("load", e), (l = n);
            break;
          case "details":
            Jt("toggle", e), (l = n);
            break;
          case "input":
            qu(e, n), (l = Jl(e, n)), Jt("invalid", e);
            break;
          case "option":
            _t(e, n), (l = n);
            break;
          case "select":
            ts(e, n), (l = es(e, n)), Jt("invalid", e);
            break;
          case "textarea":
            kg(e, n), (l = Ad(e, n)), Jt("invalid", e);
            break;
          default:
            l = n;
        }
        switch ((zd(t, l), pD(t, e, r, l, o), t)) {
          case "input":
            Ho(e), P(e, n, !1);
            break;
          case "textarea":
            Ho(e), Mg(e);
            break;
          case "option":
            qt(e, n);
            break;
          case "select":
            Od(e, n);
            break;
          default:
            typeof l.onClick == "function" && Dc(e);
            break;
        }
      }
      function yD(e, t, n, r, o) {
        wc(t, r);
        var l = null,
          c,
          m;
        switch (t) {
          case "input":
            (c = Jl(e, n)), (m = Jl(e, r)), (l = []);
            break;
          case "select":
            (c = es(e, n)), (m = es(e, r)), (l = []);
            break;
          case "textarea":
            (c = Ad(e, n)), (m = Ad(e, r)), (l = []);
            break;
          default:
            (c = n),
              (m = r),
              typeof c.onClick != "function" && typeof m.onClick == "function" && Dc(e);
            break;
        }
        zd(t, m);
        var v,
          x,
          S = null;
        for (v in c)
          if (!(m.hasOwnProperty(v) || !c.hasOwnProperty(v) || c[v] == null))
            if (v === ti) {
              var A = c[v];
              for (x in A) A.hasOwnProperty(x) && (S || (S = {}), (S[x] = ""));
            } else
              v === js ||
                v === ei ||
                v === Sc ||
                v === vo ||
                v === bb ||
                (Ue.hasOwnProperty(v) ? l || (l = []) : (l = l || []).push(v, null));
        for (v in m) {
          var k = m[v],
            z = c?.[v];
          if (!(!m.hasOwnProperty(v) || k === z || (k == null && z == null)))
            if (v === ti)
              if ((k && Object.freeze(k), z)) {
                for (x in z)
                  z.hasOwnProperty(x) &&
                    (!k || !k.hasOwnProperty(x)) &&
                    (S || (S = {}), (S[x] = ""));
                for (x in k) k.hasOwnProperty(x) && z[x] !== k[x] && (S || (S = {}), (S[x] = k[x]));
              } else S || (l || (l = []), l.push(v, S)), (S = k);
            else if (v === js) {
              var H = k ? k[Cc] : void 0,
                Y = z ? z[Cc] : void 0;
              H != null && Y !== H && (l = l || []).push(v, H);
            } else
              v === ei
                ? (typeof k == "string" || typeof k == "number") && (l = l || []).push(v, "" + k)
                : v === Sc ||
                  v === vo ||
                  (Ue.hasOwnProperty(v)
                    ? (k != null &&
                        (typeof k != "function" && Rc(v, k), v === "onScroll" && Jt("scroll", e)),
                      !l && z !== k && (l = []))
                    : (l = l || []).push(v, k));
        }
        return S && (Fw(S, m[ti]), (l = l || []).push(ti, S)), l;
      }
      function bD(e, t, n, r, o) {
        n === "input" && o.type === "radio" && o.name != null && h(e, o);
        var l = Io(n, r),
          c = Io(n, o);
        switch ((mD(e, t, l, c), n)) {
          case "input":
            D(e, o);
            break;
          case "textarea":
            Ag(e, o);
            break;
          case "select":
            Ku(e, o);
            break;
        }
      }
      function xD(e) {
        {
          var t = e.toLowerCase();
          return (Ju.hasOwnProperty(t) && Ju[t]) || null;
        }
      }
      function ED(e, t, n, r, o, l, c) {
        var m, v;
        switch (((m = Io(t, n)), wc(t, n), t)) {
          case "dialog":
            Jt("cancel", e), Jt("close", e);
            break;
          case "iframe":
          case "object":
          case "embed":
            Jt("load", e);
            break;
          case "video":
          case "audio":
            for (var x = 0; x < As.length; x++) Jt(As[x], e);
            break;
          case "source":
            Jt("error", e);
            break;
          case "img":
          case "image":
          case "link":
            Jt("error", e), Jt("load", e);
            break;
          case "details":
            Jt("toggle", e);
            break;
          case "input":
            qu(e, n), Jt("invalid", e);
            break;
          case "option":
            _t(e, n);
            break;
          case "select":
            ts(e, n), Jt("invalid", e);
            break;
          case "textarea":
            kg(e, n), Jt("invalid", e);
            break;
        }
        zd(t, n);
        {
          v = new Set();
          for (var S = e.attributes, A = 0; A < S.length; A++) {
            var k = S[A].name.toLowerCase();
            switch (k) {
              case "value":
                break;
              case "checked":
                break;
              case "selected":
                break;
              default:
                v.add(S[A].name);
            }
          }
        }
        var z = null;
        for (var H in n)
          if (n.hasOwnProperty(H)) {
            var Y = n[H];
            if (H === ei)
              typeof Y == "string"
                ? e.textContent !== Y && (n[vo] !== !0 && Nc(e.textContent, Y, l, c), (z = [ei, Y]))
                : typeof Y == "number" &&
                  e.textContent !== "" + Y &&
                  (n[vo] !== !0 && Nc(e.textContent, Y, l, c), (z = [ei, "" + Y]));
            else if (Ue.hasOwnProperty(H))
              Y != null &&
                (typeof Y != "function" && Rc(H, Y), H === "onScroll" && Jt("scroll", e));
            else if (c && typeof m == "boolean") {
              var me = void 0,
                Ae = Dt(H);
              if (n[vo] !== !0) {
                if (
                  !(H === Sc || H === vo || H === "value" || H === "checked" || H === "selected")
                ) {
                  if (H === js) {
                    var De = e.innerHTML,
                      ft = Y ? Y[Cc] : void 0;
                    if (ft != null) {
                      var ot = Sb(e, ft);
                      ot !== De && Vs(H, De, ot);
                    }
                  } else if (H === ti) {
                    if ((v.delete(H), Eb)) {
                      var V = Vw(Y);
                      (me = e.getAttribute("style")), V !== me && Vs(H, me, V);
                    }
                  } else if (m && !Mt)
                    v.delete(H.toLowerCase()), (me = Ht(e, H, Y)), Y !== me && Vs(H, me, Y);
                  else if (!jt(H, Ae, m) && !vn(H, Y, Ae, m)) {
                    var W = !1;
                    if (Ae !== null) v.delete(Ae.attributeName), (me = mr(e, H, Y, Ae));
                    else {
                      var U = r;
                      if ((U === Ma && (U = Ld(t)), U === Ma)) v.delete(H.toLowerCase());
                      else {
                        var re = xD(H);
                        re !== null && re !== H && ((W = !0), v.delete(re)), v.delete(H);
                      }
                      me = Ht(e, H, Y);
                    }
                    var be = Mt;
                    !be && Y !== me && !W && Vs(H, me, Y);
                  }
                }
              }
            }
          }
        switch ((c && v.size > 0 && n[vo] !== !0 && xb(v), t)) {
          case "input":
            Ho(e), P(e, n, !0);
            break;
          case "textarea":
            Ho(e), Mg(e);
            break;
          case "select":
          case "option":
            break;
          default:
            typeof n.onClick == "function" && Dc(e);
            break;
        }
        return z;
      }
      function SD(e, t, n) {
        var r = e.nodeValue !== t;
        return r;
      }
      function Qp(e, t) {
        {
          if (hr) return;
          (hr = !0),
            f(
              "Did not expect server HTML to contain a <%s> in <%s>.",
              t.nodeName.toLowerCase(),
              e.nodeName.toLowerCase()
            );
        }
      }
      function Jp(e, t) {
        {
          if (hr) return;
          (hr = !0),
            f(
              'Did not expect server HTML to contain the text node "%s" in <%s>.',
              t.nodeValue,
              e.nodeName.toLowerCase()
            );
        }
      }
      function Zp(e, t, n) {
        {
          if (hr) return;
          (hr = !0),
            f(
              "Expected server HTML to contain a matching <%s> in <%s>.",
              t,
              e.nodeName.toLowerCase()
            );
        }
      }
      function em(e, t) {
        {
          if (t === "" || hr) return;
          (hr = !0),
            f(
              'Expected server HTML to contain a matching text node for "%s" in <%s>.',
              t,
              e.nodeName.toLowerCase()
            );
        }
      }
      function CD(e, t, n) {
        switch (t) {
          case "input":
            $(e, n);
            return;
          case "textarea":
            gw(e, n);
            return;
          case "select":
            kd(e, n);
            return;
        }
      }
      var Us = function () {},
        Fs = function () {};
      {
        var wD = [
            "address",
            "applet",
            "area",
            "article",
            "aside",
            "base",
            "basefont",
            "bgsound",
            "blockquote",
            "body",
            "br",
            "button",
            "caption",
            "center",
            "col",
            "colgroup",
            "dd",
            "details",
            "dir",
            "div",
            "dl",
            "dt",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "frame",
            "frameset",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "iframe",
            "img",
            "input",
            "isindex",
            "li",
            "link",
            "listing",
            "main",
            "marquee",
            "menu",
            "menuitem",
            "meta",
            "nav",
            "noembed",
            "noframes",
            "noscript",
            "object",
            "ol",
            "p",
            "param",
            "plaintext",
            "pre",
            "script",
            "section",
            "select",
            "source",
            "style",
            "summary",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "title",
            "tr",
            "track",
            "ul",
            "wbr",
            "xmp"
          ],
          wb = [
            "applet",
            "caption",
            "html",
            "table",
            "td",
            "th",
            "marquee",
            "object",
            "template",
            "foreignObject",
            "desc",
            "title"
          ],
          RD = wb.concat(["button"]),
          TD = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"],
          Rb = {
            current: null,
            formTag: null,
            aTagInScope: null,
            buttonTagInScope: null,
            nobrTagInScope: null,
            pTagInButtonScope: null,
            listItemTagAutoclosing: null,
            dlItemTagAutoclosing: null
          };
        Fs = function (e, t) {
          var n = Qe({}, e || Rb),
            r = { tag: t };
          return (
            wb.indexOf(t) !== -1 &&
              ((n.aTagInScope = null), (n.buttonTagInScope = null), (n.nobrTagInScope = null)),
            RD.indexOf(t) !== -1 && (n.pTagInButtonScope = null),
            wD.indexOf(t) !== -1 &&
              t !== "address" &&
              t !== "div" &&
              t !== "p" &&
              ((n.listItemTagAutoclosing = null), (n.dlItemTagAutoclosing = null)),
            (n.current = r),
            t === "form" && (n.formTag = r),
            t === "a" && (n.aTagInScope = r),
            t === "button" && (n.buttonTagInScope = r),
            t === "nobr" && (n.nobrTagInScope = r),
            t === "p" && (n.pTagInButtonScope = r),
            t === "li" && (n.listItemTagAutoclosing = r),
            (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = r),
            n
          );
        };
        var ND = function (e, t) {
            switch (t) {
              case "select":
                return e === "option" || e === "optgroup" || e === "#text";
              case "optgroup":
                return e === "option" || e === "#text";
              case "option":
                return e === "#text";
              case "tr":
                return (
                  e === "th" || e === "td" || e === "style" || e === "script" || e === "template"
                );
              case "tbody":
              case "thead":
              case "tfoot":
                return e === "tr" || e === "style" || e === "script" || e === "template";
              case "colgroup":
                return e === "col" || e === "template";
              case "table":
                return (
                  e === "caption" ||
                  e === "colgroup" ||
                  e === "tbody" ||
                  e === "tfoot" ||
                  e === "thead" ||
                  e === "style" ||
                  e === "script" ||
                  e === "template"
                );
              case "head":
                return (
                  e === "base" ||
                  e === "basefont" ||
                  e === "bgsound" ||
                  e === "link" ||
                  e === "meta" ||
                  e === "title" ||
                  e === "noscript" ||
                  e === "noframes" ||
                  e === "style" ||
                  e === "script" ||
                  e === "template"
                );
              case "html":
                return e === "head" || e === "body" || e === "frameset";
              case "frameset":
                return e === "frame";
              case "#document":
                return e === "html";
            }
            switch (e) {
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
                return (
                  t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6"
                );
              case "rp":
              case "rt":
                return TD.indexOf(t) === -1;
              case "body":
              case "caption":
              case "col":
              case "colgroup":
              case "frameset":
              case "frame":
              case "head":
              case "html":
              case "tbody":
              case "td":
              case "tfoot":
              case "th":
              case "thead":
              case "tr":
                return t == null;
            }
            return !0;
          },
          DD = function (e, t) {
            switch (e) {
              case "address":
              case "article":
              case "aside":
              case "blockquote":
              case "center":
              case "details":
              case "dialog":
              case "dir":
              case "div":
              case "dl":
              case "fieldset":
              case "figcaption":
              case "figure":
              case "footer":
              case "header":
              case "hgroup":
              case "main":
              case "menu":
              case "nav":
              case "ol":
              case "p":
              case "section":
              case "summary":
              case "ul":
              case "pre":
              case "listing":
              case "table":
              case "hr":
              case "xmp":
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
                return t.pTagInButtonScope;
              case "form":
                return t.formTag || t.pTagInButtonScope;
              case "li":
                return t.listItemTagAutoclosing;
              case "dd":
              case "dt":
                return t.dlItemTagAutoclosing;
              case "button":
                return t.buttonTagInScope;
              case "a":
                return t.aTagInScope;
              case "nobr":
                return t.nobrTagInScope;
            }
            return null;
          },
          Tb = {};
        Us = function (e, t, n) {
          n = n || Rb;
          var r = n.current,
            o = r && r.tag;
          t != null &&
            (e != null &&
              f("validateDOMNesting: when childText is passed, childTag should be null"),
            (e = "#text"));
          var l = ND(e, o) ? null : r,
            c = l ? null : DD(e, n),
            m = l || c;
          if (m) {
            var v = m.tag,
              x = !!l + "|" + e + "|" + v;
            if (!Tb[x]) {
              Tb[x] = !0;
              var S = e,
                A = "";
              if (
                (e === "#text"
                  ? /\S/.test(t)
                    ? (S = "Text nodes")
                    : ((S = "Whitespace text nodes"),
                      (A =
                        " Make sure you don't have any extra whitespace between tags on each line of your source code."))
                  : (S = "<" + e + ">"),
                l)
              ) {
                var k = "";
                v === "table" &&
                  e === "tr" &&
                  (k +=
                    " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),
                  f(
                    "validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",
                    S,
                    v,
                    A,
                    k
                  );
              } else f("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", S, v);
            }
          }
        };
      }
      var _c = "suppressHydrationWarning",
        Oc = "$",
        kc = "/$",
        zs = "$?",
        Ps = "$!",
        _D = "style",
        tm = null,
        nm = null;
      function OD(e) {
        var t,
          n,
          r = e.nodeType;
        switch (r) {
          case ja:
          case Vd: {
            t = r === ja ? "#document" : "#fragment";
            var o = e.documentElement;
            n = o ? o.namespaceURI : jd(null, "");
            break;
          }
          default: {
            var l = r === yn ? e.parentNode : e,
              c = l.namespaceURI || null;
            (t = l.tagName), (n = jd(c, t));
            break;
          }
        }
        {
          var m = t.toLowerCase(),
            v = Fs(null, m);
          return { namespace: n, ancestorInfo: v };
        }
      }
      function kD(e, t, n) {
        {
          var r = e,
            o = jd(r.namespace, t),
            l = Fs(r.ancestorInfo, t);
          return { namespace: o, ancestorInfo: l };
        }
      }
      function PF(e) {
        return e;
      }
      function AD(e) {
        (tm = _T()), (nm = WN());
        var t = null;
        return Ly(!1), t;
      }
      function MD(e) {
        GN(nm), Ly(tm), (tm = null), (nm = null);
      }
      function LD(e, t, n, r, o) {
        var l;
        {
          var c = r;
          if (
            (Us(e, null, c.ancestorInfo),
            typeof t.children == "string" || typeof t.children == "number")
          ) {
            var m = "" + t.children,
              v = Fs(c.ancestorInfo, e);
            Us(null, m, v);
          }
          l = c.namespace;
        }
        var x = vD(e, t, n, l);
        return Is(o, x), cm(x, t), x;
      }
      function jD(e, t) {
        e.appendChild(t);
      }
      function VD(e, t, n, r, o) {
        switch ((gD(e, t, n, r), t)) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!n.autoFocus;
          case "img":
            return !0;
          default:
            return !1;
        }
      }
      function UD(e, t, n, r, o, l) {
        {
          var c = l;
          if (
            typeof r.children != typeof n.children &&
            (typeof r.children == "string" || typeof r.children == "number")
          ) {
            var m = "" + r.children,
              v = Fs(c.ancestorInfo, t);
            Us(null, m, v);
          }
        }
        return yD(e, t, n, r);
      }
      function rm(e, t) {
        return (
          e === "textarea" ||
          e === "noscript" ||
          typeof t.children == "string" ||
          typeof t.children == "number" ||
          (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
        );
      }
      function FD(e, t, n, r) {
        {
          var o = n;
          Us(null, e, o.ancestorInfo);
        }
        var l = hD(e, t);
        return Is(r, l), l;
      }
      function zD() {
        var e = window.event;
        return e === void 0 ? Ha : jy(e.type);
      }
      var am = typeof setTimeout == "function" ? setTimeout : void 0,
        PD = typeof clearTimeout == "function" ? clearTimeout : void 0,
        om = -1,
        Nb = typeof Promise == "function" ? Promise : void 0,
        HD =
          typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Nb < "u"
              ? function (e) {
                  return Nb.resolve(null).then(e).catch(BD);
                }
              : am;
      function BD(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function ID(e, t, n, r) {
        switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            n.autoFocus && e.focus();
            return;
          case "img": {
            n.src && (e.src = n.src);
            return;
          }
        }
      }
      function $D(e, t, n, r, o, l) {
        bD(e, t, n, r, o), cm(e, o);
      }
      function Db(e) {
        Qu(e, "");
      }
      function YD(e, t, n) {
        e.nodeValue = n;
      }
      function WD(e, t) {
        e.appendChild(t);
      }
      function GD(e, t) {
        var n;
        e.nodeType === yn
          ? ((n = e.parentNode), n.insertBefore(t, e))
          : ((n = e), n.appendChild(t));
        var r = e._reactRootContainer;
        r == null && n.onclick === null && Dc(n);
      }
      function qD(e, t, n) {
        e.insertBefore(t, n);
      }
      function KD(e, t, n) {
        e.nodeType === yn ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
      }
      function XD(e, t) {
        e.removeChild(t);
      }
      function QD(e, t) {
        e.nodeType === yn ? e.parentNode.removeChild(t) : e.removeChild(t);
      }
      function im(e, t) {
        var n = t,
          r = 0;
        do {
          var o = n.nextSibling;
          if ((e.removeChild(n), o && o.nodeType === yn)) {
            var l = o.data;
            if (l === kc)
              if (r === 0) {
                e.removeChild(o), Ss(t);
                return;
              } else r--;
            else (l === Oc || l === zs || l === Ps) && r++;
          }
          n = o;
        } while (n);
        Ss(t);
      }
      function JD(e, t) {
        e.nodeType === yn ? im(e.parentNode, t) : e.nodeType === vr && im(e, t), Ss(e);
      }
      function ZD(e) {
        e = e;
        var t = e.style;
        typeof t.setProperty == "function"
          ? t.setProperty("display", "none", "important")
          : (t.display = "none");
      }
      function e_(e) {
        e.nodeValue = "";
      }
      function t_(e, t) {
        e = e;
        var n = t[_D],
          r = n != null && n.hasOwnProperty("display") ? n.display : null;
        e.style.display = Ud("display", r);
      }
      function n_(e, t) {
        e.nodeValue = t;
      }
      function r_(e) {
        e.nodeType === vr
          ? (e.textContent = "")
          : e.nodeType === ja && e.documentElement && e.removeChild(e.documentElement);
      }
      function a_(e, t, n) {
        return e.nodeType !== vr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
      }
      function o_(e, t) {
        return t === "" || e.nodeType !== La ? null : e;
      }
      function i_(e) {
        return e.nodeType !== yn ? null : e;
      }
      function _b(e) {
        return e.data === zs;
      }
      function lm(e) {
        return e.data === Ps;
      }
      function l_(e) {
        var t = e.nextSibling && e.nextSibling.dataset,
          n,
          r,
          o;
        return t && ((n = t.dgst), (r = t.msg), (o = t.stck)), { message: r, digest: n, stack: o };
      }
      function s_(e, t) {
        e._reactRetry = t;
      }
      function Ac(e) {
        for (; e != null; e = e.nextSibling) {
          var t = e.nodeType;
          if (t === vr || t === La) break;
          if (t === yn) {
            var n = e.data;
            if (n === Oc || n === Ps || n === zs) break;
            if (n === kc) return null;
          }
        }
        return e;
      }
      function Hs(e) {
        return Ac(e.nextSibling);
      }
      function u_(e) {
        return Ac(e.firstChild);
      }
      function c_(e) {
        return Ac(e.firstChild);
      }
      function f_(e) {
        return Ac(e.nextSibling);
      }
      function d_(e, t, n, r, o, l, c) {
        Is(l, e), cm(e, n);
        var m;
        {
          var v = o;
          m = v.namespace;
        }
        var x = (l.mode & ut) !== Ve;
        return ED(e, t, n, m, r, x, c);
      }
      function p_(e, t, n, r) {
        return Is(n, e), n.mode & ut, SD(e, t);
      }
      function m_(e, t) {
        Is(t, e);
      }
      function v_(e) {
        for (var t = e.nextSibling, n = 0; t; ) {
          if (t.nodeType === yn) {
            var r = t.data;
            if (r === kc) {
              if (n === 0) return Hs(t);
              n--;
            } else (r === Oc || r === Ps || r === zs) && n++;
          }
          t = t.nextSibling;
        }
        return null;
      }
      function Ob(e) {
        for (var t = e.previousSibling, n = 0; t; ) {
          if (t.nodeType === yn) {
            var r = t.data;
            if (r === Oc || r === Ps || r === zs) {
              if (n === 0) return t;
              n--;
            } else r === kc && n++;
          }
          t = t.previousSibling;
        }
        return null;
      }
      function h_(e) {
        Ss(e);
      }
      function g_(e) {
        Ss(e);
      }
      function y_(e) {
        return e !== "head" && e !== "body";
      }
      function b_(e, t, n, r) {
        var o = !0;
        Nc(t.nodeValue, n, r, o);
      }
      function x_(e, t, n, r, o, l) {
        if (t[_c] !== !0) {
          var c = !0;
          Nc(r.nodeValue, o, l, c);
        }
      }
      function E_(e, t) {
        t.nodeType === vr ? Qp(e, t) : t.nodeType === yn || Jp(e, t);
      }
      function S_(e, t) {
        {
          var n = e.parentNode;
          n !== null && (t.nodeType === vr ? Qp(n, t) : t.nodeType === yn || Jp(n, t));
        }
      }
      function C_(e, t, n, r, o) {
        (o || t[_c] !== !0) && (r.nodeType === vr ? Qp(n, r) : r.nodeType === yn || Jp(n, r));
      }
      function w_(e, t, n) {
        Zp(e, t);
      }
      function R_(e, t) {
        em(e, t);
      }
      function T_(e, t, n) {
        {
          var r = e.parentNode;
          r !== null && Zp(r, t);
        }
      }
      function N_(e, t) {
        {
          var n = e.parentNode;
          n !== null && em(n, t);
        }
      }
      function D_(e, t, n, r, o, l) {
        (l || t[_c] !== !0) && Zp(n, r);
      }
      function __(e, t, n, r, o) {
        (o || t[_c] !== !0) && em(n, r);
      }
      function O_(e) {
        f(
          "An error occurred during hydration. The server HTML was replaced with client content in <%s>.",
          e.nodeName.toLowerCase()
        );
      }
      function k_(e) {
        Ms(e);
      }
      var Qi = Math.random().toString(36).slice(2),
        Ji = "__reactFiber$" + Qi,
        sm = "__reactProps$" + Qi,
        Bs = "__reactContainer$" + Qi,
        um = "__reactEvents$" + Qi,
        A_ = "__reactListeners$" + Qi,
        M_ = "__reactHandles$" + Qi;
      function L_(e) {
        delete e[Ji], delete e[sm], delete e[um], delete e[A_], delete e[M_];
      }
      function Is(e, t) {
        t[Ji] = e;
      }
      function Mc(e, t) {
        t[Bs] = e;
      }
      function kb(e) {
        e[Bs] = null;
      }
      function $s(e) {
        return !!e[Bs];
      }
      function ni(e) {
        var t = e[Ji];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if (((t = n[Bs] || n[Ji]), t)) {
            var r = t.alternate;
            if (t.child !== null || (r !== null && r.child !== null))
              for (var o = Ob(e); o !== null; ) {
                var l = o[Ji];
                if (l) return l;
                o = Ob(o);
              }
            return t;
          }
          (e = n), (n = e.parentNode);
        }
        return null;
      }
      function ho(e) {
        var t = e[Ji] || e[Bs];
        return t && (t.tag === T || t.tag === O || t.tag === q || t.tag === g) ? t : null;
      }
      function Zi(e) {
        if (e.tag === T || e.tag === O) return e.stateNode;
        throw new Error("getNodeFromInstance: Invalid argument.");
      }
      function Lc(e) {
        return e[sm] || null;
      }
      function cm(e, t) {
        e[sm] = t;
      }
      function j_(e) {
        var t = e[um];
        return t === void 0 && (t = e[um] = new Set()), t;
      }
      var Ab = {},
        Mb = s.ReactDebugCurrentFrame;
      function jc(e) {
        if (e) {
          var t = e._owner,
            n = Wl(e.type, e._source, t ? t.type : null);
          Mb.setExtraStackFrame(n);
        } else Mb.setExtraStackFrame(null);
      }
      function qr(e, t, n, r, o) {
        {
          var l = Function.call.bind(wt);
          for (var c in e)
            if (l(e, c)) {
              var m = void 0;
              try {
                if (typeof e[c] != "function") {
                  var v = Error(
                    (r || "React class") +
                      ": " +
                      n +
                      " type `" +
                      c +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof e[c] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  throw ((v.name = "Invariant Violation"), v);
                }
                m = e[c](t, c, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (x) {
                m = x;
              }
              m &&
                !(m instanceof Error) &&
                (jc(o),
                f(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  r || "React class",
                  n,
                  c,
                  typeof m
                ),
                jc(null)),
                m instanceof Error &&
                  !(m.message in Ab) &&
                  ((Ab[m.message] = !0), jc(o), f("Failed %s type: %s", n, m.message), jc(null));
            }
        }
      }
      var fm = [],
        Vc;
      Vc = [];
      var Ba = -1;
      function go(e) {
        return { current: e };
      }
      function Qn(e, t) {
        if (Ba < 0) {
          f("Unexpected pop.");
          return;
        }
        t !== Vc[Ba] && f("Unexpected Fiber popped."),
          (e.current = fm[Ba]),
          (fm[Ba] = null),
          (Vc[Ba] = null),
          Ba--;
      }
      function Jn(e, t, n) {
        Ba++, (fm[Ba] = e.current), (Vc[Ba] = n), (e.current = t);
      }
      var dm;
      dm = {};
      var kr = {};
      Object.freeze(kr);
      var Ia = go(kr),
        pa = go(!1),
        pm = kr;
      function el(e, t, n) {
        return n && ma(t) ? pm : Ia.current;
      }
      function Lb(e, t, n) {
        {
          var r = e.stateNode;
          (r.__reactInternalMemoizedUnmaskedChildContext = t),
            (r.__reactInternalMemoizedMaskedChildContext = n);
        }
      }
      function tl(e, t) {
        {
          var n = e.type,
            r = n.contextTypes;
          if (!r) return kr;
          var o = e.stateNode;
          if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
            return o.__reactInternalMemoizedMaskedChildContext;
          var l = {};
          for (var c in r) l[c] = t[c];
          {
            var m = Ke(e) || "Unknown";
            qr(r, l, "context", m);
          }
          return o && Lb(e, t, l), l;
        }
      }
      function Uc() {
        return pa.current;
      }
      function ma(e) {
        {
          var t = e.childContextTypes;
          return t != null;
        }
      }
      function Fc(e) {
        Qn(pa, e), Qn(Ia, e);
      }
      function mm(e) {
        Qn(pa, e), Qn(Ia, e);
      }
      function jb(e, t, n) {
        {
          if (Ia.current !== kr)
            throw new Error(
              "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue."
            );
          Jn(Ia, t, e), Jn(pa, n, e);
        }
      }
      function Vb(e, t, n) {
        {
          var r = e.stateNode,
            o = t.childContextTypes;
          if (typeof r.getChildContext != "function") {
            {
              var l = Ke(e) || "Unknown";
              dm[l] ||
                ((dm[l] = !0),
                f(
                  "%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",
                  l,
                  l
                ));
            }
            return n;
          }
          var c = r.getChildContext();
          for (var m in c)
            if (!(m in o))
              throw new Error(
                (Ke(e) || "Unknown") +
                  '.getChildContext(): key "' +
                  m +
                  '" is not defined in childContextTypes.'
              );
          {
            var v = Ke(e) || "Unknown";
            qr(o, c, "child context", v);
          }
          return Qe({}, n, c);
        }
      }
      function zc(e) {
        {
          var t = e.stateNode,
            n = (t && t.__reactInternalMemoizedMergedChildContext) || kr;
          return (pm = Ia.current), Jn(Ia, n, e), Jn(pa, pa.current, e), !0;
        }
      }
      function Ub(e, t, n) {
        {
          var r = e.stateNode;
          if (!r)
            throw new Error(
              "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue."
            );
          if (n) {
            var o = Vb(e, t, pm);
            (r.__reactInternalMemoizedMergedChildContext = o),
              Qn(pa, e),
              Qn(Ia, e),
              Jn(Ia, o, e),
              Jn(pa, n, e);
          } else Qn(pa, e), Jn(pa, n, e);
        }
      }
      function V_(e) {
        {
          if (!yR(e) || e.tag !== y)
            throw new Error(
              "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue."
            );
          var t = e;
          do {
            switch (t.tag) {
              case g:
                return t.stateNode.context;
              case y: {
                var n = t.type;
                if (ma(n)) return t.stateNode.__reactInternalMemoizedMergedChildContext;
                break;
              }
            }
            t = t.return;
          } while (t !== null);
          throw new Error(
            "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue."
          );
        }
      }
      var yo = 0,
        Pc = 1,
        $a = null,
        vm = !1,
        hm = !1;
      function Fb(e) {
        $a === null ? ($a = [e]) : $a.push(e);
      }
      function U_(e) {
        (vm = !0), Fb(e);
      }
      function zb() {
        vm && bo();
      }
      function bo() {
        if (!hm && $a !== null) {
          hm = !0;
          var e = 0,
            t = Gr();
          try {
            var n = !0,
              r = $a;
            for (Fn(Dr); e < r.length; e++) {
              var o = r[e];
              do o = o(n);
              while (o !== null);
            }
            ($a = null), (vm = !1);
          } catch (l) {
            throw ($a !== null && ($a = $a.slice(e + 1)), uy(nc, bo), l);
          } finally {
            Fn(t), (hm = !1);
          }
        }
        return null;
      }
      var nl = [],
        rl = 0,
        Hc = null,
        Bc = 0,
        Fr = [],
        zr = 0,
        ri = null,
        Ya = 1,
        Wa = "";
      function F_(e) {
        return oi(), (e.flags & ty) !== Pe;
      }
      function z_(e) {
        return oi(), Bc;
      }
      function P_() {
        var e = Wa,
          t = Ya,
          n = t & ~H_(t);
        return n.toString(32) + e;
      }
      function ai(e, t) {
        oi(), (nl[rl++] = Bc), (nl[rl++] = Hc), (Hc = e), (Bc = t);
      }
      function Pb(e, t, n) {
        oi(), (Fr[zr++] = Ya), (Fr[zr++] = Wa), (Fr[zr++] = ri), (ri = e);
        var r = Ya,
          o = Wa,
          l = Ic(r) - 1,
          c = r & ~(1 << l),
          m = n + 1,
          v = Ic(t) + l;
        if (v > 30) {
          var x = l - (l % 5),
            S = (1 << x) - 1,
            A = (c & S).toString(32),
            k = c >> x,
            z = l - x,
            H = Ic(t) + z,
            Y = m << z,
            me = Y | k,
            Ae = A + o;
          (Ya = (1 << H) | me), (Wa = Ae);
        } else {
          var De = m << l,
            ft = De | c,
            ot = o;
          (Ya = (1 << v) | ft), (Wa = ot);
        }
      }
      function gm(e) {
        oi();
        var t = e.return;
        if (t !== null) {
          var n = 1,
            r = 0;
          ai(e, n), Pb(e, n, r);
        }
      }
      function Ic(e) {
        return 32 - vy(e);
      }
      function H_(e) {
        return 1 << (Ic(e) - 1);
      }
      function ym(e) {
        for (; e === Hc; ) (Hc = nl[--rl]), (nl[rl] = null), (Bc = nl[--rl]), (nl[rl] = null);
        for (; e === ri; )
          (ri = Fr[--zr]),
            (Fr[zr] = null),
            (Wa = Fr[--zr]),
            (Fr[zr] = null),
            (Ya = Fr[--zr]),
            (Fr[zr] = null);
      }
      function B_() {
        return oi(), ri !== null ? { id: Ya, overflow: Wa } : null;
      }
      function I_(e, t) {
        oi(),
          (Fr[zr++] = Ya),
          (Fr[zr++] = Wa),
          (Fr[zr++] = ri),
          (Ya = t.id),
          (Wa = t.overflow),
          (ri = e);
      }
      function oi() {
        Hn() || f("Expected to be hydrating. This is a bug in React. Please file an issue.");
      }
      var Pn = null,
        Pr = null,
        Kr = !1,
        ii = !1,
        xo = null;
      function $_() {
        Kr && f("We should not be hydrating here. This is a bug in React. Please file a bug.");
      }
      function Hb() {
        ii = !0;
      }
      function Y_() {
        return ii;
      }
      function W_(e) {
        var t = e.stateNode.containerInfo;
        return (Pr = c_(t)), (Pn = e), (Kr = !0), (xo = null), (ii = !1), !0;
      }
      function G_(e, t, n) {
        return (
          (Pr = f_(t)), (Pn = e), (Kr = !0), (xo = null), (ii = !1), n !== null && I_(e, n), !0
        );
      }
      function Bb(e, t) {
        switch (e.tag) {
          case g: {
            E_(e.stateNode.containerInfo, t);
            break;
          }
          case T: {
            var n = (e.mode & ut) !== Ve;
            C_(e.type, e.memoizedProps, e.stateNode, t, n);
            break;
          }
          case q: {
            var r = e.memoizedState;
            r.dehydrated !== null && S_(r.dehydrated, t);
            break;
          }
        }
      }
      function Ib(e, t) {
        Bb(e, t);
        var n = Qk();
        (n.stateNode = t), (n.return = e);
        var r = e.deletions;
        r === null ? ((e.deletions = [n]), (e.flags |= $o)) : r.push(n);
      }
      function bm(e, t) {
        {
          if (ii) return;
          switch (e.tag) {
            case g: {
              var n = e.stateNode.containerInfo;
              switch (t.tag) {
                case T:
                  var r = t.type;
                  t.pendingProps, w_(n, r);
                  break;
                case O:
                  var o = t.pendingProps;
                  R_(n, o);
                  break;
              }
              break;
            }
            case T: {
              var l = e.type,
                c = e.memoizedProps,
                m = e.stateNode;
              switch (t.tag) {
                case T: {
                  var v = t.type,
                    x = t.pendingProps,
                    S = (e.mode & ut) !== Ve;
                  D_(l, c, m, v, x, S);
                  break;
                }
                case O: {
                  var A = t.pendingProps,
                    k = (e.mode & ut) !== Ve;
                  __(l, c, m, A, k);
                  break;
                }
              }
              break;
            }
            case q: {
              var z = e.memoizedState,
                H = z.dehydrated;
              if (H !== null)
                switch (t.tag) {
                  case T:
                    var Y = t.type;
                    t.pendingProps, T_(H, Y);
                    break;
                  case O:
                    var me = t.pendingProps;
                    N_(H, me);
                    break;
                }
              break;
            }
            default:
              return;
          }
        }
      }
      function $b(e, t) {
        (t.flags = (t.flags & ~Ua) | bn), bm(e, t);
      }
      function Yb(e, t) {
        switch (e.tag) {
          case T: {
            var n = e.type;
            e.pendingProps;
            var r = a_(t, n);
            return r !== null ? ((e.stateNode = r), (Pn = e), (Pr = u_(r)), !0) : !1;
          }
          case O: {
            var o = e.pendingProps,
              l = o_(t, o);
            return l !== null ? ((e.stateNode = l), (Pn = e), (Pr = null), !0) : !1;
          }
          case q: {
            var c = i_(t);
            if (c !== null) {
              var m = { dehydrated: c, treeContext: B_(), retryLane: Tr };
              e.memoizedState = m;
              var v = Jk(c);
              return (v.return = e), (e.child = v), (Pn = e), (Pr = null), !0;
            }
            return !1;
          }
          default:
            return !1;
        }
      }
      function xm(e) {
        return (e.mode & ut) !== Ve && (e.flags & xt) === Pe;
      }
      function Em(e) {
        throw new Error(
          "Hydration failed because the initial UI does not match what was rendered on the server."
        );
      }
      function Sm(e) {
        if (Kr) {
          var t = Pr;
          if (!t) {
            xm(e) && (bm(Pn, e), Em()), $b(Pn, e), (Kr = !1), (Pn = e);
            return;
          }
          var n = t;
          if (!Yb(e, t)) {
            xm(e) && (bm(Pn, e), Em()), (t = Hs(n));
            var r = Pn;
            if (!t || !Yb(e, t)) {
              $b(Pn, e), (Kr = !1), (Pn = e);
              return;
            }
            Ib(r, n);
          }
        }
      }
      function q_(e, t, n) {
        var r = e.stateNode,
          o = !ii,
          l = d_(r, e.type, e.memoizedProps, t, n, e, o);
        return (e.updateQueue = l), l !== null;
      }
      function K_(e) {
        var t = e.stateNode,
          n = e.memoizedProps,
          r = p_(t, n, e);
        if (r) {
          var o = Pn;
          if (o !== null)
            switch (o.tag) {
              case g: {
                var l = o.stateNode.containerInfo,
                  c = (o.mode & ut) !== Ve;
                b_(l, t, n, c);
                break;
              }
              case T: {
                var m = o.type,
                  v = o.memoizedProps,
                  x = o.stateNode,
                  S = (o.mode & ut) !== Ve;
                x_(m, v, x, t, n, S);
                break;
              }
            }
        }
        return r;
      }
      function X_(e) {
        var t = e.memoizedState,
          n = t !== null ? t.dehydrated : null;
        if (!n)
          throw new Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        m_(n, e);
      }
      function Q_(e) {
        var t = e.memoizedState,
          n = t !== null ? t.dehydrated : null;
        if (!n)
          throw new Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        return v_(n);
      }
      function Wb(e) {
        for (var t = e.return; t !== null && t.tag !== T && t.tag !== g && t.tag !== q; )
          t = t.return;
        Pn = t;
      }
      function $c(e) {
        if (e !== Pn) return !1;
        if (!Kr) return Wb(e), (Kr = !0), !1;
        if (e.tag !== g && (e.tag !== T || (y_(e.type) && !rm(e.type, e.memoizedProps)))) {
          var t = Pr;
          if (t)
            if (xm(e)) Gb(e), Em();
            else for (; t; ) Ib(e, t), (t = Hs(t));
        }
        return Wb(e), e.tag === q ? (Pr = Q_(e)) : (Pr = Pn ? Hs(e.stateNode) : null), !0;
      }
      function J_() {
        return Kr && Pr !== null;
      }
      function Gb(e) {
        for (var t = Pr; t; ) Bb(e, t), (t = Hs(t));
      }
      function al() {
        (Pn = null), (Pr = null), (Kr = !1), (ii = !1);
      }
      function qb() {
        xo !== null && (H0(xo), (xo = null));
      }
      function Hn() {
        return Kr;
      }
      function Cm(e) {
        xo === null ? (xo = [e]) : xo.push(e);
      }
      var Z_ = s.ReactCurrentBatchConfig,
        e1 = null;
      function t1() {
        return Z_.transition;
      }
      var Xr = {
        recordUnsafeLifecycleWarnings: function (e, t) {},
        flushPendingUnsafeLifecycleWarnings: function () {},
        recordLegacyContextWarning: function (e, t) {},
        flushLegacyContextWarning: function () {},
        discardPendingWarnings: function () {}
      };
      {
        var n1 = function (e) {
            for (var t = null, n = e; n !== null; ) n.mode & un && (t = n), (n = n.return);
            return t;
          },
          li = function (e) {
            var t = [];
            return (
              e.forEach(function (n) {
                t.push(n);
              }),
              t.sort().join(", ")
            );
          },
          Ys = [],
          Ws = [],
          Gs = [],
          qs = [],
          Ks = [],
          Xs = [],
          si = new Set();
        (Xr.recordUnsafeLifecycleWarnings = function (e, t) {
          si.has(e.type) ||
            (typeof t.componentWillMount == "function" &&
              t.componentWillMount.__suppressDeprecationWarning !== !0 &&
              Ys.push(e),
            e.mode & un && typeof t.UNSAFE_componentWillMount == "function" && Ws.push(e),
            typeof t.componentWillReceiveProps == "function" &&
              t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
              Gs.push(e),
            e.mode & un && typeof t.UNSAFE_componentWillReceiveProps == "function" && qs.push(e),
            typeof t.componentWillUpdate == "function" &&
              t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
              Ks.push(e),
            e.mode & un && typeof t.UNSAFE_componentWillUpdate == "function" && Xs.push(e));
        }),
          (Xr.flushPendingUnsafeLifecycleWarnings = function () {
            var e = new Set();
            Ys.length > 0 &&
              (Ys.forEach(function (k) {
                e.add(Ke(k) || "Component"), si.add(k.type);
              }),
              (Ys = []));
            var t = new Set();
            Ws.length > 0 &&
              (Ws.forEach(function (k) {
                t.add(Ke(k) || "Component"), si.add(k.type);
              }),
              (Ws = []));
            var n = new Set();
            Gs.length > 0 &&
              (Gs.forEach(function (k) {
                n.add(Ke(k) || "Component"), si.add(k.type);
              }),
              (Gs = []));
            var r = new Set();
            qs.length > 0 &&
              (qs.forEach(function (k) {
                r.add(Ke(k) || "Component"), si.add(k.type);
              }),
              (qs = []));
            var o = new Set();
            Ks.length > 0 &&
              (Ks.forEach(function (k) {
                o.add(Ke(k) || "Component"), si.add(k.type);
              }),
              (Ks = []));
            var l = new Set();
            if (
              (Xs.length > 0 &&
                (Xs.forEach(function (k) {
                  l.add(Ke(k) || "Component"), si.add(k.type);
                }),
                (Xs = [])),
              t.size > 0)
            ) {
              var c = li(t);
              f(
                `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
                c
              );
            }
            if (r.size > 0) {
              var m = li(r);
              f(
                `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
                m
              );
            }
            if (l.size > 0) {
              var v = li(l);
              f(
                `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
                v
              );
            }
            if (e.size > 0) {
              var x = li(e);
              p(
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                x
              );
            }
            if (n.size > 0) {
              var S = li(n);
              p(
                `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                S
              );
            }
            if (o.size > 0) {
              var A = li(o);
              p(
                `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                A
              );
            }
          });
        var Yc = new Map(),
          Kb = new Set();
        (Xr.recordLegacyContextWarning = function (e, t) {
          var n = n1(e);
          if (n === null) {
            f(
              "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
            );
            return;
          }
          if (!Kb.has(e.type)) {
            var r = Yc.get(n);
            (e.type.contextTypes != null ||
              e.type.childContextTypes != null ||
              (t !== null && typeof t.getChildContext == "function")) &&
              (r === void 0 && ((r = []), Yc.set(n, r)), r.push(e));
          }
        }),
          (Xr.flushLegacyContextWarning = function () {
            Yc.forEach(function (e, t) {
              if (e.length !== 0) {
                var n = e[0],
                  r = new Set();
                e.forEach(function (l) {
                  r.add(Ke(l) || "Component"), Kb.add(l.type);
                });
                var o = li(r);
                try {
                  rn(n),
                    f(
                      `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                      o
                    );
                } finally {
                  Ln();
                }
              }
            });
          }),
          (Xr.discardPendingWarnings = function () {
            (Ys = []), (Ws = []), (Gs = []), (qs = []), (Ks = []), (Xs = []), (Yc = new Map());
          });
      }
      var wm,
        Rm,
        Tm,
        Nm,
        Dm,
        Xb = function (e, t) {};
      (wm = !1),
        (Rm = !1),
        (Tm = {}),
        (Nm = {}),
        (Dm = {}),
        (Xb = function (e, t) {
          if (
            !(e === null || typeof e != "object") &&
            !(!e._store || e._store.validated || e.key != null)
          ) {
            if (typeof e._store != "object")
              throw new Error(
                "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
              );
            e._store.validated = !0;
            var n = Ke(t) || "Component";
            Nm[n] ||
              ((Nm[n] = !0),
              f(
                'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'
              ));
          }
        });
      function r1(e) {
        return e.prototype && e.prototype.isReactComponent;
      }
      function Qs(e, t, n) {
        var r = n.ref;
        if (r !== null && typeof r != "function" && typeof r != "object") {
          if (
            (e.mode & un || Et) &&
            !(n._owner && n._self && n._owner.stateNode !== n._self) &&
            !(n._owner && n._owner.tag !== y) &&
            !(typeof n.type == "function" && !r1(n.type)) &&
            n._owner
          ) {
            var o = Ke(e) || "Component";
            Tm[o] ||
              (f(
                'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                o,
                r
              ),
              (Tm[o] = !0));
          }
          if (n._owner) {
            var l = n._owner,
              c;
            if (l) {
              var m = l;
              if (m.tag !== y)
                throw new Error(
                  "Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref"
                );
              c = m.stateNode;
            }
            if (!c)
              throw new Error(
                "Missing owner for string ref " +
                  r +
                  ". This error is likely caused by a bug in React. Please file an issue."
              );
            var v = c;
            nr(r, "ref");
            var x = "" + r;
            if (
              t !== null &&
              t.ref !== null &&
              typeof t.ref == "function" &&
              t.ref._stringRef === x
            )
              return t.ref;
            var S = function (A) {
              var k = v.refs;
              A === null ? delete k[x] : (k[x] = A);
            };
            return (S._stringRef = x), S;
          } else {
            if (typeof r != "string")
              throw new Error(
                "Expected ref to be a function, a string, an object returned by React.createRef(), or null."
              );
            if (!n._owner)
              throw new Error(
                "Element ref was specified as a string (" +
                  r +
                  `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`
              );
          }
        }
        return r;
      }
      function Wc(e, t) {
        var n = Object.prototype.toString.call(t);
        throw new Error(
          "Objects are not valid as a React child (found: " +
            (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) +
            "). If you meant to render a collection of children, use an array instead."
        );
      }
      function Gc(e) {
        {
          var t = Ke(e) || "Component";
          if (Dm[t]) return;
          (Dm[t] = !0),
            f(
              "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."
            );
        }
      }
      function Qb(e) {
        var t = e._payload,
          n = e._init;
        return n(t);
      }
      function Jb(e) {
        function t(V, W) {
          if (e) {
            var U = V.deletions;
            U === null ? ((V.deletions = [W]), (V.flags |= $o)) : U.push(W);
          }
        }
        function n(V, W) {
          if (!e) return null;
          for (var U = W; U !== null; ) t(V, U), (U = U.sibling);
          return null;
        }
        function r(V, W) {
          for (var U = new Map(), re = W; re !== null; )
            re.key !== null ? U.set(re.key, re) : U.set(re.index, re), (re = re.sibling);
          return U;
        }
        function o(V, W) {
          var U = gi(V, W);
          return (U.index = 0), (U.sibling = null), U;
        }
        function l(V, W, U) {
          if (((V.index = U), !e)) return (V.flags |= ty), W;
          var re = V.alternate;
          if (re !== null) {
            var be = re.index;
            return be < W ? ((V.flags |= bn), W) : be;
          } else return (V.flags |= bn), W;
        }
        function c(V) {
          return e && V.alternate === null && (V.flags |= bn), V;
        }
        function m(V, W, U, re) {
          if (W === null || W.tag !== O) {
            var be = Ch(U, V.mode, re);
            return (be.return = V), be;
          } else {
            var ve = o(W, U);
            return (ve.return = V), ve;
          }
        }
        function v(V, W, U, re) {
          var be = U.type;
          if (be === tn) return S(V, W, U.props.children, re, U.key);
          if (
            W !== null &&
            (W.elementType === be ||
              rE(W, U) ||
              (typeof be == "object" && be !== null && be.$$typeof === ce && Qb(be) === W.type))
          ) {
            var ve = o(W, U.props);
            return (
              (ve.ref = Qs(V, W, U)),
              (ve.return = V),
              (ve._debugSource = U._source),
              (ve._debugOwner = U._owner),
              ve
            );
          }
          var Be = Sh(U, V.mode, re);
          return (Be.ref = Qs(V, W, U)), (Be.return = V), Be;
        }
        function x(V, W, U, re) {
          if (
            W === null ||
            W.tag !== _ ||
            W.stateNode.containerInfo !== U.containerInfo ||
            W.stateNode.implementation !== U.implementation
          ) {
            var be = wh(U, V.mode, re);
            return (be.return = V), be;
          } else {
            var ve = o(W, U.children || []);
            return (ve.return = V), ve;
          }
        }
        function S(V, W, U, re, be) {
          if (W === null || W.tag !== L) {
            var ve = ko(U, V.mode, re, be);
            return (ve.return = V), ve;
          } else {
            var Be = o(W, U);
            return (Be.return = V), Be;
          }
        }
        function A(V, W, U) {
          if ((typeof W == "string" && W !== "") || typeof W == "number") {
            var re = Ch("" + W, V.mode, U);
            return (re.return = V), re;
          }
          if (typeof W == "object" && W !== null) {
            switch (W.$$typeof) {
              case hn: {
                var be = Sh(W, V.mode, U);
                return (be.ref = Qs(V, null, W)), (be.return = V), be;
              }
              case Ut: {
                var ve = wh(W, V.mode, U);
                return (ve.return = V), ve;
              }
              case ce: {
                var Be = W._payload,
                  qe = W._init;
                return A(V, qe(Be), U);
              }
            }
            if (at(W) || Gt(W)) {
              var At = ko(W, V.mode, U, null);
              return (At.return = V), At;
            }
            Wc(V, W);
          }
          return typeof W == "function" && Gc(V), null;
        }
        function k(V, W, U, re) {
          var be = W !== null ? W.key : null;
          if ((typeof U == "string" && U !== "") || typeof U == "number")
            return be !== null ? null : m(V, W, "" + U, re);
          if (typeof U == "object" && U !== null) {
            switch (U.$$typeof) {
              case hn:
                return U.key === be ? v(V, W, U, re) : null;
              case Ut:
                return U.key === be ? x(V, W, U, re) : null;
              case ce: {
                var ve = U._payload,
                  Be = U._init;
                return k(V, W, Be(ve), re);
              }
            }
            if (at(U) || Gt(U)) return be !== null ? null : S(V, W, U, re, null);
            Wc(V, U);
          }
          return typeof U == "function" && Gc(V), null;
        }
        function z(V, W, U, re, be) {
          if ((typeof re == "string" && re !== "") || typeof re == "number") {
            var ve = V.get(U) || null;
            return m(W, ve, "" + re, be);
          }
          if (typeof re == "object" && re !== null) {
            switch (re.$$typeof) {
              case hn: {
                var Be = V.get(re.key === null ? U : re.key) || null;
                return v(W, Be, re, be);
              }
              case Ut: {
                var qe = V.get(re.key === null ? U : re.key) || null;
                return x(W, qe, re, be);
              }
              case ce:
                var At = re._payload,
                  ht = re._init;
                return z(V, W, U, ht(At), be);
            }
            if (at(re) || Gt(re)) {
              var pn = V.get(U) || null;
              return S(W, pn, re, be, null);
            }
            Wc(W, re);
          }
          return typeof re == "function" && Gc(W), null;
        }
        function H(V, W, U) {
          {
            if (typeof V != "object" || V === null) return W;
            switch (V.$$typeof) {
              case hn:
              case Ut:
                Xb(V, U);
                var re = V.key;
                if (typeof re != "string") break;
                if (W === null) {
                  (W = new Set()), W.add(re);
                  break;
                }
                if (!W.has(re)) {
                  W.add(re);
                  break;
                }
                f(
                  "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                  re
                );
                break;
              case ce:
                var be = V._payload,
                  ve = V._init;
                H(ve(be), W, U);
                break;
            }
          }
          return W;
        }
        function Y(V, W, U, re) {
          for (var be = null, ve = 0; ve < U.length; ve++) {
            var Be = U[ve];
            be = H(Be, be, V);
          }
          for (
            var qe = null, At = null, ht = W, pn = 0, gt = 0, cn = null;
            ht !== null && gt < U.length;
            gt++
          ) {
            ht.index > gt ? ((cn = ht), (ht = null)) : (cn = ht.sibling);
            var er = k(V, ht, U[gt], re);
            if (er === null) {
              ht === null && (ht = cn);
              break;
            }
            e && ht && er.alternate === null && t(V, ht),
              (pn = l(er, pn, gt)),
              At === null ? (qe = er) : (At.sibling = er),
              (At = er),
              (ht = cn);
          }
          if (gt === U.length) {
            if ((n(V, ht), Hn())) {
              var qn = gt;
              ai(V, qn);
            }
            return qe;
          }
          if (ht === null) {
            for (; gt < U.length; gt++) {
              var Mr = A(V, U[gt], re);
              Mr !== null &&
                ((pn = l(Mr, pn, gt)), At === null ? (qe = Mr) : (At.sibling = Mr), (At = Mr));
            }
            if (Hn()) {
              var fr = gt;
              ai(V, fr);
            }
            return qe;
          }
          for (var dr = r(V, ht); gt < U.length; gt++) {
            var tr = z(dr, V, gt, U[gt], re);
            tr !== null &&
              (e && tr.alternate !== null && dr.delete(tr.key === null ? gt : tr.key),
              (pn = l(tr, pn, gt)),
              At === null ? (qe = tr) : (At.sibling = tr),
              (At = tr));
          }
          if (
            (e &&
              dr.forEach(function (Cl) {
                return t(V, Cl);
              }),
            Hn())
          ) {
            var Za = gt;
            ai(V, Za);
          }
          return qe;
        }
        function me(V, W, U, re) {
          var be = Gt(U);
          if (typeof be != "function")
            throw new Error(
              "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
            );
          {
            typeof Symbol == "function" &&
              U[Symbol.toStringTag] === "Generator" &&
              (Rm ||
                f(
                  "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."
                ),
              (Rm = !0)),
              U.entries === be &&
                (wm ||
                  f(
                    "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                  ),
                (wm = !0));
            var ve = be.call(U);
            if (ve)
              for (var Be = null, qe = ve.next(); !qe.done; qe = ve.next()) {
                var At = qe.value;
                Be = H(At, Be, V);
              }
          }
          var ht = be.call(U);
          if (ht == null) throw new Error("An iterable object provided no iterator.");
          for (
            var pn = null, gt = null, cn = W, er = 0, qn = 0, Mr = null, fr = ht.next();
            cn !== null && !fr.done;
            qn++, fr = ht.next()
          ) {
            cn.index > qn ? ((Mr = cn), (cn = null)) : (Mr = cn.sibling);
            var dr = k(V, cn, fr.value, re);
            if (dr === null) {
              cn === null && (cn = Mr);
              break;
            }
            e && cn && dr.alternate === null && t(V, cn),
              (er = l(dr, er, qn)),
              gt === null ? (pn = dr) : (gt.sibling = dr),
              (gt = dr),
              (cn = Mr);
          }
          if (fr.done) {
            if ((n(V, cn), Hn())) {
              var tr = qn;
              ai(V, tr);
            }
            return pn;
          }
          if (cn === null) {
            for (; !fr.done; qn++, fr = ht.next()) {
              var Za = A(V, fr.value, re);
              Za !== null &&
                ((er = l(Za, er, qn)), gt === null ? (pn = Za) : (gt.sibling = Za), (gt = Za));
            }
            if (Hn()) {
              var Cl = qn;
              ai(V, Cl);
            }
            return pn;
          }
          for (var _u = r(V, cn); !fr.done; qn++, fr = ht.next()) {
            var Sa = z(_u, V, qn, fr.value, re);
            Sa !== null &&
              (e && Sa.alternate !== null && _u.delete(Sa.key === null ? qn : Sa.key),
              (er = l(Sa, er, qn)),
              gt === null ? (pn = Sa) : (gt.sibling = Sa),
              (gt = Sa));
          }
          if (
            (e &&
              _u.forEach(function (_A) {
                return t(V, _A);
              }),
            Hn())
          ) {
            var DA = qn;
            ai(V, DA);
          }
          return pn;
        }
        function Ae(V, W, U, re) {
          if (W !== null && W.tag === O) {
            n(V, W.sibling);
            var be = o(W, U);
            return (be.return = V), be;
          }
          n(V, W);
          var ve = Ch(U, V.mode, re);
          return (ve.return = V), ve;
        }
        function De(V, W, U, re) {
          for (var be = U.key, ve = W; ve !== null; ) {
            if (ve.key === be) {
              var Be = U.type;
              if (Be === tn) {
                if (ve.tag === L) {
                  n(V, ve.sibling);
                  var qe = o(ve, U.props.children);
                  return (
                    (qe.return = V), (qe._debugSource = U._source), (qe._debugOwner = U._owner), qe
                  );
                }
              } else if (
                ve.elementType === Be ||
                rE(ve, U) ||
                (typeof Be == "object" && Be !== null && Be.$$typeof === ce && Qb(Be) === ve.type)
              ) {
                n(V, ve.sibling);
                var At = o(ve, U.props);
                return (
                  (At.ref = Qs(V, ve, U)),
                  (At.return = V),
                  (At._debugSource = U._source),
                  (At._debugOwner = U._owner),
                  At
                );
              }
              n(V, ve);
              break;
            } else t(V, ve);
            ve = ve.sibling;
          }
          if (U.type === tn) {
            var ht = ko(U.props.children, V.mode, re, U.key);
            return (ht.return = V), ht;
          } else {
            var pn = Sh(U, V.mode, re);
            return (pn.ref = Qs(V, W, U)), (pn.return = V), pn;
          }
        }
        function ft(V, W, U, re) {
          for (var be = U.key, ve = W; ve !== null; ) {
            if (ve.key === be)
              if (
                ve.tag === _ &&
                ve.stateNode.containerInfo === U.containerInfo &&
                ve.stateNode.implementation === U.implementation
              ) {
                n(V, ve.sibling);
                var Be = o(ve, U.children || []);
                return (Be.return = V), Be;
              } else {
                n(V, ve);
                break;
              }
            else t(V, ve);
            ve = ve.sibling;
          }
          var qe = wh(U, V.mode, re);
          return (qe.return = V), qe;
        }
        function ot(V, W, U, re) {
          var be = typeof U == "object" && U !== null && U.type === tn && U.key === null;
          if ((be && (U = U.props.children), typeof U == "object" && U !== null)) {
            switch (U.$$typeof) {
              case hn:
                return c(De(V, W, U, re));
              case Ut:
                return c(ft(V, W, U, re));
              case ce:
                var ve = U._payload,
                  Be = U._init;
                return ot(V, W, Be(ve), re);
            }
            if (at(U)) return Y(V, W, U, re);
            if (Gt(U)) return me(V, W, U, re);
            Wc(V, U);
          }
          return (typeof U == "string" && U !== "") || typeof U == "number"
            ? c(Ae(V, W, "" + U, re))
            : (typeof U == "function" && Gc(V), n(V, W));
        }
        return ot;
      }
      var ol = Jb(!0),
        Zb = Jb(!1);
      function a1(e, t) {
        if (e !== null && t.child !== e.child)
          throw new Error("Resuming work not yet implemented.");
        if (t.child !== null) {
          var n = t.child,
            r = gi(n, n.pendingProps);
          for (t.child = r, r.return = t; n.sibling !== null; )
            (n = n.sibling), (r = r.sibling = gi(n, n.pendingProps)), (r.return = t);
          r.sibling = null;
        }
      }
      function o1(e, t) {
        for (var n = e.child; n !== null; ) Wk(n, t), (n = n.sibling);
      }
      var _m = go(null),
        Om;
      Om = {};
      var qc = null,
        il = null,
        km = null,
        Kc = !1;
      function Xc() {
        (qc = null), (il = null), (km = null), (Kc = !1);
      }
      function ex() {
        Kc = !0;
      }
      function tx() {
        Kc = !1;
      }
      function nx(e, t, n) {
        Jn(_m, t._currentValue, e),
          (t._currentValue = n),
          t._currentRenderer !== void 0 &&
            t._currentRenderer !== null &&
            t._currentRenderer !== Om &&
            f(
              "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
            ),
          (t._currentRenderer = Om);
      }
      function Am(e, t) {
        var n = _m.current;
        Qn(_m, t), (e._currentValue = n);
      }
      function Mm(e, t, n) {
        for (var r = e; r !== null; ) {
          var o = r.alternate;
          if (
            ($i(r.childLanes, t)
              ? o !== null && !$i(o.childLanes, t) && (o.childLanes = et(o.childLanes, t))
              : ((r.childLanes = et(r.childLanes, t)),
                o !== null && (o.childLanes = et(o.childLanes, t))),
            r === n)
          )
            break;
          r = r.return;
        }
        r !== n &&
          f(
            "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      function i1(e, t, n) {
        l1(e, t, n);
      }
      function l1(e, t, n) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null; ) {
          var o = void 0,
            l = r.dependencies;
          if (l !== null) {
            o = r.child;
            for (var c = l.firstContext; c !== null; ) {
              if (c.context === t) {
                if (r.tag === y) {
                  var m = vs(n),
                    v = Ga(Xt, m);
                  v.tag = Jc;
                  var x = r.updateQueue;
                  if (x !== null) {
                    var S = x.shared,
                      A = S.pending;
                    A === null ? (v.next = v) : ((v.next = A.next), (A.next = v)), (S.pending = v);
                  }
                }
                r.lanes = et(r.lanes, n);
                var k = r.alternate;
                k !== null && (k.lanes = et(k.lanes, n)),
                  Mm(r.return, n, e),
                  (l.lanes = et(l.lanes, n));
                break;
              }
              c = c.next;
            }
          } else if (r.tag === I) o = r.type === e.type ? null : r.child;
          else if (r.tag === He) {
            var z = r.return;
            if (z === null)
              throw new Error(
                "We just came from a parent so we must have had a parent. This is a bug in React."
              );
            z.lanes = et(z.lanes, n);
            var H = z.alternate;
            H !== null && (H.lanes = et(H.lanes, n)), Mm(z, n, e), (o = r.sibling);
          } else o = r.child;
          if (o !== null) o.return = r;
          else
            for (o = r; o !== null; ) {
              if (o === e) {
                o = null;
                break;
              }
              var Y = o.sibling;
              if (Y !== null) {
                (Y.return = o.return), (o = Y);
                break;
              }
              o = o.return;
            }
          r = o;
        }
      }
      function ll(e, t) {
        (qc = e), (il = null), (km = null);
        var n = e.dependencies;
        if (n !== null) {
          var r = n.firstContext;
          r !== null && (Nr(n.lanes, t) && du(), (n.firstContext = null));
        }
      }
      function xn(e) {
        Kc &&
          f(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        var t = e._currentValue;
        if (km !== e) {
          var n = { context: e, memoizedValue: t, next: null };
          if (il === null) {
            if (qc === null)
              throw new Error(
                "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
              );
            (il = n), (qc.dependencies = { lanes: ee, firstContext: n });
          } else il = il.next = n;
        }
        return t;
      }
      var ui = null;
      function Lm(e) {
        ui === null ? (ui = [e]) : ui.push(e);
      }
      function s1() {
        if (ui !== null) {
          for (var e = 0; e < ui.length; e++) {
            var t = ui[e],
              n = t.interleaved;
            if (n !== null) {
              t.interleaved = null;
              var r = n.next,
                o = t.pending;
              if (o !== null) {
                var l = o.next;
                (o.next = r), (n.next = l);
              }
              t.pending = n;
            }
          }
          ui = null;
        }
      }
      function rx(e, t, n, r) {
        var o = t.interleaved;
        return (
          o === null ? ((n.next = n), Lm(t)) : ((n.next = o.next), (o.next = n)),
          (t.interleaved = n),
          Qc(e, r)
        );
      }
      function u1(e, t, n, r) {
        var o = t.interleaved;
        o === null ? ((n.next = n), Lm(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n);
      }
      function c1(e, t, n, r) {
        var o = t.interleaved;
        return (
          o === null ? ((n.next = n), Lm(t)) : ((n.next = o.next), (o.next = n)),
          (t.interleaved = n),
          Qc(e, r)
        );
      }
      function gr(e, t) {
        return Qc(e, t);
      }
      var f1 = Qc;
      function Qc(e, t) {
        e.lanes = et(e.lanes, t);
        var n = e.alternate;
        n !== null && (n.lanes = et(n.lanes, t)),
          n === null && (e.flags & (bn | Ua)) !== Pe && Z0(e);
        for (var r = e, o = e.return; o !== null; )
          (o.childLanes = et(o.childLanes, t)),
            (n = o.alternate),
            n !== null
              ? (n.childLanes = et(n.childLanes, t))
              : (o.flags & (bn | Ua)) !== Pe && Z0(e),
            (r = o),
            (o = o.return);
        if (r.tag === g) {
          var l = r.stateNode;
          return l;
        } else return null;
      }
      var ax = 0,
        ox = 1,
        Jc = 2,
        jm = 3,
        Zc = !1,
        Vm,
        ef;
      (Vm = !1), (ef = null);
      function Um(e) {
        var t = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, interleaved: null, lanes: ee },
          effects: null
        };
        e.updateQueue = t;
      }
      function ix(e, t) {
        var n = t.updateQueue,
          r = e.updateQueue;
        if (n === r) {
          var o = {
            baseState: r.baseState,
            firstBaseUpdate: r.firstBaseUpdate,
            lastBaseUpdate: r.lastBaseUpdate,
            shared: r.shared,
            effects: r.effects
          };
          t.updateQueue = o;
        }
      }
      function Ga(e, t) {
        var n = { eventTime: e, lane: t, tag: ax, payload: null, callback: null, next: null };
        return n;
      }
      function Eo(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        var o = r.shared;
        if (
          (ef === o &&
            !Vm &&
            (f(
              "An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."
            ),
            (Vm = !0)),
          uk())
        ) {
          var l = o.pending;
          return (
            l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (o.pending = t), f1(e, n)
          );
        } else return c1(e, o, t, n);
      }
      function tf(e, t, n) {
        var r = t.updateQueue;
        if (r !== null) {
          var o = r.shared;
          if (by(n)) {
            var l = o.lanes;
            l = Ey(l, e.pendingLanes);
            var c = et(l, n);
            (o.lanes = c), _p(e, c);
          }
        }
      }
      function Fm(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (r !== null) {
          var o = r.updateQueue;
          if (n === o) {
            var l = null,
              c = null,
              m = n.firstBaseUpdate;
            if (m !== null) {
              var v = m;
              do {
                var x = {
                  eventTime: v.eventTime,
                  lane: v.lane,
                  tag: v.tag,
                  payload: v.payload,
                  callback: v.callback,
                  next: null
                };
                c === null ? (l = c = x) : ((c.next = x), (c = x)), (v = v.next);
              } while (v !== null);
              c === null ? (l = c = t) : ((c.next = t), (c = t));
            } else l = c = t;
            (n = {
              baseState: o.baseState,
              firstBaseUpdate: l,
              lastBaseUpdate: c,
              shared: o.shared,
              effects: o.effects
            }),
              (e.updateQueue = n);
            return;
          }
        }
        var S = n.lastBaseUpdate;
        S === null ? (n.firstBaseUpdate = t) : (S.next = t), (n.lastBaseUpdate = t);
      }
      function d1(e, t, n, r, o, l) {
        switch (n.tag) {
          case ox: {
            var c = n.payload;
            if (typeof c == "function") {
              ex();
              var m = c.call(l, r, o);
              {
                if (e.mode & un) {
                  Vn(!0);
                  try {
                    c.call(l, r, o);
                  } finally {
                    Vn(!1);
                  }
                }
                tx();
              }
              return m;
            }
            return c;
          }
          case jm:
            e.flags = (e.flags & ~lr) | xt;
          case ax: {
            var v = n.payload,
              x;
            if (typeof v == "function") {
              ex(), (x = v.call(l, r, o));
              {
                if (e.mode & un) {
                  Vn(!0);
                  try {
                    v.call(l, r, o);
                  } finally {
                    Vn(!1);
                  }
                }
                tx();
              }
            } else x = v;
            return x == null ? r : Qe({}, r, x);
          }
          case Jc:
            return (Zc = !0), r;
        }
        return r;
      }
      function nf(e, t, n, r) {
        var o = e.updateQueue;
        (Zc = !1), (ef = o.shared);
        var l = o.firstBaseUpdate,
          c = o.lastBaseUpdate,
          m = o.shared.pending;
        if (m !== null) {
          o.shared.pending = null;
          var v = m,
            x = v.next;
          (v.next = null), c === null ? (l = x) : (c.next = x), (c = v);
          var S = e.alternate;
          if (S !== null) {
            var A = S.updateQueue,
              k = A.lastBaseUpdate;
            k !== c &&
              (k === null ? (A.firstBaseUpdate = x) : (k.next = x), (A.lastBaseUpdate = v));
          }
        }
        if (l !== null) {
          var z = o.baseState,
            H = ee,
            Y = null,
            me = null,
            Ae = null,
            De = l;
          do {
            var ft = De.lane,
              ot = De.eventTime;
            if ($i(r, ft)) {
              if (Ae !== null) {
                var W = {
                  eventTime: ot,
                  lane: Un,
                  tag: De.tag,
                  payload: De.payload,
                  callback: De.callback,
                  next: null
                };
                Ae = Ae.next = W;
              }
              z = d1(e, o, De, z, t, n);
              var U = De.callback;
              if (U !== null && De.lane !== Un) {
                e.flags |= ey;
                var re = o.effects;
                re === null ? (o.effects = [De]) : re.push(De);
              }
            } else {
              var V = {
                eventTime: ot,
                lane: ft,
                tag: De.tag,
                payload: De.payload,
                callback: De.callback,
                next: null
              };
              Ae === null ? ((me = Ae = V), (Y = z)) : (Ae = Ae.next = V), (H = et(H, ft));
            }
            if (((De = De.next), De === null)) {
              if (((m = o.shared.pending), m === null)) break;
              var be = m,
                ve = be.next;
              (be.next = null), (De = ve), (o.lastBaseUpdate = be), (o.shared.pending = null);
            }
          } while (!0);
          Ae === null && (Y = z),
            (o.baseState = Y),
            (o.firstBaseUpdate = me),
            (o.lastBaseUpdate = Ae);
          var Be = o.shared.interleaved;
          if (Be !== null) {
            var qe = Be;
            do (H = et(H, qe.lane)), (qe = qe.next);
            while (qe !== Be);
          } else l === null && (o.shared.lanes = ee);
          wu(H), (e.lanes = H), (e.memoizedState = z);
        }
        ef = null;
      }
      function p1(e, t) {
        if (typeof e != "function")
          throw new Error(
            "Invalid argument passed as callback. Expected a function. Instead " +
              ("received: " + e)
          );
        e.call(t);
      }
      function lx() {
        Zc = !1;
      }
      function rf() {
        return Zc;
      }
      function sx(e, t, n) {
        var r = t.effects;
        if (((t.effects = null), r !== null))
          for (var o = 0; o < r.length; o++) {
            var l = r[o],
              c = l.callback;
            c !== null && ((l.callback = null), p1(c, n));
          }
      }
      var Js = {},
        So = go(Js),
        Zs = go(Js),
        af = go(Js);
      function of(e) {
        if (e === Js)
          throw new Error(
            "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
          );
        return e;
      }
      function ux() {
        var e = of(af.current);
        return e;
      }
      function zm(e, t) {
        Jn(af, t, e), Jn(Zs, e, e), Jn(So, Js, e);
        var n = OD(t);
        Qn(So, e), Jn(So, n, e);
      }
      function sl(e) {
        Qn(So, e), Qn(Zs, e), Qn(af, e);
      }
      function Pm() {
        var e = of(So.current);
        return e;
      }
      function cx(e) {
        of(af.current);
        var t = of(So.current),
          n = kD(t, e.type);
        t !== n && (Jn(Zs, e, e), Jn(So, n, e));
      }
      function Hm(e) {
        Zs.current === e && (Qn(So, e), Qn(Zs, e));
      }
      var m1 = 0,
        fx = 1,
        dx = 1,
        eu = 2,
        Qr = go(m1);
      function Bm(e, t) {
        return (e & t) !== 0;
      }
      function ul(e) {
        return e & fx;
      }
      function Im(e, t) {
        return (e & fx) | t;
      }
      function v1(e, t) {
        return e | t;
      }
      function Co(e, t) {
        Jn(Qr, t, e);
      }
      function cl(e) {
        Qn(Qr, e);
      }
      function h1(e, t) {
        var n = e.memoizedState;
        return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
      }
      function lf(e) {
        for (var t = e; t !== null; ) {
          if (t.tag === q) {
            var n = t.memoizedState;
            if (n !== null) {
              var r = n.dehydrated;
              if (r === null || _b(r) || lm(r)) return t;
            }
          } else if (t.tag === Xe && t.memoizedProps.revealOrder !== void 0) {
            var o = (t.flags & xt) !== Pe;
            if (o) return t;
          } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) return null;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var yr = 0,
        Sn = 1,
        va = 2,
        Cn = 4,
        Bn = 8,
        $m = [];
      function Ym() {
        for (var e = 0; e < $m.length; e++) {
          var t = $m[e];
          t._workInProgressVersionPrimary = null;
        }
        $m.length = 0;
      }
      function g1(e, t) {
        var n = t._getVersion,
          r = n(t._source);
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [t, r])
          : e.mutableSourceEagerHydrationData.push(t, r);
      }
      var ye = s.ReactCurrentDispatcher,
        tu = s.ReactCurrentBatchConfig,
        Wm,
        fl;
      Wm = new Set();
      var ci = ee,
        kt = null,
        wn = null,
        Rn = null,
        sf = !1,
        nu = !1,
        ru = 0,
        y1 = 0,
        b1 = 25,
        K = null,
        Hr = null,
        wo = -1,
        Gm = !1;
      function Ct() {
        {
          var e = K;
          Hr === null ? (Hr = [e]) : Hr.push(e);
        }
      }
      function de() {
        {
          var e = K;
          Hr !== null && (wo++, Hr[wo] !== e && x1(e));
        }
      }
      function dl(e) {
        e != null &&
          !at(e) &&
          f(
            "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
            K,
            typeof e
          );
      }
      function x1(e) {
        {
          var t = Ke(kt);
          if (!Wm.has(t) && (Wm.add(t), Hr !== null)) {
            for (var n = "", r = 30, o = 0; o <= wo; o++) {
              for (var l = Hr[o], c = o === wo ? e : l, m = o + 1 + ". " + l; m.length < r; )
                m += " ";
              (m +=
                c +
                `
`),
                (n += m);
            }
            f(
              `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
              t,
              n
            );
          }
        }
      }
      function Zn() {
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      }
      function qm(e, t) {
        if (Gm) return !1;
        if (t === null)
          return (
            f(
              "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
              K
            ),
            !1
          );
        e.length !== t.length &&
          f(
            `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
            K,
            "[" + t.join(", ") + "]",
            "[" + e.join(", ") + "]"
          );
        for (var n = 0; n < t.length && n < e.length; n++) if (!Or(e[n], t[n])) return !1;
        return !0;
      }
      function pl(e, t, n, r, o, l) {
        (ci = l),
          (kt = t),
          (Hr = e !== null ? e._debugHookTypes : null),
          (wo = -1),
          (Gm = e !== null && e.type !== t.type),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = ee),
          e !== null && e.memoizedState !== null
            ? (ye.current = Lx)
            : Hr !== null
              ? (ye.current = Mx)
              : (ye.current = Ax);
        var c = n(r, o);
        if (nu) {
          var m = 0;
          do {
            if (((nu = !1), (ru = 0), m >= b1))
              throw new Error(
                "Too many re-renders. React limits the number of renders to prevent an infinite loop."
              );
            (m += 1),
              (Gm = !1),
              (wn = null),
              (Rn = null),
              (t.updateQueue = null),
              (wo = -1),
              (ye.current = jx),
              (c = n(r, o));
          } while (nu);
        }
        (ye.current = Ef), (t._debugHookTypes = Hr);
        var v = wn !== null && wn.next !== null;
        if (
          ((ci = ee),
          (kt = null),
          (wn = null),
          (Rn = null),
          (K = null),
          (Hr = null),
          (wo = -1),
          e !== null &&
            (e.flags & Fa) !== (t.flags & Fa) &&
            (e.mode & ut) !== Ve &&
            f(
              "Internal React error: Expected static flag was missing. Please notify the React team."
            ),
          (sf = !1),
          v)
        )
          throw new Error(
            "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
          );
        return c;
      }
      function ml() {
        var e = ru !== 0;
        return (ru = 0), e;
      }
      function px(e, t, n) {
        (t.updateQueue = e.updateQueue),
          (t.mode & fa) !== Ve ? (t.flags &= -50333701) : (t.flags &= -2053),
          (e.lanes = sc(e.lanes, n));
      }
      function mx() {
        if (((ye.current = Ef), sf)) {
          for (var e = kt.memoizedState; e !== null; ) {
            var t = e.queue;
            t !== null && (t.pending = null), (e = e.next);
          }
          sf = !1;
        }
        (ci = ee),
          (kt = null),
          (wn = null),
          (Rn = null),
          (Hr = null),
          (wo = -1),
          (K = null),
          (Nx = !1),
          (nu = !1),
          (ru = 0);
      }
      function ha() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return Rn === null ? (kt.memoizedState = Rn = e) : (Rn = Rn.next = e), Rn;
      }
      function Br() {
        var e;
        if (wn === null) {
          var t = kt.alternate;
          t !== null ? (e = t.memoizedState) : (e = null);
        } else e = wn.next;
        var n;
        if ((Rn === null ? (n = kt.memoizedState) : (n = Rn.next), n !== null))
          (Rn = n), (n = Rn.next), (wn = e);
        else {
          if (e === null) throw new Error("Rendered more hooks than during the previous render.");
          wn = e;
          var r = {
            memoizedState: wn.memoizedState,
            baseState: wn.baseState,
            baseQueue: wn.baseQueue,
            queue: wn.queue,
            next: null
          };
          Rn === null ? (kt.memoizedState = Rn = r) : (Rn = Rn.next = r);
        }
        return Rn;
      }
      function vx() {
        return { lastEffect: null, stores: null };
      }
      function Km(e, t) {
        return typeof t == "function" ? t(e) : t;
      }
      function Xm(e, t, n) {
        var r = ha(),
          o;
        n !== void 0 ? (o = n(t)) : (o = t), (r.memoizedState = r.baseState = o);
        var l = {
          pending: null,
          interleaved: null,
          lanes: ee,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: o
        };
        r.queue = l;
        var c = (l.dispatch = w1.bind(null, kt, l));
        return [r.memoizedState, c];
      }
      function Qm(e, t, n) {
        var r = Br(),
          o = r.queue;
        if (o === null)
          throw new Error(
            "Should have a queue. This is likely a bug in React. Please file an issue."
          );
        o.lastRenderedReducer = e;
        var l = wn,
          c = l.baseQueue,
          m = o.pending;
        if (m !== null) {
          if (c !== null) {
            var v = c.next,
              x = m.next;
            (c.next = x), (m.next = v);
          }
          l.baseQueue !== c &&
            f(
              "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
            ),
            (l.baseQueue = c = m),
            (o.pending = null);
        }
        if (c !== null) {
          var S = c.next,
            A = l.baseState,
            k = null,
            z = null,
            H = null,
            Y = S;
          do {
            var me = Y.lane;
            if ($i(ci, me)) {
              if (H !== null) {
                var De = {
                  lane: Un,
                  action: Y.action,
                  hasEagerState: Y.hasEagerState,
                  eagerState: Y.eagerState,
                  next: null
                };
                H = H.next = De;
              }
              if (Y.hasEagerState) A = Y.eagerState;
              else {
                var ft = Y.action;
                A = e(A, ft);
              }
            } else {
              var Ae = {
                lane: me,
                action: Y.action,
                hasEagerState: Y.hasEagerState,
                eagerState: Y.eagerState,
                next: null
              };
              H === null ? ((z = H = Ae), (k = A)) : (H = H.next = Ae),
                (kt.lanes = et(kt.lanes, me)),
                wu(me);
            }
            Y = Y.next;
          } while (Y !== null && Y !== S);
          H === null ? (k = A) : (H.next = z),
            Or(A, r.memoizedState) || du(),
            (r.memoizedState = A),
            (r.baseState = k),
            (r.baseQueue = H),
            (o.lastRenderedState = A);
        }
        var ot = o.interleaved;
        if (ot !== null) {
          var V = ot;
          do {
            var W = V.lane;
            (kt.lanes = et(kt.lanes, W)), wu(W), (V = V.next);
          } while (V !== ot);
        } else c === null && (o.lanes = ee);
        var U = o.dispatch;
        return [r.memoizedState, U];
      }
      function Jm(e, t, n) {
        var r = Br(),
          o = r.queue;
        if (o === null)
          throw new Error(
            "Should have a queue. This is likely a bug in React. Please file an issue."
          );
        o.lastRenderedReducer = e;
        var l = o.dispatch,
          c = o.pending,
          m = r.memoizedState;
        if (c !== null) {
          o.pending = null;
          var v = c.next,
            x = v;
          do {
            var S = x.action;
            (m = e(m, S)), (x = x.next);
          } while (x !== v);
          Or(m, r.memoizedState) || du(),
            (r.memoizedState = m),
            r.baseQueue === null && (r.baseState = m),
            (o.lastRenderedState = m);
        }
        return [m, l];
      }
      function HF(e, t, n) {}
      function BF(e, t, n) {}
      function Zm(e, t, n) {
        var r = kt,
          o = ha(),
          l,
          c = Hn();
        if (c) {
          if (n === void 0)
            throw new Error(
              "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
            );
          (l = n()),
            fl ||
              (l !== n() &&
                (f("The result of getServerSnapshot should be cached to avoid an infinite loop"),
                (fl = !0)));
        } else {
          if (((l = t()), !fl)) {
            var m = t();
            Or(l, m) ||
              (f("The result of getSnapshot should be cached to avoid an infinite loop"),
              (fl = !0));
          }
          var v = Pf();
          if (v === null)
            throw new Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          lc(v, ci) || hx(r, t, l);
        }
        o.memoizedState = l;
        var x = { value: l, getSnapshot: t };
        return (
          (o.queue = x),
          pf(yx.bind(null, r, x, e), [e]),
          (r.flags |= lo),
          au(Sn | Bn, gx.bind(null, r, x, l, t), void 0, null),
          l
        );
      }
      function uf(e, t, n) {
        var r = kt,
          o = Br(),
          l = t();
        if (!fl) {
          var c = t();
          Or(l, c) ||
            (f("The result of getSnapshot should be cached to avoid an infinite loop"), (fl = !0));
        }
        var m = o.memoizedState,
          v = !Or(m, l);
        v && ((o.memoizedState = l), du());
        var x = o.queue;
        if (
          (iu(yx.bind(null, r, x, e), [e]),
          x.getSnapshot !== t || v || (Rn !== null && Rn.memoizedState.tag & Sn))
        ) {
          (r.flags |= lo), au(Sn | Bn, gx.bind(null, r, x, l, t), void 0, null);
          var S = Pf();
          if (S === null)
            throw new Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          lc(S, ci) || hx(r, t, l);
        }
        return l;
      }
      function hx(e, t, n) {
        e.flags |= Kd;
        var r = { getSnapshot: t, value: n },
          o = kt.updateQueue;
        if (o === null) (o = vx()), (kt.updateQueue = o), (o.stores = [r]);
        else {
          var l = o.stores;
          l === null ? (o.stores = [r]) : l.push(r);
        }
      }
      function gx(e, t, n, r) {
        (t.value = n), (t.getSnapshot = r), bx(t) && xx(e);
      }
      function yx(e, t, n) {
        var r = function () {
          bx(t) && xx(e);
        };
        return n(r);
      }
      function bx(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !Or(n, r);
        } catch {
          return !0;
        }
      }
      function xx(e) {
        var t = gr(e, Ye);
        t !== null && _n(t, e, Ye, Xt);
      }
      function cf(e) {
        var t = ha();
        typeof e == "function" && (e = e()), (t.memoizedState = t.baseState = e);
        var n = {
          pending: null,
          interleaved: null,
          lanes: ee,
          dispatch: null,
          lastRenderedReducer: Km,
          lastRenderedState: e
        };
        t.queue = n;
        var r = (n.dispatch = R1.bind(null, kt, n));
        return [t.memoizedState, r];
      }
      function ev(e) {
        return Qm(Km);
      }
      function tv(e) {
        return Jm(Km);
      }
      function au(e, t, n, r) {
        var o = { tag: e, create: t, destroy: n, deps: r, next: null },
          l = kt.updateQueue;
        if (l === null) (l = vx()), (kt.updateQueue = l), (l.lastEffect = o.next = o);
        else {
          var c = l.lastEffect;
          if (c === null) l.lastEffect = o.next = o;
          else {
            var m = c.next;
            (c.next = o), (o.next = m), (l.lastEffect = o);
          }
        }
        return o;
      }
      function nv(e) {
        var t = ha();
        {
          var n = { current: e };
          return (t.memoizedState = n), n;
        }
      }
      function ff(e) {
        var t = Br();
        return t.memoizedState;
      }
      function ou(e, t, n, r) {
        var o = ha(),
          l = r === void 0 ? null : r;
        (kt.flags |= e), (o.memoizedState = au(Sn | t, n, void 0, l));
      }
      function df(e, t, n, r) {
        var o = Br(),
          l = r === void 0 ? null : r,
          c = void 0;
        if (wn !== null) {
          var m = wn.memoizedState;
          if (((c = m.destroy), l !== null)) {
            var v = m.deps;
            if (qm(l, v)) {
              o.memoizedState = au(t, n, c, l);
              return;
            }
          }
        }
        (kt.flags |= e), (o.memoizedState = au(Sn | t, n, c, l));
      }
      function pf(e, t) {
        return (kt.mode & fa) !== Ve ? ou(Zd | lo | Jd, Bn, e, t) : ou(lo | Jd, Bn, e, t);
      }
      function iu(e, t) {
        return df(lo, Bn, e, t);
      }
      function rv(e, t) {
        return ou(bt, va, e, t);
      }
      function mf(e, t) {
        return df(bt, va, e, t);
      }
      function av(e, t) {
        var n = bt;
        return (n |= Go), (kt.mode & fa) !== Ve && (n |= so), ou(n, Cn, e, t);
      }
      function vf(e, t) {
        return df(bt, Cn, e, t);
      }
      function Ex(e, t) {
        if (typeof t == "function") {
          var n = t,
            r = e();
          return (
            n(r),
            function () {
              n(null);
            }
          );
        } else if (t != null) {
          var o = t;
          o.hasOwnProperty("current") ||
            f(
              "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
              "an object with keys {" + Object.keys(o).join(", ") + "}"
            );
          var l = e();
          return (
            (o.current = l),
            function () {
              o.current = null;
            }
          );
        }
      }
      function ov(e, t, n) {
        typeof t != "function" &&
          f(
            "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
            t !== null ? typeof t : "null"
          );
        var r = n != null ? n.concat([e]) : null,
          o = bt;
        return (o |= Go), (kt.mode & fa) !== Ve && (o |= so), ou(o, Cn, Ex.bind(null, t, e), r);
      }
      function hf(e, t, n) {
        typeof t != "function" &&
          f(
            "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
            t !== null ? typeof t : "null"
          );
        var r = n != null ? n.concat([e]) : null;
        return df(bt, Cn, Ex.bind(null, t, e), r);
      }
      function E1(e, t) {}
      var gf = E1;
      function iv(e, t) {
        var n = ha(),
          r = t === void 0 ? null : t;
        return (n.memoizedState = [e, r]), e;
      }
      function yf(e, t) {
        var n = Br(),
          r = t === void 0 ? null : t,
          o = n.memoizedState;
        if (o !== null && r !== null) {
          var l = o[1];
          if (qm(r, l)) return o[0];
        }
        return (n.memoizedState = [e, r]), e;
      }
      function lv(e, t) {
        var n = ha(),
          r = t === void 0 ? null : t,
          o = e();
        return (n.memoizedState = [o, r]), o;
      }
      function bf(e, t) {
        var n = Br(),
          r = t === void 0 ? null : t,
          o = n.memoizedState;
        if (o !== null && r !== null) {
          var l = o[1];
          if (qm(r, l)) return o[0];
        }
        var c = e();
        return (n.memoizedState = [c, r]), c;
      }
      function sv(e) {
        var t = ha();
        return (t.memoizedState = e), e;
      }
      function Sx(e) {
        var t = Br(),
          n = wn,
          r = n.memoizedState;
        return wx(t, r, e);
      }
      function Cx(e) {
        var t = Br();
        if (wn === null) return (t.memoizedState = e), e;
        var n = wn.memoizedState;
        return wx(t, n, e);
      }
      function wx(e, t, n) {
        var r = !iT(ci);
        if (r) {
          if (!Or(n, t)) {
            var o = xy();
            (kt.lanes = et(kt.lanes, o)), wu(o), (e.baseState = !0);
          }
          return t;
        } else return e.baseState && ((e.baseState = !1), du()), (e.memoizedState = n), n;
      }
      function S1(e, t, n) {
        var r = Gr();
        Fn(vT(r, Pa)), e(!0);
        var o = tu.transition;
        tu.transition = {};
        var l = tu.transition;
        tu.transition._updatedFibers = new Set();
        try {
          e(!1), t();
        } finally {
          if ((Fn(r), (tu.transition = o), o === null && l._updatedFibers)) {
            var c = l._updatedFibers.size;
            c > 10 &&
              p(
                "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
              ),
              l._updatedFibers.clear();
          }
        }
      }
      function uv() {
        var e = cf(!1),
          t = e[0],
          n = e[1],
          r = S1.bind(null, n),
          o = ha();
        return (o.memoizedState = r), [t, r];
      }
      function Rx() {
        var e = ev(),
          t = e[0],
          n = Br(),
          r = n.memoizedState;
        return [t, r];
      }
      function Tx() {
        var e = tv(),
          t = e[0],
          n = Br(),
          r = n.memoizedState;
        return [t, r];
      }
      var Nx = !1;
      function C1() {
        return Nx;
      }
      function cv() {
        var e = ha(),
          t = Pf(),
          n = t.identifierPrefix,
          r;
        if (Hn()) {
          var o = P_();
          r = ":" + n + "R" + o;
          var l = ru++;
          l > 0 && (r += "H" + l.toString(32)), (r += ":");
        } else {
          var c = y1++;
          r = ":" + n + "r" + c.toString(32) + ":";
        }
        return (e.memoizedState = r), r;
      }
      function xf() {
        var e = Br(),
          t = e.memoizedState;
        return t;
      }
      function w1(e, t, n) {
        typeof arguments[3] == "function" &&
          f(
            "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
          );
        var r = _o(e),
          o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
        if (Dx(e)) _x(t, o);
        else {
          var l = rx(e, t, o, r);
          if (l !== null) {
            var c = cr();
            _n(l, e, r, c), Ox(l, t, r);
          }
        }
        kx(e, r);
      }
      function R1(e, t, n) {
        typeof arguments[3] == "function" &&
          f(
            "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
          );
        var r = _o(e),
          o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
        if (Dx(e)) _x(t, o);
        else {
          var l = e.alternate;
          if (e.lanes === ee && (l === null || l.lanes === ee)) {
            var c = t.lastRenderedReducer;
            if (c !== null) {
              var m;
              (m = ye.current), (ye.current = Jr);
              try {
                var v = t.lastRenderedState,
                  x = c(v, n);
                if (((o.hasEagerState = !0), (o.eagerState = x), Or(x, v))) {
                  u1(e, t, o, r);
                  return;
                }
              } catch {
              } finally {
                ye.current = m;
              }
            }
          }
          var S = rx(e, t, o, r);
          if (S !== null) {
            var A = cr();
            _n(S, e, r, A), Ox(S, t, r);
          }
        }
        kx(e, r);
      }
      function Dx(e) {
        var t = e.alternate;
        return e === kt || (t !== null && t === kt);
      }
      function _x(e, t) {
        nu = sf = !0;
        var n = e.pending;
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
      }
      function Ox(e, t, n) {
        if (by(n)) {
          var r = t.lanes;
          r = Ey(r, e.pendingLanes);
          var o = et(r, n);
          (t.lanes = o), _p(e, o);
        }
      }
      function kx(e, t, n) {
        ap(e, t);
      }
      var Ef = {
          readContext: xn,
          useCallback: Zn,
          useContext: Zn,
          useEffect: Zn,
          useImperativeHandle: Zn,
          useInsertionEffect: Zn,
          useLayoutEffect: Zn,
          useMemo: Zn,
          useReducer: Zn,
          useRef: Zn,
          useState: Zn,
          useDebugValue: Zn,
          useDeferredValue: Zn,
          useTransition: Zn,
          useMutableSource: Zn,
          useSyncExternalStore: Zn,
          useId: Zn,
          unstable_isNewReconciler: Q
        },
        Ax = null,
        Mx = null,
        Lx = null,
        jx = null,
        ga = null,
        Jr = null,
        Sf = null;
      {
        var fv = function () {
            f(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            );
          },
          We = function () {
            f(
              "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"
            );
          };
        (Ax = {
          readContext: function (e) {
            return xn(e);
          },
          useCallback: function (e, t) {
            return (K = "useCallback"), Ct(), dl(t), iv(e, t);
          },
          useContext: function (e) {
            return (K = "useContext"), Ct(), xn(e);
          },
          useEffect: function (e, t) {
            return (K = "useEffect"), Ct(), dl(t), pf(e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return (K = "useImperativeHandle"), Ct(), dl(n), ov(e, t, n);
          },
          useInsertionEffect: function (e, t) {
            return (K = "useInsertionEffect"), Ct(), dl(t), rv(e, t);
          },
          useLayoutEffect: function (e, t) {
            return (K = "useLayoutEffect"), Ct(), dl(t), av(e, t);
          },
          useMemo: function (e, t) {
            (K = "useMemo"), Ct(), dl(t);
            var n = ye.current;
            ye.current = ga;
            try {
              return lv(e, t);
            } finally {
              ye.current = n;
            }
          },
          useReducer: function (e, t, n) {
            (K = "useReducer"), Ct();
            var r = ye.current;
            ye.current = ga;
            try {
              return Xm(e, t, n);
            } finally {
              ye.current = r;
            }
          },
          useRef: function (e) {
            return (K = "useRef"), Ct(), nv(e);
          },
          useState: function (e) {
            (K = "useState"), Ct();
            var t = ye.current;
            ye.current = ga;
            try {
              return cf(e);
            } finally {
              ye.current = t;
            }
          },
          useDebugValue: function (e, t) {
            return (K = "useDebugValue"), Ct(), void 0;
          },
          useDeferredValue: function (e) {
            return (K = "useDeferredValue"), Ct(), sv(e);
          },
          useTransition: function () {
            return (K = "useTransition"), Ct(), uv();
          },
          useMutableSource: function (e, t, n) {
            return (K = "useMutableSource"), Ct(), void 0;
          },
          useSyncExternalStore: function (e, t, n) {
            return (K = "useSyncExternalStore"), Ct(), Zm(e, t, n);
          },
          useId: function () {
            return (K = "useId"), Ct(), cv();
          },
          unstable_isNewReconciler: Q
        }),
          (Mx = {
            readContext: function (e) {
              return xn(e);
            },
            useCallback: function (e, t) {
              return (K = "useCallback"), de(), iv(e, t);
            },
            useContext: function (e) {
              return (K = "useContext"), de(), xn(e);
            },
            useEffect: function (e, t) {
              return (K = "useEffect"), de(), pf(e, t);
            },
            useImperativeHandle: function (e, t, n) {
              return (K = "useImperativeHandle"), de(), ov(e, t, n);
            },
            useInsertionEffect: function (e, t) {
              return (K = "useInsertionEffect"), de(), rv(e, t);
            },
            useLayoutEffect: function (e, t) {
              return (K = "useLayoutEffect"), de(), av(e, t);
            },
            useMemo: function (e, t) {
              (K = "useMemo"), de();
              var n = ye.current;
              ye.current = ga;
              try {
                return lv(e, t);
              } finally {
                ye.current = n;
              }
            },
            useReducer: function (e, t, n) {
              (K = "useReducer"), de();
              var r = ye.current;
              ye.current = ga;
              try {
                return Xm(e, t, n);
              } finally {
                ye.current = r;
              }
            },
            useRef: function (e) {
              return (K = "useRef"), de(), nv(e);
            },
            useState: function (e) {
              (K = "useState"), de();
              var t = ye.current;
              ye.current = ga;
              try {
                return cf(e);
              } finally {
                ye.current = t;
              }
            },
            useDebugValue: function (e, t) {
              return (K = "useDebugValue"), de(), void 0;
            },
            useDeferredValue: function (e) {
              return (K = "useDeferredValue"), de(), sv(e);
            },
            useTransition: function () {
              return (K = "useTransition"), de(), uv();
            },
            useMutableSource: function (e, t, n) {
              return (K = "useMutableSource"), de(), void 0;
            },
            useSyncExternalStore: function (e, t, n) {
              return (K = "useSyncExternalStore"), de(), Zm(e, t, n);
            },
            useId: function () {
              return (K = "useId"), de(), cv();
            },
            unstable_isNewReconciler: Q
          }),
          (Lx = {
            readContext: function (e) {
              return xn(e);
            },
            useCallback: function (e, t) {
              return (K = "useCallback"), de(), yf(e, t);
            },
            useContext: function (e) {
              return (K = "useContext"), de(), xn(e);
            },
            useEffect: function (e, t) {
              return (K = "useEffect"), de(), iu(e, t);
            },
            useImperativeHandle: function (e, t, n) {
              return (K = "useImperativeHandle"), de(), hf(e, t, n);
            },
            useInsertionEffect: function (e, t) {
              return (K = "useInsertionEffect"), de(), mf(e, t);
            },
            useLayoutEffect: function (e, t) {
              return (K = "useLayoutEffect"), de(), vf(e, t);
            },
            useMemo: function (e, t) {
              (K = "useMemo"), de();
              var n = ye.current;
              ye.current = Jr;
              try {
                return bf(e, t);
              } finally {
                ye.current = n;
              }
            },
            useReducer: function (e, t, n) {
              (K = "useReducer"), de();
              var r = ye.current;
              ye.current = Jr;
              try {
                return Qm(e, t, n);
              } finally {
                ye.current = r;
              }
            },
            useRef: function (e) {
              return (K = "useRef"), de(), ff();
            },
            useState: function (e) {
              (K = "useState"), de();
              var t = ye.current;
              ye.current = Jr;
              try {
                return ev(e);
              } finally {
                ye.current = t;
              }
            },
            useDebugValue: function (e, t) {
              return (K = "useDebugValue"), de(), gf();
            },
            useDeferredValue: function (e) {
              return (K = "useDeferredValue"), de(), Sx(e);
            },
            useTransition: function () {
              return (K = "useTransition"), de(), Rx();
            },
            useMutableSource: function (e, t, n) {
              return (K = "useMutableSource"), de(), void 0;
            },
            useSyncExternalStore: function (e, t, n) {
              return (K = "useSyncExternalStore"), de(), uf(e, t);
            },
            useId: function () {
              return (K = "useId"), de(), xf();
            },
            unstable_isNewReconciler: Q
          }),
          (jx = {
            readContext: function (e) {
              return xn(e);
            },
            useCallback: function (e, t) {
              return (K = "useCallback"), de(), yf(e, t);
            },
            useContext: function (e) {
              return (K = "useContext"), de(), xn(e);
            },
            useEffect: function (e, t) {
              return (K = "useEffect"), de(), iu(e, t);
            },
            useImperativeHandle: function (e, t, n) {
              return (K = "useImperativeHandle"), de(), hf(e, t, n);
            },
            useInsertionEffect: function (e, t) {
              return (K = "useInsertionEffect"), de(), mf(e, t);
            },
            useLayoutEffect: function (e, t) {
              return (K = "useLayoutEffect"), de(), vf(e, t);
            },
            useMemo: function (e, t) {
              (K = "useMemo"), de();
              var n = ye.current;
              ye.current = Sf;
              try {
                return bf(e, t);
              } finally {
                ye.current = n;
              }
            },
            useReducer: function (e, t, n) {
              (K = "useReducer"), de();
              var r = ye.current;
              ye.current = Sf;
              try {
                return Jm(e, t, n);
              } finally {
                ye.current = r;
              }
            },
            useRef: function (e) {
              return (K = "useRef"), de(), ff();
            },
            useState: function (e) {
              (K = "useState"), de();
              var t = ye.current;
              ye.current = Sf;
              try {
                return tv(e);
              } finally {
                ye.current = t;
              }
            },
            useDebugValue: function (e, t) {
              return (K = "useDebugValue"), de(), gf();
            },
            useDeferredValue: function (e) {
              return (K = "useDeferredValue"), de(), Cx(e);
            },
            useTransition: function () {
              return (K = "useTransition"), de(), Tx();
            },
            useMutableSource: function (e, t, n) {
              return (K = "useMutableSource"), de(), void 0;
            },
            useSyncExternalStore: function (e, t, n) {
              return (K = "useSyncExternalStore"), de(), uf(e, t);
            },
            useId: function () {
              return (K = "useId"), de(), xf();
            },
            unstable_isNewReconciler: Q
          }),
          (ga = {
            readContext: function (e) {
              return fv(), xn(e);
            },
            useCallback: function (e, t) {
              return (K = "useCallback"), We(), Ct(), iv(e, t);
            },
            useContext: function (e) {
              return (K = "useContext"), We(), Ct(), xn(e);
            },
            useEffect: function (e, t) {
              return (K = "useEffect"), We(), Ct(), pf(e, t);
            },
            useImperativeHandle: function (e, t, n) {
              return (K = "useImperativeHandle"), We(), Ct(), ov(e, t, n);
            },
            useInsertionEffect: function (e, t) {
              return (K = "useInsertionEffect"), We(), Ct(), rv(e, t);
            },
            useLayoutEffect: function (e, t) {
              return (K = "useLayoutEffect"), We(), Ct(), av(e, t);
            },
            useMemo: function (e, t) {
              (K = "useMemo"), We(), Ct();
              var n = ye.current;
              ye.current = ga;
              try {
                return lv(e, t);
              } finally {
                ye.current = n;
              }
            },
            useReducer: function (e, t, n) {
              (K = "useReducer"), We(), Ct();
              var r = ye.current;
              ye.current = ga;
              try {
                return Xm(e, t, n);
              } finally {
                ye.current = r;
              }
            },
            useRef: function (e) {
              return (K = "useRef"), We(), Ct(), nv(e);
            },
            useState: function (e) {
              (K = "useState"), We(), Ct();
              var t = ye.current;
              ye.current = ga;
              try {
                return cf(e);
              } finally {
                ye.current = t;
              }
            },
            useDebugValue: function (e, t) {
              return (K = "useDebugValue"), We(), Ct(), void 0;
            },
            useDeferredValue: function (e) {
              return (K = "useDeferredValue"), We(), Ct(), sv(e);
            },
            useTransition: function () {
              return (K = "useTransition"), We(), Ct(), uv();
            },
            useMutableSource: function (e, t, n) {
              return (K = "useMutableSource"), We(), Ct(), void 0;
            },
            useSyncExternalStore: function (e, t, n) {
              return (K = "useSyncExternalStore"), We(), Ct(), Zm(e, t, n);
            },
            useId: function () {
              return (K = "useId"), We(), Ct(), cv();
            },
            unstable_isNewReconciler: Q
          }),
          (Jr = {
            readContext: function (e) {
              return fv(), xn(e);
            },
            useCallback: function (e, t) {
              return (K = "useCallback"), We(), de(), yf(e, t);
            },
            useContext: function (e) {
              return (K = "useContext"), We(), de(), xn(e);
            },
            useEffect: function (e, t) {
              return (K = "useEffect"), We(), de(), iu(e, t);
            },
            useImperativeHandle: function (e, t, n) {
              return (K = "useImperativeHandle"), We(), de(), hf(e, t, n);
            },
            useInsertionEffect: function (e, t) {
              return (K = "useInsertionEffect"), We(), de(), mf(e, t);
            },
            useLayoutEffect: function (e, t) {
              return (K = "useLayoutEffect"), We(), de(), vf(e, t);
            },
            useMemo: function (e, t) {
              (K = "useMemo"), We(), de();
              var n = ye.current;
              ye.current = Jr;
              try {
                return bf(e, t);
              } finally {
                ye.current = n;
              }
            },
            useReducer: function (e, t, n) {
              (K = "useReducer"), We(), de();
              var r = ye.current;
              ye.current = Jr;
              try {
                return Qm(e, t, n);
              } finally {
                ye.current = r;
              }
            },
            useRef: function (e) {
              return (K = "useRef"), We(), de(), ff();
            },
            useState: function (e) {
              (K = "useState"), We(), de();
              var t = ye.current;
              ye.current = Jr;
              try {
                return ev(e);
              } finally {
                ye.current = t;
              }
            },
            useDebugValue: function (e, t) {
              return (K = "useDebugValue"), We(), de(), gf();
            },
            useDeferredValue: function (e) {
              return (K = "useDeferredValue"), We(), de(), Sx(e);
            },
            useTransition: function () {
              return (K = "useTransition"), We(), de(), Rx();
            },
            useMutableSource: function (e, t, n) {
              return (K = "useMutableSource"), We(), de(), void 0;
            },
            useSyncExternalStore: function (e, t, n) {
              return (K = "useSyncExternalStore"), We(), de(), uf(e, t);
            },
            useId: function () {
              return (K = "useId"), We(), de(), xf();
            },
            unstable_isNewReconciler: Q
          }),
          (Sf = {
            readContext: function (e) {
              return fv(), xn(e);
            },
            useCallback: function (e, t) {
              return (K = "useCallback"), We(), de(), yf(e, t);
            },
            useContext: function (e) {
              return (K = "useContext"), We(), de(), xn(e);
            },
            useEffect: function (e, t) {
              return (K = "useEffect"), We(), de(), iu(e, t);
            },
            useImperativeHandle: function (e, t, n) {
              return (K = "useImperativeHandle"), We(), de(), hf(e, t, n);
            },
            useInsertionEffect: function (e, t) {
              return (K = "useInsertionEffect"), We(), de(), mf(e, t);
            },
            useLayoutEffect: function (e, t) {
              return (K = "useLayoutEffect"), We(), de(), vf(e, t);
            },
            useMemo: function (e, t) {
              (K = "useMemo"), We(), de();
              var n = ye.current;
              ye.current = Jr;
              try {
                return bf(e, t);
              } finally {
                ye.current = n;
              }
            },
            useReducer: function (e, t, n) {
              (K = "useReducer"), We(), de();
              var r = ye.current;
              ye.current = Jr;
              try {
                return Jm(e, t, n);
              } finally {
                ye.current = r;
              }
            },
            useRef: function (e) {
              return (K = "useRef"), We(), de(), ff();
            },
            useState: function (e) {
              (K = "useState"), We(), de();
              var t = ye.current;
              ye.current = Jr;
              try {
                return tv(e);
              } finally {
                ye.current = t;
              }
            },
            useDebugValue: function (e, t) {
              return (K = "useDebugValue"), We(), de(), gf();
            },
            useDeferredValue: function (e) {
              return (K = "useDeferredValue"), We(), de(), Cx(e);
            },
            useTransition: function () {
              return (K = "useTransition"), We(), de(), Tx();
            },
            useMutableSource: function (e, t, n) {
              return (K = "useMutableSource"), We(), de(), void 0;
            },
            useSyncExternalStore: function (e, t, n) {
              return (K = "useSyncExternalStore"), We(), de(), uf(e, t);
            },
            useId: function () {
              return (K = "useId"), We(), de(), xf();
            },
            unstable_isNewReconciler: Q
          });
      }
      var Ro = i.unstable_now,
        Vx = 0,
        Cf = -1,
        lu = -1,
        wf = -1,
        dv = !1,
        Rf = !1;
      function Ux() {
        return dv;
      }
      function T1() {
        Rf = !0;
      }
      function N1() {
        (dv = !1), (Rf = !1);
      }
      function D1() {
        (dv = Rf), (Rf = !1);
      }
      function Fx() {
        return Vx;
      }
      function zx() {
        Vx = Ro();
      }
      function pv(e) {
        (lu = Ro()), e.actualStartTime < 0 && (e.actualStartTime = Ro());
      }
      function Px(e) {
        lu = -1;
      }
      function Tf(e, t) {
        if (lu >= 0) {
          var n = Ro() - lu;
          (e.actualDuration += n), t && (e.selfBaseDuration = n), (lu = -1);
        }
      }
      function ya(e) {
        if (Cf >= 0) {
          var t = Ro() - Cf;
          Cf = -1;
          for (var n = e.return; n !== null; ) {
            switch (n.tag) {
              case g:
                var r = n.stateNode;
                r.effectDuration += t;
                return;
              case J:
                var o = n.stateNode;
                o.effectDuration += t;
                return;
            }
            n = n.return;
          }
        }
      }
      function mv(e) {
        if (wf >= 0) {
          var t = Ro() - wf;
          wf = -1;
          for (var n = e.return; n !== null; ) {
            switch (n.tag) {
              case g:
                var r = n.stateNode;
                r !== null && (r.passiveEffectDuration += t);
                return;
              case J:
                var o = n.stateNode;
                o !== null && (o.passiveEffectDuration += t);
                return;
            }
            n = n.return;
          }
        }
      }
      function ba() {
        Cf = Ro();
      }
      function vv() {
        wf = Ro();
      }
      function hv(e) {
        for (var t = e.child; t; ) (e.actualDuration += t.actualDuration), (t = t.sibling);
      }
      function Zr(e, t) {
        if (e && e.defaultProps) {
          var n = Qe({}, t),
            r = e.defaultProps;
          for (var o in r) n[o] === void 0 && (n[o] = r[o]);
          return n;
        }
        return t;
      }
      var gv = {},
        yv,
        bv,
        xv,
        Ev,
        Sv,
        Hx,
        Nf,
        Cv,
        wv,
        Rv,
        su;
      {
        (yv = new Set()),
          (bv = new Set()),
          (xv = new Set()),
          (Ev = new Set()),
          (Cv = new Set()),
          (Sv = new Set()),
          (wv = new Set()),
          (Rv = new Set()),
          (su = new Set());
        var Bx = new Set();
        (Nf = function (e, t) {
          if (!(e === null || typeof e == "function")) {
            var n = t + "_" + e;
            Bx.has(n) ||
              (Bx.add(n),
              f(
                "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                t,
                e
              ));
          }
        }),
          (Hx = function (e, t) {
            if (t === void 0) {
              var n = yt(e) || "Component";
              Sv.has(n) ||
                (Sv.add(n),
                f(
                  "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                  n
                ));
            }
          }),
          Object.defineProperty(gv, "_processChildContext", {
            enumerable: !1,
            value: function () {
              throw new Error(
                "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
              );
            }
          }),
          Object.freeze(gv);
      }
      function Tv(e, t, n, r) {
        var o = e.memoizedState,
          l = n(r, o);
        {
          if (e.mode & un) {
            Vn(!0);
            try {
              l = n(r, o);
            } finally {
              Vn(!1);
            }
          }
          Hx(t, l);
        }
        var c = l == null ? o : Qe({}, o, l);
        if (((e.memoizedState = c), e.lanes === ee)) {
          var m = e.updateQueue;
          m.baseState = c;
        }
      }
      var Nv = {
        isMounted: bR,
        enqueueSetState: function (e, t, n) {
          var r = ji(e),
            o = cr(),
            l = _o(r),
            c = Ga(o, l);
          (c.payload = t), n != null && (Nf(n, "setState"), (c.callback = n));
          var m = Eo(r, c, l);
          m !== null && (_n(m, r, l, o), tf(m, r, l)), ap(r, l);
        },
        enqueueReplaceState: function (e, t, n) {
          var r = ji(e),
            o = cr(),
            l = _o(r),
            c = Ga(o, l);
          (c.tag = ox), (c.payload = t), n != null && (Nf(n, "replaceState"), (c.callback = n));
          var m = Eo(r, c, l);
          m !== null && (_n(m, r, l, o), tf(m, r, l)), ap(r, l);
        },
        enqueueForceUpdate: function (e, t) {
          var n = ji(e),
            r = cr(),
            o = _o(n),
            l = Ga(r, o);
          (l.tag = Jc), t != null && (Nf(t, "forceUpdate"), (l.callback = t));
          var c = Eo(n, l, o);
          c !== null && (_n(c, n, o, r), tf(c, n, o)), XR(n, o);
        }
      };
      function Ix(e, t, n, r, o, l, c) {
        var m = e.stateNode;
        if (typeof m.shouldComponentUpdate == "function") {
          var v = m.shouldComponentUpdate(r, l, c);
          {
            if (e.mode & un) {
              Vn(!0);
              try {
                v = m.shouldComponentUpdate(r, l, c);
              } finally {
                Vn(!1);
              }
            }
            v === void 0 &&
              f(
                "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
                yt(t) || "Component"
              );
          }
          return v;
        }
        return t.prototype && t.prototype.isPureReactComponent ? !Os(n, r) || !Os(o, l) : !0;
      }
      function _1(e, t, n) {
        var r = e.stateNode;
        {
          var o = yt(t) || "Component",
            l = r.render;
          l ||
            (t.prototype && typeof t.prototype.render == "function"
              ? f(
                  "%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",
                  o
                )
              : f(
                  "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",
                  o
                )),
            r.getInitialState &&
              !r.getInitialState.isReactClassApproved &&
              !r.state &&
              f(
                "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
                o
              ),
            r.getDefaultProps &&
              !r.getDefaultProps.isReactClassApproved &&
              f(
                "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
                o
              ),
            r.propTypes &&
              f(
                "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",
                o
              ),
            r.contextType &&
              f(
                "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
                o
              ),
            t.childContextTypes &&
              !su.has(t) &&
              (e.mode & un) === Ve &&
              (su.add(t),
              f(
                `%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                o
              )),
            t.contextTypes &&
              !su.has(t) &&
              (e.mode & un) === Ve &&
              (su.add(t),
              f(
                `%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                o
              )),
            r.contextTypes &&
              f(
                "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",
                o
              ),
            t.contextType &&
              t.contextTypes &&
              !wv.has(t) &&
              (wv.add(t),
              f(
                "%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",
                o
              )),
            typeof r.componentShouldUpdate == "function" &&
              f(
                "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
                o
              ),
            t.prototype &&
              t.prototype.isPureReactComponent &&
              typeof r.shouldComponentUpdate < "u" &&
              f(
                "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
                yt(t) || "A pure component"
              ),
            typeof r.componentDidUnmount == "function" &&
              f(
                "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
                o
              ),
            typeof r.componentDidReceiveProps == "function" &&
              f(
                "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
                o
              ),
            typeof r.componentWillRecieveProps == "function" &&
              f(
                "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
                o
              ),
            typeof r.UNSAFE_componentWillRecieveProps == "function" &&
              f(
                "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
                o
              );
          var c = r.props !== n;
          r.props !== void 0 &&
            c &&
            f(
              "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
              o,
              o
            ),
            r.defaultProps &&
              f(
                "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
                o,
                o
              ),
            typeof r.getSnapshotBeforeUpdate == "function" &&
              typeof r.componentDidUpdate != "function" &&
              !xv.has(t) &&
              (xv.add(t),
              f(
                "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
                yt(t)
              )),
            typeof r.getDerivedStateFromProps == "function" &&
              f(
                "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                o
              ),
            typeof r.getDerivedStateFromError == "function" &&
              f(
                "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                o
              ),
            typeof t.getSnapshotBeforeUpdate == "function" &&
              f(
                "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
                o
              );
          var m = r.state;
          m &&
            (typeof m != "object" || at(m)) &&
            f("%s.state: must be set to an object or null", o),
            typeof r.getChildContext == "function" &&
              typeof t.childContextTypes != "object" &&
              f(
                "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
                o
              );
        }
      }
      function $x(e, t) {
        (t.updater = Nv), (e.stateNode = t), vR(t, e), (t._reactInternalInstance = gv);
      }
      function Yx(e, t, n) {
        var r = !1,
          o = kr,
          l = kr,
          c = t.contextType;
        if ("contextType" in t) {
          var m = c === null || (c !== void 0 && c.$$typeof === C && c._context === void 0);
          if (!m && !Rv.has(t)) {
            Rv.add(t);
            var v = "";
            c === void 0
              ? (v =
                  " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.")
              : typeof c != "object"
                ? (v = " However, it is set to a " + typeof c + ".")
                : c.$$typeof === te
                  ? (v = " Did you accidentally pass the Context.Provider instead?")
                  : c._context !== void 0
                    ? (v = " Did you accidentally pass the Context.Consumer instead?")
                    : (v =
                        " However, it is set to an object with keys {" +
                        Object.keys(c).join(", ") +
                        "}."),
              f(
                "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
                yt(t) || "Component",
                v
              );
          }
        }
        if (typeof c == "object" && c !== null) l = xn(c);
        else {
          o = el(e, t, !0);
          var x = t.contextTypes;
          (r = x != null), (l = r ? tl(e, o) : kr);
        }
        var S = new t(n, l);
        if (e.mode & un) {
          Vn(!0);
          try {
            S = new t(n, l);
          } finally {
            Vn(!1);
          }
        }
        var A = (e.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null);
        $x(e, S);
        {
          if (typeof t.getDerivedStateFromProps == "function" && A === null) {
            var k = yt(t) || "Component";
            bv.has(k) ||
              (bv.add(k),
              f(
                "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
                k,
                S.state === null ? "null" : "undefined",
                k
              ));
          }
          if (
            typeof t.getDerivedStateFromProps == "function" ||
            typeof S.getSnapshotBeforeUpdate == "function"
          ) {
            var z = null,
              H = null,
              Y = null;
            if (
              (typeof S.componentWillMount == "function" &&
              S.componentWillMount.__suppressDeprecationWarning !== !0
                ? (z = "componentWillMount")
                : typeof S.UNSAFE_componentWillMount == "function" &&
                  (z = "UNSAFE_componentWillMount"),
              typeof S.componentWillReceiveProps == "function" &&
              S.componentWillReceiveProps.__suppressDeprecationWarning !== !0
                ? (H = "componentWillReceiveProps")
                : typeof S.UNSAFE_componentWillReceiveProps == "function" &&
                  (H = "UNSAFE_componentWillReceiveProps"),
              typeof S.componentWillUpdate == "function" &&
              S.componentWillUpdate.__suppressDeprecationWarning !== !0
                ? (Y = "componentWillUpdate")
                : typeof S.UNSAFE_componentWillUpdate == "function" &&
                  (Y = "UNSAFE_componentWillUpdate"),
              z !== null || H !== null || Y !== null)
            ) {
              var me = yt(t) || "Component",
                Ae =
                  typeof t.getDerivedStateFromProps == "function"
                    ? "getDerivedStateFromProps()"
                    : "getSnapshotBeforeUpdate()";
              Ev.has(me) ||
                (Ev.add(me),
                f(
                  `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
                  me,
                  Ae,
                  z !== null
                    ? `
  ` + z
                    : "",
                  H !== null
                    ? `
  ` + H
                    : "",
                  Y !== null
                    ? `
  ` + Y
                    : ""
                ));
            }
          }
        }
        return r && Lb(e, o, l), S;
      }
      function O1(e, t) {
        var n = t.state;
        typeof t.componentWillMount == "function" && t.componentWillMount(),
          typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(),
          n !== t.state &&
            (f(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              Ke(e) || "Component"
            ),
            Nv.enqueueReplaceState(t, t.state, null));
      }
      function Wx(e, t, n, r) {
        var o = t.state;
        if (
          (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
          typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== o)
        ) {
          {
            var l = Ke(e) || "Component";
            yv.has(l) ||
              (yv.add(l),
              f(
                "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                l
              ));
          }
          Nv.enqueueReplaceState(t, t.state, null);
        }
      }
      function Dv(e, t, n, r) {
        _1(e, t, n);
        var o = e.stateNode;
        (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Um(e);
        var l = t.contextType;
        if (typeof l == "object" && l !== null) o.context = xn(l);
        else {
          var c = el(e, t, !0);
          o.context = tl(e, c);
        }
        {
          if (o.state === n) {
            var m = yt(t) || "Component";
            Cv.has(m) ||
              (Cv.add(m),
              f(
                "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                m
              ));
          }
          e.mode & un && Xr.recordLegacyContextWarning(e, o),
            Xr.recordUnsafeLifecycleWarnings(e, o);
        }
        o.state = e.memoizedState;
        var v = t.getDerivedStateFromProps;
        if (
          (typeof v == "function" && (Tv(e, t, v, n), (o.state = e.memoizedState)),
          typeof t.getDerivedStateFromProps != "function" &&
            typeof o.getSnapshotBeforeUpdate != "function" &&
            (typeof o.UNSAFE_componentWillMount == "function" ||
              typeof o.componentWillMount == "function") &&
            (O1(e, o), nf(e, n, o, r), (o.state = e.memoizedState)),
          typeof o.componentDidMount == "function")
        ) {
          var x = bt;
          (x |= Go), (e.mode & fa) !== Ve && (x |= so), (e.flags |= x);
        }
      }
      function k1(e, t, n, r) {
        var o = e.stateNode,
          l = e.memoizedProps;
        o.props = l;
        var c = o.context,
          m = t.contextType,
          v = kr;
        if (typeof m == "object" && m !== null) v = xn(m);
        else {
          var x = el(e, t, !0);
          v = tl(e, x);
        }
        var S = t.getDerivedStateFromProps,
          A = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        !A &&
          (typeof o.UNSAFE_componentWillReceiveProps == "function" ||
            typeof o.componentWillReceiveProps == "function") &&
          (l !== n || c !== v) &&
          Wx(e, o, n, v),
          lx();
        var k = e.memoizedState,
          z = (o.state = k);
        if ((nf(e, n, o, r), (z = e.memoizedState), l === n && k === z && !Uc() && !rf())) {
          if (typeof o.componentDidMount == "function") {
            var H = bt;
            (H |= Go), (e.mode & fa) !== Ve && (H |= so), (e.flags |= H);
          }
          return !1;
        }
        typeof S == "function" && (Tv(e, t, S, n), (z = e.memoizedState));
        var Y = rf() || Ix(e, t, l, n, k, z, v);
        if (Y) {
          if (
            (!A &&
              (typeof o.UNSAFE_componentWillMount == "function" ||
                typeof o.componentWillMount == "function") &&
              (typeof o.componentWillMount == "function" && o.componentWillMount(),
              typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
            typeof o.componentDidMount == "function")
          ) {
            var me = bt;
            (me |= Go), (e.mode & fa) !== Ve && (me |= so), (e.flags |= me);
          }
        } else {
          if (typeof o.componentDidMount == "function") {
            var Ae = bt;
            (Ae |= Go), (e.mode & fa) !== Ve && (Ae |= so), (e.flags |= Ae);
          }
          (e.memoizedProps = n), (e.memoizedState = z);
        }
        return (o.props = n), (o.state = z), (o.context = v), Y;
      }
      function A1(e, t, n, r, o) {
        var l = t.stateNode;
        ix(e, t);
        var c = t.memoizedProps,
          m = t.type === t.elementType ? c : Zr(t.type, c);
        l.props = m;
        var v = t.pendingProps,
          x = l.context,
          S = n.contextType,
          A = kr;
        if (typeof S == "object" && S !== null) A = xn(S);
        else {
          var k = el(t, n, !0);
          A = tl(t, k);
        }
        var z = n.getDerivedStateFromProps,
          H = typeof z == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        !H &&
          (typeof l.UNSAFE_componentWillReceiveProps == "function" ||
            typeof l.componentWillReceiveProps == "function") &&
          (c !== v || x !== A) &&
          Wx(t, l, r, A),
          lx();
        var Y = t.memoizedState,
          me = (l.state = Y);
        if ((nf(t, r, l, o), (me = t.memoizedState), c === v && Y === me && !Uc() && !rf() && !Je))
          return (
            typeof l.componentDidUpdate == "function" &&
              (c !== e.memoizedProps || Y !== e.memoizedState) &&
              (t.flags |= bt),
            typeof l.getSnapshotBeforeUpdate == "function" &&
              (c !== e.memoizedProps || Y !== e.memoizedState) &&
              (t.flags |= Ui),
            !1
          );
        typeof z == "function" && (Tv(t, n, z, r), (me = t.memoizedState));
        var Ae = rf() || Ix(t, n, m, r, Y, me, A) || Je;
        return (
          Ae
            ? (!H &&
                (typeof l.UNSAFE_componentWillUpdate == "function" ||
                  typeof l.componentWillUpdate == "function") &&
                (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, me, A),
                typeof l.UNSAFE_componentWillUpdate == "function" &&
                  l.UNSAFE_componentWillUpdate(r, me, A)),
              typeof l.componentDidUpdate == "function" && (t.flags |= bt),
              typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= Ui))
            : (typeof l.componentDidUpdate == "function" &&
                (c !== e.memoizedProps || Y !== e.memoizedState) &&
                (t.flags |= bt),
              typeof l.getSnapshotBeforeUpdate == "function" &&
                (c !== e.memoizedProps || Y !== e.memoizedState) &&
                (t.flags |= Ui),
              (t.memoizedProps = r),
              (t.memoizedState = me)),
          (l.props = r),
          (l.state = me),
          (l.context = A),
          Ae
        );
      }
      function fi(e, t) {
        return { value: e, source: t, stack: zo(t), digest: null };
      }
      function _v(e, t, n) {
        return { value: e, source: null, stack: n ?? null, digest: t ?? null };
      }
      function M1(e, t) {
        return !0;
      }
      function Ov(e, t) {
        try {
          var n = M1(e, t);
          if (n === !1) return;
          var r = t.value,
            o = t.source,
            l = t.stack,
            c = l !== null ? l : "";
          if (r != null && r._suppressLogging) {
            if (e.tag === y) return;
            console.error(r);
          }
          var m = o ? Ke(o) : null,
            v = m
              ? "The above error occurred in the <" + m + "> component:"
              : "The above error occurred in one of your React components:",
            x;
          if (e.tag === g)
            x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
          else {
            var S = Ke(e) || "Anonymous";
            x =
              "React will try to recreate this component tree from scratch " +
              ("using the error boundary you provided, " + S + ".");
          }
          var A =
            v +
            `
` +
            c +
            `

` +
            ("" + x);
          console.error(A);
        } catch (k) {
          setTimeout(function () {
            throw k;
          });
        }
      }
      var L1 = typeof WeakMap == "function" ? WeakMap : Map;
      function Gx(e, t, n) {
        var r = Ga(Xt, n);
        (r.tag = jm), (r.payload = { element: null });
        var o = t.value;
        return (
          (r.callback = function () {
            Tk(o), Ov(e, t);
          }),
          r
        );
      }
      function kv(e, t, n) {
        var r = Ga(Xt, n);
        r.tag = jm;
        var o = e.type.getDerivedStateFromError;
        if (typeof o == "function") {
          var l = t.value;
          (r.payload = function () {
            return o(l);
          }),
            (r.callback = function () {
              aE(e), Ov(e, t);
            });
        }
        var c = e.stateNode;
        return (
          c !== null &&
            typeof c.componentDidCatch == "function" &&
            (r.callback = function () {
              aE(e), Ov(e, t), typeof o != "function" && wk(this);
              var v = t.value,
                x = t.stack;
              this.componentDidCatch(v, { componentStack: x !== null ? x : "" }),
                typeof o != "function" &&
                  (Nr(e.lanes, Ye) ||
                    f(
                      "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
                      Ke(e) || "Unknown"
                    ));
            }),
          r
        );
      }
      function qx(e, t, n) {
        var r = e.pingCache,
          o;
        if (
          (r === null
            ? ((r = e.pingCache = new L1()), (o = new Set()), r.set(t, o))
            : ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))),
          !o.has(n))
        ) {
          o.add(n);
          var l = Nk.bind(null, e, t, n);
          Wr && Ru(e, n), t.then(l, l);
        }
      }
      function j1(e, t, n, r) {
        var o = e.updateQueue;
        if (o === null) {
          var l = new Set();
          l.add(n), (e.updateQueue = l);
        } else o.add(n);
      }
      function V1(e, t) {
        var n = e.tag;
        if ((e.mode & ut) === Ve && (n === b || n === G || n === X)) {
          var r = e.alternate;
          r
            ? ((e.updateQueue = r.updateQueue),
              (e.memoizedState = r.memoizedState),
              (e.lanes = r.lanes))
            : ((e.updateQueue = null), (e.memoizedState = null));
        }
      }
      function Kx(e) {
        var t = e;
        do {
          if (t.tag === q && h1(t)) return t;
          t = t.return;
        } while (t !== null);
        return null;
      }
      function Xx(e, t, n, r, o) {
        if ((e.mode & ut) === Ve) {
          if (e === t) e.flags |= lr;
          else {
            if (((e.flags |= xt), (n.flags |= Xd), (n.flags &= -52805), n.tag === y)) {
              var l = n.alternate;
              if (l === null) n.tag = Ne;
              else {
                var c = Ga(Xt, Ye);
                (c.tag = Jc), Eo(n, c, Ye);
              }
            }
            n.lanes = et(n.lanes, Ye);
          }
          return e;
        }
        return (e.flags |= lr), (e.lanes = o), e;
      }
      function U1(e, t, n, r, o) {
        if (
          ((n.flags |= tc),
          Wr && Ru(e, o),
          r !== null && typeof r == "object" && typeof r.then == "function")
        ) {
          var l = r;
          V1(n), Hn() && n.mode & ut && Hb();
          var c = Kx(t);
          if (c !== null) {
            (c.flags &= ~Va), Xx(c, t, n, e, o), c.mode & ut && qx(e, l, o), j1(c, e, l);
            return;
          } else {
            if (!oT(o)) {
              qx(e, l, o), ch();
              return;
            }
            var m = new Error(
              "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
            );
            r = m;
          }
        } else if (Hn() && n.mode & ut) {
          Hb();
          var v = Kx(t);
          if (v !== null) {
            (v.flags & lr) === Pe && (v.flags |= Va), Xx(v, t, n, e, o), Cm(fi(r, n));
            return;
          }
        }
        (r = fi(r, n)), hk(r);
        var x = t;
        do {
          switch (x.tag) {
            case g: {
              var S = r;
              x.flags |= lr;
              var A = vs(o);
              x.lanes = et(x.lanes, A);
              var k = Gx(x, S, A);
              Fm(x, k);
              return;
            }
            case y:
              var z = r,
                H = x.type,
                Y = x.stateNode;
              if (
                (x.flags & xt) === Pe &&
                (typeof H.getDerivedStateFromError == "function" ||
                  (Y !== null && typeof Y.componentDidCatch == "function" && !K0(Y)))
              ) {
                x.flags |= lr;
                var me = vs(o);
                x.lanes = et(x.lanes, me);
                var Ae = kv(x, z, me);
                Fm(x, Ae);
                return;
              }
              break;
          }
          x = x.return;
        } while (x !== null);
      }
      function F1() {
        return null;
      }
      var uu = s.ReactCurrentOwner,
        ea = !1,
        Av,
        cu,
        Mv,
        Lv,
        jv,
        di,
        Vv,
        Df,
        fu;
      (Av = {}),
        (cu = {}),
        (Mv = {}),
        (Lv = {}),
        (jv = {}),
        (di = !1),
        (Vv = {}),
        (Df = {}),
        (fu = {});
      function sr(e, t, n, r) {
        e === null ? (t.child = Zb(t, null, n, r)) : (t.child = ol(t, e.child, n, r));
      }
      function z1(e, t, n, r) {
        (t.child = ol(t, e.child, null, r)), (t.child = ol(t, null, n, r));
      }
      function Qx(e, t, n, r, o) {
        if (t.type !== t.elementType) {
          var l = n.propTypes;
          l && qr(l, r, "prop", yt(n));
        }
        var c = n.render,
          m = t.ref,
          v,
          x;
        ll(t, o), us(t);
        {
          if (((uu.current = t), Ur(!0), (v = pl(e, t, c, r, m, o)), (x = ml()), t.mode & un)) {
            Vn(!0);
            try {
              (v = pl(e, t, c, r, m, o)), (x = ml());
            } finally {
              Vn(!1);
            }
          }
          Ur(!1);
        }
        return (
          Pi(),
          e !== null && !ea
            ? (px(e, t, o), qa(e, t, o))
            : (Hn() && x && gm(t), (t.flags |= Vi), sr(e, t, v, o), t.child)
        );
      }
      function Jx(e, t, n, r, o) {
        if (e === null) {
          var l = n.type;
          if ($k(l) && n.compare === null && n.defaultProps === void 0) {
            var c = l;
            return (c = Sl(l)), (t.tag = X), (t.type = c), zv(t, l), Zx(e, t, c, r, o);
          }
          {
            var m = l.propTypes;
            if ((m && qr(m, r, "prop", yt(l)), n.defaultProps !== void 0)) {
              var v = yt(l) || "Unknown";
              fu[v] ||
                (f(
                  "%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.",
                  v
                ),
                (fu[v] = !0));
            }
          }
          var x = Eh(n.type, null, r, t, t.mode, o);
          return (x.ref = t.ref), (x.return = t), (t.child = x), x;
        }
        {
          var S = n.type,
            A = S.propTypes;
          A && qr(A, r, "prop", yt(S));
        }
        var k = e.child,
          z = Yv(e, o);
        if (!z) {
          var H = k.memoizedProps,
            Y = n.compare;
          if (((Y = Y !== null ? Y : Os), Y(H, r) && e.ref === t.ref)) return qa(e, t, o);
        }
        t.flags |= Vi;
        var me = gi(k, r);
        return (me.ref = t.ref), (me.return = t), (t.child = me), me;
      }
      function Zx(e, t, n, r, o) {
        if (t.type !== t.elementType) {
          var l = t.elementType;
          if (l.$$typeof === ce) {
            var c = l,
              m = c._payload,
              v = c._init;
            try {
              l = v(m);
            } catch {
              l = null;
            }
            var x = l && l.propTypes;
            x && qr(x, r, "prop", yt(l));
          }
        }
        if (e !== null) {
          var S = e.memoizedProps;
          if (Os(S, r) && e.ref === t.ref && t.type === e.type)
            if (((ea = !1), (t.pendingProps = r = S), Yv(e, o))) (e.flags & Xd) !== Pe && (ea = !0);
            else return (t.lanes = e.lanes), qa(e, t, o);
        }
        return Uv(e, t, n, r, o);
      }
      function e0(e, t, n) {
        var r = t.pendingProps,
          o = r.children,
          l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden" || Ze)
          if ((t.mode & ut) === Ve) {
            var c = { baseLanes: ee, cachePool: null, transitions: null };
            (t.memoizedState = c), Hf(t, n);
          } else if (Nr(n, Tr)) {
            var A = { baseLanes: ee, cachePool: null, transitions: null };
            t.memoizedState = A;
            var k = l !== null ? l.baseLanes : n;
            Hf(t, k);
          } else {
            var m = null,
              v;
            if (l !== null) {
              var x = l.baseLanes;
              v = et(x, n);
            } else v = n;
            t.lanes = t.childLanes = Tr;
            var S = { baseLanes: v, cachePool: m, transitions: null };
            return (t.memoizedState = S), (t.updateQueue = null), Hf(t, v), null;
          }
        else {
          var z;
          l !== null ? ((z = et(l.baseLanes, n)), (t.memoizedState = null)) : (z = n), Hf(t, z);
        }
        return sr(e, t, o, n), t.child;
      }
      function P1(e, t, n) {
        var r = t.pendingProps;
        return sr(e, t, r, n), t.child;
      }
      function H1(e, t, n) {
        var r = t.pendingProps.children;
        return sr(e, t, r, n), t.child;
      }
      function B1(e, t, n) {
        {
          t.flags |= bt;
          {
            var r = t.stateNode;
            (r.effectDuration = 0), (r.passiveEffectDuration = 0);
          }
        }
        var o = t.pendingProps,
          l = o.children;
        return sr(e, t, l, n), t.child;
      }
      function t0(e, t) {
        var n = t.ref;
        ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
          ((t.flags |= Yo), (t.flags |= Qd));
      }
      function Uv(e, t, n, r, o) {
        if (t.type !== t.elementType) {
          var l = n.propTypes;
          l && qr(l, r, "prop", yt(n));
        }
        var c;
        {
          var m = el(t, n, !0);
          c = tl(t, m);
        }
        var v, x;
        ll(t, o), us(t);
        {
          if (((uu.current = t), Ur(!0), (v = pl(e, t, n, r, c, o)), (x = ml()), t.mode & un)) {
            Vn(!0);
            try {
              (v = pl(e, t, n, r, c, o)), (x = ml());
            } finally {
              Vn(!1);
            }
          }
          Ur(!1);
        }
        return (
          Pi(),
          e !== null && !ea
            ? (px(e, t, o), qa(e, t, o))
            : (Hn() && x && gm(t), (t.flags |= Vi), sr(e, t, v, o), t.child)
        );
      }
      function n0(e, t, n, r, o) {
        {
          switch (oA(t)) {
            case !1: {
              var l = t.stateNode,
                c = t.type,
                m = new c(t.memoizedProps, l.context),
                v = m.state;
              l.updater.enqueueSetState(l, v, null);
              break;
            }
            case !0: {
              (t.flags |= xt), (t.flags |= lr);
              var x = new Error("Simulated error coming from DevTools"),
                S = vs(o);
              t.lanes = et(t.lanes, S);
              var A = kv(t, fi(x, t), S);
              Fm(t, A);
              break;
            }
          }
          if (t.type !== t.elementType) {
            var k = n.propTypes;
            k && qr(k, r, "prop", yt(n));
          }
        }
        var z;
        ma(n) ? ((z = !0), zc(t)) : (z = !1), ll(t, o);
        var H = t.stateNode,
          Y;
        H === null
          ? (Of(e, t), Yx(t, n, r), Dv(t, n, r, o), (Y = !0))
          : e === null
            ? (Y = k1(t, n, r, o))
            : (Y = A1(e, t, n, r, o));
        var me = Fv(e, t, n, Y, z, o);
        {
          var Ae = t.stateNode;
          Y &&
            Ae.props !== r &&
            (di ||
              f(
                "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
                Ke(t) || "a component"
              ),
            (di = !0));
        }
        return me;
      }
      function Fv(e, t, n, r, o, l) {
        t0(e, t);
        var c = (t.flags & xt) !== Pe;
        if (!r && !c) return o && Ub(t, n, !1), qa(e, t, l);
        var m = t.stateNode;
        uu.current = t;
        var v;
        if (c && typeof n.getDerivedStateFromError != "function") (v = null), Px();
        else {
          us(t);
          {
            if ((Ur(!0), (v = m.render()), t.mode & un)) {
              Vn(!0);
              try {
                m.render();
              } finally {
                Vn(!1);
              }
            }
            Ur(!1);
          }
          Pi();
        }
        return (
          (t.flags |= Vi),
          e !== null && c ? z1(e, t, v, l) : sr(e, t, v, l),
          (t.memoizedState = m.state),
          o && Ub(t, n, !0),
          t.child
        );
      }
      function r0(e) {
        var t = e.stateNode;
        t.pendingContext
          ? jb(e, t.pendingContext, t.pendingContext !== t.context)
          : t.context && jb(e, t.context, !1),
          zm(e, t.containerInfo);
      }
      function I1(e, t, n) {
        if ((r0(t), e === null))
          throw new Error("Should have a current fiber. This is a bug in React.");
        var r = t.pendingProps,
          o = t.memoizedState,
          l = o.element;
        ix(e, t), nf(t, r, null, n);
        var c = t.memoizedState;
        t.stateNode;
        var m = c.element;
        if (o.isDehydrated) {
          var v = {
              element: m,
              isDehydrated: !1,
              cache: c.cache,
              pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
              transitions: c.transitions
            },
            x = t.updateQueue;
          if (((x.baseState = v), (t.memoizedState = v), t.flags & Va)) {
            var S = fi(
              new Error(
                "There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."
              ),
              t
            );
            return a0(e, t, m, n, S);
          } else if (m !== l) {
            var A = fi(
              new Error(
                "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
              ),
              t
            );
            return a0(e, t, m, n, A);
          } else {
            W_(t);
            var k = Zb(t, null, m, n);
            t.child = k;
            for (var z = k; z; ) (z.flags = (z.flags & ~bn) | Ua), (z = z.sibling);
          }
        } else {
          if ((al(), m === l)) return qa(e, t, n);
          sr(e, t, m, n);
        }
        return t.child;
      }
      function a0(e, t, n, r, o) {
        return al(), Cm(o), (t.flags |= Va), sr(e, t, n, r), t.child;
      }
      function $1(e, t, n) {
        cx(t), e === null && Sm(t);
        var r = t.type,
          o = t.pendingProps,
          l = e !== null ? e.memoizedProps : null,
          c = o.children,
          m = rm(r, o);
        return (
          m ? (c = null) : l !== null && rm(r, l) && (t.flags |= ls),
          t0(e, t),
          sr(e, t, c, n),
          t.child
        );
      }
      function Y1(e, t) {
        return e === null && Sm(t), null;
      }
      function W1(e, t, n, r) {
        Of(e, t);
        var o = t.pendingProps,
          l = n,
          c = l._payload,
          m = l._init,
          v = m(c);
        t.type = v;
        var x = (t.tag = Yk(v)),
          S = Zr(v, o),
          A;
        switch (x) {
          case b:
            return zv(t, v), (t.type = v = Sl(v)), (A = Uv(null, t, v, S, r)), A;
          case y:
            return (t.type = v = vh(v)), (A = n0(null, t, v, S, r)), A;
          case G:
            return (t.type = v = hh(v)), (A = Qx(null, t, v, S, r)), A;
          case oe: {
            if (t.type !== t.elementType) {
              var k = v.propTypes;
              k && qr(k, S, "prop", yt(v));
            }
            return (A = Jx(null, t, v, Zr(v.type, S), r)), A;
          }
        }
        var z = "";
        throw (
          (v !== null &&
            typeof v == "object" &&
            v.$$typeof === ce &&
            (z = " Did you wrap a component in React.lazy() more than once?"),
          new Error(
            "Element type is invalid. Received a promise that resolves to: " +
              v +
              ". " +
              ("Lazy element type must resolve to a class or function." + z)
          ))
        );
      }
      function G1(e, t, n, r, o) {
        Of(e, t), (t.tag = y);
        var l;
        return (
          ma(n) ? ((l = !0), zc(t)) : (l = !1),
          ll(t, o),
          Yx(t, n, r),
          Dv(t, n, r, o),
          Fv(null, t, n, !0, l, o)
        );
      }
      function q1(e, t, n, r) {
        Of(e, t);
        var o = t.pendingProps,
          l;
        {
          var c = el(t, n, !1);
          l = tl(t, c);
        }
        ll(t, r);
        var m, v;
        us(t);
        {
          if (n.prototype && typeof n.prototype.render == "function") {
            var x = yt(n) || "Unknown";
            Av[x] ||
              (f(
                "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
                x,
                x
              ),
              (Av[x] = !0));
          }
          t.mode & un && Xr.recordLegacyContextWarning(t, null),
            Ur(!0),
            (uu.current = t),
            (m = pl(null, t, n, o, l, r)),
            (v = ml()),
            Ur(!1);
        }
        if (
          (Pi(),
          (t.flags |= Vi),
          typeof m == "object" &&
            m !== null &&
            typeof m.render == "function" &&
            m.$$typeof === void 0)
        ) {
          var S = yt(n) || "Unknown";
          cu[S] ||
            (f(
              "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
              S,
              S,
              S
            ),
            (cu[S] = !0));
        }
        if (
          typeof m == "object" &&
          m !== null &&
          typeof m.render == "function" &&
          m.$$typeof === void 0
        ) {
          {
            var A = yt(n) || "Unknown";
            cu[A] ||
              (f(
                "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                A,
                A,
                A
              ),
              (cu[A] = !0));
          }
          (t.tag = y), (t.memoizedState = null), (t.updateQueue = null);
          var k = !1;
          return (
            ma(n) ? ((k = !0), zc(t)) : (k = !1),
            (t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null),
            Um(t),
            $x(t, m),
            Dv(t, n, o, r),
            Fv(null, t, n, !0, k, r)
          );
        } else {
          if (((t.tag = b), t.mode & un)) {
            Vn(!0);
            try {
              (m = pl(null, t, n, o, l, r)), (v = ml());
            } finally {
              Vn(!1);
            }
          }
          return Hn() && v && gm(t), sr(null, t, m, r), zv(t, n), t.child;
        }
      }
      function zv(e, t) {
        {
          if (
            (t &&
              t.childContextTypes &&
              f(
                "%s(...): childContextTypes cannot be defined on a function component.",
                t.displayName || t.name || "Component"
              ),
            e.ref !== null)
          ) {
            var n = "",
              r = oo();
            r &&
              (n +=
                `

Check the render method of \`` +
                r +
                "`.");
            var o = r || "",
              l = e._debugSource;
            l && (o = l.fileName + ":" + l.lineNumber),
              jv[o] ||
                ((jv[o] = !0),
                f(
                  "Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",
                  n
                ));
          }
          if (t.defaultProps !== void 0) {
            var c = yt(t) || "Unknown";
            fu[c] ||
              (f(
                "%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.",
                c
              ),
              (fu[c] = !0));
          }
          if (typeof t.getDerivedStateFromProps == "function") {
            var m = yt(t) || "Unknown";
            Lv[m] ||
              (f("%s: Function components do not support getDerivedStateFromProps.", m),
              (Lv[m] = !0));
          }
          if (typeof t.contextType == "object" && t.contextType !== null) {
            var v = yt(t) || "Unknown";
            Mv[v] || (f("%s: Function components do not support contextType.", v), (Mv[v] = !0));
          }
        }
      }
      var Pv = { dehydrated: null, treeContext: null, retryLane: Un };
      function Hv(e) {
        return { baseLanes: e, cachePool: F1(), transitions: null };
      }
      function K1(e, t) {
        var n = null;
        return { baseLanes: et(e.baseLanes, t), cachePool: n, transitions: e.transitions };
      }
      function X1(e, t, n, r) {
        if (t !== null) {
          var o = t.memoizedState;
          if (o === null) return !1;
        }
        return Bm(e, eu);
      }
      function Q1(e, t) {
        return sc(e.childLanes, t);
      }
      function o0(e, t, n) {
        var r = t.pendingProps;
        iA(t) && (t.flags |= xt);
        var o = Qr.current,
          l = !1,
          c = (t.flags & xt) !== Pe;
        if (
          (c || X1(o, e)
            ? ((l = !0), (t.flags &= ~xt))
            : (e === null || e.memoizedState !== null) && (o = v1(o, dx)),
          (o = ul(o)),
          Co(t, o),
          e === null)
        ) {
          Sm(t);
          var m = t.memoizedState;
          if (m !== null) {
            var v = m.dehydrated;
            if (v !== null) return nO(t, v);
          }
          var x = r.children,
            S = r.fallback;
          if (l) {
            var A = J1(t, x, S, n),
              k = t.child;
            return (k.memoizedState = Hv(n)), (t.memoizedState = Pv), A;
          } else return Bv(t, x);
        } else {
          var z = e.memoizedState;
          if (z !== null) {
            var H = z.dehydrated;
            if (H !== null) return rO(e, t, c, r, H, z, n);
          }
          if (l) {
            var Y = r.fallback,
              me = r.children,
              Ae = eO(e, t, me, Y, n),
              De = t.child,
              ft = e.child.memoizedState;
            return (
              (De.memoizedState = ft === null ? Hv(n) : K1(ft, n)),
              (De.childLanes = Q1(e, n)),
              (t.memoizedState = Pv),
              Ae
            );
          } else {
            var ot = r.children,
              V = Z1(e, t, ot, n);
            return (t.memoizedState = null), V;
          }
        }
      }
      function Bv(e, t, n) {
        var r = e.mode,
          o = { mode: "visible", children: t },
          l = Iv(o, r);
        return (l.return = e), (e.child = l), l;
      }
      function J1(e, t, n, r) {
        var o = e.mode,
          l = e.child,
          c = { mode: "hidden", children: t },
          m,
          v;
        return (
          (o & ut) === Ve && l !== null
            ? ((m = l),
              (m.childLanes = ee),
              (m.pendingProps = c),
              e.mode & Ot &&
                ((m.actualDuration = 0),
                (m.actualStartTime = -1),
                (m.selfBaseDuration = 0),
                (m.treeBaseDuration = 0)),
              (v = ko(n, o, r, null)))
            : ((m = Iv(c, o)), (v = ko(n, o, r, null))),
          (m.return = e),
          (v.return = e),
          (m.sibling = v),
          (e.child = m),
          v
        );
      }
      function Iv(e, t, n) {
        return iE(e, t, ee, null);
      }
      function i0(e, t) {
        return gi(e, t);
      }
      function Z1(e, t, n, r) {
        var o = e.child,
          l = o.sibling,
          c = i0(o, { mode: "visible", children: n });
        if (
          ((t.mode & ut) === Ve && (c.lanes = r), (c.return = t), (c.sibling = null), l !== null)
        ) {
          var m = t.deletions;
          m === null ? ((t.deletions = [l]), (t.flags |= $o)) : m.push(l);
        }
        return (t.child = c), c;
      }
      function eO(e, t, n, r, o) {
        var l = t.mode,
          c = e.child,
          m = c.sibling,
          v = { mode: "hidden", children: n },
          x;
        if ((l & ut) === Ve && t.child !== c) {
          var S = t.child;
          (x = S),
            (x.childLanes = ee),
            (x.pendingProps = v),
            t.mode & Ot &&
              ((x.actualDuration = 0),
              (x.actualStartTime = -1),
              (x.selfBaseDuration = c.selfBaseDuration),
              (x.treeBaseDuration = c.treeBaseDuration)),
            (t.deletions = null);
        } else (x = i0(c, v)), (x.subtreeFlags = c.subtreeFlags & Fa);
        var A;
        return (
          m !== null ? (A = gi(m, r)) : ((A = ko(r, l, o, null)), (A.flags |= bn)),
          (A.return = t),
          (x.return = t),
          (x.sibling = A),
          (t.child = x),
          A
        );
      }
      function _f(e, t, n, r) {
        r !== null && Cm(r), ol(t, e.child, null, n);
        var o = t.pendingProps,
          l = o.children,
          c = Bv(t, l);
        return (c.flags |= bn), (t.memoizedState = null), c;
      }
      function tO(e, t, n, r, o) {
        var l = t.mode,
          c = { mode: "visible", children: n },
          m = Iv(c, l),
          v = ko(r, l, o, null);
        return (
          (v.flags |= bn),
          (m.return = t),
          (v.return = t),
          (m.sibling = v),
          (t.child = m),
          (t.mode & ut) !== Ve && ol(t, e.child, null, o),
          v
        );
      }
      function nO(e, t, n) {
        return (
          (e.mode & ut) === Ve
            ? (f(
                "Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."
              ),
              (e.lanes = Ye))
            : lm(t)
              ? (e.lanes = Xo)
              : (e.lanes = Tr),
          null
        );
      }
      function rO(e, t, n, r, o, l, c) {
        if (n)
          if (t.flags & Va) {
            t.flags &= ~Va;
            var V = _v(
              new Error(
                "There was an error while hydrating this Suspense boundary. Switched to client rendering."
              )
            );
            return _f(e, t, c, V);
          } else {
            if (t.memoizedState !== null) return (t.child = e.child), (t.flags |= xt), null;
            var W = r.children,
              U = r.fallback,
              re = tO(e, t, W, U, c),
              be = t.child;
            return (be.memoizedState = Hv(c)), (t.memoizedState = Pv), re;
          }
        else {
          if (($_(), (t.mode & ut) === Ve)) return _f(e, t, c, null);
          if (lm(o)) {
            var m, v, x;
            {
              var S = l_(o);
              (m = S.digest), (v = S.message), (x = S.stack);
            }
            var A;
            v
              ? (A = new Error(v))
              : (A = new Error(
                  "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."
                ));
            var k = _v(A, m, x);
            return _f(e, t, c, k);
          }
          var z = Nr(c, e.childLanes);
          if (ea || z) {
            var H = Pf();
            if (H !== null) {
              var Y = pT(H, c);
              if (Y !== Un && Y !== l.retryLane) {
                l.retryLane = Y;
                var me = Xt;
                gr(e, Y), _n(H, e, Y, me);
              }
            }
            ch();
            var Ae = _v(
              new Error(
                "This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."
              )
            );
            return _f(e, t, c, Ae);
          } else if (_b(o)) {
            (t.flags |= xt), (t.child = e.child);
            var De = Dk.bind(null, e);
            return s_(o, De), null;
          } else {
            G_(t, o, l.treeContext);
            var ft = r.children,
              ot = Bv(t, ft);
            return (ot.flags |= Ua), ot;
          }
        }
      }
      function l0(e, t, n) {
        e.lanes = et(e.lanes, t);
        var r = e.alternate;
        r !== null && (r.lanes = et(r.lanes, t)), Mm(e.return, t, n);
      }
      function aO(e, t, n) {
        for (var r = t; r !== null; ) {
          if (r.tag === q) {
            var o = r.memoizedState;
            o !== null && l0(r, n, e);
          } else if (r.tag === Xe) l0(r, n, e);
          else if (r.child !== null) {
            (r.child.return = r), (r = r.child);
            continue;
          }
          if (r === e) return;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === e) return;
            r = r.return;
          }
          (r.sibling.return = r.return), (r = r.sibling);
        }
      }
      function oO(e) {
        for (var t = e, n = null; t !== null; ) {
          var r = t.alternate;
          r !== null && lf(r) === null && (n = t), (t = t.sibling);
        }
        return n;
      }
      function iO(e) {
        if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Vv[e])
          if (((Vv[e] = !0), typeof e == "string"))
            switch (e.toLowerCase()) {
              case "together":
              case "forwards":
              case "backwards": {
                f(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                  e,
                  e.toLowerCase()
                );
                break;
              }
              case "forward":
              case "backward": {
                f(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                  e,
                  e.toLowerCase()
                );
                break;
              }
              default:
                f(
                  '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                  e
                );
                break;
            }
          else
            f(
              '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              e
            );
      }
      function lO(e, t) {
        e !== void 0 &&
          !Df[e] &&
          (e !== "collapsed" && e !== "hidden"
            ? ((Df[e] = !0),
              f(
                '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
                e
              ))
            : t !== "forwards" &&
              t !== "backwards" &&
              ((Df[e] = !0),
              f(
                '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
                e
              )));
      }
      function s0(e, t) {
        {
          var n = at(e),
            r = !n && typeof Gt(e) == "function";
          if (n || r) {
            var o = n ? "array" : "iterable";
            return (
              f(
                "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
                o,
                t,
                o
              ),
              !1
            );
          }
        }
        return !0;
      }
      function sO(e, t) {
        if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
          if (at(e)) {
            for (var n = 0; n < e.length; n++) if (!s0(e[n], n)) return;
          } else {
            var r = Gt(e);
            if (typeof r == "function") {
              var o = r.call(e);
              if (o)
                for (var l = o.next(), c = 0; !l.done; l = o.next()) {
                  if (!s0(l.value, c)) return;
                  c++;
                }
            } else
              f(
                'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
                t
              );
          }
      }
      function $v(e, t, n, r, o) {
        var l = e.memoizedState;
        l === null
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: o
            })
          : ((l.isBackwards = t),
            (l.rendering = null),
            (l.renderingStartTime = 0),
            (l.last = r),
            (l.tail = n),
            (l.tailMode = o));
      }
      function u0(e, t, n) {
        var r = t.pendingProps,
          o = r.revealOrder,
          l = r.tail,
          c = r.children;
        iO(o), lO(l, o), sO(c, o), sr(e, t, c, n);
        var m = Qr.current,
          v = Bm(m, eu);
        if (v) (m = Im(m, eu)), (t.flags |= xt);
        else {
          var x = e !== null && (e.flags & xt) !== Pe;
          x && aO(t, t.child, n), (m = ul(m));
        }
        if ((Co(t, m), (t.mode & ut) === Ve)) t.memoizedState = null;
        else
          switch (o) {
            case "forwards": {
              var S = oO(t.child),
                A;
              S === null
                ? ((A = t.child), (t.child = null))
                : ((A = S.sibling), (S.sibling = null)),
                $v(t, !1, A, S, l);
              break;
            }
            case "backwards": {
              var k = null,
                z = t.child;
              for (t.child = null; z !== null; ) {
                var H = z.alternate;
                if (H !== null && lf(H) === null) {
                  t.child = z;
                  break;
                }
                var Y = z.sibling;
                (z.sibling = k), (k = z), (z = Y);
              }
              $v(t, !0, k, null, l);
              break;
            }
            case "together": {
              $v(t, !1, null, null, void 0);
              break;
            }
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function uO(e, t, n) {
        zm(t, t.stateNode.containerInfo);
        var r = t.pendingProps;
        return e === null ? (t.child = ol(t, null, r, n)) : sr(e, t, r, n), t.child;
      }
      var c0 = !1;
      function cO(e, t, n) {
        var r = t.type,
          o = r._context,
          l = t.pendingProps,
          c = t.memoizedProps,
          m = l.value;
        {
          "value" in l ||
            c0 ||
            ((c0 = !0),
            f(
              "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
            ));
          var v = t.type.propTypes;
          v && qr(v, l, "prop", "Context.Provider");
        }
        if ((nx(t, o, m), c !== null)) {
          var x = c.value;
          if (Or(x, m)) {
            if (c.children === l.children && !Uc()) return qa(e, t, n);
          } else i1(t, o, n);
        }
        var S = l.children;
        return sr(e, t, S, n), t.child;
      }
      var f0 = !1;
      function fO(e, t, n) {
        var r = t.type;
        r._context === void 0
          ? r !== r.Consumer &&
            (f0 ||
              ((f0 = !0),
              f(
                "Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
              )))
          : (r = r._context);
        var o = t.pendingProps,
          l = o.children;
        typeof l != "function" &&
          f(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ),
          ll(t, n);
        var c = xn(r);
        us(t);
        var m;
        return (
          (uu.current = t),
          Ur(!0),
          (m = l(c)),
          Ur(!1),
          Pi(),
          (t.flags |= Vi),
          sr(e, t, m, n),
          t.child
        );
      }
      function du() {
        ea = !0;
      }
      function Of(e, t) {
        (t.mode & ut) === Ve &&
          e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= bn));
      }
      function qa(e, t, n) {
        return (
          e !== null && (t.dependencies = e.dependencies),
          Px(),
          wu(t.lanes),
          Nr(n, t.childLanes) ? (a1(e, t), t.child) : null
        );
      }
      function dO(e, t, n) {
        {
          var r = t.return;
          if (r === null) throw new Error("Cannot swap the root fiber.");
          if (
            ((e.alternate = null),
            (t.alternate = null),
            (n.index = t.index),
            (n.sibling = t.sibling),
            (n.return = t.return),
            (n.ref = t.ref),
            t === r.child)
          )
            r.child = n;
          else {
            var o = r.child;
            if (o === null) throw new Error("Expected parent to have a child.");
            for (; o.sibling !== t; )
              if (((o = o.sibling), o === null))
                throw new Error("Expected to find the previous sibling.");
            o.sibling = n;
          }
          var l = r.deletions;
          return (
            l === null ? ((r.deletions = [e]), (r.flags |= $o)) : l.push(e), (n.flags |= bn), n
          );
        }
      }
      function Yv(e, t) {
        var n = e.lanes;
        return !!Nr(n, t);
      }
      function pO(e, t, n) {
        switch (t.tag) {
          case g:
            r0(t), t.stateNode, al();
            break;
          case T:
            cx(t);
            break;
          case y: {
            var r = t.type;
            ma(r) && zc(t);
            break;
          }
          case _:
            zm(t, t.stateNode.containerInfo);
            break;
          case I: {
            var o = t.memoizedProps.value,
              l = t.type._context;
            nx(t, l, o);
            break;
          }
          case J:
            {
              var c = Nr(n, t.childLanes);
              c && (t.flags |= bt);
              {
                var m = t.stateNode;
                (m.effectDuration = 0), (m.passiveEffectDuration = 0);
              }
            }
            break;
          case q: {
            var v = t.memoizedState;
            if (v !== null) {
              if (v.dehydrated !== null) return Co(t, ul(Qr.current)), (t.flags |= xt), null;
              var x = t.child,
                S = x.childLanes;
              if (Nr(n, S)) return o0(e, t, n);
              Co(t, ul(Qr.current));
              var A = qa(e, t, n);
              return A !== null ? A.sibling : null;
            } else Co(t, ul(Qr.current));
            break;
          }
          case Xe: {
            var k = (e.flags & xt) !== Pe,
              z = Nr(n, t.childLanes);
            if (k) {
              if (z) return u0(e, t, n);
              t.flags |= xt;
            }
            var H = t.memoizedState;
            if (
              (H !== null && ((H.rendering = null), (H.tail = null), (H.lastEffect = null)),
              Co(t, Qr.current),
              z)
            )
              break;
            return null;
          }
          case le:
          case _e:
            return (t.lanes = ee), e0(e, t, n);
        }
        return qa(e, t, n);
      }
      function d0(e, t, n) {
        if (t._debugNeedsRemount && e !== null)
          return dO(
            e,
            t,
            Eh(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes)
          );
        if (e !== null) {
          var r = e.memoizedProps,
            o = t.pendingProps;
          if (r !== o || Uc() || t.type !== e.type) ea = !0;
          else {
            var l = Yv(e, n);
            if (!l && (t.flags & xt) === Pe) return (ea = !1), pO(e, t, n);
            (e.flags & Xd) !== Pe ? (ea = !0) : (ea = !1);
          }
        } else if (((ea = !1), Hn() && F_(t))) {
          var c = t.index,
            m = z_();
          Pb(t, m, c);
        }
        switch (((t.lanes = ee), t.tag)) {
          case w:
            return q1(e, t, t.type, n);
          case ne: {
            var v = t.elementType;
            return W1(e, t, v, n);
          }
          case b: {
            var x = t.type,
              S = t.pendingProps,
              A = t.elementType === x ? S : Zr(x, S);
            return Uv(e, t, x, A, n);
          }
          case y: {
            var k = t.type,
              z = t.pendingProps,
              H = t.elementType === k ? z : Zr(k, z);
            return n0(e, t, k, H, n);
          }
          case g:
            return I1(e, t, n);
          case T:
            return $1(e, t, n);
          case O:
            return Y1(e, t);
          case q:
            return o0(e, t, n);
          case _:
            return uO(e, t, n);
          case G: {
            var Y = t.type,
              me = t.pendingProps,
              Ae = t.elementType === Y ? me : Zr(Y, me);
            return Qx(e, t, Y, Ae, n);
          }
          case L:
            return P1(e, t, n);
          case B:
            return H1(e, t, n);
          case J:
            return B1(e, t, n);
          case I:
            return cO(e, t, n);
          case j:
            return fO(e, t, n);
          case oe: {
            var De = t.type,
              ft = t.pendingProps,
              ot = Zr(De, ft);
            if (t.type !== t.elementType) {
              var V = De.propTypes;
              V && qr(V, ot, "prop", yt(De));
            }
            return (ot = Zr(De.type, ot)), Jx(e, t, De, ot, n);
          }
          case X:
            return Zx(e, t, t.type, t.pendingProps, n);
          case Ne: {
            var W = t.type,
              U = t.pendingProps,
              re = t.elementType === W ? U : Zr(W, U);
            return G1(e, t, W, re, n);
          }
          case Xe:
            return u0(e, t, n);
          case Le:
            break;
          case le:
            return e0(e, t, n);
        }
        throw new Error(
          "Unknown unit of work tag (" +
            t.tag +
            "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function vl(e) {
        e.flags |= bt;
      }
      function p0(e) {
        (e.flags |= Yo), (e.flags |= Qd);
      }
      var m0, Wv, v0, h0;
      (m0 = function (e, t, n, r) {
        for (var o = t.child; o !== null; ) {
          if (o.tag === T || o.tag === O) jD(e, o.stateNode);
          else if (o.tag !== _) {
            if (o.child !== null) {
              (o.child.return = o), (o = o.child);
              continue;
            }
          }
          if (o === t) return;
          for (; o.sibling === null; ) {
            if (o.return === null || o.return === t) return;
            o = o.return;
          }
          (o.sibling.return = o.return), (o = o.sibling);
        }
      }),
        (Wv = function (e, t) {}),
        (v0 = function (e, t, n, r, o) {
          var l = e.memoizedProps;
          if (l !== r) {
            var c = t.stateNode,
              m = Pm(),
              v = UD(c, n, l, r, o, m);
            (t.updateQueue = v), v && vl(t);
          }
        }),
        (h0 = function (e, t, n, r) {
          n !== r && vl(t);
        });
      function pu(e, t) {
        if (!Hn())
          switch (e.tailMode) {
            case "hidden": {
              for (var n = e.tail, r = null; n !== null; )
                n.alternate !== null && (r = n), (n = n.sibling);
              r === null ? (e.tail = null) : (r.sibling = null);
              break;
            }
            case "collapsed": {
              for (var o = e.tail, l = null; o !== null; )
                o.alternate !== null && (l = o), (o = o.sibling);
              l === null
                ? !t && e.tail !== null
                  ? (e.tail.sibling = null)
                  : (e.tail = null)
                : (l.sibling = null);
              break;
            }
          }
      }
      function In(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
          n = ee,
          r = Pe;
        if (t) {
          if ((e.mode & Ot) !== Ve) {
            for (var v = e.selfBaseDuration, x = e.child; x !== null; )
              (n = et(n, et(x.lanes, x.childLanes))),
                (r |= x.subtreeFlags & Fa),
                (r |= x.flags & Fa),
                (v += x.treeBaseDuration),
                (x = x.sibling);
            e.treeBaseDuration = v;
          } else
            for (var S = e.child; S !== null; )
              (n = et(n, et(S.lanes, S.childLanes))),
                (r |= S.subtreeFlags & Fa),
                (r |= S.flags & Fa),
                (S.return = e),
                (S = S.sibling);
          e.subtreeFlags |= r;
        } else {
          if ((e.mode & Ot) !== Ve) {
            for (var o = e.actualDuration, l = e.selfBaseDuration, c = e.child; c !== null; )
              (n = et(n, et(c.lanes, c.childLanes))),
                (r |= c.subtreeFlags),
                (r |= c.flags),
                (o += c.actualDuration),
                (l += c.treeBaseDuration),
                (c = c.sibling);
            (e.actualDuration = o), (e.treeBaseDuration = l);
          } else
            for (var m = e.child; m !== null; )
              (n = et(n, et(m.lanes, m.childLanes))),
                (r |= m.subtreeFlags),
                (r |= m.flags),
                (m.return = e),
                (m = m.sibling);
          e.subtreeFlags |= r;
        }
        return (e.childLanes = n), t;
      }
      function mO(e, t, n) {
        if (J_() && (t.mode & ut) !== Ve && (t.flags & xt) === Pe)
          return Gb(t), al(), (t.flags |= Va | tc | lr), !1;
        var r = $c(t);
        if (n !== null && n.dehydrated !== null)
          if (e === null) {
            if (!r)
              throw new Error(
                "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
              );
            if ((X_(t), In(t), (t.mode & Ot) !== Ve)) {
              var o = n !== null;
              if (o) {
                var l = t.child;
                l !== null && (t.treeBaseDuration -= l.treeBaseDuration);
              }
            }
            return !1;
          } else {
            if (
              (al(),
              (t.flags & xt) === Pe && (t.memoizedState = null),
              (t.flags |= bt),
              In(t),
              (t.mode & Ot) !== Ve)
            ) {
              var c = n !== null;
              if (c) {
                var m = t.child;
                m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
              }
            }
            return !1;
          }
        else return qb(), !0;
      }
      function g0(e, t, n) {
        var r = t.pendingProps;
        switch ((ym(t), t.tag)) {
          case w:
          case ne:
          case X:
          case b:
          case G:
          case L:
          case B:
          case J:
          case j:
          case oe:
            return In(t), null;
          case y: {
            var o = t.type;
            return ma(o) && Fc(t), In(t), null;
          }
          case g: {
            var l = t.stateNode;
            if (
              (sl(t),
              mm(t),
              Ym(),
              l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
              e === null || e.child === null)
            ) {
              var c = $c(t);
              if (c) vl(t);
              else if (e !== null) {
                var m = e.memoizedState;
                (!m.isDehydrated || (t.flags & Va) !== Pe) && ((t.flags |= Ui), qb());
              }
            }
            return Wv(e, t), In(t), null;
          }
          case T: {
            Hm(t);
            var v = ux(),
              x = t.type;
            if (e !== null && t.stateNode != null) v0(e, t, x, r, v), e.ref !== t.ref && p0(t);
            else {
              if (!r) {
                if (t.stateNode === null)
                  throw new Error(
                    "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                  );
                return In(t), null;
              }
              var S = Pm(),
                A = $c(t);
              if (A) q_(t, v, S) && vl(t);
              else {
                var k = LD(x, r, v, S, t);
                m0(k, t, !1, !1), (t.stateNode = k), VD(k, x, r, v) && vl(t);
              }
              t.ref !== null && p0(t);
            }
            return In(t), null;
          }
          case O: {
            var z = r;
            if (e && t.stateNode != null) {
              var H = e.memoizedProps;
              h0(e, t, H, z);
            } else {
              if (typeof z != "string" && t.stateNode === null)
                throw new Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              var Y = ux(),
                me = Pm(),
                Ae = $c(t);
              Ae ? K_(t) && vl(t) : (t.stateNode = FD(z, Y, me, t));
            }
            return In(t), null;
          }
          case q: {
            cl(t);
            var De = t.memoizedState;
            if (e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null)) {
              var ft = mO(e, t, De);
              if (!ft) return t.flags & lr ? t : null;
            }
            if ((t.flags & xt) !== Pe) return (t.lanes = n), (t.mode & Ot) !== Ve && hv(t), t;
            var ot = De !== null,
              V = e !== null && e.memoizedState !== null;
            if (ot !== V && ot) {
              var W = t.child;
              if (((W.flags |= Wo), (t.mode & ut) !== Ve)) {
                var U = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
                U || Bm(Qr.current, dx) ? vk() : ch();
              }
            }
            var re = t.updateQueue;
            if ((re !== null && (t.flags |= bt), In(t), (t.mode & Ot) !== Ve && ot)) {
              var be = t.child;
              be !== null && (t.treeBaseDuration -= be.treeBaseDuration);
            }
            return null;
          }
          case _:
            return sl(t), Wv(e, t), e === null && k_(t.stateNode.containerInfo), In(t), null;
          case I:
            var ve = t.type._context;
            return Am(ve, t), In(t), null;
          case Ne: {
            var Be = t.type;
            return ma(Be) && Fc(t), In(t), null;
          }
          case Xe: {
            cl(t);
            var qe = t.memoizedState;
            if (qe === null) return In(t), null;
            var At = (t.flags & xt) !== Pe,
              ht = qe.rendering;
            if (ht === null)
              if (At) pu(qe, !1);
              else {
                var pn = gk() && (e === null || (e.flags & xt) === Pe);
                if (!pn)
                  for (var gt = t.child; gt !== null; ) {
                    var cn = lf(gt);
                    if (cn !== null) {
                      (At = !0), (t.flags |= xt), pu(qe, !1);
                      var er = cn.updateQueue;
                      return (
                        er !== null && ((t.updateQueue = er), (t.flags |= bt)),
                        (t.subtreeFlags = Pe),
                        o1(t, n),
                        Co(t, Im(Qr.current, eu)),
                        t.child
                      );
                    }
                    gt = gt.sibling;
                  }
                qe.tail !== null &&
                  jn() > F0() &&
                  ((t.flags |= xt), (At = !0), pu(qe, !1), (t.lanes = hy));
              }
            else {
              if (!At) {
                var qn = lf(ht);
                if (qn !== null) {
                  (t.flags |= xt), (At = !0);
                  var Mr = qn.updateQueue;
                  if (
                    (Mr !== null && ((t.updateQueue = Mr), (t.flags |= bt)),
                    pu(qe, !0),
                    qe.tail === null && qe.tailMode === "hidden" && !ht.alternate && !Hn())
                  )
                    return In(t), null;
                } else
                  jn() * 2 - qe.renderingStartTime > F0() &&
                    n !== Tr &&
                    ((t.flags |= xt), (At = !0), pu(qe, !1), (t.lanes = hy));
              }
              if (qe.isBackwards) (ht.sibling = t.child), (t.child = ht);
              else {
                var fr = qe.last;
                fr !== null ? (fr.sibling = ht) : (t.child = ht), (qe.last = ht);
              }
            }
            if (qe.tail !== null) {
              var dr = qe.tail;
              (qe.rendering = dr),
                (qe.tail = dr.sibling),
                (qe.renderingStartTime = jn()),
                (dr.sibling = null);
              var tr = Qr.current;
              return At ? (tr = Im(tr, eu)) : (tr = ul(tr)), Co(t, tr), dr;
            }
            return In(t), null;
          }
          case Le:
            break;
          case le:
          case _e: {
            uh(t);
            var Za = t.memoizedState,
              Cl = Za !== null;
            if (e !== null) {
              var _u = e.memoizedState,
                Sa = _u !== null;
              Sa !== Cl && !Ze && (t.flags |= Wo);
            }
            return (
              !Cl || (t.mode & ut) === Ve
                ? In(t)
                : Nr(Ea, Tr) && (In(t), t.subtreeFlags & (bn | bt) && (t.flags |= Wo)),
              null
            );
          }
          case ke:
            return null;
          case pe:
            return null;
        }
        throw new Error(
          "Unknown unit of work tag (" +
            t.tag +
            "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function vO(e, t, n) {
        switch ((ym(t), t.tag)) {
          case y: {
            var r = t.type;
            ma(r) && Fc(t);
            var o = t.flags;
            return o & lr ? ((t.flags = (o & ~lr) | xt), (t.mode & Ot) !== Ve && hv(t), t) : null;
          }
          case g: {
            t.stateNode, sl(t), mm(t), Ym();
            var l = t.flags;
            return (l & lr) !== Pe && (l & xt) === Pe ? ((t.flags = (l & ~lr) | xt), t) : null;
          }
          case T:
            return Hm(t), null;
          case q: {
            cl(t);
            var c = t.memoizedState;
            if (c !== null && c.dehydrated !== null) {
              if (t.alternate === null)
                throw new Error(
                  "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
                );
              al();
            }
            var m = t.flags;
            return m & lr ? ((t.flags = (m & ~lr) | xt), (t.mode & Ot) !== Ve && hv(t), t) : null;
          }
          case Xe:
            return cl(t), null;
          case _:
            return sl(t), null;
          case I:
            var v = t.type._context;
            return Am(v, t), null;
          case le:
          case _e:
            return uh(t), null;
          case ke:
            return null;
          default:
            return null;
        }
      }
      function y0(e, t, n) {
        switch ((ym(t), t.tag)) {
          case y: {
            var r = t.type.childContextTypes;
            r != null && Fc(t);
            break;
          }
          case g: {
            t.stateNode, sl(t), mm(t), Ym();
            break;
          }
          case T: {
            Hm(t);
            break;
          }
          case _:
            sl(t);
            break;
          case q:
            cl(t);
            break;
          case Xe:
            cl(t);
            break;
          case I:
            var o = t.type._context;
            Am(o, t);
            break;
          case le:
          case _e:
            uh(t);
            break;
        }
      }
      var b0 = null;
      b0 = new Set();
      var kf = !1,
        $n = !1,
        hO = typeof WeakSet == "function" ? WeakSet : Set,
        Ee = null,
        hl = null,
        gl = null;
      function gO(e) {
        Gd(null, function () {
          throw e;
        }),
          qd();
      }
      var yO = function (e, t) {
        if (((t.props = e.memoizedProps), (t.state = e.memoizedState), e.mode & Ot))
          try {
            ba(), t.componentWillUnmount();
          } finally {
            ya(e);
          }
        else t.componentWillUnmount();
      };
      function x0(e, t) {
        try {
          To(Cn, e);
        } catch (n) {
          Bt(e, t, n);
        }
      }
      function Gv(e, t, n) {
        try {
          yO(e, n);
        } catch (r) {
          Bt(e, t, r);
        }
      }
      function bO(e, t, n) {
        try {
          n.componentDidMount();
        } catch (r) {
          Bt(e, t, r);
        }
      }
      function E0(e, t) {
        try {
          C0(e);
        } catch (n) {
          Bt(e, t, n);
        }
      }
      function yl(e, t) {
        var n = e.ref;
        if (n !== null)
          if (typeof n == "function") {
            var r;
            try {
              if (Me && tt && e.mode & Ot)
                try {
                  ba(), (r = n(null));
                } finally {
                  ya(e);
                }
              else r = n(null);
            } catch (o) {
              Bt(e, t, o);
            }
            typeof r == "function" &&
              f(
                "Unexpected return value from a callback ref in %s. A callback ref should not return a function.",
                Ke(e)
              );
          } else n.current = null;
      }
      function Af(e, t, n) {
        try {
          n();
        } catch (r) {
          Bt(e, t, r);
        }
      }
      var S0 = !1;
      function xO(e, t) {
        AD(e.containerInfo), (Ee = t), EO();
        var n = S0;
        return (S0 = !1), n;
      }
      function EO() {
        for (; Ee !== null; ) {
          var e = Ee,
            t = e.child;
          (e.subtreeFlags & ep) !== Pe && t !== null ? ((t.return = e), (Ee = t)) : SO();
        }
      }
      function SO() {
        for (; Ee !== null; ) {
          var e = Ee;
          rn(e);
          try {
            CO(e);
          } catch (n) {
            Bt(e, e.return, n);
          }
          Ln();
          var t = e.sibling;
          if (t !== null) {
            (t.return = e.return), (Ee = t);
            return;
          }
          Ee = e.return;
        }
      }
      function CO(e) {
        var t = e.alternate,
          n = e.flags;
        if ((n & Ui) !== Pe) {
          switch ((rn(e), e.tag)) {
            case b:
            case G:
            case X:
              break;
            case y: {
              if (t !== null) {
                var r = t.memoizedProps,
                  o = t.memoizedState,
                  l = e.stateNode;
                e.type === e.elementType &&
                  !di &&
                  (l.props !== e.memoizedProps &&
                    f(
                      "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                      Ke(e) || "instance"
                    ),
                  l.state !== e.memoizedState &&
                    f(
                      "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                      Ke(e) || "instance"
                    ));
                var c = l.getSnapshotBeforeUpdate(e.elementType === e.type ? r : Zr(e.type, r), o);
                {
                  var m = b0;
                  c === void 0 &&
                    !m.has(e.type) &&
                    (m.add(e.type),
                    f(
                      "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
                      Ke(e)
                    ));
                }
                l.__reactInternalSnapshotBeforeUpdate = c;
              }
              break;
            }
            case g: {
              {
                var v = e.stateNode;
                r_(v.containerInfo);
              }
              break;
            }
            case T:
            case O:
            case _:
            case Ne:
              break;
            default:
              throw new Error(
                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
              );
          }
          Ln();
        }
      }
      function ta(e, t, n) {
        var r = t.updateQueue,
          o = r !== null ? r.lastEffect : null;
        if (o !== null) {
          var l = o.next,
            c = l;
          do {
            if ((c.tag & e) === e) {
              var m = c.destroy;
              (c.destroy = void 0),
                m !== void 0 &&
                  ((e & Bn) !== yr ? FR(t) : (e & Cn) !== yr && fy(t),
                  (e & va) !== yr && Tu(!0),
                  Af(t, n, m),
                  (e & va) !== yr && Tu(!1),
                  (e & Bn) !== yr ? zR() : (e & Cn) !== yr && dy());
            }
            c = c.next;
          } while (c !== l);
        }
      }
      function To(e, t) {
        var n = t.updateQueue,
          r = n !== null ? n.lastEffect : null;
        if (r !== null) {
          var o = r.next,
            l = o;
          do {
            if ((l.tag & e) === e) {
              (e & Bn) !== yr ? VR(t) : (e & Cn) !== yr && PR(t);
              var c = l.create;
              (e & va) !== yr && Tu(!0),
                (l.destroy = c()),
                (e & va) !== yr && Tu(!1),
                (e & Bn) !== yr ? UR() : (e & Cn) !== yr && HR();
              {
                var m = l.destroy;
                if (m !== void 0 && typeof m != "function") {
                  var v = void 0;
                  (l.tag & Cn) !== Pe
                    ? (v = "useLayoutEffect")
                    : (l.tag & va) !== Pe
                      ? (v = "useInsertionEffect")
                      : (v = "useEffect");
                  var x = void 0;
                  m === null
                    ? (x =
                        " You returned null. If your effect does not require clean up, return undefined (or nothing).")
                    : typeof m.then == "function"
                      ? (x =
                          `

It looks like you wrote ` +
                          v +
                          `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                          v +
                          `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`)
                      : (x = " You returned: " + m),
                    f(
                      "%s must not return anything besides a function, which is used for clean-up.%s",
                      v,
                      x
                    );
                }
              }
            }
            l = l.next;
          } while (l !== o);
        }
      }
      function wO(e, t) {
        if ((t.flags & bt) !== Pe)
          switch (t.tag) {
            case J: {
              var n = t.stateNode.passiveEffectDuration,
                r = t.memoizedProps,
                o = r.id,
                l = r.onPostCommit,
                c = Fx(),
                m = t.alternate === null ? "mount" : "update";
              Ux() && (m = "nested-update"), typeof l == "function" && l(o, m, n, c);
              var v = t.return;
              e: for (; v !== null; ) {
                switch (v.tag) {
                  case g:
                    var x = v.stateNode;
                    x.passiveEffectDuration += n;
                    break e;
                  case J:
                    var S = v.stateNode;
                    S.passiveEffectDuration += n;
                    break e;
                }
                v = v.return;
              }
              break;
            }
          }
      }
      function RO(e, t, n, r) {
        if ((n.flags & ss) !== Pe)
          switch (n.tag) {
            case b:
            case G:
            case X: {
              if (!$n)
                if (n.mode & Ot)
                  try {
                    ba(), To(Cn | Sn, n);
                  } finally {
                    ya(n);
                  }
                else To(Cn | Sn, n);
              break;
            }
            case y: {
              var o = n.stateNode;
              if (n.flags & bt && !$n)
                if (t === null)
                  if (
                    (n.type === n.elementType &&
                      !di &&
                      (o.props !== n.memoizedProps &&
                        f(
                          "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                          Ke(n) || "instance"
                        ),
                      o.state !== n.memoizedState &&
                        f(
                          "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                          Ke(n) || "instance"
                        )),
                    n.mode & Ot)
                  )
                    try {
                      ba(), o.componentDidMount();
                    } finally {
                      ya(n);
                    }
                  else o.componentDidMount();
                else {
                  var l = n.elementType === n.type ? t.memoizedProps : Zr(n.type, t.memoizedProps),
                    c = t.memoizedState;
                  if (
                    (n.type === n.elementType &&
                      !di &&
                      (o.props !== n.memoizedProps &&
                        f(
                          "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                          Ke(n) || "instance"
                        ),
                      o.state !== n.memoizedState &&
                        f(
                          "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                          Ke(n) || "instance"
                        )),
                    n.mode & Ot)
                  )
                    try {
                      ba(), o.componentDidUpdate(l, c, o.__reactInternalSnapshotBeforeUpdate);
                    } finally {
                      ya(n);
                    }
                  else o.componentDidUpdate(l, c, o.__reactInternalSnapshotBeforeUpdate);
                }
              var m = n.updateQueue;
              m !== null &&
                (n.type === n.elementType &&
                  !di &&
                  (o.props !== n.memoizedProps &&
                    f(
                      "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                      Ke(n) || "instance"
                    ),
                  o.state !== n.memoizedState &&
                    f(
                      "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                      Ke(n) || "instance"
                    )),
                sx(n, m, o));
              break;
            }
            case g: {
              var v = n.updateQueue;
              if (v !== null) {
                var x = null;
                if (n.child !== null)
                  switch (n.child.tag) {
                    case T:
                      x = n.child.stateNode;
                      break;
                    case y:
                      x = n.child.stateNode;
                      break;
                  }
                sx(n, v, x);
              }
              break;
            }
            case T: {
              var S = n.stateNode;
              if (t === null && n.flags & bt) {
                var A = n.type,
                  k = n.memoizedProps;
                ID(S, A, k);
              }
              break;
            }
            case O:
              break;
            case _:
              break;
            case J: {
              {
                var z = n.memoizedProps,
                  H = z.onCommit,
                  Y = z.onRender,
                  me = n.stateNode.effectDuration,
                  Ae = Fx(),
                  De = t === null ? "mount" : "update";
                Ux() && (De = "nested-update"),
                  typeof Y == "function" &&
                    Y(
                      n.memoizedProps.id,
                      De,
                      n.actualDuration,
                      n.treeBaseDuration,
                      n.actualStartTime,
                      Ae
                    );
                {
                  typeof H == "function" && H(n.memoizedProps.id, De, me, Ae), Sk(n);
                  var ft = n.return;
                  e: for (; ft !== null; ) {
                    switch (ft.tag) {
                      case g:
                        var ot = ft.stateNode;
                        ot.effectDuration += me;
                        break e;
                      case J:
                        var V = ft.stateNode;
                        V.effectDuration += me;
                        break e;
                    }
                    ft = ft.return;
                  }
                }
              }
              break;
            }
            case q: {
              MO(e, n);
              break;
            }
            case Xe:
            case Ne:
            case Le:
            case le:
            case _e:
            case pe:
              break;
            default:
              throw new Error(
                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
              );
          }
        $n || (n.flags & Yo && C0(n));
      }
      function TO(e) {
        switch (e.tag) {
          case b:
          case G:
          case X: {
            if (e.mode & Ot)
              try {
                ba(), x0(e, e.return);
              } finally {
                ya(e);
              }
            else x0(e, e.return);
            break;
          }
          case y: {
            var t = e.stateNode;
            typeof t.componentDidMount == "function" && bO(e, e.return, t), E0(e, e.return);
            break;
          }
          case T: {
            E0(e, e.return);
            break;
          }
        }
      }
      function NO(e, t) {
        for (var n = null, r = e; ; ) {
          if (r.tag === T) {
            if (n === null) {
              n = r;
              try {
                var o = r.stateNode;
                t ? ZD(o) : t_(r.stateNode, r.memoizedProps);
              } catch (c) {
                Bt(e, e.return, c);
              }
            }
          } else if (r.tag === O) {
            if (n === null)
              try {
                var l = r.stateNode;
                t ? e_(l) : n_(l, r.memoizedProps);
              } catch (c) {
                Bt(e, e.return, c);
              }
          } else if (!((r.tag === le || r.tag === _e) && r.memoizedState !== null && r !== e)) {
            if (r.child !== null) {
              (r.child.return = r), (r = r.child);
              continue;
            }
          }
          if (r === e) return;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === e) return;
            n === r && (n = null), (r = r.return);
          }
          n === r && (n = null), (r.sibling.return = r.return), (r = r.sibling);
        }
      }
      function C0(e) {
        var t = e.ref;
        if (t !== null) {
          var n = e.stateNode,
            r;
          switch (e.tag) {
            case T:
              r = n;
              break;
            default:
              r = n;
          }
          if (typeof t == "function") {
            var o;
            if (e.mode & Ot)
              try {
                ba(), (o = t(r));
              } finally {
                ya(e);
              }
            else o = t(r);
            typeof o == "function" &&
              f(
                "Unexpected return value from a callback ref in %s. A callback ref should not return a function.",
                Ke(e)
              );
          } else
            t.hasOwnProperty("current") ||
              f(
                "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
                Ke(e)
              ),
              (t.current = r);
        }
      }
      function DO(e) {
        var t = e.alternate;
        t !== null && (t.return = null), (e.return = null);
      }
      function w0(e) {
        var t = e.alternate;
        t !== null && ((e.alternate = null), w0(t));
        {
          if (((e.child = null), (e.deletions = null), (e.sibling = null), e.tag === T)) {
            var n = e.stateNode;
            n !== null && L_(n);
          }
          (e.stateNode = null),
            (e._debugOwner = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
      }
      function _O(e) {
        for (var t = e.return; t !== null; ) {
          if (R0(t)) return t;
          t = t.return;
        }
        throw new Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function R0(e) {
        return e.tag === T || e.tag === g || e.tag === _;
      }
      function T0(e) {
        var t = e;
        e: for (;;) {
          for (; t.sibling === null; ) {
            if (t.return === null || R0(t.return)) return null;
            t = t.return;
          }
          for (
            t.sibling.return = t.return, t = t.sibling;
            t.tag !== T && t.tag !== O && t.tag !== He;

          ) {
            if (t.flags & bn || t.child === null || t.tag === _) continue e;
            (t.child.return = t), (t = t.child);
          }
          if (!(t.flags & bn)) return t.stateNode;
        }
      }
      function OO(e) {
        var t = _O(e);
        switch (t.tag) {
          case T: {
            var n = t.stateNode;
            t.flags & ls && (Db(n), (t.flags &= ~ls));
            var r = T0(e);
            Kv(e, r, n);
            break;
          }
          case g:
          case _: {
            var o = t.stateNode.containerInfo,
              l = T0(e);
            qv(e, l, o);
            break;
          }
          default:
            throw new Error(
              "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
            );
        }
      }
      function qv(e, t, n) {
        var r = e.tag,
          o = r === T || r === O;
        if (o) {
          var l = e.stateNode;
          t ? KD(n, l, t) : GD(n, l);
        } else if (r !== _) {
          var c = e.child;
          if (c !== null) {
            qv(c, t, n);
            for (var m = c.sibling; m !== null; ) qv(m, t, n), (m = m.sibling);
          }
        }
      }
      function Kv(e, t, n) {
        var r = e.tag,
          o = r === T || r === O;
        if (o) {
          var l = e.stateNode;
          t ? qD(n, l, t) : WD(n, l);
        } else if (r !== _) {
          var c = e.child;
          if (c !== null) {
            Kv(c, t, n);
            for (var m = c.sibling; m !== null; ) Kv(m, t, n), (m = m.sibling);
          }
        }
      }
      var Yn = null,
        na = !1;
      function kO(e, t, n) {
        {
          var r = t;
          e: for (; r !== null; ) {
            switch (r.tag) {
              case T: {
                (Yn = r.stateNode), (na = !1);
                break e;
              }
              case g: {
                (Yn = r.stateNode.containerInfo), (na = !0);
                break e;
              }
              case _: {
                (Yn = r.stateNode.containerInfo), (na = !0);
                break e;
              }
            }
            r = r.return;
          }
          if (Yn === null)
            throw new Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          N0(e, t, n), (Yn = null), (na = !1);
        }
        DO(n);
      }
      function No(e, t, n) {
        for (var r = n.child; r !== null; ) N0(e, t, r), (r = r.sibling);
      }
      function N0(e, t, n) {
        switch ((AR(n), n.tag)) {
          case T:
            $n || yl(n, t);
          case O: {
            {
              var r = Yn,
                o = na;
              (Yn = null),
                No(e, t, n),
                (Yn = r),
                (na = o),
                Yn !== null && (na ? QD(Yn, n.stateNode) : XD(Yn, n.stateNode));
            }
            return;
          }
          case He: {
            Yn !== null && (na ? JD(Yn, n.stateNode) : im(Yn, n.stateNode));
            return;
          }
          case _: {
            {
              var l = Yn,
                c = na;
              (Yn = n.stateNode.containerInfo), (na = !0), No(e, t, n), (Yn = l), (na = c);
            }
            return;
          }
          case b:
          case G:
          case oe:
          case X: {
            if (!$n) {
              var m = n.updateQueue;
              if (m !== null) {
                var v = m.lastEffect;
                if (v !== null) {
                  var x = v.next,
                    S = x;
                  do {
                    var A = S,
                      k = A.destroy,
                      z = A.tag;
                    k !== void 0 &&
                      ((z & va) !== yr
                        ? Af(n, t, k)
                        : (z & Cn) !== yr &&
                          (fy(n), n.mode & Ot ? (ba(), Af(n, t, k), ya(n)) : Af(n, t, k), dy())),
                      (S = S.next);
                  } while (S !== x);
                }
              }
            }
            No(e, t, n);
            return;
          }
          case y: {
            if (!$n) {
              yl(n, t);
              var H = n.stateNode;
              typeof H.componentWillUnmount == "function" && Gv(n, t, H);
            }
            No(e, t, n);
            return;
          }
          case Le: {
            No(e, t, n);
            return;
          }
          case le: {
            if (n.mode & ut) {
              var Y = $n;
              ($n = Y || n.memoizedState !== null), No(e, t, n), ($n = Y);
            } else No(e, t, n);
            break;
          }
          default: {
            No(e, t, n);
            return;
          }
        }
      }
      function AO(e) {
        e.memoizedState;
      }
      function MO(e, t) {
        var n = t.memoizedState;
        if (n === null) {
          var r = t.alternate;
          if (r !== null) {
            var o = r.memoizedState;
            if (o !== null) {
              var l = o.dehydrated;
              l !== null && g_(l);
            }
          }
        }
      }
      function D0(e) {
        var t = e.updateQueue;
        if (t !== null) {
          e.updateQueue = null;
          var n = e.stateNode;
          n === null && (n = e.stateNode = new hO()),
            t.forEach(function (r) {
              var o = _k.bind(null, e, r);
              if (!n.has(r)) {
                if ((n.add(r), Wr))
                  if (hl !== null && gl !== null) Ru(gl, hl);
                  else
                    throw Error(
                      "Expected finished root and lanes to be set. This is a bug in React."
                    );
                r.then(o, o);
              }
            });
        }
      }
      function LO(e, t, n) {
        (hl = n), (gl = e), rn(t), _0(t, e), rn(t), (hl = null), (gl = null);
      }
      function ra(e, t, n) {
        var r = t.deletions;
        if (r !== null)
          for (var o = 0; o < r.length; o++) {
            var l = r[o];
            try {
              kO(e, t, l);
            } catch (v) {
              Bt(l, t, v);
            }
          }
        var c = $u();
        if (t.subtreeFlags & tp)
          for (var m = t.child; m !== null; ) rn(m), _0(m, e), (m = m.sibling);
        rn(c);
      }
      function _0(e, t, n) {
        var r = e.alternate,
          o = e.flags;
        switch (e.tag) {
          case b:
          case G:
          case oe:
          case X: {
            if ((ra(t, e), xa(e), o & bt)) {
              try {
                ta(va | Sn, e, e.return), To(va | Sn, e);
              } catch (Be) {
                Bt(e, e.return, Be);
              }
              if (e.mode & Ot) {
                try {
                  ba(), ta(Cn | Sn, e, e.return);
                } catch (Be) {
                  Bt(e, e.return, Be);
                }
                ya(e);
              } else
                try {
                  ta(Cn | Sn, e, e.return);
                } catch (Be) {
                  Bt(e, e.return, Be);
                }
            }
            return;
          }
          case y: {
            ra(t, e), xa(e), o & Yo && r !== null && yl(r, r.return);
            return;
          }
          case T: {
            ra(t, e), xa(e), o & Yo && r !== null && yl(r, r.return);
            {
              if (e.flags & ls) {
                var l = e.stateNode;
                try {
                  Db(l);
                } catch (Be) {
                  Bt(e, e.return, Be);
                }
              }
              if (o & bt) {
                var c = e.stateNode;
                if (c != null) {
                  var m = e.memoizedProps,
                    v = r !== null ? r.memoizedProps : m,
                    x = e.type,
                    S = e.updateQueue;
                  if (((e.updateQueue = null), S !== null))
                    try {
                      $D(c, S, x, v, m, e);
                    } catch (Be) {
                      Bt(e, e.return, Be);
                    }
                }
              }
            }
            return;
          }
          case O: {
            if ((ra(t, e), xa(e), o & bt)) {
              if (e.stateNode === null)
                throw new Error(
                  "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
                );
              var A = e.stateNode,
                k = e.memoizedProps,
                z = r !== null ? r.memoizedProps : k;
              try {
                YD(A, z, k);
              } catch (Be) {
                Bt(e, e.return, Be);
              }
            }
            return;
          }
          case g: {
            if ((ra(t, e), xa(e), o & bt && r !== null)) {
              var H = r.memoizedState;
              if (H.isDehydrated)
                try {
                  h_(t.containerInfo);
                } catch (Be) {
                  Bt(e, e.return, Be);
                }
            }
            return;
          }
          case _: {
            ra(t, e), xa(e);
            return;
          }
          case q: {
            ra(t, e), xa(e);
            var Y = e.child;
            if (Y.flags & Wo) {
              var me = Y.stateNode,
                Ae = Y.memoizedState,
                De = Ae !== null;
              if (((me.isHidden = De), De)) {
                var ft = Y.alternate !== null && Y.alternate.memoizedState !== null;
                ft || mk();
              }
            }
            if (o & bt) {
              try {
                AO(e);
              } catch (Be) {
                Bt(e, e.return, Be);
              }
              D0(e);
            }
            return;
          }
          case le: {
            var ot = r !== null && r.memoizedState !== null;
            if (e.mode & ut) {
              var V = $n;
              ($n = V || ot), ra(t, e), ($n = V);
            } else ra(t, e);
            if ((xa(e), o & Wo)) {
              var W = e.stateNode,
                U = e.memoizedState,
                re = U !== null,
                be = e;
              if (((W.isHidden = re), re && !ot && (be.mode & ut) !== Ve)) {
                Ee = be;
                for (var ve = be.child; ve !== null; ) (Ee = ve), VO(ve), (ve = ve.sibling);
              }
              NO(be, re);
            }
            return;
          }
          case Xe: {
            ra(t, e), xa(e), o & bt && D0(e);
            return;
          }
          case Le:
            return;
          default: {
            ra(t, e), xa(e);
            return;
          }
        }
      }
      function xa(e) {
        var t = e.flags;
        if (t & bn) {
          try {
            OO(e);
          } catch (n) {
            Bt(e, e.return, n);
          }
          e.flags &= ~bn;
        }
        t & Ua && (e.flags &= ~Ua);
      }
      function jO(e, t, n) {
        (hl = n), (gl = t), (Ee = e), O0(e, t, n), (hl = null), (gl = null);
      }
      function O0(e, t, n) {
        for (var r = (e.mode & ut) !== Ve; Ee !== null; ) {
          var o = Ee,
            l = o.child;
          if (o.tag === le && r) {
            var c = o.memoizedState !== null,
              m = c || kf;
            if (m) {
              Xv(e, t, n);
              continue;
            } else {
              var v = o.alternate,
                x = v !== null && v.memoizedState !== null,
                S = x || $n,
                A = kf,
                k = $n;
              (kf = m), ($n = S), $n && !k && ((Ee = o), UO(o));
              for (var z = l; z !== null; ) (Ee = z), O0(z, t, n), (z = z.sibling);
              (Ee = o), (kf = A), ($n = k), Xv(e, t, n);
              continue;
            }
          }
          (o.subtreeFlags & ss) !== Pe && l !== null ? ((l.return = o), (Ee = l)) : Xv(e, t, n);
        }
      }
      function Xv(e, t, n) {
        for (; Ee !== null; ) {
          var r = Ee;
          if ((r.flags & ss) !== Pe) {
            var o = r.alternate;
            rn(r);
            try {
              RO(t, o, r, n);
            } catch (c) {
              Bt(r, r.return, c);
            }
            Ln();
          }
          if (r === e) {
            Ee = null;
            return;
          }
          var l = r.sibling;
          if (l !== null) {
            (l.return = r.return), (Ee = l);
            return;
          }
          Ee = r.return;
        }
      }
      function VO(e) {
        for (; Ee !== null; ) {
          var t = Ee,
            n = t.child;
          switch (t.tag) {
            case b:
            case G:
            case oe:
            case X: {
              if (t.mode & Ot)
                try {
                  ba(), ta(Cn, t, t.return);
                } finally {
                  ya(t);
                }
              else ta(Cn, t, t.return);
              break;
            }
            case y: {
              yl(t, t.return);
              var r = t.stateNode;
              typeof r.componentWillUnmount == "function" && Gv(t, t.return, r);
              break;
            }
            case T: {
              yl(t, t.return);
              break;
            }
            case le: {
              var o = t.memoizedState !== null;
              if (o) {
                k0(e);
                continue;
              }
              break;
            }
          }
          n !== null ? ((n.return = t), (Ee = n)) : k0(e);
        }
      }
      function k0(e) {
        for (; Ee !== null; ) {
          var t = Ee;
          if (t === e) {
            Ee = null;
            return;
          }
          var n = t.sibling;
          if (n !== null) {
            (n.return = t.return), (Ee = n);
            return;
          }
          Ee = t.return;
        }
      }
      function UO(e) {
        for (; Ee !== null; ) {
          var t = Ee,
            n = t.child;
          if (t.tag === le) {
            var r = t.memoizedState !== null;
            if (r) {
              A0(e);
              continue;
            }
          }
          n !== null ? ((n.return = t), (Ee = n)) : A0(e);
        }
      }
      function A0(e) {
        for (; Ee !== null; ) {
          var t = Ee;
          rn(t);
          try {
            TO(t);
          } catch (r) {
            Bt(t, t.return, r);
          }
          if ((Ln(), t === e)) {
            Ee = null;
            return;
          }
          var n = t.sibling;
          if (n !== null) {
            (n.return = t.return), (Ee = n);
            return;
          }
          Ee = t.return;
        }
      }
      function FO(e, t, n, r) {
        (Ee = t), zO(t, e, n, r);
      }
      function zO(e, t, n, r) {
        for (; Ee !== null; ) {
          var o = Ee,
            l = o.child;
          (o.subtreeFlags & Fi) !== Pe && l !== null ? ((l.return = o), (Ee = l)) : PO(e, t, n, r);
        }
      }
      function PO(e, t, n, r) {
        for (; Ee !== null; ) {
          var o = Ee;
          if ((o.flags & lo) !== Pe) {
            rn(o);
            try {
              HO(t, o, n, r);
            } catch (c) {
              Bt(o, o.return, c);
            }
            Ln();
          }
          if (o === e) {
            Ee = null;
            return;
          }
          var l = o.sibling;
          if (l !== null) {
            (l.return = o.return), (Ee = l);
            return;
          }
          Ee = o.return;
        }
      }
      function HO(e, t, n, r) {
        switch (t.tag) {
          case b:
          case G:
          case X: {
            if (t.mode & Ot) {
              vv();
              try {
                To(Bn | Sn, t);
              } finally {
                mv(t);
              }
            } else To(Bn | Sn, t);
            break;
          }
        }
      }
      function BO(e) {
        (Ee = e), IO();
      }
      function IO() {
        for (; Ee !== null; ) {
          var e = Ee,
            t = e.child;
          if ((Ee.flags & $o) !== Pe) {
            var n = e.deletions;
            if (n !== null) {
              for (var r = 0; r < n.length; r++) {
                var o = n[r];
                (Ee = o), WO(o, e);
              }
              {
                var l = e.alternate;
                if (l !== null) {
                  var c = l.child;
                  if (c !== null) {
                    l.child = null;
                    do {
                      var m = c.sibling;
                      (c.sibling = null), (c = m);
                    } while (c !== null);
                  }
                }
              }
              Ee = e;
            }
          }
          (e.subtreeFlags & Fi) !== Pe && t !== null ? ((t.return = e), (Ee = t)) : $O();
        }
      }
      function $O() {
        for (; Ee !== null; ) {
          var e = Ee;
          (e.flags & lo) !== Pe && (rn(e), YO(e), Ln());
          var t = e.sibling;
          if (t !== null) {
            (t.return = e.return), (Ee = t);
            return;
          }
          Ee = e.return;
        }
      }
      function YO(e) {
        switch (e.tag) {
          case b:
          case G:
          case X: {
            e.mode & Ot ? (vv(), ta(Bn | Sn, e, e.return), mv(e)) : ta(Bn | Sn, e, e.return);
            break;
          }
        }
      }
      function WO(e, t) {
        for (; Ee !== null; ) {
          var n = Ee;
          rn(n), qO(n, t), Ln();
          var r = n.child;
          r !== null ? ((r.return = n), (Ee = r)) : GO(e);
        }
      }
      function GO(e) {
        for (; Ee !== null; ) {
          var t = Ee,
            n = t.sibling,
            r = t.return;
          if ((w0(t), t === e)) {
            Ee = null;
            return;
          }
          if (n !== null) {
            (n.return = r), (Ee = n);
            return;
          }
          Ee = r;
        }
      }
      function qO(e, t) {
        switch (e.tag) {
          case b:
          case G:
          case X: {
            e.mode & Ot ? (vv(), ta(Bn, e, t), mv(e)) : ta(Bn, e, t);
            break;
          }
        }
      }
      function KO(e) {
        switch (e.tag) {
          case b:
          case G:
          case X: {
            try {
              To(Cn | Sn, e);
            } catch (n) {
              Bt(e, e.return, n);
            }
            break;
          }
          case y: {
            var t = e.stateNode;
            try {
              t.componentDidMount();
            } catch (n) {
              Bt(e, e.return, n);
            }
            break;
          }
        }
      }
      function XO(e) {
        switch (e.tag) {
          case b:
          case G:
          case X: {
            try {
              To(Bn | Sn, e);
            } catch (t) {
              Bt(e, e.return, t);
            }
            break;
          }
        }
      }
      function QO(e) {
        switch (e.tag) {
          case b:
          case G:
          case X: {
            try {
              ta(Cn | Sn, e, e.return);
            } catch (n) {
              Bt(e, e.return, n);
            }
            break;
          }
          case y: {
            var t = e.stateNode;
            typeof t.componentWillUnmount == "function" && Gv(e, e.return, t);
            break;
          }
        }
      }
      function JO(e) {
        switch (e.tag) {
          case b:
          case G:
          case X:
            try {
              ta(Bn | Sn, e, e.return);
            } catch (t) {
              Bt(e, e.return, t);
            }
        }
      }
      if (typeof Symbol == "function" && Symbol.for) {
        var mu = Symbol.for;
        mu("selector.component"),
          mu("selector.has_pseudo_class"),
          mu("selector.role"),
          mu("selector.test_id"),
          mu("selector.text");
      }
      var ZO = [];
      function ek() {
        ZO.forEach(function (e) {
          return e();
        });
      }
      var tk = s.ReactCurrentActQueue;
      function nk(e) {
        {
          var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0,
            n = typeof jest < "u";
          return n && t !== !1;
        }
      }
      function M0() {
        {
          var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
          return (
            !e &&
              tk.current !== null &&
              f("The current testing environment is not configured to support act(...)"),
            e
          );
        }
      }
      var rk = Math.ceil,
        Qv = s.ReactCurrentDispatcher,
        Jv = s.ReactCurrentOwner,
        Wn = s.ReactCurrentBatchConfig,
        aa = s.ReactCurrentActQueue,
        Tn = 0,
        L0 = 1,
        Gn = 2,
        Ir = 4,
        Ka = 0,
        vu = 1,
        pi = 2,
        Mf = 3,
        hu = 4,
        j0 = 5,
        Zv = 6,
        ct = Tn,
        ur = null,
        sn = null,
        Nn = ee,
        Ea = ee,
        eh = go(ee),
        Dn = Ka,
        gu = null,
        Lf = ee,
        yu = ee,
        jf = ee,
        bu = null,
        br = null,
        th = 0,
        V0 = 500,
        U0 = 1 / 0,
        ak = 500,
        Xa = null;
      function xu() {
        U0 = jn() + ak;
      }
      function F0() {
        return U0;
      }
      var Vf = !1,
        nh = null,
        bl = null,
        mi = !1,
        Do = null,
        Eu = ee,
        rh = [],
        ah = null,
        ok = 50,
        Su = 0,
        oh = null,
        ih = !1,
        Uf = !1,
        ik = 50,
        xl = 0,
        Ff = null,
        Cu = Xt,
        zf = ee,
        z0 = !1;
      function Pf() {
        return ur;
      }
      function cr() {
        return (ct & (Gn | Ir)) !== Tn ? jn() : (Cu !== Xt || (Cu = jn()), Cu);
      }
      function _o(e) {
        var t = e.mode;
        if ((t & ut) === Ve) return Ye;
        if ((ct & Gn) !== Tn && Nn !== ee) return vs(Nn);
        var n = t1() !== e1;
        if (n) {
          if (Wn.transition !== null) {
            var r = Wn.transition;
            r._updatedFibers || (r._updatedFibers = new Set()), r._updatedFibers.add(e);
          }
          return zf === Un && (zf = xy()), zf;
        }
        var o = Gr();
        if (o !== Un) return o;
        var l = zD();
        return l;
      }
      function lk(e) {
        var t = e.mode;
        return (t & ut) === Ve ? Ye : uT();
      }
      function _n(e, t, n, r) {
        kk(),
          z0 && f("useInsertionEffect must not schedule updates."),
          ih && (Uf = !0),
          hs(e, n, r),
          (ct & Gn) !== ee && e === ur
            ? Lk(t)
            : (Wr && Cy(e, t, n),
              jk(t),
              e === ur && ((ct & Gn) === Tn && (yu = et(yu, n)), Dn === hu && Oo(e, Nn)),
              xr(e, r),
              n === Ye &&
                ct === Tn &&
                (t.mode & ut) === Ve &&
                !aa.isBatchingLegacy &&
                (xu(), zb()));
      }
      function sk(e, t, n) {
        var r = e.current;
        (r.lanes = t), hs(e, t, n), xr(e, n);
      }
      function uk(e) {
        return (ct & Gn) !== Tn;
      }
      function xr(e, t) {
        var n = e.callbackNode;
        rT(e, t);
        var r = ic(e, e === ur ? Nn : ee);
        if (r === ee) {
          n !== null && tE(n), (e.callbackNode = null), (e.callbackPriority = Un);
          return;
        }
        var o = Jo(r),
          l = e.callbackPriority;
        if (l === o && !(aa.current !== null && n !== ph)) {
          n == null &&
            l !== Ye &&
            f(
              "Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue."
            );
          return;
        }
        n != null && tE(n);
        var c;
        if (o === Ye)
          e.tag === yo
            ? (aa.isBatchingLegacy !== null && (aa.didScheduleLegacyUpdate = !0),
              U_(B0.bind(null, e)))
            : Fb(B0.bind(null, e)),
            aa.current !== null
              ? aa.current.push(bo)
              : HD(function () {
                  (ct & (Gn | Ir)) === Tn && bo();
                }),
            (c = null);
        else {
          var m;
          switch (Ty(r)) {
            case Dr:
              m = nc;
              break;
            case Pa:
              m = np;
              break;
            case Ha:
              m = Ko;
              break;
            case uc:
              m = rp;
              break;
            default:
              m = Ko;
              break;
          }
          c = mh(m, P0.bind(null, e));
        }
        (e.callbackPriority = o), (e.callbackNode = c);
      }
      function P0(e, t) {
        if ((N1(), (Cu = Xt), (zf = ee), (ct & (Gn | Ir)) !== Tn))
          throw new Error("Should not already be working.");
        var n = e.callbackNode,
          r = Ja();
        if (r && e.callbackNode !== n) return null;
        var o = ic(e, e === ur ? Nn : ee);
        if (o === ee) return null;
        var l = !lc(e, o) && !sT(e, o) && !t,
          c = l ? bk(e, o) : Bf(e, o);
        if (c !== Ka) {
          if (c === pi) {
            var m = Rp(e);
            m !== ee && ((o = m), (c = lh(e, m)));
          }
          if (c === vu) {
            var v = gu;
            throw (vi(e, ee), Oo(e, o), xr(e, jn()), v);
          }
          if (c === Zv) Oo(e, o);
          else {
            var x = !lc(e, o),
              S = e.current.alternate;
            if (x && !fk(S)) {
              if (((c = Bf(e, o)), c === pi)) {
                var A = Rp(e);
                A !== ee && ((o = A), (c = lh(e, A)));
              }
              if (c === vu) {
                var k = gu;
                throw (vi(e, ee), Oo(e, o), xr(e, jn()), k);
              }
            }
            (e.finishedWork = S), (e.finishedLanes = o), ck(e, c, o);
          }
        }
        return xr(e, jn()), e.callbackNode === n ? P0.bind(null, e) : null;
      }
      function lh(e, t) {
        var n = bu;
        if (cc(e)) {
          var r = vi(e, t);
          (r.flags |= Va), O_(e.containerInfo);
        }
        var o = Bf(e, t);
        if (o !== pi) {
          var l = br;
          (br = n), l !== null && H0(l);
        }
        return o;
      }
      function H0(e) {
        br === null ? (br = e) : br.push.apply(br, e);
      }
      function ck(e, t, n) {
        switch (t) {
          case Ka:
          case vu:
            throw new Error("Root did not complete. This is a bug in React.");
          case pi: {
            hi(e, br, Xa);
            break;
          }
          case Mf: {
            if ((Oo(e, n), yy(n) && !nE())) {
              var r = th + V0 - jn();
              if (r > 10) {
                var o = ic(e, ee);
                if (o !== ee) break;
                var l = e.suspendedLanes;
                if (!$i(l, n)) {
                  cr(), Sy(e, l);
                  break;
                }
                e.timeoutHandle = am(hi.bind(null, e, br, Xa), r);
                break;
              }
            }
            hi(e, br, Xa);
            break;
          }
          case hu: {
            if ((Oo(e, n), lT(n))) break;
            if (!nE()) {
              var c = tT(e, n),
                m = c,
                v = jn() - m,
                x = Ok(v) - v;
              if (x > 10) {
                e.timeoutHandle = am(hi.bind(null, e, br, Xa), x);
                break;
              }
            }
            hi(e, br, Xa);
            break;
          }
          case j0: {
            hi(e, br, Xa);
            break;
          }
          default:
            throw new Error("Unknown root exit status.");
        }
      }
      function fk(e) {
        for (var t = e; ; ) {
          if (t.flags & Kd) {
            var n = t.updateQueue;
            if (n !== null) {
              var r = n.stores;
              if (r !== null)
                for (var o = 0; o < r.length; o++) {
                  var l = r[o],
                    c = l.getSnapshot,
                    m = l.value;
                  try {
                    if (!Or(c(), m)) return !1;
                  } catch {
                    return !1;
                  }
                }
            }
          }
          var v = t.child;
          if (t.subtreeFlags & Kd && v !== null) {
            (v.return = t), (t = v);
            continue;
          }
          if (t === e) return !0;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return !0;
      }
      function Oo(e, t) {
        (t = sc(t, jf)), (t = sc(t, yu)), fT(e, t);
      }
      function B0(e) {
        if ((D1(), (ct & (Gn | Ir)) !== Tn)) throw new Error("Should not already be working.");
        Ja();
        var t = ic(e, ee);
        if (!Nr(t, Ye)) return xr(e, jn()), null;
        var n = Bf(e, t);
        if (e.tag !== yo && n === pi) {
          var r = Rp(e);
          r !== ee && ((t = r), (n = lh(e, r)));
        }
        if (n === vu) {
          var o = gu;
          throw (vi(e, ee), Oo(e, t), xr(e, jn()), o);
        }
        if (n === Zv) throw new Error("Root did not complete. This is a bug in React.");
        var l = e.current.alternate;
        return (e.finishedWork = l), (e.finishedLanes = t), hi(e, br, Xa), xr(e, jn()), null;
      }
      function dk(e, t) {
        t !== ee && (_p(e, et(t, Ye)), xr(e, jn()), (ct & (Gn | Ir)) === Tn && (xu(), bo()));
      }
      function sh(e, t) {
        var n = ct;
        ct |= L0;
        try {
          return e(t);
        } finally {
          (ct = n), ct === Tn && !aa.isBatchingLegacy && (xu(), zb());
        }
      }
      function pk(e, t, n, r, o) {
        var l = Gr(),
          c = Wn.transition;
        try {
          return (Wn.transition = null), Fn(Dr), e(t, n, r, o);
        } finally {
          Fn(l), (Wn.transition = c), ct === Tn && xu();
        }
      }
      function Qa(e) {
        Do !== null && Do.tag === yo && (ct & (Gn | Ir)) === Tn && Ja();
        var t = ct;
        ct |= L0;
        var n = Wn.transition,
          r = Gr();
        try {
          return (Wn.transition = null), Fn(Dr), e ? e() : void 0;
        } finally {
          Fn(r), (Wn.transition = n), (ct = t), (ct & (Gn | Ir)) === Tn && bo();
        }
      }
      function I0() {
        return (ct & (Gn | Ir)) !== Tn;
      }
      function Hf(e, t) {
        Jn(eh, Ea, e), (Ea = et(Ea, t));
      }
      function uh(e) {
        (Ea = eh.current), Qn(eh, e);
      }
      function vi(e, t) {
        (e.finishedWork = null), (e.finishedLanes = ee);
        var n = e.timeoutHandle;
        if ((n !== om && ((e.timeoutHandle = om), PD(n)), sn !== null))
          for (var r = sn.return; r !== null; ) {
            var o = r.alternate;
            y0(o, r), (r = r.return);
          }
        ur = e;
        var l = gi(e.current, null);
        return (
          (sn = l),
          (Nn = Ea = t),
          (Dn = Ka),
          (gu = null),
          (Lf = ee),
          (yu = ee),
          (jf = ee),
          (bu = null),
          (br = null),
          s1(),
          Xr.discardPendingWarnings(),
          l
        );
      }
      function $0(e, t) {
        do {
          var n = sn;
          try {
            if ((Xc(), mx(), Ln(), (Jv.current = null), n === null || n.return === null)) {
              (Dn = vu), (gu = t), (sn = null);
              return;
            }
            if ((Me && n.mode & Ot && Tf(n, !0), xe))
              if ((Pi(), t !== null && typeof t == "object" && typeof t.then == "function")) {
                var r = t;
                IR(n, r, Nn);
              } else BR(n, t, Nn);
            U1(e, n.return, n, t, Nn), q0(n);
          } catch (o) {
            (t = o), sn === n && n !== null ? ((n = n.return), (sn = n)) : (n = sn);
            continue;
          }
          return;
        } while (!0);
      }
      function Y0() {
        var e = Qv.current;
        return (Qv.current = Ef), e === null ? Ef : e;
      }
      function W0(e) {
        Qv.current = e;
      }
      function mk() {
        th = jn();
      }
      function wu(e) {
        Lf = et(e, Lf);
      }
      function vk() {
        Dn === Ka && (Dn = Mf);
      }
      function ch() {
        (Dn === Ka || Dn === Mf || Dn === pi) && (Dn = hu),
          ur !== null && (Tp(Lf) || Tp(yu)) && Oo(ur, Nn);
      }
      function hk(e) {
        Dn !== hu && (Dn = pi), bu === null ? (bu = [e]) : bu.push(e);
      }
      function gk() {
        return Dn === Ka;
      }
      function Bf(e, t) {
        var n = ct;
        ct |= Gn;
        var r = Y0();
        if (ur !== e || Nn !== t) {
          if (Wr) {
            var o = e.memoizedUpdaters;
            o.size > 0 && (Ru(e, Nn), o.clear()), wy(e, t);
          }
          (Xa = Ry()), vi(e, t);
        }
        py(t);
        do
          try {
            yk();
            break;
          } catch (l) {
            $0(e, l);
          }
        while (!0);
        if ((Xc(), (ct = n), W0(r), sn !== null))
          throw new Error(
            "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue."
          );
        return my(), (ur = null), (Nn = ee), Dn;
      }
      function yk() {
        for (; sn !== null; ) G0(sn);
      }
      function bk(e, t) {
        var n = ct;
        ct |= Gn;
        var r = Y0();
        if (ur !== e || Nn !== t) {
          if (Wr) {
            var o = e.memoizedUpdaters;
            o.size > 0 && (Ru(e, Nn), o.clear()), wy(e, t);
          }
          (Xa = Ry()), xu(), vi(e, t);
        }
        py(t);
        do
          try {
            xk();
            break;
          } catch (l) {
            $0(e, l);
          }
        while (!0);
        return Xc(), W0(r), (ct = n), sn !== null ? (qR(), Ka) : (my(), (ur = null), (Nn = ee), Dn);
      }
      function xk() {
        for (; sn !== null && !SR(); ) G0(sn);
      }
      function G0(e) {
        var t = e.alternate;
        rn(e);
        var n;
        (e.mode & Ot) !== Ve ? (pv(e), (n = fh(t, e, Ea)), Tf(e, !0)) : (n = fh(t, e, Ea)),
          Ln(),
          (e.memoizedProps = e.pendingProps),
          n === null ? q0(e) : (sn = n),
          (Jv.current = null);
      }
      function q0(e) {
        var t = e;
        do {
          var n = t.alternate,
            r = t.return;
          if ((t.flags & tc) === Pe) {
            rn(t);
            var o = void 0;
            if (
              ((t.mode & Ot) === Ve ? (o = g0(n, t, Ea)) : (pv(t), (o = g0(n, t, Ea)), Tf(t, !1)),
              Ln(),
              o !== null)
            ) {
              sn = o;
              return;
            }
          } else {
            var l = vO(n, t);
            if (l !== null) {
              (l.flags &= hR), (sn = l);
              return;
            }
            if ((t.mode & Ot) !== Ve) {
              Tf(t, !1);
              for (var c = t.actualDuration, m = t.child; m !== null; )
                (c += m.actualDuration), (m = m.sibling);
              t.actualDuration = c;
            }
            if (r !== null) (r.flags |= tc), (r.subtreeFlags = Pe), (r.deletions = null);
            else {
              (Dn = Zv), (sn = null);
              return;
            }
          }
          var v = t.sibling;
          if (v !== null) {
            sn = v;
            return;
          }
          (t = r), (sn = t);
        } while (t !== null);
        Dn === Ka && (Dn = j0);
      }
      function hi(e, t, n) {
        var r = Gr(),
          o = Wn.transition;
        try {
          (Wn.transition = null), Fn(Dr), Ek(e, t, n, r);
        } finally {
          (Wn.transition = o), Fn(r);
        }
        return null;
      }
      function Ek(e, t, n, r) {
        do Ja();
        while (Do !== null);
        if ((Ak(), (ct & (Gn | Ir)) !== Tn)) throw new Error("Should not already be working.");
        var o = e.finishedWork,
          l = e.finishedLanes;
        if ((jR(l), o === null)) return cy(), null;
        if (
          (l === ee &&
            f("root.finishedLanes should not be empty during a commit. This is a bug in React."),
          (e.finishedWork = null),
          (e.finishedLanes = ee),
          o === e.current)
        )
          throw new Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        (e.callbackNode = null), (e.callbackPriority = Un);
        var c = et(o.lanes, o.childLanes);
        dT(e, c),
          e === ur && ((ur = null), (sn = null), (Nn = ee)),
          ((o.subtreeFlags & Fi) !== Pe || (o.flags & Fi) !== Pe) &&
            (mi ||
              ((mi = !0),
              (ah = n),
              mh(Ko, function () {
                return Ja(), null;
              })));
        var m = (o.subtreeFlags & (ep | tp | ss | Fi)) !== Pe,
          v = (o.flags & (ep | tp | ss | Fi)) !== Pe;
        if (m || v) {
          var x = Wn.transition;
          Wn.transition = null;
          var S = Gr();
          Fn(Dr);
          var A = ct;
          (ct |= Ir),
            (Jv.current = null),
            xO(e, o),
            zx(),
            LO(e, o, l),
            MD(e.containerInfo),
            (e.current = o),
            $R(l),
            jO(o, e, l),
            YR(),
            CR(),
            (ct = A),
            Fn(S),
            (Wn.transition = x);
        } else (e.current = o), zx();
        var k = mi;
        if (
          (mi ? ((mi = !1), (Do = e), (Eu = l)) : ((xl = 0), (Ff = null)),
          (c = e.pendingLanes),
          c === ee && (bl = null),
          k || J0(e.current, !1),
          OR(o.stateNode, r),
          Wr && e.memoizedUpdaters.clear(),
          ek(),
          xr(e, jn()),
          t !== null)
        )
          for (var z = e.onRecoverableError, H = 0; H < t.length; H++) {
            var Y = t[H],
              me = Y.stack,
              Ae = Y.digest;
            z(Y.value, { componentStack: me, digest: Ae });
          }
        if (Vf) {
          Vf = !1;
          var De = nh;
          throw ((nh = null), De);
        }
        return (
          Nr(Eu, Ye) && e.tag !== yo && Ja(),
          (c = e.pendingLanes),
          Nr(c, Ye) ? (T1(), e === oh ? Su++ : ((Su = 0), (oh = e))) : (Su = 0),
          bo(),
          cy(),
          null
        );
      }
      function Ja() {
        if (Do !== null) {
          var e = Ty(Eu),
            t = hT(Ha, e),
            n = Wn.transition,
            r = Gr();
          try {
            return (Wn.transition = null), Fn(t), Ck();
          } finally {
            Fn(r), (Wn.transition = n);
          }
        }
        return !1;
      }
      function Sk(e) {
        rh.push(e),
          mi ||
            ((mi = !0),
            mh(Ko, function () {
              return Ja(), null;
            }));
      }
      function Ck() {
        if (Do === null) return !1;
        var e = ah;
        ah = null;
        var t = Do,
          n = Eu;
        if (((Do = null), (Eu = ee), (ct & (Gn | Ir)) !== Tn))
          throw new Error("Cannot flush passive effects while already rendering.");
        (ih = !0), (Uf = !1), WR(n);
        var r = ct;
        (ct |= Ir), BO(t.current), FO(t, t.current, n, e);
        {
          var o = rh;
          rh = [];
          for (var l = 0; l < o.length; l++) {
            var c = o[l];
            wO(t, c);
          }
        }
        GR(),
          J0(t.current, !0),
          (ct = r),
          bo(),
          Uf ? (t === Ff ? xl++ : ((xl = 0), (Ff = t))) : (xl = 0),
          (ih = !1),
          (Uf = !1),
          kR(t);
        {
          var m = t.current.stateNode;
          (m.effectDuration = 0), (m.passiveEffectDuration = 0);
        }
        return !0;
      }
      function K0(e) {
        return bl !== null && bl.has(e);
      }
      function wk(e) {
        bl === null ? (bl = new Set([e])) : bl.add(e);
      }
      function Rk(e) {
        Vf || ((Vf = !0), (nh = e));
      }
      var Tk = Rk;
      function X0(e, t, n) {
        var r = fi(n, t),
          o = Gx(e, r, Ye),
          l = Eo(e, o, Ye),
          c = cr();
        l !== null && (hs(l, Ye, c), xr(l, c));
      }
      function Bt(e, t, n) {
        if ((gO(n), Tu(!1), e.tag === g)) {
          X0(e, e, n);
          return;
        }
        var r = null;
        for (r = t; r !== null; ) {
          if (r.tag === g) {
            X0(r, e, n);
            return;
          } else if (r.tag === y) {
            var o = r.type,
              l = r.stateNode;
            if (
              typeof o.getDerivedStateFromError == "function" ||
              (typeof l.componentDidCatch == "function" && !K0(l))
            ) {
              var c = fi(n, e),
                m = kv(r, c, Ye),
                v = Eo(r, m, Ye),
                x = cr();
              v !== null && (hs(v, Ye, x), xr(v, x));
              return;
            }
          }
          r = r.return;
        }
        f(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          n
        );
      }
      function Nk(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t);
        var o = cr();
        Sy(e, n),
          Vk(e),
          ur === e &&
            $i(Nn, n) &&
            (Dn === hu || (Dn === Mf && yy(Nn) && jn() - th < V0) ? vi(e, ee) : (jf = et(jf, n))),
          xr(e, o);
      }
      function Q0(e, t) {
        t === Un && (t = lk(e));
        var n = cr(),
          r = gr(e, t);
        r !== null && (hs(r, t, n), xr(r, n));
      }
      function Dk(e) {
        var t = e.memoizedState,
          n = Un;
        t !== null && (n = t.retryLane), Q0(e, n);
      }
      function _k(e, t) {
        var n = Un,
          r;
        switch (e.tag) {
          case q:
            r = e.stateNode;
            var o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
          case Xe:
            r = e.stateNode;
            break;
          default:
            throw new Error(
              "Pinged unknown suspense boundary type. This is probably a bug in React."
            );
        }
        r !== null && r.delete(t), Q0(e, n);
      }
      function Ok(e) {
        return e < 120
          ? 120
          : e < 480
            ? 480
            : e < 1080
              ? 1080
              : e < 1920
                ? 1920
                : e < 3e3
                  ? 3e3
                  : e < 4320
                    ? 4320
                    : rk(e / 1960) * 1960;
      }
      function kk() {
        if (Su > ok)
          throw (
            ((Su = 0),
            (oh = null),
            new Error(
              "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
            ))
          );
        xl > ik &&
          ((xl = 0),
          (Ff = null),
          f(
            "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
          ));
      }
      function Ak() {
        Xr.flushLegacyContextWarning(), Xr.flushPendingUnsafeLifecycleWarnings();
      }
      function J0(e, t) {
        rn(e), If(e, so, QO), t && If(e, Zd, JO), If(e, so, KO), t && If(e, Zd, XO), Ln();
      }
      function If(e, t, n) {
        for (var r = e, o = null; r !== null; ) {
          var l = r.subtreeFlags & t;
          r !== o && r.child !== null && l !== Pe
            ? (r = r.child)
            : ((r.flags & t) !== Pe && n(r),
              r.sibling !== null ? (r = r.sibling) : (r = o = r.return));
        }
      }
      var $f = null;
      function Z0(e) {
        {
          if ((ct & Gn) !== Tn || !(e.mode & ut)) return;
          var t = e.tag;
          if (t !== w && t !== g && t !== y && t !== b && t !== G && t !== oe && t !== X) return;
          var n = Ke(e) || "ReactComponent";
          if ($f !== null) {
            if ($f.has(n)) return;
            $f.add(n);
          } else $f = new Set([n]);
          var r = ar;
          try {
            rn(e),
              f(
                "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
              );
          } finally {
            r ? rn(e) : Ln();
          }
        }
      }
      var fh;
      {
        var Mk = null;
        fh = function (e, t, n) {
          var r = lE(Mk, t);
          try {
            return d0(e, t, n);
          } catch (l) {
            if (Y_() || (l !== null && typeof l == "object" && typeof l.then == "function"))
              throw l;
            if (
              (Xc(),
              mx(),
              y0(e, t),
              lE(t, r),
              t.mode & Ot && pv(t),
              Gd(null, d0, null, e, t, n),
              pR())
            ) {
              var o = qd();
              typeof o == "object" &&
                o !== null &&
                o._suppressLogging &&
                typeof l == "object" &&
                l !== null &&
                !l._suppressLogging &&
                (l._suppressLogging = !0);
            }
            throw l;
          }
        };
      }
      var eE = !1,
        dh;
      dh = new Set();
      function Lk(e) {
        if (Po && !C1())
          switch (e.tag) {
            case b:
            case G:
            case X: {
              var t = (sn && Ke(sn)) || "Unknown",
                n = t;
              if (!dh.has(n)) {
                dh.add(n);
                var r = Ke(e) || "Unknown";
                f(
                  "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",
                  r,
                  t,
                  t
                );
              }
              break;
            }
            case y: {
              eE ||
                (f(
                  "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
                ),
                (eE = !0));
              break;
            }
          }
      }
      function Ru(e, t) {
        if (Wr) {
          var n = e.memoizedUpdaters;
          n.forEach(function (r) {
            Cy(e, r, t);
          });
        }
      }
      var ph = {};
      function mh(e, t) {
        {
          var n = aa.current;
          return n !== null ? (n.push(t), ph) : uy(e, t);
        }
      }
      function tE(e) {
        if (e !== ph) return ER(e);
      }
      function nE() {
        return aa.current !== null;
      }
      function jk(e) {
        {
          if (e.mode & ut) {
            if (!M0()) return;
          } else if (!nk() || ct !== Tn || (e.tag !== b && e.tag !== G && e.tag !== X)) return;
          if (aa.current === null) {
            var t = ar;
            try {
              rn(e),
                f(
                  `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,
                  Ke(e)
                );
            } finally {
              t ? rn(e) : Ln();
            }
          }
        }
      }
      function Vk(e) {
        e.tag !== yo &&
          M0() &&
          aa.current === null &&
          f(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
      }
      function Tu(e) {
        z0 = e;
      }
      var $r = null,
        El = null,
        Uk = function (e) {
          $r = e;
        };
      function Sl(e) {
        {
          if ($r === null) return e;
          var t = $r(e);
          return t === void 0 ? e : t.current;
        }
      }
      function vh(e) {
        return Sl(e);
      }
      function hh(e) {
        {
          if ($r === null) return e;
          var t = $r(e);
          if (t === void 0) {
            if (e != null && typeof e.render == "function") {
              var n = Sl(e.render);
              if (e.render !== n) {
                var r = { $$typeof: F, render: n };
                return e.displayName !== void 0 && (r.displayName = e.displayName), r;
              }
            }
            return e;
          }
          return t.current;
        }
      }
      function rE(e, t) {
        {
          if ($r === null) return !1;
          var n = e.elementType,
            r = t.type,
            o = !1,
            l = typeof r == "object" && r !== null ? r.$$typeof : null;
          switch (e.tag) {
            case y: {
              typeof r == "function" && (o = !0);
              break;
            }
            case b: {
              (typeof r == "function" || l === ce) && (o = !0);
              break;
            }
            case G: {
              (l === F || l === ce) && (o = !0);
              break;
            }
            case oe:
            case X: {
              (l === he || l === ce) && (o = !0);
              break;
            }
            default:
              return !1;
          }
          if (o) {
            var c = $r(n);
            if (c !== void 0 && c === $r(r)) return !0;
          }
          return !1;
        }
      }
      function aE(e) {
        {
          if ($r === null || typeof WeakSet != "function") return;
          El === null && (El = new WeakSet()), El.add(e);
        }
      }
      var Fk = function (e, t) {
          {
            if ($r === null) return;
            var n = t.staleFamilies,
              r = t.updatedFamilies;
            Ja(),
              Qa(function () {
                gh(e.current, r, n);
              });
          }
        },
        zk = function (e, t) {
          {
            if (e.context !== kr) return;
            Ja(),
              Qa(function () {
                Nu(t, e, null, null);
              });
          }
        };
      function gh(e, t, n) {
        {
          var r = e.alternate,
            o = e.child,
            l = e.sibling,
            c = e.tag,
            m = e.type,
            v = null;
          switch (c) {
            case b:
            case X:
            case y:
              v = m;
              break;
            case G:
              v = m.render;
              break;
          }
          if ($r === null) throw new Error("Expected resolveFamily to be set during hot reload.");
          var x = !1,
            S = !1;
          if (v !== null) {
            var A = $r(v);
            A !== void 0 && (n.has(A) ? (S = !0) : t.has(A) && (c === y ? (S = !0) : (x = !0)));
          }
          if (
            (El !== null && (El.has(e) || (r !== null && El.has(r))) && (S = !0),
            S && (e._debugNeedsRemount = !0),
            S || x)
          ) {
            var k = gr(e, Ye);
            k !== null && _n(k, e, Ye, Xt);
          }
          o !== null && !S && gh(o, t, n), l !== null && gh(l, t, n);
        }
      }
      var Pk = function (e, t) {
        {
          var n = new Set(),
            r = new Set(
              t.map(function (o) {
                return o.current;
              })
            );
          return yh(e.current, r, n), n;
        }
      };
      function yh(e, t, n) {
        {
          var r = e.child,
            o = e.sibling,
            l = e.tag,
            c = e.type,
            m = null;
          switch (l) {
            case b:
            case X:
            case y:
              m = c;
              break;
            case G:
              m = c.render;
              break;
          }
          var v = !1;
          m !== null && t.has(m) && (v = !0),
            v ? Hk(e, n) : r !== null && yh(r, t, n),
            o !== null && yh(o, t, n);
        }
      }
      function Hk(e, t) {
        {
          var n = Bk(e, t);
          if (n) return;
          for (var r = e; ; ) {
            switch (r.tag) {
              case T:
                t.add(r.stateNode);
                return;
              case _:
                t.add(r.stateNode.containerInfo);
                return;
              case g:
                t.add(r.stateNode.containerInfo);
                return;
            }
            if (r.return === null) throw new Error("Expected to reach root first.");
            r = r.return;
          }
        }
      }
      function Bk(e, t) {
        for (var n = e, r = !1; ; ) {
          if (n.tag === T) (r = !0), t.add(n.stateNode);
          else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) return r;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return r;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
        return !1;
      }
      var bh;
      {
        bh = !1;
        try {
          var oE = Object.preventExtensions({});
        } catch {
          bh = !0;
        }
      }
      function Ik(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.elementType = null),
          (this.type = null),
          (this.stateNode = null),
          (this.return = null),
          (this.child = null),
          (this.sibling = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.memoizedProps = null),
          (this.updateQueue = null),
          (this.memoizedState = null),
          (this.dependencies = null),
          (this.mode = r),
          (this.flags = Pe),
          (this.subtreeFlags = Pe),
          (this.deletions = null),
          (this.lanes = ee),
          (this.childLanes = ee),
          (this.alternate = null),
          (this.actualDuration = Number.NaN),
          (this.actualStartTime = Number.NaN),
          (this.selfBaseDuration = Number.NaN),
          (this.treeBaseDuration = Number.NaN),
          (this.actualDuration = 0),
          (this.actualStartTime = -1),
          (this.selfBaseDuration = 0),
          (this.treeBaseDuration = 0),
          (this._debugSource = null),
          (this._debugOwner = null),
          (this._debugNeedsRemount = !1),
          (this._debugHookTypes = null),
          !bh && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
      }
      var Ar = function (e, t, n, r) {
        return new Ik(e, t, n, r);
      };
      function xh(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function $k(e) {
        return typeof e == "function" && !xh(e) && e.defaultProps === void 0;
      }
      function Yk(e) {
        if (typeof e == "function") return xh(e) ? y : b;
        if (e != null) {
          var t = e.$$typeof;
          if (t === F) return G;
          if (t === he) return oe;
        }
        return w;
      }
      function gi(e, t) {
        var n = e.alternate;
        n === null
          ? ((n = Ar(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n._debugSource = e._debugSource),
            (n._debugOwner = e._debugOwner),
            (n._debugHookTypes = e._debugHookTypes),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = Pe),
            (n.subtreeFlags = Pe),
            (n.deletions = null),
            (n.actualDuration = 0),
            (n.actualStartTime = -1)),
          (n.flags = e.flags & Fa),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue);
        var r = e.dependencies;
        switch (
          ((n.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          (n.selfBaseDuration = e.selfBaseDuration),
          (n.treeBaseDuration = e.treeBaseDuration),
          (n._debugNeedsRemount = e._debugNeedsRemount),
          n.tag)
        ) {
          case w:
          case b:
          case X:
            n.type = Sl(e.type);
            break;
          case y:
            n.type = vh(e.type);
            break;
          case G:
            n.type = hh(e.type);
            break;
        }
        return n;
      }
      function Wk(e, t) {
        e.flags &= Fa | bn;
        var n = e.alternate;
        if (n === null)
          (e.childLanes = ee),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = Pe),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null),
            (e.selfBaseDuration = 0),
            (e.treeBaseDuration = 0);
        else {
          (e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = Pe),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type);
          var r = n.dependencies;
          (e.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
            (e.selfBaseDuration = n.selfBaseDuration),
            (e.treeBaseDuration = n.treeBaseDuration);
        }
        return e;
      }
      function Gk(e, t, n) {
        var r;
        return (
          e === Pc ? ((r = ut), t === !0 && ((r |= un), (r |= fa))) : (r = Ve),
          Wr && (r |= Ot),
          Ar(g, null, null, r)
        );
      }
      function Eh(e, t, n, r, o, l) {
        var c = w,
          m = e;
        if (typeof e == "function") xh(e) ? ((c = y), (m = vh(m))) : (m = Sl(m));
        else if (typeof e == "string") c = T;
        else
          e: switch (e) {
            case tn:
              return ko(n.children, o, l, t);
            case Vr:
              (c = B), (o |= un), (o & ut) !== Ve && (o |= fa);
              break;
            case N:
              return qk(n, o, l, t);
            case Z:
              return Kk(n, o, l, t);
            case ae:
              return Xk(n, o, l, t);
            case nt:
              return iE(n, o, l, t);
            case lt:
            case je:
            case Tt:
            case nn:
            case Te:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case te:
                    c = I;
                    break e;
                  case C:
                    c = j;
                    break e;
                  case F:
                    (c = G), (m = hh(m));
                    break e;
                  case he:
                    c = oe;
                    break e;
                  case ce:
                    (c = ne), (m = null);
                    break e;
                }
              var v = "";
              {
                (e === void 0 ||
                  (typeof e == "object" && e !== null && Object.keys(e).length === 0)) &&
                  (v +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var x = r ? Ke(r) : null;
                x &&
                  (v +=
                    `

Check the render method of \`` +
                    x +
                    "`.");
              }
              throw new Error(
                "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " +
                  ("but got: " + (e == null ? e : typeof e) + "." + v)
              );
            }
          }
        var S = Ar(c, n, t, o);
        return (S.elementType = e), (S.type = m), (S.lanes = l), (S._debugOwner = r), S;
      }
      function Sh(e, t, n) {
        var r = null;
        r = e._owner;
        var o = e.type,
          l = e.key,
          c = e.props,
          m = Eh(o, l, c, r, t, n);
        return (m._debugSource = e._source), (m._debugOwner = e._owner), m;
      }
      function ko(e, t, n, r) {
        var o = Ar(L, e, r, t);
        return (o.lanes = n), o;
      }
      function qk(e, t, n, r) {
        typeof e.id != "string" &&
          f(
            'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
            typeof e.id
          );
        var o = Ar(J, e, r, t | Ot);
        return (
          (o.elementType = N),
          (o.lanes = n),
          (o.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
          o
        );
      }
      function Kk(e, t, n, r) {
        var o = Ar(q, e, r, t);
        return (o.elementType = Z), (o.lanes = n), o;
      }
      function Xk(e, t, n, r) {
        var o = Ar(Xe, e, r, t);
        return (o.elementType = ae), (o.lanes = n), o;
      }
      function iE(e, t, n, r) {
        var o = Ar(le, e, r, t);
        (o.elementType = nt), (o.lanes = n);
        var l = { isHidden: !1 };
        return (o.stateNode = l), o;
      }
      function Ch(e, t, n) {
        var r = Ar(O, e, null, t);
        return (r.lanes = n), r;
      }
      function Qk() {
        var e = Ar(T, null, null, Ve);
        return (e.elementType = "DELETED"), e;
      }
      function Jk(e) {
        var t = Ar(He, null, null, Ve);
        return (t.stateNode = e), t;
      }
      function wh(e, t, n) {
        var r = e.children !== null ? e.children : [],
          o = Ar(_, r, e.key, t);
        return (
          (o.lanes = n),
          (o.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
          }),
          o
        );
      }
      function lE(e, t) {
        return (
          e === null && (e = Ar(w, null, null, Ve)),
          (e.tag = t.tag),
          (e.key = t.key),
          (e.elementType = t.elementType),
          (e.type = t.type),
          (e.stateNode = t.stateNode),
          (e.return = t.return),
          (e.child = t.child),
          (e.sibling = t.sibling),
          (e.index = t.index),
          (e.ref = t.ref),
          (e.pendingProps = t.pendingProps),
          (e.memoizedProps = t.memoizedProps),
          (e.updateQueue = t.updateQueue),
          (e.memoizedState = t.memoizedState),
          (e.dependencies = t.dependencies),
          (e.mode = t.mode),
          (e.flags = t.flags),
          (e.subtreeFlags = t.subtreeFlags),
          (e.deletions = t.deletions),
          (e.lanes = t.lanes),
          (e.childLanes = t.childLanes),
          (e.alternate = t.alternate),
          (e.actualDuration = t.actualDuration),
          (e.actualStartTime = t.actualStartTime),
          (e.selfBaseDuration = t.selfBaseDuration),
          (e.treeBaseDuration = t.treeBaseDuration),
          (e._debugSource = t._debugSource),
          (e._debugOwner = t._debugOwner),
          (e._debugNeedsRemount = t._debugNeedsRemount),
          (e._debugHookTypes = t._debugHookTypes),
          e
        );
      }
      function Zk(e, t, n, r, o) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.pendingChildren = null),
          (this.current = null),
          (this.pingCache = null),
          (this.finishedWork = null),
          (this.timeoutHandle = om),
          (this.context = null),
          (this.pendingContext = null),
          (this.callbackNode = null),
          (this.callbackPriority = Un),
          (this.eventTimes = Dp(ee)),
          (this.expirationTimes = Dp(Xt)),
          (this.pendingLanes = ee),
          (this.suspendedLanes = ee),
          (this.pingedLanes = ee),
          (this.expiredLanes = ee),
          (this.mutableReadLanes = ee),
          (this.finishedLanes = ee),
          (this.entangledLanes = ee),
          (this.entanglements = Dp(ee)),
          (this.identifierPrefix = r),
          (this.onRecoverableError = o),
          (this.mutableSourceEagerHydrationData = null),
          (this.effectDuration = 0),
          (this.passiveEffectDuration = 0);
        {
          this.memoizedUpdaters = new Set();
          for (var l = (this.pendingUpdatersLaneMap = []), c = 0; c < op; c++) l.push(new Set());
        }
        switch (t) {
          case Pc:
            this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
            break;
          case yo:
            this._debugRootType = n ? "hydrate()" : "render()";
            break;
        }
      }
      function sE(e, t, n, r, o, l, c, m, v, x) {
        var S = new Zk(e, t, n, m, v),
          A = Gk(t, l);
        (S.current = A), (A.stateNode = S);
        {
          var k = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
          };
          A.memoizedState = k;
        }
        return Um(A), S;
      }
      var Rh = "18.3.1";
      function eA(e, t, n) {
        var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
        return (
          dn(r),
          {
            $$typeof: Ut,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
          }
        );
      }
      var Th, Nh;
      (Th = !1), (Nh = {});
      function uE(e) {
        if (!e) return kr;
        var t = ji(e),
          n = V_(t);
        if (t.tag === y) {
          var r = t.type;
          if (ma(r)) return Vb(t, r, n);
        }
        return n;
      }
      function tA(e, t) {
        {
          var n = ji(e);
          if (n === void 0) {
            if (typeof e.render == "function")
              throw new Error("Unable to find node on an unmounted component.");
            var r = Object.keys(e).join(",");
            throw new Error("Argument appears to not be a ReactComponent. Keys: " + r);
          }
          var o = iy(n);
          if (o === null) return null;
          if (o.mode & un) {
            var l = Ke(n) || "Component";
            if (!Nh[l]) {
              Nh[l] = !0;
              var c = ar;
              try {
                rn(o),
                  n.mode & un
                    ? f(
                        "%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                        t,
                        t,
                        l
                      )
                    : f(
                        "%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                        t,
                        t,
                        l
                      );
              } finally {
                c ? rn(c) : Ln();
              }
            }
          }
          return o.stateNode;
        }
      }
      function cE(e, t, n, r, o, l, c, m) {
        var v = !1,
          x = null;
        return sE(e, t, v, x, n, r, o, l, c);
      }
      function fE(e, t, n, r, o, l, c, m, v, x) {
        var S = !0,
          A = sE(n, r, S, e, o, l, c, m, v);
        A.context = uE(null);
        var k = A.current,
          z = cr(),
          H = _o(k),
          Y = Ga(z, H);
        return (Y.callback = t ?? null), Eo(k, Y, H), sk(A, H, z), A;
      }
      function Nu(e, t, n, r) {
        _R(t, e);
        var o = t.current,
          l = cr(),
          c = _o(o);
        KR(c);
        var m = uE(n);
        t.context === null ? (t.context = m) : (t.pendingContext = m),
          Po &&
            ar !== null &&
            !Th &&
            ((Th = !0),
            f(
              `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
              Ke(ar) || "Unknown"
            ));
        var v = Ga(l, c);
        (v.payload = { element: e }),
          (r = r === void 0 ? null : r),
          r !== null &&
            (typeof r != "function" &&
              f(
                "render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                r
              ),
            (v.callback = r));
        var x = Eo(o, v, c);
        return x !== null && (_n(x, o, c, l), tf(x, o, c)), c;
      }
      function Yf(e) {
        var t = e.current;
        if (!t.child) return null;
        switch (t.child.tag) {
          case T:
            return t.child.stateNode;
          default:
            return t.child.stateNode;
        }
      }
      function nA(e) {
        switch (e.tag) {
          case g: {
            var t = e.stateNode;
            if (cc(t)) {
              var n = aT(t);
              dk(t, n);
            }
            break;
          }
          case q: {
            Qa(function () {
              var o = gr(e, Ye);
              if (o !== null) {
                var l = cr();
                _n(o, e, Ye, l);
              }
            });
            var r = Ye;
            Dh(e, r);
            break;
          }
        }
      }
      function dE(e, t) {
        var n = e.memoizedState;
        n !== null && n.dehydrated !== null && (n.retryLane = cT(n.retryLane, t));
      }
      function Dh(e, t) {
        dE(e, t);
        var n = e.alternate;
        n && dE(n, t);
      }
      function rA(e) {
        if (e.tag === q) {
          var t = ds,
            n = gr(e, t);
          if (n !== null) {
            var r = cr();
            _n(n, e, t, r);
          }
          Dh(e, t);
        }
      }
      function aA(e) {
        if (e.tag === q) {
          var t = _o(e),
            n = gr(e, t);
          if (n !== null) {
            var r = cr();
            _n(n, e, t, r);
          }
          Dh(e, t);
        }
      }
      function pE(e) {
        var t = xR(e);
        return t === null ? null : t.stateNode;
      }
      var mE = function (e) {
        return null;
      };
      function oA(e) {
        return mE(e);
      }
      var vE = function (e) {
        return !1;
      };
      function iA(e) {
        return vE(e);
      }
      var hE = null,
        gE = null,
        yE = null,
        bE = null,
        xE = null,
        EE = null,
        SE = null,
        CE = null,
        wE = null;
      {
        var RE = function (e, t, n) {
            var r = t[n],
              o = at(e) ? e.slice() : Qe({}, e);
            return n + 1 === t.length
              ? (at(o) ? o.splice(r, 1) : delete o[r], o)
              : ((o[r] = RE(e[r], t, n + 1)), o);
          },
          TE = function (e, t) {
            return RE(e, t, 0);
          },
          NE = function (e, t, n, r) {
            var o = t[r],
              l = at(e) ? e.slice() : Qe({}, e);
            if (r + 1 === t.length) {
              var c = n[r];
              (l[c] = l[o]), at(l) ? l.splice(o, 1) : delete l[o];
            } else l[o] = NE(e[o], t, n, r + 1);
            return l;
          },
          DE = function (e, t, n) {
            if (t.length !== n.length) {
              p("copyWithRename() expects paths of the same length");
              return;
            } else
              for (var r = 0; r < n.length - 1; r++)
                if (t[r] !== n[r]) {
                  p("copyWithRename() expects paths to be the same except for the deepest key");
                  return;
                }
            return NE(e, t, n, 0);
          },
          _E = function (e, t, n, r) {
            if (n >= t.length) return r;
            var o = t[n],
              l = at(e) ? e.slice() : Qe({}, e);
            return (l[o] = _E(e[o], t, n + 1, r)), l;
          },
          OE = function (e, t, n) {
            return _E(e, t, 0, n);
          },
          _h = function (e, t) {
            for (var n = e.memoizedState; n !== null && t > 0; ) (n = n.next), t--;
            return n;
          };
        (hE = function (e, t, n, r) {
          var o = _h(e, t);
          if (o !== null) {
            var l = OE(o.memoizedState, n, r);
            (o.memoizedState = l), (o.baseState = l), (e.memoizedProps = Qe({}, e.memoizedProps));
            var c = gr(e, Ye);
            c !== null && _n(c, e, Ye, Xt);
          }
        }),
          (gE = function (e, t, n) {
            var r = _h(e, t);
            if (r !== null) {
              var o = TE(r.memoizedState, n);
              (r.memoizedState = o), (r.baseState = o), (e.memoizedProps = Qe({}, e.memoizedProps));
              var l = gr(e, Ye);
              l !== null && _n(l, e, Ye, Xt);
            }
          }),
          (yE = function (e, t, n, r) {
            var o = _h(e, t);
            if (o !== null) {
              var l = DE(o.memoizedState, n, r);
              (o.memoizedState = l), (o.baseState = l), (e.memoizedProps = Qe({}, e.memoizedProps));
              var c = gr(e, Ye);
              c !== null && _n(c, e, Ye, Xt);
            }
          }),
          (bE = function (e, t, n) {
            (e.pendingProps = OE(e.memoizedProps, t, n)),
              e.alternate && (e.alternate.pendingProps = e.pendingProps);
            var r = gr(e, Ye);
            r !== null && _n(r, e, Ye, Xt);
          }),
          (xE = function (e, t) {
            (e.pendingProps = TE(e.memoizedProps, t)),
              e.alternate && (e.alternate.pendingProps = e.pendingProps);
            var n = gr(e, Ye);
            n !== null && _n(n, e, Ye, Xt);
          }),
          (EE = function (e, t, n) {
            (e.pendingProps = DE(e.memoizedProps, t, n)),
              e.alternate && (e.alternate.pendingProps = e.pendingProps);
            var r = gr(e, Ye);
            r !== null && _n(r, e, Ye, Xt);
          }),
          (SE = function (e) {
            var t = gr(e, Ye);
            t !== null && _n(t, e, Ye, Xt);
          }),
          (CE = function (e) {
            mE = e;
          }),
          (wE = function (e) {
            vE = e;
          });
      }
      function lA(e) {
        var t = iy(e);
        return t === null ? null : t.stateNode;
      }
      function sA(e) {
        return null;
      }
      function uA() {
        return ar;
      }
      function cA(e) {
        var t = e.findFiberByHostInstance,
          n = s.ReactCurrentDispatcher;
        return DR({
          bundleType: e.bundleType,
          version: e.version,
          rendererPackageName: e.rendererPackageName,
          rendererConfig: e.rendererConfig,
          overrideHookState: hE,
          overrideHookStateDeletePath: gE,
          overrideHookStateRenamePath: yE,
          overrideProps: bE,
          overridePropsDeletePath: xE,
          overridePropsRenamePath: EE,
          setErrorHandler: CE,
          setSuspenseHandler: wE,
          scheduleUpdate: SE,
          currentDispatcherRef: n,
          findHostInstanceByFiber: lA,
          findFiberByHostInstance: t || sA,
          findHostInstancesForRefresh: Pk,
          scheduleRefresh: Fk,
          scheduleRoot: zk,
          setRefreshHandler: Uk,
          getCurrentFiber: uA,
          reconcilerVersion: Rh
        });
      }
      var kE =
        typeof reportError == "function"
          ? reportError
          : function (e) {
              console.error(e);
            };
      function Oh(e) {
        this._internalRoot = e;
      }
      (Wf.prototype.render = Oh.prototype.render =
        function (e) {
          var t = this._internalRoot;
          if (t === null) throw new Error("Cannot update an unmounted root.");
          {
            typeof arguments[1] == "function"
              ? f(
                  "render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
                )
              : Gf(arguments[1])
                ? f(
                    "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
                  )
                : typeof arguments[1] < "u" &&
                  f(
                    "You passed a second argument to root.render(...) but it only accepts one argument."
                  );
            var n = t.containerInfo;
            if (n.nodeType !== yn) {
              var r = pE(t.current);
              r &&
                r.parentNode !== n &&
                f(
                  "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
                );
            }
          }
          Nu(e, t, null, null);
        }),
        (Wf.prototype.unmount = Oh.prototype.unmount =
          function () {
            typeof arguments[0] == "function" &&
              f(
                "unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
              );
            var e = this._internalRoot;
            if (e !== null) {
              this._internalRoot = null;
              var t = e.containerInfo;
              I0() &&
                f(
                  "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
                ),
                Qa(function () {
                  Nu(null, e, null, null);
                }),
                kb(t);
            }
          });
      function fA(e, t) {
        if (!Gf(e)) throw new Error("createRoot(...): Target container is not a DOM element.");
        AE(e);
        var n = !1,
          r = !1,
          o = "",
          l = kE;
        t != null &&
          (t.hydrate
            ? p(
                "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
              )
            : typeof t == "object" &&
              t !== null &&
              t.$$typeof === hn &&
              f(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
          t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError),
          t.transitionCallbacks !== void 0 && t.transitionCallbacks);
        var c = cE(e, Pc, null, n, r, o, l);
        Mc(c.current, e);
        var m = e.nodeType === yn ? e.parentNode : e;
        return Ms(m), new Oh(c);
      }
      function Wf(e) {
        this._internalRoot = e;
      }
      function dA(e) {
        e && NT(e);
      }
      Wf.prototype.unstable_scheduleHydration = dA;
      function pA(e, t, n) {
        if (!Gf(e)) throw new Error("hydrateRoot(...): Target container is not a DOM element.");
        AE(e),
          t === void 0 &&
            f(
              "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
            );
        var r = n ?? null,
          o = (n != null && n.hydratedSources) || null,
          l = !1,
          c = !1,
          m = "",
          v = kE;
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (m = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError));
        var x = fE(t, null, e, Pc, r, l, c, m, v);
        if ((Mc(x.current, e), Ms(e), o))
          for (var S = 0; S < o.length; S++) {
            var A = o[S];
            g1(x, A);
          }
        return new Wf(x);
      }
      function Gf(e) {
        return !!(e && (e.nodeType === vr || e.nodeType === ja || e.nodeType === Vd));
      }
      function Du(e) {
        return !!(
          e &&
          (e.nodeType === vr ||
            e.nodeType === ja ||
            e.nodeType === Vd ||
            (e.nodeType === yn && e.nodeValue === " react-mount-point-unstable "))
        );
      }
      function AE(e) {
        e.nodeType === vr &&
          e.tagName &&
          e.tagName.toUpperCase() === "BODY" &&
          f(
            "createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."
          ),
          $s(e) &&
            (e._reactRootContainer
              ? f(
                  "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
                )
              : f(
                  "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
                ));
      }
      var mA = s.ReactCurrentOwner,
        ME;
      ME = function (e) {
        if (e._reactRootContainer && e.nodeType !== yn) {
          var t = pE(e._reactRootContainer.current);
          t &&
            t.parentNode !== e &&
            f(
              "render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container."
            );
        }
        var n = !!e._reactRootContainer,
          r = kh(e),
          o = !!(r && ho(r));
        o &&
          !n &&
          f(
            "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."
          ),
          e.nodeType === vr &&
            e.tagName &&
            e.tagName.toUpperCase() === "BODY" &&
            f(
              "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app."
            );
      };
      function kh(e) {
        return e ? (e.nodeType === ja ? e.documentElement : e.firstChild) : null;
      }
      function LE() {}
      function vA(e, t, n, r, o) {
        if (o) {
          if (typeof r == "function") {
            var l = r;
            r = function () {
              var k = Yf(c);
              l.call(k);
            };
          }
          var c = fE(t, r, e, yo, null, !1, !1, "", LE);
          (e._reactRootContainer = c), Mc(c.current, e);
          var m = e.nodeType === yn ? e.parentNode : e;
          return Ms(m), Qa(), c;
        } else {
          for (var v; (v = e.lastChild); ) e.removeChild(v);
          if (typeof r == "function") {
            var x = r;
            r = function () {
              var k = Yf(S);
              x.call(k);
            };
          }
          var S = cE(e, yo, null, !1, !1, "", LE);
          (e._reactRootContainer = S), Mc(S.current, e);
          var A = e.nodeType === yn ? e.parentNode : e;
          return (
            Ms(A),
            Qa(function () {
              Nu(t, S, n, r);
            }),
            S
          );
        }
      }
      function hA(e, t) {
        e !== null &&
          typeof e != "function" &&
          f(
            "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
            t,
            e
          );
      }
      function qf(e, t, n, r, o) {
        ME(n), hA(o === void 0 ? null : o, "render");
        var l = n._reactRootContainer,
          c;
        if (!l) c = vA(n, t, e, o, r);
        else {
          if (((c = l), typeof o == "function")) {
            var m = o;
            o = function () {
              var v = Yf(c);
              m.call(v);
            };
          }
          Nu(t, c, e, o);
        }
        return Yf(c);
      }
      var jE = !1;
      function gA(e) {
        {
          jE ||
            ((jE = !0),
            f(
              "findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"
            ));
          var t = mA.current;
          if (t !== null && t.stateNode !== null) {
            var n = t.stateNode._warnedAboutRefsInRender;
            n ||
              f(
                "%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
                yt(t.type) || "A component"
              ),
              (t.stateNode._warnedAboutRefsInRender = !0);
          }
        }
        return e == null ? null : e.nodeType === vr ? e : tA(e, "findDOMNode");
      }
      function yA(e, t, n) {
        if (
          (f(
            "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
          ),
          !Du(t))
        )
          throw new Error("Target container is not a DOM element.");
        {
          var r = $s(t) && t._reactRootContainer === void 0;
          r &&
            f(
              "You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?"
            );
        }
        return qf(null, e, t, !0, n);
      }
      function bA(e, t, n) {
        if (
          (f(
            "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
          ),
          !Du(t))
        )
          throw new Error("Target container is not a DOM element.");
        {
          var r = $s(t) && t._reactRootContainer === void 0;
          r &&
            f(
              "You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?"
            );
        }
        return qf(null, e, t, !1, n);
      }
      function xA(e, t, n, r) {
        if (
          (f(
            "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
          ),
          !Du(n))
        )
          throw new Error("Target container is not a DOM element.");
        if (e == null || !mR(e)) throw new Error("parentComponent must be a valid React Component");
        return qf(e, t, n, !1, r);
      }
      var VE = !1;
      function EA(e) {
        if (
          (VE ||
            ((VE = !0),
            f(
              "unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot"
            )),
          !Du(e))
        )
          throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
        {
          var t = $s(e) && e._reactRootContainer === void 0;
          t &&
            f(
              "You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?"
            );
        }
        if (e._reactRootContainer) {
          {
            var n = kh(e),
              r = n && !ho(n);
            r &&
              f(
                "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
              );
          }
          return (
            Qa(function () {
              qf(null, null, e, !1, function () {
                (e._reactRootContainer = null), kb(e);
              });
            }),
            !0
          );
        } else {
          {
            var o = kh(e),
              l = !!(o && ho(o)),
              c = e.nodeType === vr && Du(e.parentNode) && !!e.parentNode._reactRootContainer;
            l &&
              f(
                "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
                c
                  ? "You may have accidentally passed in a React root node instead of its container."
                  : "Instead, have the parent component update its state and rerender in order to remove this component."
              );
          }
          return !1;
        }
      }
      gT(nA),
        bT(rA),
        xT(aA),
        ET(Gr),
        ST(mT),
        (typeof Map != "function" ||
          Map.prototype == null ||
          typeof Map.prototype.forEach != "function" ||
          typeof Set != "function" ||
          Set.prototype == null ||
          typeof Set.prototype.clear != "function" ||
          typeof Set.prototype.forEach != "function") &&
          f(
            "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          ),
        rR(CD),
        iR(sh, pk, Qa);
      function SA(e, t) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Gf(t)) throw new Error("Target container is not a DOM element.");
        return eA(e, t, null, n);
      }
      function CA(e, t, n, r) {
        return xA(e, t, n, r);
      }
      var Ah = { usingClientEntryPoint: !1, Events: [ho, Zi, Lc, Gg, qg, sh] };
      function wA(e, t) {
        return (
          Ah.usingClientEntryPoint ||
            f(
              'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
            ),
          fA(e, t)
        );
      }
      function RA(e, t, n) {
        return (
          Ah.usingClientEntryPoint ||
            f(
              'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
            ),
          pA(e, t, n)
        );
      }
      function TA(e) {
        return (
          I0() &&
            f(
              "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
            ),
          Qa(e)
        );
      }
      var NA = cA({
        findFiberByHostInstance: ni,
        bundleType: 1,
        version: Rh,
        rendererPackageName: "react-dom"
      });
      if (
        !NA &&
        Nt &&
        window.top === window.self &&
        ((navigator.userAgent.indexOf("Chrome") > -1 &&
          navigator.userAgent.indexOf("Edge") === -1) ||
          navigator.userAgent.indexOf("Firefox") > -1)
      ) {
        var UE = window.location.protocol;
        /^(https?|file):$/.test(UE) &&
          console.info(
            "%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" +
              (UE === "file:"
                ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
                : ""),
            "font-weight:bold"
          );
      }
      (Er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ah),
        (Er.createPortal = SA),
        (Er.createRoot = wA),
        (Er.findDOMNode = gA),
        (Er.flushSync = TA),
        (Er.hydrate = yA),
        (Er.hydrateRoot = RA),
        (Er.render = bA),
        (Er.unmountComponentAtNode = EA),
        (Er.unstable_batchedUpdates = sh),
        (Er.unstable_renderSubtreeIntoContainer = CA),
        (Er.version = Rh),
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })(),
    Er
  );
}
var YE;
function FS() {
  return YE || ((YE = 1), (jh.exports = VA())), jh.exports;
}
var WE;
function UA() {
  if (WE) return Xf;
  WE = 1;
  var a = FS();
  {
    var i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    (Xf.createRoot = function (s, u) {
      i.usingClientEntryPoint = !0;
      try {
        return a.createRoot(s, u);
      } finally {
        i.usingClientEntryPoint = !1;
      }
    }),
      (Xf.hydrateRoot = function (s, u, d) {
        i.usingClientEntryPoint = !0;
        try {
          return a.hydrateRoot(s, u, d);
        } finally {
          i.usingClientEntryPoint = !1;
        }
      });
  }
  return Xf;
}
var FA = UA(),
  R = ju();
const fe = US(R),
  fg = OA({ __proto__: null, default: fe }, [R]);
var zA = (a, i, s, u, d, p, f, E) => {
    let b = document.documentElement,
      y = ["light", "dark"];
    function w(T) {
      (Array.isArray(a) ? a : [a]).forEach((O) => {
        let L = O === "class",
          B = L && p ? d.map((j) => p[j] || j) : d;
        L
          ? (b.classList.remove(...B), b.classList.add(p && p[T] ? p[T] : T))
          : b.setAttribute(O, T);
      }),
        g(T);
    }
    function g(T) {
      E && y.includes(T) && (b.style.colorScheme = T);
    }
    function _() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) w(u);
    else
      try {
        let T = localStorage.getItem(i) || s,
          O = f && T === "system" ? _() : T;
        w(O);
      } catch {}
  },
  PA = R.createContext(void 0),
  HA = { setTheme: (a) => {}, themes: [] },
  BA = () => {
    var a;
    return (a = R.useContext(PA)) != null ? a : HA;
  };
R.memo(
  ({
    forcedTheme: a,
    storageKey: i,
    attribute: s,
    enableSystem: u,
    enableColorScheme: d,
    defaultTheme: p,
    value: f,
    themes: E,
    nonce: b,
    scriptProps: y
  }) => {
    let w = JSON.stringify([s, i, p, a, E, f, u, d]).slice(1, -1);
    return R.createElement("script", {
      ...y,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? b : "",
      dangerouslySetInnerHTML: { __html: `(${zA.toString()})(${w})` }
    });
  }
);
var dg = FS();
const zS = US(dg);
function IA(a) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0],
    s = document.createElement("style");
  (s.type = "text/css"),
    i.appendChild(s),
    s.styleSheet ? (s.styleSheet.cssText = a) : s.appendChild(document.createTextNode(a));
}
const $A = (a) => {
    switch (a) {
      case "success":
        return GA;
      case "info":
        return KA;
      case "warning":
        return qA;
      case "error":
        return XA;
      default:
        return null;
    }
  },
  YA = Array(12).fill(0),
  WA = ({ visible: a, className: i }) =>
    fe.createElement(
      "div",
      { className: ["sonner-loading-wrapper", i].filter(Boolean).join(" "), "data-visible": a },
      fe.createElement(
        "div",
        { className: "sonner-spinner" },
        YA.map((s, u) =>
          fe.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${u}` })
        )
      )
    ),
  GA = fe.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    },
    fe.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd"
    })
  ),
  qA = fe.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20"
    },
    fe.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd"
    })
  ),
  KA = fe.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    },
    fe.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd"
    })
  ),
  XA = fe.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    },
    fe.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd"
    })
  ),
  QA = fe.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    fe.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    fe.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  JA = () => {
    const [a, i] = fe.useState(document.hidden);
    return (
      fe.useEffect(() => {
        const s = () => {
          i(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", s),
          () => window.removeEventListener("visibilitychange", s)
        );
      }, []),
      a
    );
  };
let eg = 1;
class ZA {
  constructor() {
    (this.subscribe = (i) => (
      this.subscribers.push(i),
      () => {
        const s = this.subscribers.indexOf(i);
        this.subscribers.splice(s, 1);
      }
    )),
      (this.publish = (i) => {
        this.subscribers.forEach((s) => s(i));
      }),
      (this.addToast = (i) => {
        this.publish(i), (this.toasts = [...this.toasts, i]);
      }),
      (this.create = (i) => {
        var s;
        const { message: u, ...d } = i,
          p =
            typeof i?.id == "number" || ((s = i.id) == null ? void 0 : s.length) > 0 ? i.id : eg++,
          f = this.toasts.find((b) => b.id === p),
          E = i.dismissible === void 0 ? !0 : i.dismissible;
        return (
          this.dismissedToasts.has(p) && this.dismissedToasts.delete(p),
          f
            ? (this.toasts = this.toasts.map((b) =>
                b.id === p
                  ? (this.publish({ ...b, ...i, id: p, title: u }),
                    { ...b, ...i, id: p, dismissible: E, title: u })
                  : b
              ))
            : this.addToast({ title: u, ...d, dismissible: E, id: p }),
          p
        );
      }),
      (this.dismiss = (i) => (
        i
          ? (this.dismissedToasts.add(i),
            requestAnimationFrame(() => this.subscribers.forEach((s) => s({ id: i, dismiss: !0 }))))
          : this.toasts.forEach((s) => {
              this.subscribers.forEach((u) => u({ id: s.id, dismiss: !0 }));
            }),
        i
      )),
      (this.message = (i, s) => this.create({ ...s, message: i })),
      (this.error = (i, s) => this.create({ ...s, message: i, type: "error" })),
      (this.success = (i, s) => this.create({ ...s, type: "success", message: i })),
      (this.info = (i, s) => this.create({ ...s, type: "info", message: i })),
      (this.warning = (i, s) => this.create({ ...s, type: "warning", message: i })),
      (this.loading = (i, s) => this.create({ ...s, type: "loading", message: i })),
      (this.promise = (i, s) => {
        if (!s) return;
        let u;
        s.loading !== void 0 &&
          (u = this.create({
            ...s,
            promise: i,
            type: "loading",
            message: s.loading,
            description: typeof s.description != "function" ? s.description : void 0
          }));
        const d = Promise.resolve(i instanceof Function ? i() : i);
        let p = u !== void 0,
          f;
        const E = d
            .then(async (y) => {
              if (((f = ["resolve", y]), fe.isValidElement(y)))
                (p = !1), this.create({ id: u, type: "default", message: y });
              else if (tM(y) && !y.ok) {
                p = !1;
                const g =
                    typeof s.error == "function"
                      ? await s.error(`HTTP error! status: ${y.status}`)
                      : s.error,
                  _ =
                    typeof s.description == "function"
                      ? await s.description(`HTTP error! status: ${y.status}`)
                      : s.description,
                  O = typeof g == "object" && !fe.isValidElement(g) ? g : { message: g };
                this.create({ id: u, type: "error", description: _, ...O });
              } else if (y instanceof Error) {
                p = !1;
                const g = typeof s.error == "function" ? await s.error(y) : s.error,
                  _ = typeof s.description == "function" ? await s.description(y) : s.description,
                  O = typeof g == "object" && !fe.isValidElement(g) ? g : { message: g };
                this.create({ id: u, type: "error", description: _, ...O });
              } else if (s.success !== void 0) {
                p = !1;
                const g = typeof s.success == "function" ? await s.success(y) : s.success,
                  _ = typeof s.description == "function" ? await s.description(y) : s.description,
                  O = typeof g == "object" && !fe.isValidElement(g) ? g : { message: g };
                this.create({ id: u, type: "success", description: _, ...O });
              }
            })
            .catch(async (y) => {
              if (((f = ["reject", y]), s.error !== void 0)) {
                p = !1;
                const w = typeof s.error == "function" ? await s.error(y) : s.error,
                  g = typeof s.description == "function" ? await s.description(y) : s.description,
                  T = typeof w == "object" && !fe.isValidElement(w) ? w : { message: w };
                this.create({ id: u, type: "error", description: g, ...T });
              }
            })
            .finally(() => {
              p && (this.dismiss(u), (u = void 0)), s.finally == null || s.finally.call(s);
            }),
          b = () =>
            new Promise((y, w) => E.then(() => (f[0] === "reject" ? w(f[1]) : y(f[1]))).catch(w));
        return typeof u != "string" && typeof u != "number"
          ? { unwrap: b }
          : Object.assign(u, { unwrap: b });
      }),
      (this.custom = (i, s) => {
        const u = s?.id || eg++;
        return this.create({ jsx: i(u), id: u, ...s }), u;
      }),
      (this.getActiveToasts = () => this.toasts.filter((i) => !this.dismissedToasts.has(i.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set());
  }
}
const Sr = new ZA(),
  eM = (a, i) => {
    const s = i?.id || eg++;
    return Sr.addToast({ title: a, ...i, id: s }), s;
  },
  tM = (a) =>
    a &&
    typeof a == "object" &&
    "ok" in a &&
    typeof a.ok == "boolean" &&
    "status" in a &&
    typeof a.status == "number",
  nM = eM,
  rM = () => Sr.toasts,
  aM = () => Sr.getActiveToasts();
Object.assign(
  nM,
  {
    success: Sr.success,
    info: Sr.info,
    warning: Sr.warning,
    error: Sr.error,
    custom: Sr.custom,
    message: Sr.message,
    promise: Sr.promise,
    dismiss: Sr.dismiss,
    loading: Sr.loading
  },
  { getHistory: rM, getToasts: aM }
);
IA(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
);
function Qf(a) {
  return a.label !== void 0;
}
const oM = 3,
  iM = "24px",
  lM = "16px",
  GE = 4e3,
  sM = 356,
  uM = 14,
  cM = 45,
  fM = 200;
function Ca(...a) {
  return a.filter(Boolean).join(" ");
}
function dM(a) {
  const [i, s] = a.split("-"),
    u = [];
  return i && u.push(i), s && u.push(s), u;
}
const pM = (a) => {
  var i, s, u, d, p, f, E, b, y;
  const {
      invert: w,
      toast: g,
      unstyled: _,
      interacting: T,
      setHeights: O,
      visibleToasts: L,
      heights: B,
      index: j,
      toasts: I,
      expanded: G,
      removeToast: J,
      defaultRichColors: q,
      closeButton: oe,
      style: X,
      cancelButtonStyle: ne,
      actionButtonStyle: Ne,
      className: He = "",
      descriptionClassName: Xe = "",
      duration: Le,
      position: le,
      gap: _e,
      expandByDefault: ke,
      classNames: pe,
      icons: ie,
      closeButtonAriaLabel: Q = "Close toast"
    } = a,
    [Je, Ze] = fe.useState(null),
    [Mt, Et] = fe.useState(null),
    [xe, Me] = fe.useState(!1),
    [tt, St] = fe.useState(!1),
    [Ue, $e] = fe.useState(!1),
    [dt, mt] = fe.useState(!1),
    [Nt, wt] = fe.useState(!1),
    [Ft, fn] = fe.useState(0),
    [Qt, zt] = fe.useState(0),
    dn = fe.useRef(g.duration || Le || GE),
    nr = fe.useRef(null),
    It = fe.useRef(null),
    kn = j === 0,
    mn = j + 1 <= L,
    pt = g.type,
    Zt = g.dismissible !== !1,
    pr = g.className || "",
    en = g.descriptionClassName || "",
    on = fe.useMemo(() => B.findIndex((Fe) => Fe.toastId === g.id) || 0, [B, g.id]),
    En = fe.useMemo(() => {
      var Fe;
      return (Fe = g.closeButton) != null ? Fe : oe;
    }, [g.closeButton, oe]),
    Rr = fe.useMemo(() => g.duration || Le || GE, [g.duration, Le]),
    Kn = fe.useRef(0),
    se = fe.useRef(0),
    Re = fe.useRef(0),
    Ie = fe.useRef(null),
    [vt, Lt] = le.split("-"),
    jt = fe.useMemo(() => B.reduce((Fe, Pt, $t) => ($t >= on ? Fe : Fe + Pt.height), 0), [B, on]),
    Vt = JA(),
    vn = g.invert || w,
    Dt = pt === "loading";
  (se.current = fe.useMemo(() => on * _e + jt, [on, jt])),
    fe.useEffect(() => {
      dn.current = Rr;
    }, [Rr]),
    fe.useEffect(() => {
      Me(!0);
    }, []),
    fe.useEffect(() => {
      const Fe = It.current;
      if (Fe) {
        const Pt = Fe.getBoundingClientRect().height;
        return (
          zt(Pt),
          O(($t) => [{ toastId: g.id, height: Pt, position: g.position }, ...$t]),
          () => O(($t) => $t.filter((ln) => ln.toastId !== g.id))
        );
      }
    }, [O, g.id]),
    fe.useLayoutEffect(() => {
      if (!xe) return;
      const Fe = It.current,
        Pt = Fe.style.height;
      Fe.style.height = "auto";
      const $t = Fe.getBoundingClientRect().height;
      (Fe.style.height = Pt),
        zt($t),
        O((ln) =>
          ln.find((Ht) => Ht.toastId === g.id)
            ? ln.map((Ht) => (Ht.toastId === g.id ? { ...Ht, height: $t } : Ht))
            : [{ toastId: g.id, height: $t, position: g.position }, ...ln]
        );
    }, [xe, g.title, g.description, O, g.id, g.jsx, g.action, g.cancel]);
  const rt = fe.useCallback(() => {
    St(!0),
      fn(se.current),
      O((Fe) => Fe.filter((Pt) => Pt.toastId !== g.id)),
      setTimeout(() => {
        J(g);
      }, fM);
  }, [g, J, O, se]);
  fe.useEffect(() => {
    if ((g.promise && pt === "loading") || g.duration === 1 / 0 || g.type === "loading") return;
    let Fe;
    return (
      G || T || Vt
        ? (() => {
            if (Re.current < Kn.current) {
              const ln = new Date().getTime() - Kn.current;
              dn.current = dn.current - ln;
            }
            Re.current = new Date().getTime();
          })()
        : (() => {
            dn.current !== 1 / 0 &&
              ((Kn.current = new Date().getTime()),
              (Fe = setTimeout(() => {
                g.onAutoClose == null || g.onAutoClose.call(g, g), rt();
              }, dn.current)));
          })(),
      () => clearTimeout(Fe)
    );
  }, [G, T, g, pt, Vt, rt]),
    fe.useEffect(() => {
      g.delete && (rt(), g.onDismiss == null || g.onDismiss.call(g, g));
    }, [rt, g.delete]);
  function Rt() {
    var Fe;
    if (ie?.loading) {
      var Pt;
      return fe.createElement(
        "div",
        {
          className: Ca(
            pe?.loader,
            g == null || (Pt = g.classNames) == null ? void 0 : Pt.loader,
            "sonner-loader"
          ),
          "data-visible": pt === "loading"
        },
        ie.loading
      );
    }
    return fe.createElement(WA, {
      className: Ca(pe?.loader, g == null || (Fe = g.classNames) == null ? void 0 : Fe.loader),
      visible: pt === "loading"
    });
  }
  const zn = g.icon || ie?.[pt] || $A(pt);
  var An, Mn;
  return fe.createElement(
    "li",
    {
      tabIndex: 0,
      ref: It,
      className: Ca(
        He,
        pr,
        pe?.toast,
        g == null || (i = g.classNames) == null ? void 0 : i.toast,
        pe?.default,
        pe?.[pt],
        g == null || (s = g.classNames) == null ? void 0 : s[pt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (An = g.richColors) != null ? An : q,
      "data-styled": !(g.jsx || g.unstyled || _),
      "data-mounted": xe,
      "data-promise": !!g.promise,
      "data-swiped": Nt,
      "data-removed": tt,
      "data-visible": mn,
      "data-y-position": vt,
      "data-x-position": Lt,
      "data-index": j,
      "data-front": kn,
      "data-swiping": Ue,
      "data-dismissible": Zt,
      "data-type": pt,
      "data-invert": vn,
      "data-swipe-out": dt,
      "data-swipe-direction": Mt,
      "data-expanded": !!(G || (ke && xe)),
      "data-testid": g.testId,
      style: {
        "--index": j,
        "--toasts-before": j,
        "--z-index": I.length - j,
        "--offset": `${tt ? Ft : se.current}px`,
        "--initial-height": ke ? "auto" : `${Qt}px`,
        ...X,
        ...g.style
      },
      onDragEnd: () => {
        $e(!1), Ze(null), (Ie.current = null);
      },
      onPointerDown: (Fe) => {
        Fe.button !== 2 &&
          (Dt ||
            !Zt ||
            ((nr.current = new Date()),
            fn(se.current),
            Fe.target.setPointerCapture(Fe.pointerId),
            Fe.target.tagName !== "BUTTON" &&
              ($e(!0), (Ie.current = { x: Fe.clientX, y: Fe.clientY }))));
      },
      onPointerUp: () => {
        var Fe, Pt, $t;
        if (dt || !Zt) return;
        Ie.current = null;
        const ln = Number(
            ((Fe = It.current) == null
              ? void 0
              : Fe.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0
          ),
          mr = Number(
            ((Pt = It.current) == null
              ? void 0
              : Pt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0
          ),
          Ht = new Date().getTime() - (($t = nr.current) == null ? void 0 : $t.getTime()),
          Yt = Je === "x" ? ln : mr,
          hn = Math.abs(Yt) / Ht;
        if (Math.abs(Yt) >= cM || hn > 0.11) {
          fn(se.current),
            g.onDismiss == null || g.onDismiss.call(g, g),
            Et(Je === "x" ? (ln > 0 ? "right" : "left") : mr > 0 ? "down" : "up"),
            rt(),
            mt(!0);
          return;
        } else {
          var Ut, tn;
          (Ut = It.current) == null || Ut.style.setProperty("--swipe-amount-x", "0px"),
            (tn = It.current) == null || tn.style.setProperty("--swipe-amount-y", "0px");
        }
        wt(!1), $e(!1), Ze(null);
      },
      onPointerMove: (Fe) => {
        var Pt, $t, ln;
        if (
          !Ie.current ||
          !Zt ||
          ((Pt = window.getSelection()) == null ? void 0 : Pt.toString().length) > 0
        )
          return;
        const Ht = Fe.clientY - Ie.current.y,
          Yt = Fe.clientX - Ie.current.x;
        var hn;
        const Ut = (hn = a.swipeDirections) != null ? hn : dM(le);
        !Je &&
          (Math.abs(Yt) > 1 || Math.abs(Ht) > 1) &&
          Ze(Math.abs(Yt) > Math.abs(Ht) ? "x" : "y");
        let tn = { x: 0, y: 0 };
        const Vr = (N) => 1 / (1.5 + Math.abs(N) / 20);
        if (Je === "y") {
          if (Ut.includes("top") || Ut.includes("bottom"))
            if ((Ut.includes("top") && Ht < 0) || (Ut.includes("bottom") && Ht > 0)) tn.y = Ht;
            else {
              const N = Ht * Vr(Ht);
              tn.y = Math.abs(N) < Math.abs(Ht) ? N : Ht;
            }
        } else if (Je === "x" && (Ut.includes("left") || Ut.includes("right")))
          if ((Ut.includes("left") && Yt < 0) || (Ut.includes("right") && Yt > 0)) tn.x = Yt;
          else {
            const N = Yt * Vr(Yt);
            tn.x = Math.abs(N) < Math.abs(Yt) ? N : Yt;
          }
        (Math.abs(tn.x) > 0 || Math.abs(tn.y) > 0) && wt(!0),
          ($t = It.current) == null || $t.style.setProperty("--swipe-amount-x", `${tn.x}px`),
          (ln = It.current) == null || ln.style.setProperty("--swipe-amount-y", `${tn.y}px`);
      }
    },
    En && !g.jsx && pt !== "loading"
      ? fe.createElement(
          "button",
          {
            "aria-label": Q,
            "data-disabled": Dt,
            "data-close-button": !0,
            onClick:
              Dt || !Zt
                ? () => {}
                : () => {
                    rt(), g.onDismiss == null || g.onDismiss.call(g, g);
                  },
            className: Ca(
              pe?.closeButton,
              g == null || (u = g.classNames) == null ? void 0 : u.closeButton
            )
          },
          (Mn = ie?.close) != null ? Mn : QA
        )
      : null,
    (pt || g.icon || g.promise) && g.icon !== null && (ie?.[pt] !== null || g.icon)
      ? fe.createElement(
          "div",
          {
            "data-icon": "",
            className: Ca(pe?.icon, g == null || (d = g.classNames) == null ? void 0 : d.icon)
          },
          g.promise || (g.type === "loading" && !g.icon) ? g.icon || Rt() : null,
          g.type !== "loading" ? zn : null
        )
      : null,
    fe.createElement(
      "div",
      {
        "data-content": "",
        className: Ca(pe?.content, g == null || (p = g.classNames) == null ? void 0 : p.content)
      },
      fe.createElement(
        "div",
        {
          "data-title": "",
          className: Ca(pe?.title, g == null || (f = g.classNames) == null ? void 0 : f.title)
        },
        g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title
      ),
      g.description
        ? fe.createElement(
            "div",
            {
              "data-description": "",
              className: Ca(
                Xe,
                en,
                pe?.description,
                g == null || (E = g.classNames) == null ? void 0 : E.description
              )
            },
            typeof g.description == "function" ? g.description() : g.description
          )
        : null
    ),
    fe.isValidElement(g.cancel)
      ? g.cancel
      : g.cancel && Qf(g.cancel)
        ? fe.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: g.cancelButtonStyle || ne,
              onClick: (Fe) => {
                Qf(g.cancel) &&
                  Zt &&
                  (g.cancel.onClick == null || g.cancel.onClick.call(g.cancel, Fe), rt());
              },
              className: Ca(
                pe?.cancelButton,
                g == null || (b = g.classNames) == null ? void 0 : b.cancelButton
              )
            },
            g.cancel.label
          )
        : null,
    fe.isValidElement(g.action)
      ? g.action
      : g.action && Qf(g.action)
        ? fe.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: g.actionButtonStyle || Ne,
              onClick: (Fe) => {
                Qf(g.action) &&
                  (g.action.onClick == null || g.action.onClick.call(g.action, Fe),
                  !Fe.defaultPrevented && rt());
              },
              className: Ca(
                pe?.actionButton,
                g == null || (y = g.classNames) == null ? void 0 : y.actionButton
              )
            },
            g.action.label
          )
        : null
  );
};
function qE() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const a = document.documentElement.getAttribute("dir");
  return a === "auto" || !a ? window.getComputedStyle(document.documentElement).direction : a;
}
function mM(a, i) {
  const s = {};
  return (
    [a, i].forEach((u, d) => {
      const p = d === 1,
        f = p ? "--mobile-offset" : "--offset",
        E = p ? lM : iM;
      function b(y) {
        ["top", "right", "bottom", "left"].forEach((w) => {
          s[`${f}-${w}`] = typeof y == "number" ? `${y}px` : y;
        });
      }
      typeof u == "number" || typeof u == "string"
        ? b(u)
        : typeof u == "object"
          ? ["top", "right", "bottom", "left"].forEach((y) => {
              u[y] === void 0
                ? (s[`${f}-${y}`] = E)
                : (s[`${f}-${y}`] = typeof u[y] == "number" ? `${u[y]}px` : u[y]);
            })
          : b(E);
    }),
    s
  );
}
const vM = fe.forwardRef(function (i, s) {
    const {
        id: u,
        invert: d,
        position: p = "bottom-right",
        hotkey: f = ["altKey", "KeyT"],
        expand: E,
        closeButton: b,
        className: y,
        offset: w,
        mobileOffset: g,
        theme: _ = "light",
        richColors: T,
        duration: O,
        style: L,
        visibleToasts: B = oM,
        toastOptions: j,
        dir: I = qE(),
        gap: G = uM,
        icons: J,
        containerAriaLabel: q = "Notifications"
      } = i,
      [oe, X] = fe.useState([]),
      ne = fe.useMemo(
        () => (u ? oe.filter((xe) => xe.toasterId === u) : oe.filter((xe) => !xe.toasterId)),
        [oe, u]
      ),
      Ne = fe.useMemo(
        () =>
          Array.from(new Set([p].concat(ne.filter((xe) => xe.position).map((xe) => xe.position)))),
        [ne, p]
      ),
      [He, Xe] = fe.useState([]),
      [Le, le] = fe.useState(!1),
      [_e, ke] = fe.useState(!1),
      [pe, ie] = fe.useState(
        _ !== "system"
          ? _
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
      ),
      Q = fe.useRef(null),
      Je = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      Ze = fe.useRef(null),
      Mt = fe.useRef(!1),
      Et = fe.useCallback((xe) => {
        X((Me) => {
          var tt;
          return (
            ((tt = Me.find((St) => St.id === xe.id)) != null && tt.delete) || Sr.dismiss(xe.id),
            Me.filter(({ id: St }) => St !== xe.id)
          );
        });
      }, []);
    return (
      fe.useEffect(
        () =>
          Sr.subscribe((xe) => {
            if (xe.dismiss) {
              requestAnimationFrame(() => {
                X((Me) => Me.map((tt) => (tt.id === xe.id ? { ...tt, delete: !0 } : tt)));
              });
              return;
            }
            setTimeout(() => {
              zS.flushSync(() => {
                X((Me) => {
                  const tt = Me.findIndex((St) => St.id === xe.id);
                  return tt !== -1
                    ? [...Me.slice(0, tt), { ...Me[tt], ...xe }, ...Me.slice(tt + 1)]
                    : [xe, ...Me];
                });
              });
            });
          }),
        [oe]
      ),
      fe.useEffect(() => {
        if (_ !== "system") {
          ie(_);
          return;
        }
        if (
          (_ === "system" &&
            (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
              ? ie("dark")
              : ie("light")),
          typeof window > "u")
        )
          return;
        const xe = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          xe.addEventListener("change", ({ matches: Me }) => {
            ie(Me ? "dark" : "light");
          });
        } catch {
          xe.addListener(({ matches: tt }) => {
            try {
              ie(tt ? "dark" : "light");
            } catch (St) {
              console.error(St);
            }
          });
        }
      }, [_]),
      fe.useEffect(() => {
        oe.length <= 1 && le(!1);
      }, [oe]),
      fe.useEffect(() => {
        const xe = (Me) => {
          var tt;
          if (f.every(($e) => Me[$e] || Me.code === $e)) {
            var Ue;
            le(!0), (Ue = Q.current) == null || Ue.focus();
          }
          Me.code === "Escape" &&
            (document.activeElement === Q.current ||
              ((tt = Q.current) != null && tt.contains(document.activeElement))) &&
            le(!1);
        };
        return (
          document.addEventListener("keydown", xe),
          () => document.removeEventListener("keydown", xe)
        );
      }, [f]),
      fe.useEffect(() => {
        if (Q.current)
          return () => {
            Ze.current &&
              (Ze.current.focus({ preventScroll: !0 }), (Ze.current = null), (Mt.current = !1));
          };
      }, [Q.current]),
      fe.createElement(
        "section",
        {
          ref: s,
          "aria-label": `${q} ${Je}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0
        },
        Ne.map((xe, Me) => {
          var tt;
          const [St, Ue] = xe.split("-");
          return ne.length
            ? fe.createElement(
                "ol",
                {
                  key: xe,
                  dir: I === "auto" ? qE() : I,
                  tabIndex: -1,
                  ref: Q,
                  className: y,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": pe,
                  "data-y-position": St,
                  "data-x-position": Ue,
                  style: {
                    "--front-toast-height": `${((tt = He[0]) == null ? void 0 : tt.height) || 0}px`,
                    "--width": `${sM}px`,
                    "--gap": `${G}px`,
                    ...L,
                    ...mM(w, g)
                  },
                  onBlur: ($e) => {
                    Mt.current &&
                      !$e.currentTarget.contains($e.relatedTarget) &&
                      ((Mt.current = !1),
                      Ze.current && (Ze.current.focus({ preventScroll: !0 }), (Ze.current = null)));
                  },
                  onFocus: ($e) => {
                    ($e.target instanceof HTMLElement &&
                      $e.target.dataset.dismissible === "false") ||
                      Mt.current ||
                      ((Mt.current = !0), (Ze.current = $e.relatedTarget));
                  },
                  onMouseEnter: () => le(!0),
                  onMouseMove: () => le(!0),
                  onMouseLeave: () => {
                    _e || le(!1);
                  },
                  onDragEnd: () => le(!1),
                  onPointerDown: ($e) => {
                    ($e.target instanceof HTMLElement &&
                      $e.target.dataset.dismissible === "false") ||
                      ke(!0);
                  },
                  onPointerUp: () => ke(!1)
                },
                ne
                  .filter(($e) => (!$e.position && Me === 0) || $e.position === xe)
                  .map(($e, dt) => {
                    var mt, Nt;
                    return fe.createElement(pM, {
                      key: $e.id,
                      icons: J,
                      index: dt,
                      toast: $e,
                      defaultRichColors: T,
                      duration: (mt = j?.duration) != null ? mt : O,
                      className: j?.className,
                      descriptionClassName: j?.descriptionClassName,
                      invert: d,
                      visibleToasts: B,
                      closeButton: (Nt = j?.closeButton) != null ? Nt : b,
                      interacting: _e,
                      position: xe,
                      style: j?.style,
                      unstyled: j?.unstyled,
                      classNames: j?.classNames,
                      cancelButtonStyle: j?.cancelButtonStyle,
                      actionButtonStyle: j?.actionButtonStyle,
                      closeButtonAriaLabel: j?.closeButtonAriaLabel,
                      removeToast: Et,
                      toasts: ne.filter((wt) => wt.position == $e.position),
                      heights: He.filter((wt) => wt.position == $e.position),
                      setHeights: Xe,
                      expandByDefault: E,
                      gap: G,
                      expanded: Le,
                      swipeDirections: i.swipeDirections
                    });
                  })
              )
            : null;
        })
      )
    );
  }),
  hM = ({ ...a }) => {
    const { theme: i = "system" } = BA();
    return M.jsxDEV(
      vM,
      {
        "data-loc": "client/src/components/ui/sonner.tsx:8",
        theme: i,
        className: "toaster group",
        style: {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)"
        },
        ...a
      },
      void 0,
      !1,
      {
        fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/sonner.tsx",
        lineNumber: 8,
        columnNumber: 5
      },
      void 0
    );
  };
function Cr(a, i, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (d) {
    if ((a?.(d), s === !1 || !d.defaultPrevented)) return i?.(d);
  };
}
function KE(a, i) {
  if (typeof a == "function") return a(i);
  a != null && (a.current = i);
}
function PS(...a) {
  return (i) => {
    let s = !1;
    const u = a.map((d) => {
      const p = KE(d, i);
      return !s && typeof p == "function" && (s = !0), p;
    });
    if (s)
      return () => {
        for (let d = 0; d < u.length; d++) {
          const p = u[d];
          typeof p == "function" ? p() : KE(a[d], null);
        }
      };
  };
}
function la(...a) {
  return R.useCallback(PS(...a), a);
}
var Fh = { exports: {} },
  Ou = {},
  XE;
function gM() {
  if (XE) return Ou;
  XE = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ return (
    (function () {
      var a = ju(),
        i = Symbol.for("react.element"),
        s = Symbol.for("react.portal"),
        u = Symbol.for("react.fragment"),
        d = Symbol.for("react.strict_mode"),
        p = Symbol.for("react.profiler"),
        f = Symbol.for("react.provider"),
        E = Symbol.for("react.context"),
        b = Symbol.for("react.forward_ref"),
        y = Symbol.for("react.suspense"),
        w = Symbol.for("react.suspense_list"),
        g = Symbol.for("react.memo"),
        _ = Symbol.for("react.lazy"),
        T = Symbol.for("react.offscreen"),
        O = Symbol.iterator,
        L = "@@iterator";
      function B(C) {
        if (C === null || typeof C != "object") return null;
        var F = (O && C[O]) || C[L];
        return typeof F == "function" ? F : null;
      }
      var j = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function I(C) {
        {
          for (var F = arguments.length, Z = new Array(F > 1 ? F - 1 : 0), ae = 1; ae < F; ae++)
            Z[ae - 1] = arguments[ae];
          G("error", C, Z);
        }
      }
      function G(C, F, Z) {
        {
          var ae = j.ReactDebugCurrentFrame,
            he = ae.getStackAddendum();
          he !== "" && ((F += "%s"), (Z = Z.concat([he])));
          var ce = Z.map(function (je) {
            return String(je);
          });
          ce.unshift("Warning: " + F), Function.prototype.apply.call(console[C], console, ce);
        }
      }
      var J = !1,
        q = !1,
        oe = !1,
        X = !1,
        ne = !1,
        Ne;
      Ne = Symbol.for("react.module.reference");
      function He(C) {
        return !!(
          typeof C == "string" ||
          typeof C == "function" ||
          C === u ||
          C === p ||
          ne ||
          C === d ||
          C === y ||
          C === w ||
          X ||
          C === T ||
          J ||
          q ||
          oe ||
          (typeof C == "object" &&
            C !== null &&
            (C.$$typeof === _ ||
              C.$$typeof === g ||
              C.$$typeof === f ||
              C.$$typeof === E ||
              C.$$typeof === b ||
              C.$$typeof === Ne ||
              C.getModuleId !== void 0))
        );
      }
      function Xe(C, F, Z) {
        var ae = C.displayName;
        if (ae) return ae;
        var he = F.displayName || F.name || "";
        return he !== "" ? Z + "(" + he + ")" : Z;
      }
      function Le(C) {
        return C.displayName || "Context";
      }
      function le(C) {
        if (C == null) return null;
        if (
          (typeof C.tag == "number" &&
            I(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          typeof C == "function")
        )
          return C.displayName || C.name || null;
        if (typeof C == "string") return C;
        switch (C) {
          case u:
            return "Fragment";
          case s:
            return "Portal";
          case p:
            return "Profiler";
          case d:
            return "StrictMode";
          case y:
            return "Suspense";
          case w:
            return "SuspenseList";
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case E:
              var F = C;
              return Le(F) + ".Consumer";
            case f:
              var Z = C;
              return Le(Z._context) + ".Provider";
            case b:
              return Xe(C, C.render, "ForwardRef");
            case g:
              var ae = C.displayName || null;
              return ae !== null ? ae : le(C.type) || "Memo";
            case _: {
              var he = C,
                ce = he._payload,
                je = he._init;
              try {
                return le(je(ce));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var _e = Object.assign,
        ke = 0,
        pe,
        ie,
        Q,
        Je,
        Ze,
        Mt,
        Et;
      function xe() {}
      xe.__reactDisabledLog = !0;
      function Me() {
        {
          if (ke === 0) {
            (pe = console.log),
              (ie = console.info),
              (Q = console.warn),
              (Je = console.error),
              (Ze = console.group),
              (Mt = console.groupCollapsed),
              (Et = console.groupEnd);
            var C = { configurable: !0, enumerable: !0, value: xe, writable: !0 };
            Object.defineProperties(console, {
              info: C,
              log: C,
              warn: C,
              error: C,
              group: C,
              groupCollapsed: C,
              groupEnd: C
            });
          }
          ke++;
        }
      }
      function tt() {
        {
          if ((ke--, ke === 0)) {
            var C = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: _e({}, C, { value: pe }),
              info: _e({}, C, { value: ie }),
              warn: _e({}, C, { value: Q }),
              error: _e({}, C, { value: Je }),
              group: _e({}, C, { value: Ze }),
              groupCollapsed: _e({}, C, { value: Mt }),
              groupEnd: _e({}, C, { value: Et })
            });
          }
          ke < 0 &&
            I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var St = j.ReactCurrentDispatcher,
        Ue;
      function $e(C, F, Z) {
        {
          if (Ue === void 0)
            try {
              throw Error();
            } catch (he) {
              var ae = he.stack.trim().match(/\n( *(at )?)/);
              Ue = (ae && ae[1]) || "";
            }
          return (
            `
` +
            Ue +
            C
          );
        }
      }
      var dt = !1,
        mt;
      {
        var Nt = typeof WeakMap == "function" ? WeakMap : Map;
        mt = new Nt();
      }
      function wt(C, F) {
        if (!C || dt) return "";
        {
          var Z = mt.get(C);
          if (Z !== void 0) return Z;
        }
        var ae;
        dt = !0;
        var he = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ce;
        (ce = St.current), (St.current = null), Me();
        try {
          if (F) {
            var je = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(je.prototype, "props", {
                set: function () {
                  throw Error();
                }
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(je, []);
              } catch (Gt) {
                ae = Gt;
              }
              Reflect.construct(C, [], je);
            } else {
              try {
                je.call();
              } catch (Gt) {
                ae = Gt;
              }
              C.call(je.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Gt) {
              ae = Gt;
            }
            C();
          }
        } catch (Gt) {
          if (Gt && ae && typeof Gt.stack == "string") {
            for (
              var Te = Gt.stack.split(`
`),
                nt = ae.stack.split(`
`),
                lt = Te.length - 1,
                Tt = nt.length - 1;
              lt >= 1 && Tt >= 0 && Te[lt] !== nt[Tt];

            )
              Tt--;
            for (; lt >= 1 && Tt >= 0; lt--, Tt--)
              if (Te[lt] !== nt[Tt]) {
                if (lt !== 1 || Tt !== 1)
                  do
                    if ((lt--, Tt--, Tt < 0 || Te[lt] !== nt[Tt])) {
                      var nn =
                        `
` + Te[lt].replace(" at new ", " at ");
                      return (
                        C.displayName &&
                          nn.includes("<anonymous>") &&
                          (nn = nn.replace("<anonymous>", C.displayName)),
                        typeof C == "function" && mt.set(C, nn),
                        nn
                      );
                    }
                  while (lt >= 1 && Tt >= 0);
                break;
              }
          }
        } finally {
          (dt = !1), (St.current = ce), tt(), (Error.prepareStackTrace = he);
        }
        var Wt = C ? C.displayName || C.name : "",
          rr = Wt ? $e(Wt) : "";
        return typeof C == "function" && mt.set(C, rr), rr;
      }
      function Ft(C, F, Z) {
        return wt(C, !1);
      }
      function fn(C) {
        var F = C.prototype;
        return !!(F && F.isReactComponent);
      }
      function Qt(C, F, Z) {
        if (C == null) return "";
        if (typeof C == "function") return wt(C, fn(C));
        if (typeof C == "string") return $e(C);
        switch (C) {
          case y:
            return $e("Suspense");
          case w:
            return $e("SuspenseList");
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case b:
              return Ft(C.render);
            case g:
              return Qt(C.type, F, Z);
            case _: {
              var ae = C,
                he = ae._payload,
                ce = ae._init;
              try {
                return Qt(ce(he), F, Z);
              } catch {}
            }
          }
        return "";
      }
      var zt = Object.prototype.hasOwnProperty,
        dn = {},
        nr = j.ReactDebugCurrentFrame;
      function It(C) {
        if (C) {
          var F = C._owner,
            Z = Qt(C.type, C._source, F ? F.type : null);
          nr.setExtraStackFrame(Z);
        } else nr.setExtraStackFrame(null);
      }
      function kn(C, F, Z, ae, he) {
        {
          var ce = Function.call.bind(zt);
          for (var je in C)
            if (ce(C, je)) {
              var Te = void 0;
              try {
                if (typeof C[je] != "function") {
                  var nt = Error(
                    (ae || "React class") +
                      ": " +
                      Z +
                      " type `" +
                      je +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof C[je] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  throw ((nt.name = "Invariant Violation"), nt);
                }
                Te = C[je](F, je, ae, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (lt) {
                Te = lt;
              }
              Te &&
                !(Te instanceof Error) &&
                (It(he),
                I(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  ae || "React class",
                  Z,
                  je,
                  typeof Te
                ),
                It(null)),
                Te instanceof Error &&
                  !(Te.message in dn) &&
                  ((dn[Te.message] = !0), It(he), I("Failed %s type: %s", Z, Te.message), It(null));
            }
        }
      }
      var mn = Array.isArray;
      function pt(C) {
        return mn(C);
      }
      function Zt(C) {
        {
          var F = typeof Symbol == "function" && Symbol.toStringTag,
            Z = (F && C[Symbol.toStringTag]) || C.constructor.name || "Object";
          return Z;
        }
      }
      function pr(C) {
        try {
          return en(C), !1;
        } catch {
          return !0;
        }
      }
      function en(C) {
        return "" + C;
      }
      function on(C) {
        if (pr(C))
          return (
            I(
              "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
              Zt(C)
            ),
            en(C)
          );
      }
      var En = j.ReactCurrentOwner,
        Rr = { key: !0, ref: !0, __self: !0, __source: !0 },
        Kn,
        se;
      function Re(C) {
        if (zt.call(C, "ref")) {
          var F = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (F && F.isReactWarning) return !1;
        }
        return C.ref !== void 0;
      }
      function Ie(C) {
        if (zt.call(C, "key")) {
          var F = Object.getOwnPropertyDescriptor(C, "key").get;
          if (F && F.isReactWarning) return !1;
        }
        return C.key !== void 0;
      }
      function vt(C, F) {
        typeof C.ref == "string" && En.current;
      }
      function Lt(C, F) {
        {
          var Z = function () {
            Kn ||
              ((Kn = !0),
              I(
                "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                F
              ));
          };
          (Z.isReactWarning = !0), Object.defineProperty(C, "key", { get: Z, configurable: !0 });
        }
      }
      function jt(C, F) {
        {
          var Z = function () {
            se ||
              ((se = !0),
              I(
                "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                F
              ));
          };
          (Z.isReactWarning = !0), Object.defineProperty(C, "ref", { get: Z, configurable: !0 });
        }
      }
      var Vt = function (C, F, Z, ae, he, ce, je) {
        var Te = { $$typeof: i, type: C, key: F, ref: Z, props: je, _owner: ce };
        return (
          (Te._store = {}),
          Object.defineProperty(Te._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: !1
          }),
          Object.defineProperty(Te, "_self", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: ae
          }),
          Object.defineProperty(Te, "_source", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: he
          }),
          Object.freeze && (Object.freeze(Te.props), Object.freeze(Te)),
          Te
        );
      };
      function vn(C, F, Z, ae, he) {
        {
          var ce,
            je = {},
            Te = null,
            nt = null;
          Z !== void 0 && (on(Z), (Te = "" + Z)),
            Ie(F) && (on(F.key), (Te = "" + F.key)),
            Re(F) && ((nt = F.ref), vt(F, he));
          for (ce in F) zt.call(F, ce) && !Rr.hasOwnProperty(ce) && (je[ce] = F[ce]);
          if (C && C.defaultProps) {
            var lt = C.defaultProps;
            for (ce in lt) je[ce] === void 0 && (je[ce] = lt[ce]);
          }
          if (Te || nt) {
            var Tt = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
            Te && Lt(je, Tt), nt && jt(je, Tt);
          }
          return Vt(C, Te, nt, he, ae, En.current, je);
        }
      }
      var Dt = j.ReactCurrentOwner,
        rt = j.ReactDebugCurrentFrame;
      function Rt(C) {
        if (C) {
          var F = C._owner,
            Z = Qt(C.type, C._source, F ? F.type : null);
          rt.setExtraStackFrame(Z);
        } else rt.setExtraStackFrame(null);
      }
      var zn;
      zn = !1;
      function An(C) {
        return typeof C == "object" && C !== null && C.$$typeof === i;
      }
      function Mn() {
        {
          if (Dt.current) {
            var C = le(Dt.current.type);
            if (C)
              return (
                `

Check the render method of \`` +
                C +
                "`."
              );
          }
          return "";
        }
      }
      function Fe(C) {
        return "";
      }
      var Pt = {};
      function $t(C) {
        {
          var F = Mn();
          if (!F) {
            var Z = typeof C == "string" ? C : C.displayName || C.name;
            Z &&
              (F =
                `

Check the top-level render call using <` +
                Z +
                ">.");
          }
          return F;
        }
      }
      function ln(C, F) {
        {
          if (!C._store || C._store.validated || C.key != null) return;
          C._store.validated = !0;
          var Z = $t(F);
          if (Pt[Z]) return;
          Pt[Z] = !0;
          var ae = "";
          C &&
            C._owner &&
            C._owner !== Dt.current &&
            (ae = " It was passed a child from " + le(C._owner.type) + "."),
            Rt(C),
            I(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              Z,
              ae
            ),
            Rt(null);
        }
      }
      function mr(C, F) {
        {
          if (typeof C != "object") return;
          if (pt(C))
            for (var Z = 0; Z < C.length; Z++) {
              var ae = C[Z];
              An(ae) && ln(ae, F);
            }
          else if (An(C)) C._store && (C._store.validated = !0);
          else if (C) {
            var he = B(C);
            if (typeof he == "function" && he !== C.entries)
              for (var ce = he.call(C), je; !(je = ce.next()).done; )
                An(je.value) && ln(je.value, F);
          }
        }
      }
      function Ht(C) {
        {
          var F = C.type;
          if (F == null || typeof F == "string") return;
          var Z;
          if (typeof F == "function") Z = F.propTypes;
          else if (typeof F == "object" && (F.$$typeof === b || F.$$typeof === g)) Z = F.propTypes;
          else return;
          if (Z) {
            var ae = le(F);
            kn(Z, C.props, "prop", ae, C);
          } else if (F.PropTypes !== void 0 && !zn) {
            zn = !0;
            var he = le(F);
            I(
              "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
              he || "Unknown"
            );
          }
          typeof F.getDefaultProps == "function" &&
            !F.getDefaultProps.isReactClassApproved &&
            I(
              "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
            );
        }
      }
      function Yt(C) {
        {
          for (var F = Object.keys(C.props), Z = 0; Z < F.length; Z++) {
            var ae = F[Z];
            if (ae !== "children" && ae !== "key") {
              Rt(C),
                I(
                  "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                  ae
                ),
                Rt(null);
              break;
            }
          }
          C.ref !== null &&
            (Rt(C), I("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
        }
      }
      var hn = {};
      function Ut(C, F, Z, ae, he, ce) {
        {
          var je = He(C);
          if (!je) {
            var Te = "";
            (C === void 0 || (typeof C == "object" && C !== null && Object.keys(C).length === 0)) &&
              (Te +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var nt = Fe();
            nt ? (Te += nt) : (Te += Mn());
            var lt;
            C === null
              ? (lt = "null")
              : pt(C)
                ? (lt = "array")
                : C !== void 0 && C.$$typeof === i
                  ? ((lt = "<" + (le(C.type) || "Unknown") + " />"),
                    (Te = " Did you accidentally export a JSX literal instead of a component?"))
                  : (lt = typeof C),
              I(
                "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                lt,
                Te
              );
          }
          var Tt = vn(C, F, Z, he, ce);
          if (Tt == null) return Tt;
          if (je) {
            var nn = F.children;
            if (nn !== void 0)
              if (ae)
                if (pt(nn)) {
                  for (var Wt = 0; Wt < nn.length; Wt++) mr(nn[Wt], C);
                  Object.freeze && Object.freeze(nn);
                } else
                  I(
                    "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                  );
              else mr(nn, C);
          }
          if (zt.call(F, "key")) {
            var rr = le(C),
              Gt = Object.keys(F).filter(function (Si) {
                return Si !== "key";
              }),
              Qe =
                Gt.length > 0
                  ? "{key: someKey, " + Gt.join(": ..., ") + ": ...}"
                  : "{key: someKey}";
            if (!hn[rr + Qe]) {
              var _a = Gt.length > 0 ? "{" + Gt.join(": ..., ") + ": ...}" : "{}";
              I(
                `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                Qe,
                rr,
                _a,
                rr
              ),
                (hn[rr + Qe] = !0);
            }
          }
          return C === u ? Yt(Tt) : Ht(Tt), Tt;
        }
      }
      function tn(C, F, Z) {
        return Ut(C, F, Z, !0);
      }
      function Vr(C, F, Z) {
        return Ut(C, F, Z, !1);
      }
      var N = Vr,
        te = tn;
      (Ou.Fragment = u), (Ou.jsx = N), (Ou.jsxs = te);
    })(),
    Ou
  );
}
var QE;
function yM() {
  return QE || ((QE = 1), (Fh.exports = gM())), Fh.exports;
}
var Oe = yM();
function bM(a, i) {
  const s = R.createContext(i),
    u = (p) => {
      const { children: f, ...E } = p,
        b = R.useMemo(() => E, Object.values(E));
      return Oe.jsx(s.Provider, { value: b, children: f });
    };
  u.displayName = a + "Provider";
  function d(p) {
    const f = R.useContext(s);
    if (f) return f;
    if (i !== void 0) return i;
    throw new Error(`\`${p}\` must be used within \`${a}\``);
  }
  return [u, d];
}
function pg(a, i = []) {
  let s = [];
  function u(p, f) {
    const E = R.createContext(f),
      b = s.length;
    s = [...s, f];
    const y = (g) => {
      const { scope: _, children: T, ...O } = g,
        L = _?.[a]?.[b] || E,
        B = R.useMemo(() => O, Object.values(O));
      return Oe.jsx(L.Provider, { value: B, children: T });
    };
    y.displayName = p + "Provider";
    function w(g, _) {
      const T = _?.[a]?.[b] || E,
        O = R.useContext(T);
      if (O) return O;
      if (f !== void 0) return f;
      throw new Error(`\`${g}\` must be used within \`${p}\``);
    }
    return [y, w];
  }
  const d = () => {
    const p = s.map((f) => R.createContext(f));
    return function (E) {
      const b = E?.[a] || p;
      return R.useMemo(() => ({ [`__scope${a}`]: { ...E, [a]: b } }), [E, b]);
    };
  };
  return (d.scopeName = a), [u, xM(d, ...i)];
}
function xM(...a) {
  const i = a[0];
  if (a.length === 1) return i;
  const s = () => {
    const u = a.map((d) => ({ useScope: d(), scopeName: d.scopeName }));
    return function (p) {
      const f = u.reduce((E, { useScope: b, scopeName: y }) => {
        const g = b(p)[`__scope${y}`];
        return { ...E, ...g };
      }, {});
      return R.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return (s.scopeName = i.scopeName), s;
}
function mg(a) {
  const i = SM(a),
    s = R.forwardRef((u, d) => {
      const { children: p, ...f } = u,
        E = R.Children.toArray(p),
        b = E.find(wM);
      if (b) {
        const y = b.props.children,
          w = E.map((g) =>
            g === b
              ? R.Children.count(y) > 1
                ? R.Children.only(null)
                : R.isValidElement(y)
                  ? y.props.children
                  : null
              : g
          );
        return Oe.jsx(i, {
          ...f,
          ref: d,
          children: R.isValidElement(y) ? R.cloneElement(y, void 0, w) : null
        });
      }
      return Oe.jsx(i, { ...f, ref: d, children: p });
    });
  return (s.displayName = `${a}.Slot`), s;
}
var EM = mg("Slot");
function SM(a) {
  const i = R.forwardRef((s, u) => {
    const { children: d, ...p } = s;
    if (R.isValidElement(d)) {
      const f = TM(d),
        E = RM(p, d.props);
      return d.type !== R.Fragment && (E.ref = u ? PS(u, f) : f), R.cloneElement(d, E);
    }
    return R.Children.count(d) > 1 ? R.Children.only(null) : null;
  });
  return (i.displayName = `${a}.SlotClone`), i;
}
var HS = Symbol("radix.slottable");
function CM(a) {
  const i = ({ children: s }) => Oe.jsx(Oe.Fragment, { children: s });
  return (i.displayName = `${a}.Slottable`), (i.__radixId = HS), i;
}
function wM(a) {
  return (
    R.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === HS
  );
}
function RM(a, i) {
  const s = { ...i };
  for (const u in i) {
    const d = a[u],
      p = i[u];
    /^on[A-Z]/.test(u)
      ? d && p
        ? (s[u] = (...E) => {
            const b = p(...E);
            return d(...E), b;
          })
        : d && (s[u] = d)
      : u === "style"
        ? (s[u] = { ...d, ...p })
        : u === "className" && (s[u] = [d, p].filter(Boolean).join(" "));
  }
  return { ...a, ...s };
}
function TM(a) {
  let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    s = i && "isReactWarning" in i && i.isReactWarning;
  return s
    ? a.ref
    : ((i = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (s = i && "isReactWarning" in i && i.isReactWarning),
      s ? a.props.ref : a.props.ref || a.ref);
}
var NM = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
  ],
  wr = NM.reduce((a, i) => {
    const s = mg(`Primitive.${i}`),
      u = R.forwardRef((d, p) => {
        const { asChild: f, ...E } = d,
          b = f ? s : i;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), Oe.jsx(b, { ...E, ref: p })
        );
      });
    return (u.displayName = `Primitive.${i}`), { ...a, [i]: u };
  }, {});
function DM(a, i) {
  a && dg.flushSync(() => a.dispatchEvent(i));
}
function kl(a) {
  const i = R.useRef(a);
  return (
    R.useEffect(() => {
      i.current = a;
    }),
    R.useMemo(
      () =>
        (...s) =>
          i.current?.(...s),
      []
    )
  );
}
function _M(a, i = globalThis?.document) {
  const s = kl(a);
  R.useEffect(() => {
    const u = (d) => {
      d.key === "Escape" && s(d);
    };
    return (
      i.addEventListener("keydown", u, { capture: !0 }),
      () => i.removeEventListener("keydown", u, { capture: !0 })
    );
  }, [s, i]);
}
var OM = "DismissableLayer",
  tg = "dismissableLayer.update",
  kM = "dismissableLayer.pointerDownOutside",
  AM = "dismissableLayer.focusOutside",
  JE,
  BS = R.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
  }),
  vg = R.forwardRef((a, i) => {
    const {
        disableOutsidePointerEvents: s = !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: d,
        onFocusOutside: p,
        onInteractOutside: f,
        onDismiss: E,
        ...b
      } = a,
      y = R.useContext(BS),
      [w, g] = R.useState(null),
      _ = w?.ownerDocument ?? globalThis?.document,
      [, T] = R.useState({}),
      O = la(i, (X) => g(X)),
      L = Array.from(y.layers),
      [B] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1),
      j = L.indexOf(B),
      I = w ? L.indexOf(w) : -1,
      G = y.layersWithOutsidePointerEventsDisabled.size > 0,
      J = I >= j,
      q = jM((X) => {
        const ne = X.target,
          Ne = [...y.branches].some((He) => He.contains(ne));
        !J || Ne || (d?.(X), f?.(X), X.defaultPrevented || E?.());
      }, _),
      oe = VM((X) => {
        const ne = X.target;
        [...y.branches].some((He) => He.contains(ne)) ||
          (p?.(X), f?.(X), X.defaultPrevented || E?.());
      }, _);
    return (
      _M((X) => {
        I === y.layers.size - 1 && (u?.(X), !X.defaultPrevented && E && (X.preventDefault(), E()));
      }, _),
      R.useEffect(() => {
        if (w)
          return (
            s &&
              (y.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((JE = _.body.style.pointerEvents), (_.body.style.pointerEvents = "none")),
              y.layersWithOutsidePointerEventsDisabled.add(w)),
            y.layers.add(w),
            ZE(),
            () => {
              s &&
                y.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (_.body.style.pointerEvents = JE);
            }
          );
      }, [w, _, s, y]),
      R.useEffect(
        () => () => {
          w && (y.layers.delete(w), y.layersWithOutsidePointerEventsDisabled.delete(w), ZE());
        },
        [w, y]
      ),
      R.useEffect(() => {
        const X = () => T({});
        return document.addEventListener(tg, X), () => document.removeEventListener(tg, X);
      }, []),
      Oe.jsx(wr.div, {
        ...b,
        ref: O,
        style: { pointerEvents: G ? (J ? "auto" : "none") : void 0, ...a.style },
        onFocusCapture: Cr(a.onFocusCapture, oe.onFocusCapture),
        onBlurCapture: Cr(a.onBlurCapture, oe.onBlurCapture),
        onPointerDownCapture: Cr(a.onPointerDownCapture, q.onPointerDownCapture)
      })
    );
  });
vg.displayName = OM;
var MM = "DismissableLayerBranch",
  LM = R.forwardRef((a, i) => {
    const s = R.useContext(BS),
      u = R.useRef(null),
      d = la(i, u);
    return (
      R.useEffect(() => {
        const p = u.current;
        if (p)
          return (
            s.branches.add(p),
            () => {
              s.branches.delete(p);
            }
          );
      }, [s.branches]),
      Oe.jsx(wr.div, { ...a, ref: d })
    );
  });
LM.displayName = MM;
function jM(a, i = globalThis?.document) {
  const s = kl(a),
    u = R.useRef(!1),
    d = R.useRef(() => {});
  return (
    R.useEffect(() => {
      const p = (E) => {
          if (E.target && !u.current) {
            let b = function () {
              IS(kM, s, y, { discrete: !0 });
            };
            const y = { originalEvent: E };
            E.pointerType === "touch"
              ? (i.removeEventListener("click", d.current),
                (d.current = b),
                i.addEventListener("click", d.current, { once: !0 }))
              : b();
          } else i.removeEventListener("click", d.current);
          u.current = !1;
        },
        f = window.setTimeout(() => {
          i.addEventListener("pointerdown", p);
        }, 0);
      return () => {
        window.clearTimeout(f),
          i.removeEventListener("pointerdown", p),
          i.removeEventListener("click", d.current);
      };
    }, [i, s]),
    { onPointerDownCapture: () => (u.current = !0) }
  );
}
function VM(a, i = globalThis?.document) {
  const s = kl(a),
    u = R.useRef(!1);
  return (
    R.useEffect(() => {
      const d = (p) => {
        p.target && !u.current && IS(AM, s, { originalEvent: p }, { discrete: !1 });
      };
      return i.addEventListener("focusin", d), () => i.removeEventListener("focusin", d);
    }, [i, s]),
    { onFocusCapture: () => (u.current = !0), onBlurCapture: () => (u.current = !1) }
  );
}
function ZE() {
  const a = new CustomEvent(tg);
  document.dispatchEvent(a);
}
function IS(a, i, s, { discrete: u }) {
  const d = s.originalEvent.target,
    p = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: s });
  i && d.addEventListener(a, i, { once: !0 }), u ? DM(d, p) : d.dispatchEvent(p);
}
var Lo = globalThis?.document ? R.useLayoutEffect : () => {},
  UM = fg[" useId ".trim().toString()] || (() => {}),
  FM = 0;
function zh(a) {
  const [i, s] = R.useState(UM());
  return (
    Lo(() => {
      s((u) => u ?? String(FM++));
    }, [a]),
    a || (i ? `radix-${i}` : "")
  );
}
const zM = ["top", "right", "bottom", "left"],
  jo = Math.min,
  Lr = Math.max,
  ud = Math.round,
  Jf = Math.floor,
  Ta = (a) => ({ x: a, y: a }),
  PM = { left: "right", right: "left", bottom: "top", top: "bottom" },
  HM = { start: "end", end: "start" };
function ng(a, i, s) {
  return Lr(a, jo(i, s));
}
function to(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function no(a) {
  return a.split("-")[0];
}
function Ll(a) {
  return a.split("-")[1];
}
function hg(a) {
  return a === "x" ? "y" : "x";
}
function gg(a) {
  return a === "y" ? "height" : "width";
}
const BM = new Set(["top", "bottom"]);
function Ra(a) {
  return BM.has(no(a)) ? "y" : "x";
}
function yg(a) {
  return hg(Ra(a));
}
function IM(a, i, s) {
  s === void 0 && (s = !1);
  const u = Ll(a),
    d = yg(a),
    p = gg(d);
  let f =
    d === "x" ? (u === (s ? "end" : "start") ? "right" : "left") : u === "start" ? "bottom" : "top";
  return i.reference[p] > i.floating[p] && (f = cd(f)), [f, cd(f)];
}
function $M(a) {
  const i = cd(a);
  return [rg(a), i, rg(i)];
}
function rg(a) {
  return a.replace(/start|end/g, (i) => HM[i]);
}
const eS = ["left", "right"],
  tS = ["right", "left"],
  YM = ["top", "bottom"],
  WM = ["bottom", "top"];
function GM(a, i, s) {
  switch (a) {
    case "top":
    case "bottom":
      return s ? (i ? tS : eS) : i ? eS : tS;
    case "left":
    case "right":
      return i ? YM : WM;
    default:
      return [];
  }
}
function qM(a, i, s, u) {
  const d = Ll(a);
  let p = GM(no(a), s === "start", u);
  return d && ((p = p.map((f) => f + "-" + d)), i && (p = p.concat(p.map(rg)))), p;
}
function cd(a) {
  return a.replace(/left|right|bottom|top/g, (i) => PM[i]);
}
function KM(a) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...a };
}
function $S(a) {
  return typeof a != "number" ? KM(a) : { top: a, right: a, bottom: a, left: a };
}
function fd(a) {
  const { x: i, y: s, width: u, height: d } = a;
  return { width: u, height: d, top: s, left: i, right: i + u, bottom: s + d, x: i, y: s };
}
function nS(a, i, s) {
  let { reference: u, floating: d } = a;
  const p = Ra(i),
    f = yg(i),
    E = gg(f),
    b = no(i),
    y = p === "y",
    w = u.x + u.width / 2 - d.width / 2,
    g = u.y + u.height / 2 - d.height / 2,
    _ = u[E] / 2 - d[E] / 2;
  let T;
  switch (b) {
    case "top":
      T = { x: w, y: u.y - d.height };
      break;
    case "bottom":
      T = { x: w, y: u.y + u.height };
      break;
    case "right":
      T = { x: u.x + u.width, y: g };
      break;
    case "left":
      T = { x: u.x - d.width, y: g };
      break;
    default:
      T = { x: u.x, y: u.y };
  }
  switch (Ll(i)) {
    case "start":
      T[f] -= _ * (s && y ? -1 : 1);
      break;
    case "end":
      T[f] += _ * (s && y ? -1 : 1);
      break;
  }
  return T;
}
const XM = async (a, i, s) => {
  const { placement: u = "bottom", strategy: d = "absolute", middleware: p = [], platform: f } = s,
    E = p.filter(Boolean),
    b = await (f.isRTL == null ? void 0 : f.isRTL(i));
  let y = await f.getElementRects({ reference: a, floating: i, strategy: d }),
    { x: w, y: g } = nS(y, u, b),
    _ = u,
    T = {},
    O = 0;
  for (let L = 0; L < E.length; L++) {
    const { name: B, fn: j } = E[L],
      {
        x: I,
        y: G,
        data: J,
        reset: q
      } = await j({
        x: w,
        y: g,
        initialPlacement: u,
        placement: _,
        strategy: d,
        middlewareData: T,
        rects: y,
        platform: f,
        elements: { reference: a, floating: i }
      });
    (w = I ?? w),
      (g = G ?? g),
      (T = { ...T, [B]: { ...T[B], ...J } }),
      q &&
        O <= 50 &&
        (O++,
        typeof q == "object" &&
          (q.placement && (_ = q.placement),
          q.rects &&
            (y =
              q.rects === !0
                ? await f.getElementRects({ reference: a, floating: i, strategy: d })
                : q.rects),
          ({ x: w, y: g } = nS(y, _, b))),
        (L = -1));
  }
  return { x: w, y: g, placement: _, strategy: d, middlewareData: T };
};
async function Mu(a, i) {
  var s;
  i === void 0 && (i = {});
  const { x: u, y: d, platform: p, rects: f, elements: E, strategy: b } = a,
    {
      boundary: y = "clippingAncestors",
      rootBoundary: w = "viewport",
      elementContext: g = "floating",
      altBoundary: _ = !1,
      padding: T = 0
    } = to(i, a),
    O = $S(T),
    B = E[_ ? (g === "floating" ? "reference" : "floating") : g],
    j = fd(
      await p.getClippingRect({
        element:
          (s = await (p.isElement == null ? void 0 : p.isElement(B))) == null || s
            ? B
            : B.contextElement ||
              (await (p.getDocumentElement == null ? void 0 : p.getDocumentElement(E.floating))),
        boundary: y,
        rootBoundary: w,
        strategy: b
      })
    ),
    I =
      g === "floating"
        ? { x: u, y: d, width: f.floating.width, height: f.floating.height }
        : f.reference,
    G = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(E.floating)),
    J = (await (p.isElement == null ? void 0 : p.isElement(G)))
      ? (await (p.getScale == null ? void 0 : p.getScale(G))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    q = fd(
      p.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await p.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: E,
            rect: I,
            offsetParent: G,
            strategy: b
          })
        : I
    );
  return {
    top: (j.top - q.top + O.top) / J.y,
    bottom: (q.bottom - j.bottom + O.bottom) / J.y,
    left: (j.left - q.left + O.left) / J.x,
    right: (q.right - j.right + O.right) / J.x
  };
}
const QM = (a) => ({
    name: "arrow",
    options: a,
    async fn(i) {
      const { x: s, y: u, placement: d, rects: p, platform: f, elements: E, middlewareData: b } = i,
        { element: y, padding: w = 0 } = to(a, i) || {};
      if (y == null) return {};
      const g = $S(w),
        _ = { x: s, y: u },
        T = yg(d),
        O = gg(T),
        L = await f.getDimensions(y),
        B = T === "y",
        j = B ? "top" : "left",
        I = B ? "bottom" : "right",
        G = B ? "clientHeight" : "clientWidth",
        J = p.reference[O] + p.reference[T] - _[T] - p.floating[O],
        q = _[T] - p.reference[T],
        oe = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(y));
      let X = oe ? oe[G] : 0;
      (!X || !(await (f.isElement == null ? void 0 : f.isElement(oe)))) &&
        (X = E.floating[G] || p.floating[O]);
      const ne = J / 2 - q / 2,
        Ne = X / 2 - L[O] / 2 - 1,
        He = jo(g[j], Ne),
        Xe = jo(g[I], Ne),
        Le = He,
        le = X - L[O] - Xe,
        _e = X / 2 - L[O] / 2 + ne,
        ke = ng(Le, _e, le),
        pe =
          !b.arrow &&
          Ll(d) != null &&
          _e !== ke &&
          p.reference[O] / 2 - (_e < Le ? He : Xe) - L[O] / 2 < 0,
        ie = pe ? (_e < Le ? _e - Le : _e - le) : 0;
      return {
        [T]: _[T] + ie,
        data: { [T]: ke, centerOffset: _e - ke - ie, ...(pe && { alignmentOffset: ie }) },
        reset: pe
      };
    }
  }),
  JM = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "flip",
        options: a,
        async fn(i) {
          var s, u;
          const {
              placement: d,
              middlewareData: p,
              rects: f,
              initialPlacement: E,
              platform: b,
              elements: y
            } = i,
            {
              mainAxis: w = !0,
              crossAxis: g = !0,
              fallbackPlacements: _,
              fallbackStrategy: T = "bestFit",
              fallbackAxisSideDirection: O = "none",
              flipAlignment: L = !0,
              ...B
            } = to(a, i);
          if ((s = p.arrow) != null && s.alignmentOffset) return {};
          const j = no(d),
            I = Ra(E),
            G = no(E) === E,
            J = await (b.isRTL == null ? void 0 : b.isRTL(y.floating)),
            q = _ || (G || !L ? [cd(E)] : $M(E)),
            oe = O !== "none";
          !_ && oe && q.push(...qM(E, L, O, J));
          const X = [E, ...q],
            ne = await Mu(i, B),
            Ne = [];
          let He = ((u = p.flip) == null ? void 0 : u.overflows) || [];
          if ((w && Ne.push(ne[j]), g)) {
            const _e = IM(d, f, J);
            Ne.push(ne[_e[0]], ne[_e[1]]);
          }
          if (((He = [...He, { placement: d, overflows: Ne }]), !Ne.every((_e) => _e <= 0))) {
            var Xe, Le;
            const _e = (((Xe = p.flip) == null ? void 0 : Xe.index) || 0) + 1,
              ke = X[_e];
            if (
              ke &&
              (!(g === "alignment" ? I !== Ra(ke) : !1) ||
                He.every((Q) => (Ra(Q.placement) === I ? Q.overflows[0] > 0 : !0)))
            )
              return { data: { index: _e, overflows: He }, reset: { placement: ke } };
            let pe =
              (Le = He.filter((ie) => ie.overflows[0] <= 0).sort(
                (ie, Q) => ie.overflows[1] - Q.overflows[1]
              )[0]) == null
                ? void 0
                : Le.placement;
            if (!pe)
              switch (T) {
                case "bestFit": {
                  var le;
                  const ie =
                    (le = He.filter((Q) => {
                      if (oe) {
                        const Je = Ra(Q.placement);
                        return Je === I || Je === "y";
                      }
                      return !0;
                    })
                      .map((Q) => [
                        Q.placement,
                        Q.overflows.filter((Je) => Je > 0).reduce((Je, Ze) => Je + Ze, 0)
                      ])
                      .sort((Q, Je) => Q[1] - Je[1])[0]) == null
                      ? void 0
                      : le[0];
                  ie && (pe = ie);
                  break;
                }
                case "initialPlacement":
                  pe = E;
                  break;
              }
            if (d !== pe) return { reset: { placement: pe } };
          }
          return {};
        }
      }
    );
  };
function rS(a, i) {
  return {
    top: a.top - i.height,
    right: a.right - i.width,
    bottom: a.bottom - i.height,
    left: a.left - i.width
  };
}
function aS(a) {
  return zM.some((i) => a[i] >= 0);
}
const ZM = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "hide",
        options: a,
        async fn(i) {
          const { rects: s } = i,
            { strategy: u = "referenceHidden", ...d } = to(a, i);
          switch (u) {
            case "referenceHidden": {
              const p = await Mu(i, { ...d, elementContext: "reference" }),
                f = rS(p, s.reference);
              return { data: { referenceHiddenOffsets: f, referenceHidden: aS(f) } };
            }
            case "escaped": {
              const p = await Mu(i, { ...d, altBoundary: !0 }),
                f = rS(p, s.floating);
              return { data: { escapedOffsets: f, escaped: aS(f) } };
            }
            default:
              return {};
          }
        }
      }
    );
  },
  YS = new Set(["left", "top"]);
async function eL(a, i) {
  const { placement: s, platform: u, elements: d } = a,
    p = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)),
    f = no(s),
    E = Ll(s),
    b = Ra(s) === "y",
    y = YS.has(f) ? -1 : 1,
    w = p && b ? -1 : 1,
    g = to(i, a);
  let {
    mainAxis: _,
    crossAxis: T,
    alignmentAxis: O
  } = typeof g == "number"
    ? { mainAxis: g, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: g.mainAxis || 0, crossAxis: g.crossAxis || 0, alignmentAxis: g.alignmentAxis };
  return (
    E && typeof O == "number" && (T = E === "end" ? O * -1 : O),
    b ? { x: T * w, y: _ * y } : { x: _ * y, y: T * w }
  );
}
const tL = function (a) {
    return (
      a === void 0 && (a = 0),
      {
        name: "offset",
        options: a,
        async fn(i) {
          var s, u;
          const { x: d, y: p, placement: f, middlewareData: E } = i,
            b = await eL(i, a);
          return f === ((s = E.offset) == null ? void 0 : s.placement) &&
            (u = E.arrow) != null &&
            u.alignmentOffset
            ? {}
            : { x: d + b.x, y: p + b.y, data: { ...b, placement: f } };
        }
      }
    );
  },
  nL = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "shift",
        options: a,
        async fn(i) {
          const { x: s, y: u, placement: d } = i,
            {
              mainAxis: p = !0,
              crossAxis: f = !1,
              limiter: E = {
                fn: (B) => {
                  let { x: j, y: I } = B;
                  return { x: j, y: I };
                }
              },
              ...b
            } = to(a, i),
            y = { x: s, y: u },
            w = await Mu(i, b),
            g = Ra(no(d)),
            _ = hg(g);
          let T = y[_],
            O = y[g];
          if (p) {
            const B = _ === "y" ? "top" : "left",
              j = _ === "y" ? "bottom" : "right",
              I = T + w[B],
              G = T - w[j];
            T = ng(I, T, G);
          }
          if (f) {
            const B = g === "y" ? "top" : "left",
              j = g === "y" ? "bottom" : "right",
              I = O + w[B],
              G = O - w[j];
            O = ng(I, O, G);
          }
          const L = E.fn({ ...i, [_]: T, [g]: O });
          return { ...L, data: { x: L.x - s, y: L.y - u, enabled: { [_]: p, [g]: f } } };
        }
      }
    );
  },
  rL = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        options: a,
        fn(i) {
          const { x: s, y: u, placement: d, rects: p, middlewareData: f } = i,
            { offset: E = 0, mainAxis: b = !0, crossAxis: y = !0 } = to(a, i),
            w = { x: s, y: u },
            g = Ra(d),
            _ = hg(g);
          let T = w[_],
            O = w[g];
          const L = to(E, i),
            B =
              typeof L == "number"
                ? { mainAxis: L, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...L };
          if (b) {
            const G = _ === "y" ? "height" : "width",
              J = p.reference[_] - p.floating[G] + B.mainAxis,
              q = p.reference[_] + p.reference[G] - B.mainAxis;
            T < J ? (T = J) : T > q && (T = q);
          }
          if (y) {
            var j, I;
            const G = _ === "y" ? "width" : "height",
              J = YS.has(no(d)),
              q =
                p.reference[g] -
                p.floating[G] +
                ((J && ((j = f.offset) == null ? void 0 : j[g])) || 0) +
                (J ? 0 : B.crossAxis),
              oe =
                p.reference[g] +
                p.reference[G] +
                (J ? 0 : ((I = f.offset) == null ? void 0 : I[g]) || 0) -
                (J ? B.crossAxis : 0);
            O < q ? (O = q) : O > oe && (O = oe);
          }
          return { [_]: T, [g]: O };
        }
      }
    );
  },
  aL = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "size",
        options: a,
        async fn(i) {
          var s, u;
          const { placement: d, rects: p, platform: f, elements: E } = i,
            { apply: b = () => {}, ...y } = to(a, i),
            w = await Mu(i, y),
            g = no(d),
            _ = Ll(d),
            T = Ra(d) === "y",
            { width: O, height: L } = p.floating;
          let B, j;
          g === "top" || g === "bottom"
            ? ((B = g),
              (j =
                _ === ((await (f.isRTL == null ? void 0 : f.isRTL(E.floating))) ? "start" : "end")
                  ? "left"
                  : "right"))
            : ((j = g), (B = _ === "end" ? "top" : "bottom"));
          const I = L - w.top - w.bottom,
            G = O - w.left - w.right,
            J = jo(L - w[B], I),
            q = jo(O - w[j], G),
            oe = !i.middlewareData.shift;
          let X = J,
            ne = q;
          if (
            ((s = i.middlewareData.shift) != null && s.enabled.x && (ne = G),
            (u = i.middlewareData.shift) != null && u.enabled.y && (X = I),
            oe && !_)
          ) {
            const He = Lr(w.left, 0),
              Xe = Lr(w.right, 0),
              Le = Lr(w.top, 0),
              le = Lr(w.bottom, 0);
            T
              ? (ne = O - 2 * (He !== 0 || Xe !== 0 ? He + Xe : Lr(w.left, w.right)))
              : (X = L - 2 * (Le !== 0 || le !== 0 ? Le + le : Lr(w.top, w.bottom)));
          }
          await b({ ...i, availableWidth: ne, availableHeight: X });
          const Ne = await f.getDimensions(E.floating);
          return O !== Ne.width || L !== Ne.height ? { reset: { rects: !0 } } : {};
        }
      }
    );
  };
function md() {
  return typeof window < "u";
}
function jl(a) {
  return WS(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function jr(a) {
  var i;
  return (a == null || (i = a.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function Da(a) {
  var i;
  return (i = (WS(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function WS(a) {
  return md() ? a instanceof Node || a instanceof jr(a).Node : !1;
}
function oa(a) {
  return md() ? a instanceof Element || a instanceof jr(a).Element : !1;
}
function Na(a) {
  return md() ? a instanceof HTMLElement || a instanceof jr(a).HTMLElement : !1;
}
function oS(a) {
  return !md() || typeof ShadowRoot > "u"
    ? !1
    : a instanceof ShadowRoot || a instanceof jr(a).ShadowRoot;
}
const oL = new Set(["inline", "contents"]);
function Vu(a) {
  const { overflow: i, overflowX: s, overflowY: u, display: d } = ia(a);
  return /auto|scroll|overlay|hidden|clip/.test(i + u + s) && !oL.has(d);
}
const iL = new Set(["table", "td", "th"]);
function lL(a) {
  return iL.has(jl(a));
}
const sL = [":popover-open", ":modal"];
function vd(a) {
  return sL.some((i) => {
    try {
      return a.matches(i);
    } catch {
      return !1;
    }
  });
}
const uL = ["transform", "translate", "scale", "rotate", "perspective"],
  cL = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  fL = ["paint", "layout", "strict", "content"];
function bg(a) {
  const i = xg(),
    s = oa(a) ? ia(a) : a;
  return (
    uL.some((u) => (s[u] ? s[u] !== "none" : !1)) ||
    (s.containerType ? s.containerType !== "normal" : !1) ||
    (!i && (s.backdropFilter ? s.backdropFilter !== "none" : !1)) ||
    (!i && (s.filter ? s.filter !== "none" : !1)) ||
    cL.some((u) => (s.willChange || "").includes(u)) ||
    fL.some((u) => (s.contain || "").includes(u))
  );
}
function dL(a) {
  let i = Vo(a);
  for (; Na(i) && !Al(i); ) {
    if (bg(i)) return i;
    if (vd(i)) return null;
    i = Vo(i);
  }
  return null;
}
function xg() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const pL = new Set(["html", "body", "#document"]);
function Al(a) {
  return pL.has(jl(a));
}
function ia(a) {
  return jr(a).getComputedStyle(a);
}
function hd(a) {
  return oa(a)
    ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop }
    : { scrollLeft: a.scrollX, scrollTop: a.scrollY };
}
function Vo(a) {
  if (jl(a) === "html") return a;
  const i = a.assignedSlot || a.parentNode || (oS(a) && a.host) || Da(a);
  return oS(i) ? i.host : i;
}
function GS(a) {
  const i = Vo(a);
  return Al(i) ? (a.ownerDocument ? a.ownerDocument.body : a.body) : Na(i) && Vu(i) ? i : GS(i);
}
function Lu(a, i, s) {
  var u;
  i === void 0 && (i = []), s === void 0 && (s = !0);
  const d = GS(a),
    p = d === ((u = a.ownerDocument) == null ? void 0 : u.body),
    f = jr(d);
  if (p) {
    const E = ag(f);
    return i.concat(f, f.visualViewport || [], Vu(d) ? d : [], E && s ? Lu(E) : []);
  }
  return i.concat(d, Lu(d, [], s));
}
function ag(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function qS(a) {
  const i = ia(a);
  let s = parseFloat(i.width) || 0,
    u = parseFloat(i.height) || 0;
  const d = Na(a),
    p = d ? a.offsetWidth : s,
    f = d ? a.offsetHeight : u,
    E = ud(s) !== p || ud(u) !== f;
  return E && ((s = p), (u = f)), { width: s, height: u, $: E };
}
function Eg(a) {
  return oa(a) ? a : a.contextElement;
}
function _l(a) {
  const i = Eg(a);
  if (!Na(i)) return Ta(1);
  const s = i.getBoundingClientRect(),
    { width: u, height: d, $: p } = qS(i);
  let f = (p ? ud(s.width) : s.width) / u,
    E = (p ? ud(s.height) : s.height) / d;
  return (
    (!f || !Number.isFinite(f)) && (f = 1), (!E || !Number.isFinite(E)) && (E = 1), { x: f, y: E }
  );
}
const mL = Ta(0);
function KS(a) {
  const i = jr(a);
  return !xg() || !i.visualViewport
    ? mL
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function vL(a, i, s) {
  return i === void 0 && (i = !1), !s || (i && s !== jr(a)) ? !1 : i;
}
function bi(a, i, s, u) {
  i === void 0 && (i = !1), s === void 0 && (s = !1);
  const d = a.getBoundingClientRect(),
    p = Eg(a);
  let f = Ta(1);
  i && (u ? oa(u) && (f = _l(u)) : (f = _l(a)));
  const E = vL(p, s, u) ? KS(p) : Ta(0);
  let b = (d.left + E.x) / f.x,
    y = (d.top + E.y) / f.y,
    w = d.width / f.x,
    g = d.height / f.y;
  if (p) {
    const _ = jr(p),
      T = u && oa(u) ? jr(u) : u;
    let O = _,
      L = ag(O);
    for (; L && u && T !== O; ) {
      const B = _l(L),
        j = L.getBoundingClientRect(),
        I = ia(L),
        G = j.left + (L.clientLeft + parseFloat(I.paddingLeft)) * B.x,
        J = j.top + (L.clientTop + parseFloat(I.paddingTop)) * B.y;
      (b *= B.x), (y *= B.y), (w *= B.x), (g *= B.y), (b += G), (y += J), (O = jr(L)), (L = ag(O));
    }
  }
  return fd({ width: w, height: g, x: b, y });
}
function gd(a, i) {
  const s = hd(a).scrollLeft;
  return i ? i.left + s : bi(Da(a)).left + s;
}
function XS(a, i) {
  const s = a.getBoundingClientRect(),
    u = s.left + i.scrollLeft - gd(a, s),
    d = s.top + i.scrollTop;
  return { x: u, y: d };
}
function hL(a) {
  let { elements: i, rect: s, offsetParent: u, strategy: d } = a;
  const p = d === "fixed",
    f = Da(u),
    E = i ? vd(i.floating) : !1;
  if (u === f || (E && p)) return s;
  let b = { scrollLeft: 0, scrollTop: 0 },
    y = Ta(1);
  const w = Ta(0),
    g = Na(u);
  if ((g || (!g && !p)) && ((jl(u) !== "body" || Vu(f)) && (b = hd(u)), Na(u))) {
    const T = bi(u);
    (y = _l(u)), (w.x = T.x + u.clientLeft), (w.y = T.y + u.clientTop);
  }
  const _ = f && !g && !p ? XS(f, b) : Ta(0);
  return {
    width: s.width * y.x,
    height: s.height * y.y,
    x: s.x * y.x - b.scrollLeft * y.x + w.x + _.x,
    y: s.y * y.y - b.scrollTop * y.y + w.y + _.y
  };
}
function gL(a) {
  return Array.from(a.getClientRects());
}
function yL(a) {
  const i = Da(a),
    s = hd(a),
    u = a.ownerDocument.body,
    d = Lr(i.scrollWidth, i.clientWidth, u.scrollWidth, u.clientWidth),
    p = Lr(i.scrollHeight, i.clientHeight, u.scrollHeight, u.clientHeight);
  let f = -s.scrollLeft + gd(a);
  const E = -s.scrollTop;
  return (
    ia(u).direction === "rtl" && (f += Lr(i.clientWidth, u.clientWidth) - d),
    { width: d, height: p, x: f, y: E }
  );
}
const iS = 25;
function bL(a, i) {
  const s = jr(a),
    u = Da(a),
    d = s.visualViewport;
  let p = u.clientWidth,
    f = u.clientHeight,
    E = 0,
    b = 0;
  if (d) {
    (p = d.width), (f = d.height);
    const w = xg();
    (!w || (w && i === "fixed")) && ((E = d.offsetLeft), (b = d.offsetTop));
  }
  const y = gd(u);
  if (y <= 0) {
    const w = u.ownerDocument,
      g = w.body,
      _ = getComputedStyle(g),
      T =
        (w.compatMode === "CSS1Compat" && parseFloat(_.marginLeft) + parseFloat(_.marginRight)) ||
        0,
      O = Math.abs(u.clientWidth - g.clientWidth - T);
    O <= iS && (p -= O);
  } else y <= iS && (p += y);
  return { width: p, height: f, x: E, y: b };
}
const xL = new Set(["absolute", "fixed"]);
function EL(a, i) {
  const s = bi(a, !0, i === "fixed"),
    u = s.top + a.clientTop,
    d = s.left + a.clientLeft,
    p = Na(a) ? _l(a) : Ta(1),
    f = a.clientWidth * p.x,
    E = a.clientHeight * p.y,
    b = d * p.x,
    y = u * p.y;
  return { width: f, height: E, x: b, y };
}
function lS(a, i, s) {
  let u;
  if (i === "viewport") u = bL(a, s);
  else if (i === "document") u = yL(Da(a));
  else if (oa(i)) u = EL(i, s);
  else {
    const d = KS(a);
    u = { x: i.x - d.x, y: i.y - d.y, width: i.width, height: i.height };
  }
  return fd(u);
}
function QS(a, i) {
  const s = Vo(a);
  return s === i || !oa(s) || Al(s) ? !1 : ia(s).position === "fixed" || QS(s, i);
}
function SL(a, i) {
  const s = i.get(a);
  if (s) return s;
  let u = Lu(a, [], !1).filter((E) => oa(E) && jl(E) !== "body"),
    d = null;
  const p = ia(a).position === "fixed";
  let f = p ? Vo(a) : a;
  for (; oa(f) && !Al(f); ) {
    const E = ia(f),
      b = bg(f);
    !b && E.position === "fixed" && (d = null),
      (
        p
          ? !b && !d
          : (!b && E.position === "static" && !!d && xL.has(d.position)) ||
            (Vu(f) && !b && QS(a, f))
      )
        ? (u = u.filter((w) => w !== f))
        : (d = E),
      (f = Vo(f));
  }
  return i.set(a, u), u;
}
function CL(a) {
  let { element: i, boundary: s, rootBoundary: u, strategy: d } = a;
  const f = [...(s === "clippingAncestors" ? (vd(i) ? [] : SL(i, this._c)) : [].concat(s)), u],
    E = f[0],
    b = f.reduce(
      (y, w) => {
        const g = lS(i, w, d);
        return (
          (y.top = Lr(g.top, y.top)),
          (y.right = jo(g.right, y.right)),
          (y.bottom = jo(g.bottom, y.bottom)),
          (y.left = Lr(g.left, y.left)),
          y
        );
      },
      lS(i, E, d)
    );
  return { width: b.right - b.left, height: b.bottom - b.top, x: b.left, y: b.top };
}
function wL(a) {
  const { width: i, height: s } = qS(a);
  return { width: i, height: s };
}
function RL(a, i, s) {
  const u = Na(i),
    d = Da(i),
    p = s === "fixed",
    f = bi(a, !0, p, i);
  let E = { scrollLeft: 0, scrollTop: 0 };
  const b = Ta(0);
  function y() {
    b.x = gd(d);
  }
  if (u || (!u && !p))
    if (((jl(i) !== "body" || Vu(d)) && (E = hd(i)), u)) {
      const T = bi(i, !0, p, i);
      (b.x = T.x + i.clientLeft), (b.y = T.y + i.clientTop);
    } else d && y();
  p && !u && d && y();
  const w = d && !u && !p ? XS(d, E) : Ta(0),
    g = f.left + E.scrollLeft - b.x - w.x,
    _ = f.top + E.scrollTop - b.y - w.y;
  return { x: g, y: _, width: f.width, height: f.height };
}
function Ph(a) {
  return ia(a).position === "static";
}
function sS(a, i) {
  if (!Na(a) || ia(a).position === "fixed") return null;
  if (i) return i(a);
  let s = a.offsetParent;
  return Da(a) === s && (s = s.ownerDocument.body), s;
}
function JS(a, i) {
  const s = jr(a);
  if (vd(a)) return s;
  if (!Na(a)) {
    let d = Vo(a);
    for (; d && !Al(d); ) {
      if (oa(d) && !Ph(d)) return d;
      d = Vo(d);
    }
    return s;
  }
  let u = sS(a, i);
  for (; u && lL(u) && Ph(u); ) u = sS(u, i);
  return u && Al(u) && Ph(u) && !bg(u) ? s : u || dL(a) || s;
}
const TL = async function (a) {
  const i = this.getOffsetParent || JS,
    s = this.getDimensions,
    u = await s(a.floating);
  return {
    reference: RL(a.reference, await i(a.floating), a.strategy),
    floating: { x: 0, y: 0, width: u.width, height: u.height }
  };
};
function NL(a) {
  return ia(a).direction === "rtl";
}
const DL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: hL,
  getDocumentElement: Da,
  getClippingRect: CL,
  getOffsetParent: JS,
  getElementRects: TL,
  getClientRects: gL,
  getDimensions: wL,
  getScale: _l,
  isElement: oa,
  isRTL: NL
};
function ZS(a, i) {
  return a.x === i.x && a.y === i.y && a.width === i.width && a.height === i.height;
}
function _L(a, i) {
  let s = null,
    u;
  const d = Da(a);
  function p() {
    var E;
    clearTimeout(u), (E = s) == null || E.disconnect(), (s = null);
  }
  function f(E, b) {
    E === void 0 && (E = !1), b === void 0 && (b = 1), p();
    const y = a.getBoundingClientRect(),
      { left: w, top: g, width: _, height: T } = y;
    if ((E || i(), !_ || !T)) return;
    const O = Jf(g),
      L = Jf(d.clientWidth - (w + _)),
      B = Jf(d.clientHeight - (g + T)),
      j = Jf(w),
      G = {
        rootMargin: -O + "px " + -L + "px " + -B + "px " + -j + "px",
        threshold: Lr(0, jo(1, b)) || 1
      };
    let J = !0;
    function q(oe) {
      const X = oe[0].intersectionRatio;
      if (X !== b) {
        if (!J) return f();
        X
          ? f(!1, X)
          : (u = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      X === 1 && !ZS(y, a.getBoundingClientRect()) && f(), (J = !1);
    }
    try {
      s = new IntersectionObserver(q, { ...G, root: d.ownerDocument });
    } catch {
      s = new IntersectionObserver(q, G);
    }
    s.observe(a);
  }
  return f(!0), p;
}
function OL(a, i, s, u) {
  u === void 0 && (u = {});
  const {
      ancestorScroll: d = !0,
      ancestorResize: p = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: E = typeof IntersectionObserver == "function",
      animationFrame: b = !1
    } = u,
    y = Eg(a),
    w = d || p ? [...(y ? Lu(y) : []), ...Lu(i)] : [];
  w.forEach((j) => {
    d && j.addEventListener("scroll", s, { passive: !0 }), p && j.addEventListener("resize", s);
  });
  const g = y && E ? _L(y, s) : null;
  let _ = -1,
    T = null;
  f &&
    ((T = new ResizeObserver((j) => {
      let [I] = j;
      I &&
        I.target === y &&
        T &&
        (T.unobserve(i),
        cancelAnimationFrame(_),
        (_ = requestAnimationFrame(() => {
          var G;
          (G = T) == null || G.observe(i);
        }))),
        s();
    })),
    y && !b && T.observe(y),
    T.observe(i));
  let O,
    L = b ? bi(a) : null;
  b && B();
  function B() {
    const j = bi(a);
    L && !ZS(L, j) && s(), (L = j), (O = requestAnimationFrame(B));
  }
  return (
    s(),
    () => {
      var j;
      w.forEach((I) => {
        d && I.removeEventListener("scroll", s), p && I.removeEventListener("resize", s);
      }),
        g?.(),
        (j = T) == null || j.disconnect(),
        (T = null),
        b && cancelAnimationFrame(O);
    }
  );
}
const kL = tL,
  AL = nL,
  ML = JM,
  LL = aL,
  jL = ZM,
  uS = QM,
  VL = rL,
  UL = (a, i, s) => {
    const u = new Map(),
      d = { platform: DL, ...s },
      p = { ...d.platform, _c: u };
    return XM(a, i, { ...d, platform: p });
  };
var FL = typeof document < "u",
  zL = function () {},
  id = FL ? R.useLayoutEffect : zL;
function dd(a, i) {
  if (a === i) return !0;
  if (typeof a != typeof i) return !1;
  if (typeof a == "function" && a.toString() === i.toString()) return !0;
  let s, u, d;
  if (a && i && typeof a == "object") {
    if (Array.isArray(a)) {
      if (((s = a.length), s !== i.length)) return !1;
      for (u = s; u-- !== 0; ) if (!dd(a[u], i[u])) return !1;
      return !0;
    }
    if (((d = Object.keys(a)), (s = d.length), s !== Object.keys(i).length)) return !1;
    for (u = s; u-- !== 0; ) if (!{}.hasOwnProperty.call(i, d[u])) return !1;
    for (u = s; u-- !== 0; ) {
      const p = d[u];
      if (!(p === "_owner" && a.$$typeof) && !dd(a[p], i[p])) return !1;
    }
    return !0;
  }
  return a !== a && i !== i;
}
function eC(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cS(a, i) {
  const s = eC(a);
  return Math.round(i * s) / s;
}
function Hh(a) {
  const i = R.useRef(a);
  return (
    id(() => {
      i.current = a;
    }),
    i
  );
}
function PL(a) {
  a === void 0 && (a = {});
  const {
      placement: i = "bottom",
      strategy: s = "absolute",
      middleware: u = [],
      platform: d,
      elements: { reference: p, floating: f } = {},
      transform: E = !0,
      whileElementsMounted: b,
      open: y
    } = a,
    [w, g] = R.useState({
      x: 0,
      y: 0,
      strategy: s,
      placement: i,
      middlewareData: {},
      isPositioned: !1
    }),
    [_, T] = R.useState(u);
  dd(_, u) || T(u);
  const [O, L] = R.useState(null),
    [B, j] = R.useState(null),
    I = R.useCallback((Q) => {
      Q !== oe.current && ((oe.current = Q), L(Q));
    }, []),
    G = R.useCallback((Q) => {
      Q !== X.current && ((X.current = Q), j(Q));
    }, []),
    J = p || O,
    q = f || B,
    oe = R.useRef(null),
    X = R.useRef(null),
    ne = R.useRef(w),
    Ne = b != null,
    He = Hh(b),
    Xe = Hh(d),
    Le = Hh(y),
    le = R.useCallback(() => {
      if (!oe.current || !X.current) return;
      const Q = { placement: i, strategy: s, middleware: _ };
      Xe.current && (Q.platform = Xe.current),
        UL(oe.current, X.current, Q).then((Je) => {
          const Ze = { ...Je, isPositioned: Le.current !== !1 };
          _e.current &&
            !dd(ne.current, Ze) &&
            ((ne.current = Ze),
            dg.flushSync(() => {
              g(Ze);
            }));
        });
    }, [_, i, s, Xe, Le]);
  id(() => {
    y === !1 &&
      ne.current.isPositioned &&
      ((ne.current.isPositioned = !1), g((Q) => ({ ...Q, isPositioned: !1 })));
  }, [y]);
  const _e = R.useRef(!1);
  id(
    () => (
      (_e.current = !0),
      () => {
        _e.current = !1;
      }
    ),
    []
  ),
    id(() => {
      if ((J && (oe.current = J), q && (X.current = q), J && q)) {
        if (He.current) return He.current(J, q, le);
        le();
      }
    }, [J, q, le, He, Ne]);
  const ke = R.useMemo(
      () => ({ reference: oe, floating: X, setReference: I, setFloating: G }),
      [I, G]
    ),
    pe = R.useMemo(() => ({ reference: J, floating: q }), [J, q]),
    ie = R.useMemo(() => {
      const Q = { position: s, left: 0, top: 0 };
      if (!pe.floating) return Q;
      const Je = cS(pe.floating, w.x),
        Ze = cS(pe.floating, w.y);
      return E
        ? {
            ...Q,
            transform: "translate(" + Je + "px, " + Ze + "px)",
            ...(eC(pe.floating) >= 1.5 && { willChange: "transform" })
          }
        : { position: s, left: Je, top: Ze };
    }, [s, E, pe.floating, w.x, w.y]);
  return R.useMemo(
    () => ({ ...w, update: le, refs: ke, elements: pe, floatingStyles: ie }),
    [w, le, ke, pe, ie]
  );
}
const HL = (a) => {
    function i(s) {
      return {}.hasOwnProperty.call(s, "current");
    }
    return {
      name: "arrow",
      options: a,
      fn(s) {
        const { element: u, padding: d } = typeof a == "function" ? a(s) : a;
        return u && i(u)
          ? u.current != null
            ? uS({ element: u.current, padding: d }).fn(s)
            : {}
          : u
            ? uS({ element: u, padding: d }).fn(s)
            : {};
      }
    };
  },
  BL = (a, i) => ({ ...kL(a), options: [a, i] }),
  IL = (a, i) => ({ ...AL(a), options: [a, i] }),
  $L = (a, i) => ({ ...VL(a), options: [a, i] }),
  YL = (a, i) => ({ ...ML(a), options: [a, i] }),
  WL = (a, i) => ({ ...LL(a), options: [a, i] }),
  GL = (a, i) => ({ ...jL(a), options: [a, i] }),
  qL = (a, i) => ({ ...HL(a), options: [a, i] });
var KL = "Arrow",
  tC = R.forwardRef((a, i) => {
    const { children: s, width: u = 10, height: d = 5, ...p } = a;
    return Oe.jsx(wr.svg, {
      ...p,
      ref: i,
      width: u,
      height: d,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: a.asChild ? s : Oe.jsx("polygon", { points: "0,0 30,0 15,10" })
    });
  });
tC.displayName = KL;
var XL = tC;
function QL(a) {
  const [i, s] = R.useState(void 0);
  return (
    Lo(() => {
      if (a) {
        s({ width: a.offsetWidth, height: a.offsetHeight });
        const u = new ResizeObserver((d) => {
          if (!Array.isArray(d) || !d.length) return;
          const p = d[0];
          let f, E;
          if ("borderBoxSize" in p) {
            const b = p.borderBoxSize,
              y = Array.isArray(b) ? b[0] : b;
            (f = y.inlineSize), (E = y.blockSize);
          } else (f = a.offsetWidth), (E = a.offsetHeight);
          s({ width: f, height: E });
        });
        return u.observe(a, { box: "border-box" }), () => u.unobserve(a);
      } else s(void 0);
    }, [a]),
    i
  );
}
var nC = "Popper",
  [rC, aC] = pg(nC),
  [IF, oC] = rC(nC),
  iC = "PopperAnchor",
  lC = R.forwardRef((a, i) => {
    const { __scopePopper: s, virtualRef: u, ...d } = a,
      p = oC(iC, s),
      f = R.useRef(null),
      E = la(i, f),
      b = R.useRef(null);
    return (
      R.useEffect(() => {
        const y = b.current;
        (b.current = u?.current || f.current), y !== b.current && p.onAnchorChange(b.current);
      }),
      u ? null : Oe.jsx(wr.div, { ...d, ref: E })
    );
  });
lC.displayName = iC;
var Sg = "PopperContent",
  [JL, ZL] = rC(Sg),
  sC = R.forwardRef((a, i) => {
    const {
        __scopePopper: s,
        side: u = "bottom",
        sideOffset: d = 0,
        align: p = "center",
        alignOffset: f = 0,
        arrowPadding: E = 0,
        avoidCollisions: b = !0,
        collisionBoundary: y = [],
        collisionPadding: w = 0,
        sticky: g = "partial",
        hideWhenDetached: _ = !1,
        updatePositionStrategy: T = "optimized",
        onPlaced: O,
        ...L
      } = a,
      B = oC(Sg, s),
      [j, I] = R.useState(null),
      G = la(i, (Ue) => I(Ue)),
      [J, q] = R.useState(null),
      oe = QL(J),
      X = oe?.width ?? 0,
      ne = oe?.height ?? 0,
      Ne = u + (p !== "center" ? "-" + p : ""),
      He = typeof w == "number" ? w : { top: 0, right: 0, bottom: 0, left: 0, ...w },
      Xe = Array.isArray(y) ? y : [y],
      Le = Xe.length > 0,
      le = { padding: He, boundary: Xe.filter(tj), altBoundary: Le },
      {
        refs: _e,
        floatingStyles: ke,
        placement: pe,
        isPositioned: ie,
        middlewareData: Q
      } = PL({
        strategy: "fixed",
        placement: Ne,
        whileElementsMounted: (...Ue) => OL(...Ue, { animationFrame: T === "always" }),
        elements: { reference: B.anchor },
        middleware: [
          BL({ mainAxis: d + ne, alignmentAxis: f }),
          b && IL({ mainAxis: !0, crossAxis: !1, limiter: g === "partial" ? $L() : void 0, ...le }),
          b && YL({ ...le }),
          WL({
            ...le,
            apply: ({ elements: Ue, rects: $e, availableWidth: dt, availableHeight: mt }) => {
              const { width: Nt, height: wt } = $e.reference,
                Ft = Ue.floating.style;
              Ft.setProperty("--radix-popper-available-width", `${dt}px`),
                Ft.setProperty("--radix-popper-available-height", `${mt}px`),
                Ft.setProperty("--radix-popper-anchor-width", `${Nt}px`),
                Ft.setProperty("--radix-popper-anchor-height", `${wt}px`);
            }
          }),
          J && qL({ element: J, padding: E }),
          nj({ arrowWidth: X, arrowHeight: ne }),
          _ && GL({ strategy: "referenceHidden", ...le })
        ]
      }),
      [Je, Ze] = fC(pe),
      Mt = kl(O);
    Lo(() => {
      ie && Mt?.();
    }, [ie, Mt]);
    const Et = Q.arrow?.x,
      xe = Q.arrow?.y,
      Me = Q.arrow?.centerOffset !== 0,
      [tt, St] = R.useState();
    return (
      Lo(() => {
        j && St(window.getComputedStyle(j).zIndex);
      }, [j]),
      Oe.jsx("div", {
        ref: _e.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ke,
          transform: ie ? ke.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: tt,
          "--radix-popper-transform-origin": [Q.transformOrigin?.x, Q.transformOrigin?.y].join(" "),
          ...(Q.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" })
        },
        dir: a.dir,
        children: Oe.jsx(JL, {
          scope: s,
          placedSide: Je,
          onArrowChange: q,
          arrowX: Et,
          arrowY: xe,
          shouldHideArrow: Me,
          children: Oe.jsx(wr.div, {
            "data-side": Je,
            "data-align": Ze,
            ...L,
            ref: G,
            style: { ...L.style, animation: ie ? void 0 : "none" }
          })
        })
      })
    );
  });
sC.displayName = Sg;
var uC = "PopperArrow",
  ej = { top: "bottom", right: "left", bottom: "top", left: "right" },
  cC = R.forwardRef(function (i, s) {
    const { __scopePopper: u, ...d } = i,
      p = ZL(uC, u),
      f = ej[p.placedSide];
    return Oe.jsx("span", {
      ref: p.onArrowChange,
      style: {
        position: "absolute",
        left: p.arrowX,
        top: p.arrowY,
        [f]: 0,
        transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[
          p.placedSide
        ],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[p.placedSide],
        visibility: p.shouldHideArrow ? "hidden" : void 0
      },
      children: Oe.jsx(XL, { ...d, ref: s, style: { ...d.style, display: "block" } })
    });
  });
cC.displayName = uC;
function tj(a) {
  return a !== null;
}
var nj = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(i) {
    const { placement: s, rects: u, middlewareData: d } = i,
      f = d.arrow?.centerOffset !== 0,
      E = f ? 0 : a.arrowWidth,
      b = f ? 0 : a.arrowHeight,
      [y, w] = fC(s),
      g = { start: "0%", center: "50%", end: "100%" }[w],
      _ = (d.arrow?.x ?? 0) + E / 2,
      T = (d.arrow?.y ?? 0) + b / 2;
    let O = "",
      L = "";
    return (
      y === "bottom"
        ? ((O = f ? g : `${_}px`), (L = `${-b}px`))
        : y === "top"
          ? ((O = f ? g : `${_}px`), (L = `${u.floating.height + b}px`))
          : y === "right"
            ? ((O = `${-b}px`), (L = f ? g : `${T}px`))
            : y === "left" && ((O = `${u.floating.width + b}px`), (L = f ? g : `${T}px`)),
      { data: { x: O, y: L } }
    );
  }
});
function fC(a) {
  const [i, s = "center"] = a.split("-");
  return [i, s];
}
var rj = lC,
  aj = sC,
  oj = cC,
  ij = "Portal",
  dC = R.forwardRef((a, i) => {
    const { container: s, ...u } = a,
      [d, p] = R.useState(!1);
    Lo(() => p(!0), []);
    const f = s || (d && globalThis?.document?.body);
    return f ? zS.createPortal(Oe.jsx(wr.div, { ...u, ref: i }), f) : null;
  });
dC.displayName = ij;
function lj(a, i) {
  return R.useReducer((s, u) => i[s][u] ?? s, a);
}
var Uu = (a) => {
  const { present: i, children: s } = a,
    u = sj(i),
    d = typeof s == "function" ? s({ present: u.isPresent }) : R.Children.only(s),
    p = la(u.ref, uj(d));
  return typeof s == "function" || u.isPresent ? R.cloneElement(d, { ref: p }) : null;
};
Uu.displayName = "Presence";
function sj(a) {
  const [i, s] = R.useState(),
    u = R.useRef(null),
    d = R.useRef(a),
    p = R.useRef("none"),
    f = a ? "mounted" : "unmounted",
    [E, b] = lj(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" }
    });
  return (
    R.useEffect(() => {
      const y = Zf(u.current);
      p.current = E === "mounted" ? y : "none";
    }, [E]),
    Lo(() => {
      const y = u.current,
        w = d.current;
      if (w !== a) {
        const _ = p.current,
          T = Zf(y);
        a
          ? b("MOUNT")
          : T === "none" || y?.display === "none"
            ? b("UNMOUNT")
            : b(w && _ !== T ? "ANIMATION_OUT" : "UNMOUNT"),
          (d.current = a);
      }
    }, [a, b]),
    Lo(() => {
      if (i) {
        let y;
        const w = i.ownerDocument.defaultView ?? window,
          g = (T) => {
            const L = Zf(u.current).includes(CSS.escape(T.animationName));
            if (T.target === i && L && (b("ANIMATION_END"), !d.current)) {
              const B = i.style.animationFillMode;
              (i.style.animationFillMode = "forwards"),
                (y = w.setTimeout(() => {
                  i.style.animationFillMode === "forwards" && (i.style.animationFillMode = B);
                }));
            }
          },
          _ = (T) => {
            T.target === i && (p.current = Zf(u.current));
          };
        return (
          i.addEventListener("animationstart", _),
          i.addEventListener("animationcancel", g),
          i.addEventListener("animationend", g),
          () => {
            w.clearTimeout(y),
              i.removeEventListener("animationstart", _),
              i.removeEventListener("animationcancel", g),
              i.removeEventListener("animationend", g);
          }
        );
      } else b("ANIMATION_END");
    }, [i, b]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(E),
      ref: R.useCallback((y) => {
        (u.current = y ? getComputedStyle(y) : null), s(y);
      }, [])
    }
  );
}
function Zf(a) {
  return a?.animationName || "none";
}
function uj(a) {
  let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    s = i && "isReactWarning" in i && i.isReactWarning;
  return s
    ? a.ref
    : ((i = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (s = i && "isReactWarning" in i && i.isReactWarning),
      s ? a.props.ref : a.props.ref || a.ref);
}
var cj = fg[" useInsertionEffect ".trim().toString()] || Lo;
function fj({ prop: a, defaultProp: i, onChange: s = () => {}, caller: u }) {
  const [d, p, f] = dj({ defaultProp: i, onChange: s }),
    E = a !== void 0,
    b = E ? a : d;
  {
    const w = R.useRef(a !== void 0);
    R.useEffect(() => {
      const g = w.current;
      g !== E &&
        console.warn(
          `${u} is changing from ${g ? "controlled" : "uncontrolled"} to ${E ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (w.current = E);
    }, [E, u]);
  }
  const y = R.useCallback(
    (w) => {
      if (E) {
        const g = pj(w) ? w(a) : w;
        g !== a && f.current?.(g);
      } else p(w);
    },
    [E, a, p, f]
  );
  return [b, y];
}
function dj({ defaultProp: a, onChange: i }) {
  const [s, u] = R.useState(a),
    d = R.useRef(s),
    p = R.useRef(i);
  return (
    cj(() => {
      p.current = i;
    }, [i]),
    R.useEffect(() => {
      d.current !== s && (p.current?.(s), (d.current = s));
    }, [s, d]),
    [s, u, p]
  );
}
function pj(a) {
  return typeof a == "function";
}
var mj = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }),
  vj = "VisuallyHidden",
  pC = R.forwardRef((a, i) => Oe.jsx(wr.span, { ...a, ref: i, style: { ...mj, ...a.style } }));
pC.displayName = vj;
var hj = pC,
  [yd] = pg("Tooltip", [aC]),
  Cg = aC(),
  mC = "TooltipProvider",
  gj = 700,
  fS = "tooltip.open",
  [yj, vC] = yd(mC),
  hC = (a) => {
    const {
        __scopeTooltip: i,
        delayDuration: s = gj,
        skipDelayDuration: u = 300,
        disableHoverableContent: d = !1,
        children: p
      } = a,
      f = R.useRef(!0),
      E = R.useRef(!1),
      b = R.useRef(0);
    return (
      R.useEffect(() => {
        const y = b.current;
        return () => window.clearTimeout(y);
      }, []),
      Oe.jsx(yj, {
        scope: i,
        isOpenDelayedRef: f,
        delayDuration: s,
        onOpen: R.useCallback(() => {
          window.clearTimeout(b.current), (f.current = !1);
        }, []),
        onClose: R.useCallback(() => {
          window.clearTimeout(b.current),
            (b.current = window.setTimeout(() => (f.current = !0), u));
        }, [u]),
        isPointerInTransitRef: E,
        onPointerInTransitChange: R.useCallback((y) => {
          E.current = y;
        }, []),
        disableHoverableContent: d,
        children: p
      })
    );
  };
hC.displayName = mC;
var gC = "Tooltip",
  [$F, bd] = yd(gC),
  og = "TooltipTrigger",
  bj = R.forwardRef((a, i) => {
    const { __scopeTooltip: s, ...u } = a,
      d = bd(og, s),
      p = vC(og, s),
      f = Cg(s),
      E = R.useRef(null),
      b = la(i, E, d.onTriggerChange),
      y = R.useRef(!1),
      w = R.useRef(!1),
      g = R.useCallback(() => (y.current = !1), []);
    return (
      R.useEffect(() => () => document.removeEventListener("pointerup", g), [g]),
      Oe.jsx(rj, {
        asChild: !0,
        ...f,
        children: Oe.jsx(wr.button, {
          "aria-describedby": d.open ? d.contentId : void 0,
          "data-state": d.stateAttribute,
          ...u,
          ref: b,
          onPointerMove: Cr(a.onPointerMove, (_) => {
            _.pointerType !== "touch" &&
              !w.current &&
              !p.isPointerInTransitRef.current &&
              (d.onTriggerEnter(), (w.current = !0));
          }),
          onPointerLeave: Cr(a.onPointerLeave, () => {
            d.onTriggerLeave(), (w.current = !1);
          }),
          onPointerDown: Cr(a.onPointerDown, () => {
            d.open && d.onClose(),
              (y.current = !0),
              document.addEventListener("pointerup", g, { once: !0 });
          }),
          onFocus: Cr(a.onFocus, () => {
            y.current || d.onOpen();
          }),
          onBlur: Cr(a.onBlur, d.onClose),
          onClick: Cr(a.onClick, d.onClose)
        })
      })
    );
  });
bj.displayName = og;
var xj = "TooltipPortal",
  [YF, Ej] = yd(xj, { forceMount: void 0 }),
  Ml = "TooltipContent",
  Sj = R.forwardRef((a, i) => {
    const s = Ej(Ml, a.__scopeTooltip),
      { forceMount: u = s.forceMount, side: d = "top", ...p } = a,
      f = bd(Ml, a.__scopeTooltip);
    return Oe.jsx(Uu, {
      present: u || f.open,
      children: f.disableHoverableContent
        ? Oe.jsx(yC, { side: d, ...p, ref: i })
        : Oe.jsx(Cj, { side: d, ...p, ref: i })
    });
  }),
  Cj = R.forwardRef((a, i) => {
    const s = bd(Ml, a.__scopeTooltip),
      u = vC(Ml, a.__scopeTooltip),
      d = R.useRef(null),
      p = la(i, d),
      [f, E] = R.useState(null),
      { trigger: b, onClose: y } = s,
      w = d.current,
      { onPointerInTransitChange: g } = u,
      _ = R.useCallback(() => {
        E(null), g(!1);
      }, [g]),
      T = R.useCallback(
        (O, L) => {
          const B = O.currentTarget,
            j = { x: O.clientX, y: O.clientY },
            I = Dj(j, B.getBoundingClientRect()),
            G = _j(j, I),
            J = Oj(L.getBoundingClientRect()),
            q = Aj([...G, ...J]);
          E(q), g(!0);
        },
        [g]
      );
    return (
      R.useEffect(() => () => _(), [_]),
      R.useEffect(() => {
        if (b && w) {
          const O = (B) => T(B, w),
            L = (B) => T(B, b);
          return (
            b.addEventListener("pointerleave", O),
            w.addEventListener("pointerleave", L),
            () => {
              b.removeEventListener("pointerleave", O), w.removeEventListener("pointerleave", L);
            }
          );
        }
      }, [b, w, T, _]),
      R.useEffect(() => {
        if (f) {
          const O = (L) => {
            const B = L.target,
              j = { x: L.clientX, y: L.clientY },
              I = b?.contains(B) || w?.contains(B),
              G = !kj(j, f);
            I ? _() : G && (_(), y());
          };
          return (
            document.addEventListener("pointermove", O),
            () => document.removeEventListener("pointermove", O)
          );
        }
      }, [b, w, f, y, _]),
      Oe.jsx(yC, { ...a, ref: p })
    );
  }),
  [wj, Rj] = yd(gC, { isInside: !1 }),
  Tj = CM("TooltipContent"),
  yC = R.forwardRef((a, i) => {
    const {
        __scopeTooltip: s,
        children: u,
        "aria-label": d,
        onEscapeKeyDown: p,
        onPointerDownOutside: f,
        ...E
      } = a,
      b = bd(Ml, s),
      y = Cg(s),
      { onClose: w } = b;
    return (
      R.useEffect(
        () => (document.addEventListener(fS, w), () => document.removeEventListener(fS, w)),
        [w]
      ),
      R.useEffect(() => {
        if (b.trigger) {
          const g = (_) => {
            _.target?.contains(b.trigger) && w();
          };
          return (
            window.addEventListener("scroll", g, { capture: !0 }),
            () => window.removeEventListener("scroll", g, { capture: !0 })
          );
        }
      }, [b.trigger, w]),
      Oe.jsx(vg, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: p,
        onPointerDownOutside: f,
        onFocusOutside: (g) => g.preventDefault(),
        onDismiss: w,
        children: Oe.jsxs(aj, {
          "data-state": b.stateAttribute,
          ...y,
          ...E,
          ref: i,
          style: {
            ...E.style,
            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
          },
          children: [
            Oe.jsx(Tj, { children: u }),
            Oe.jsx(wj, {
              scope: s,
              isInside: !0,
              children: Oe.jsx(hj, { id: b.contentId, role: "tooltip", children: d || u })
            })
          ]
        })
      })
    );
  });
Sj.displayName = Ml;
var bC = "TooltipArrow",
  Nj = R.forwardRef((a, i) => {
    const { __scopeTooltip: s, ...u } = a,
      d = Cg(s);
    return Rj(bC, s).isInside ? null : Oe.jsx(oj, { ...d, ...u, ref: i });
  });
Nj.displayName = bC;
function Dj(a, i) {
  const s = Math.abs(i.top - a.y),
    u = Math.abs(i.bottom - a.y),
    d = Math.abs(i.right - a.x),
    p = Math.abs(i.left - a.x);
  switch (Math.min(s, u, d, p)) {
    case p:
      return "left";
    case d:
      return "right";
    case s:
      return "top";
    case u:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function _j(a, i, s = 5) {
  const u = [];
  switch (i) {
    case "top":
      u.push({ x: a.x - s, y: a.y + s }, { x: a.x + s, y: a.y + s });
      break;
    case "bottom":
      u.push({ x: a.x - s, y: a.y - s }, { x: a.x + s, y: a.y - s });
      break;
    case "left":
      u.push({ x: a.x + s, y: a.y - s }, { x: a.x + s, y: a.y + s });
      break;
    case "right":
      u.push({ x: a.x - s, y: a.y - s }, { x: a.x - s, y: a.y + s });
      break;
  }
  return u;
}
function Oj(a) {
  const { top: i, right: s, bottom: u, left: d } = a;
  return [
    { x: d, y: i },
    { x: s, y: i },
    { x: s, y: u },
    { x: d, y: u }
  ];
}
function kj(a, i) {
  const { x: s, y: u } = a;
  let d = !1;
  for (let p = 0, f = i.length - 1; p < i.length; f = p++) {
    const E = i[p],
      b = i[f],
      y = E.x,
      w = E.y,
      g = b.x,
      _ = b.y;
    w > u != _ > u && s < ((g - y) * (u - w)) / (_ - w) + y && (d = !d);
  }
  return d;
}
function Aj(a) {
  const i = a.slice();
  return (
    i.sort((s, u) => (s.x < u.x ? -1 : s.x > u.x ? 1 : s.y < u.y ? -1 : s.y > u.y ? 1 : 0)), Mj(i)
  );
}
function Mj(a) {
  if (a.length <= 1) return a.slice();
  const i = [];
  for (let u = 0; u < a.length; u++) {
    const d = a[u];
    for (; i.length >= 2; ) {
      const p = i[i.length - 1],
        f = i[i.length - 2];
      if ((p.x - f.x) * (d.y - f.y) >= (p.y - f.y) * (d.x - f.x)) i.pop();
      else break;
    }
    i.push(d);
  }
  i.pop();
  const s = [];
  for (let u = a.length - 1; u >= 0; u--) {
    const d = a[u];
    for (; s.length >= 2; ) {
      const p = s[s.length - 1],
        f = s[s.length - 2];
      if ((p.x - f.x) * (d.y - f.y) >= (p.y - f.y) * (d.x - f.x)) s.pop();
      else break;
    }
    s.push(d);
  }
  return (
    s.pop(),
    i.length === 1 && s.length === 1 && i[0].x === s[0].x && i[0].y === s[0].y ? i : i.concat(s)
  );
}
var Lj = hC;
function xC(a) {
  var i,
    s,
    u = "";
  if (typeof a == "string" || typeof a == "number") u += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var d = a.length;
      for (i = 0; i < d; i++) a[i] && (s = xC(a[i])) && (u && (u += " "), (u += s));
    } else for (s in a) a[s] && (u && (u += " "), (u += s));
  return u;
}
function EC() {
  for (var a, i, s = 0, u = "", d = arguments.length; s < d; s++)
    (a = arguments[s]) && (i = xC(a)) && (u && (u += " "), (u += i));
  return u;
}
const wg = "-",
  jj = (a) => {
    const i = Uj(a),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: u } = a;
    return {
      getClassGroupId: (f) => {
        const E = f.split(wg);
        return E[0] === "" && E.length !== 1 && E.shift(), SC(E, i) || Vj(f);
      },
      getConflictingClassGroupIds: (f, E) => {
        const b = s[f] || [];
        return E && u[f] ? [...b, ...u[f]] : b;
      }
    };
  },
  SC = (a, i) => {
    if (a.length === 0) return i.classGroupId;
    const s = a[0],
      u = i.nextPart.get(s),
      d = u ? SC(a.slice(1), u) : void 0;
    if (d) return d;
    if (i.validators.length === 0) return;
    const p = a.join(wg);
    return i.validators.find(({ validator: f }) => f(p))?.classGroupId;
  },
  dS = /^\[(.+)\]$/,
  Vj = (a) => {
    if (dS.test(a)) {
      const i = dS.exec(a)[1],
        s = i?.substring(0, i.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  },
  Uj = (a) => {
    const { theme: i, classGroups: s } = a,
      u = { nextPart: new Map(), validators: [] };
    for (const d in s) ig(s[d], u, d, i);
    return u;
  },
  ig = (a, i, s, u) => {
    a.forEach((d) => {
      if (typeof d == "string") {
        const p = d === "" ? i : pS(i, d);
        p.classGroupId = s;
        return;
      }
      if (typeof d == "function") {
        if (Fj(d)) {
          ig(d(u), i, s, u);
          return;
        }
        i.validators.push({ validator: d, classGroupId: s });
        return;
      }
      Object.entries(d).forEach(([p, f]) => {
        ig(f, pS(i, p), s, u);
      });
    });
  },
  pS = (a, i) => {
    let s = a;
    return (
      i.split(wg).forEach((u) => {
        s.nextPart.has(u) || s.nextPart.set(u, { nextPart: new Map(), validators: [] }),
          (s = s.nextPart.get(u));
      }),
      s
    );
  },
  Fj = (a) => a.isThemeGetter,
  zj = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let i = 0,
      s = new Map(),
      u = new Map();
    const d = (p, f) => {
      s.set(p, f), i++, i > a && ((i = 0), (u = s), (s = new Map()));
    };
    return {
      get(p) {
        let f = s.get(p);
        if (f !== void 0) return f;
        if ((f = u.get(p)) !== void 0) return d(p, f), f;
      },
      set(p, f) {
        s.has(p) ? s.set(p, f) : d(p, f);
      }
    };
  },
  lg = "!",
  sg = ":",
  Pj = sg.length,
  Hj = (a) => {
    const { prefix: i, experimentalParseClassName: s } = a;
    let u = (d) => {
      const p = [];
      let f = 0,
        E = 0,
        b = 0,
        y;
      for (let O = 0; O < d.length; O++) {
        let L = d[O];
        if (f === 0 && E === 0) {
          if (L === sg) {
            p.push(d.slice(b, O)), (b = O + Pj);
            continue;
          }
          if (L === "/") {
            y = O;
            continue;
          }
        }
        L === "[" ? f++ : L === "]" ? f-- : L === "(" ? E++ : L === ")" && E--;
      }
      const w = p.length === 0 ? d : d.substring(b),
        g = Bj(w),
        _ = g !== w,
        T = y && y > b ? y - b : void 0;
      return {
        modifiers: p,
        hasImportantModifier: _,
        baseClassName: g,
        maybePostfixModifierPosition: T
      };
    };
    if (i) {
      const d = i + sg,
        p = u;
      u = (f) =>
        f.startsWith(d)
          ? p(f.substring(d.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: f,
              maybePostfixModifierPosition: void 0
            };
    }
    if (s) {
      const d = u;
      u = (p) => s({ className: p, parseClassName: d });
    }
    return u;
  },
  Bj = (a) =>
    a.endsWith(lg) ? a.substring(0, a.length - 1) : a.startsWith(lg) ? a.substring(1) : a,
  Ij = (a) => {
    const i = Object.fromEntries(a.orderSensitiveModifiers.map((u) => [u, !0]));
    return (u) => {
      if (u.length <= 1) return u;
      const d = [];
      let p = [];
      return (
        u.forEach((f) => {
          f[0] === "[" || i[f] ? (d.push(...p.sort(), f), (p = [])) : p.push(f);
        }),
        d.push(...p.sort()),
        d
      );
    };
  },
  $j = (a) => ({ cache: zj(a.cacheSize), parseClassName: Hj(a), sortModifiers: Ij(a), ...jj(a) }),
  Yj = /\s+/,
  Wj = (a, i) => {
    const {
        parseClassName: s,
        getClassGroupId: u,
        getConflictingClassGroupIds: d,
        sortModifiers: p
      } = i,
      f = [],
      E = a.trim().split(Yj);
    let b = "";
    for (let y = E.length - 1; y >= 0; y -= 1) {
      const w = E[y],
        {
          isExternal: g,
          modifiers: _,
          hasImportantModifier: T,
          baseClassName: O,
          maybePostfixModifierPosition: L
        } = s(w);
      if (g) {
        b = w + (b.length > 0 ? " " + b : b);
        continue;
      }
      let B = !!L,
        j = u(B ? O.substring(0, L) : O);
      if (!j) {
        if (!B) {
          b = w + (b.length > 0 ? " " + b : b);
          continue;
        }
        if (((j = u(O)), !j)) {
          b = w + (b.length > 0 ? " " + b : b);
          continue;
        }
        B = !1;
      }
      const I = p(_).join(":"),
        G = T ? I + lg : I,
        J = G + j;
      if (f.includes(J)) continue;
      f.push(J);
      const q = d(j, B);
      for (let oe = 0; oe < q.length; ++oe) {
        const X = q[oe];
        f.push(G + X);
      }
      b = w + (b.length > 0 ? " " + b : b);
    }
    return b;
  };
function Gj() {
  let a = 0,
    i,
    s,
    u = "";
  for (; a < arguments.length; ) (i = arguments[a++]) && (s = CC(i)) && (u && (u += " "), (u += s));
  return u;
}
const CC = (a) => {
  if (typeof a == "string") return a;
  let i,
    s = "";
  for (let u = 0; u < a.length; u++) a[u] && (i = CC(a[u])) && (s && (s += " "), (s += i));
  return s;
};
function qj(a, ...i) {
  let s,
    u,
    d,
    p = f;
  function f(b) {
    const y = i.reduce((w, g) => g(w), a());
    return (s = $j(y)), (u = s.cache.get), (d = s.cache.set), (p = E), E(b);
  }
  function E(b) {
    const y = u(b);
    if (y) return y;
    const w = Wj(b, s);
    return d(b, w), w;
  }
  return function () {
    return p(Gj.apply(null, arguments));
  };
}
const On = (a) => {
    const i = (s) => s[a] || [];
    return (i.isThemeGetter = !0), i;
  },
  wC = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  RC = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Kj = /^\d+\/\d+$/,
  Xj = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Qj =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Jj = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Zj = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  eV =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  wl = (a) => Kj.test(a),
  it = (a) => !!a && !Number.isNaN(Number(a)),
  Ao = (a) => !!a && Number.isInteger(Number(a)),
  Bh = (a) => a.endsWith("%") && it(a.slice(0, -1)),
  eo = (a) => Xj.test(a),
  tV = () => !0,
  nV = (a) => Qj.test(a) && !Jj.test(a),
  TC = () => !1,
  rV = (a) => Zj.test(a),
  aV = (a) => eV.test(a),
  oV = (a) => !Ce(a) && !we(a),
  iV = (a) => Vl(a, _C, TC),
  Ce = (a) => wC.test(a),
  yi = (a) => Vl(a, OC, nV),
  Ih = (a) => Vl(a, fV, it),
  mS = (a) => Vl(a, NC, TC),
  lV = (a) => Vl(a, DC, aV),
  ed = (a) => Vl(a, kC, rV),
  we = (a) => RC.test(a),
  ku = (a) => Ul(a, OC),
  sV = (a) => Ul(a, dV),
  vS = (a) => Ul(a, NC),
  uV = (a) => Ul(a, _C),
  cV = (a) => Ul(a, DC),
  td = (a) => Ul(a, kC, !0),
  Vl = (a, i, s) => {
    const u = wC.exec(a);
    return u ? (u[1] ? i(u[1]) : s(u[2])) : !1;
  },
  Ul = (a, i, s = !1) => {
    const u = RC.exec(a);
    return u ? (u[1] ? i(u[1]) : s) : !1;
  },
  NC = (a) => a === "position" || a === "percentage",
  DC = (a) => a === "image" || a === "url",
  _C = (a) => a === "length" || a === "size" || a === "bg-size",
  OC = (a) => a === "length",
  fV = (a) => a === "number",
  dV = (a) => a === "family-name",
  kC = (a) => a === "shadow",
  pV = () => {
    const a = On("color"),
      i = On("font"),
      s = On("text"),
      u = On("font-weight"),
      d = On("tracking"),
      p = On("leading"),
      f = On("breakpoint"),
      E = On("container"),
      b = On("spacing"),
      y = On("radius"),
      w = On("shadow"),
      g = On("inset-shadow"),
      _ = On("text-shadow"),
      T = On("drop-shadow"),
      O = On("blur"),
      L = On("perspective"),
      B = On("aspect"),
      j = On("ease"),
      I = On("animate"),
      G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      J = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom"
      ],
      q = () => [...J(), we, Ce],
      oe = () => ["auto", "hidden", "clip", "visible", "scroll"],
      X = () => ["auto", "contain", "none"],
      ne = () => [we, Ce, b],
      Ne = () => [wl, "full", "auto", ...ne()],
      He = () => [Ao, "none", "subgrid", we, Ce],
      Xe = () => ["auto", { span: ["full", Ao, we, Ce] }, Ao, we, Ce],
      Le = () => [Ao, "auto", we, Ce],
      le = () => ["auto", "min", "max", "fr", we, Ce],
      _e = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe"
      ],
      ke = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      pe = () => ["auto", ...ne()],
      ie = () => [
        wl,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...ne()
      ],
      Q = () => [a, we, Ce],
      Je = () => [...J(), vS, mS, { position: [we, Ce] }],
      Ze = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      Mt = () => ["auto", "cover", "contain", uV, iV, { size: [we, Ce] }],
      Et = () => [Bh, ku, yi],
      xe = () => ["", "none", "full", y, we, Ce],
      Me = () => ["", it, ku, yi],
      tt = () => ["solid", "dashed", "dotted", "double"],
      St = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity"
      ],
      Ue = () => [it, Bh, vS, mS],
      $e = () => ["", "none", O, we, Ce],
      dt = () => ["none", it, we, Ce],
      mt = () => ["none", it, we, Ce],
      Nt = () => [it, we, Ce],
      wt = () => [wl, "full", ...ne()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [eo],
        breakpoint: [eo],
        color: [tV],
        container: [eo],
        "drop-shadow": [eo],
        ease: ["in", "out", "in-out"],
        font: [oV],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black"
        ],
        "inset-shadow": [eo],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [eo],
        shadow: [eo],
        spacing: ["px", it],
        text: [eo],
        "text-shadow": [eo],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", wl, Ce, we, B] }],
        container: ["container"],
        columns: [{ columns: [it, Ce, we, E] }],
        "break-after": [{ "break-after": G() }],
        "break-before": [{ "break-before": G() }],
        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
        "object-position": [{ object: q() }],
        overflow: [{ overflow: oe() }],
        "overflow-x": [{ "overflow-x": oe() }],
        "overflow-y": [{ "overflow-y": oe() }],
        overscroll: [{ overscroll: X() }],
        "overscroll-x": [{ "overscroll-x": X() }],
        "overscroll-y": [{ "overscroll-y": X() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: Ne() }],
        "inset-x": [{ "inset-x": Ne() }],
        "inset-y": [{ "inset-y": Ne() }],
        start: [{ start: Ne() }],
        end: [{ end: Ne() }],
        top: [{ top: Ne() }],
        right: [{ right: Ne() }],
        bottom: [{ bottom: Ne() }],
        left: [{ left: Ne() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Ao, "auto", we, Ce] }],
        basis: [{ basis: [wl, "full", "auto", E, ...ne()] }],
        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [it, wl, "auto", "initial", "none", Ce] }],
        grow: [{ grow: ["", it, we, Ce] }],
        shrink: [{ shrink: ["", it, we, Ce] }],
        order: [{ order: [Ao, "first", "last", "none", we, Ce] }],
        "grid-cols": [{ "grid-cols": He() }],
        "col-start-end": [{ col: Xe() }],
        "col-start": [{ "col-start": Le() }],
        "col-end": [{ "col-end": Le() }],
        "grid-rows": [{ "grid-rows": He() }],
        "row-start-end": [{ row: Xe() }],
        "row-start": [{ "row-start": Le() }],
        "row-end": [{ "row-end": Le() }],
        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
        "auto-cols": [{ "auto-cols": le() }],
        "auto-rows": [{ "auto-rows": le() }],
        gap: [{ gap: ne() }],
        "gap-x": [{ "gap-x": ne() }],
        "gap-y": [{ "gap-y": ne() }],
        "justify-content": [{ justify: [..._e(), "normal"] }],
        "justify-items": [{ "justify-items": [...ke(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ke()] }],
        "align-content": [{ content: ["normal", ..._e()] }],
        "align-items": [{ items: [...ke(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ke(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": _e() }],
        "place-items": [{ "place-items": [...ke(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ke()] }],
        p: [{ p: ne() }],
        px: [{ px: ne() }],
        py: [{ py: ne() }],
        ps: [{ ps: ne() }],
        pe: [{ pe: ne() }],
        pt: [{ pt: ne() }],
        pr: [{ pr: ne() }],
        pb: [{ pb: ne() }],
        pl: [{ pl: ne() }],
        m: [{ m: pe() }],
        mx: [{ mx: pe() }],
        my: [{ my: pe() }],
        ms: [{ ms: pe() }],
        me: [{ me: pe() }],
        mt: [{ mt: pe() }],
        mr: [{ mr: pe() }],
        mb: [{ mb: pe() }],
        ml: [{ ml: pe() }],
        "space-x": [{ "space-x": ne() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": ne() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: ie() }],
        w: [{ w: [E, "screen", ...ie()] }],
        "min-w": [{ "min-w": [E, "screen", "none", ...ie()] }],
        "max-w": [{ "max-w": [E, "screen", "none", "prose", { screen: [f] }, ...ie()] }],
        h: [{ h: ["screen", "lh", ...ie()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...ie()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...ie()] }],
        "font-size": [{ text: ["base", s, ku, yi] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [u, we, Ih] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Bh,
              Ce
            ]
          }
        ],
        "font-family": [{ font: [sV, Ce, i] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [d, we, Ce] }],
        "line-clamp": [{ "line-clamp": [it, "none", we, Ih] }],
        leading: [{ leading: [p, ...ne()] }],
        "list-image": [{ "list-image": ["none", we, Ce] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", we, Ce] }],
        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
        "placeholder-color": [{ placeholder: Q() }],
        "text-color": [{ text: Q() }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{ decoration: [...tt(), "wavy"] }],
        "text-decoration-thickness": [{ decoration: [it, "from-font", "auto", we, yi] }],
        "text-decoration-color": [{ decoration: Q() }],
        "underline-offset": [{ "underline-offset": [it, "auto", we, Ce] }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: ne() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              we,
              Ce
            ]
          }
        ],
        whitespace: [
          { whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", we, Ce] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: Je() }],
        "bg-repeat": [{ bg: Ze() }],
        "bg-size": [{ bg: Mt() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Ao, we, Ce],
                radial: ["", we, Ce],
                conic: [Ao, we, Ce]
              },
              cV,
              lV
            ]
          }
        ],
        "bg-color": [{ bg: Q() }],
        "gradient-from-pos": [{ from: Et() }],
        "gradient-via-pos": [{ via: Et() }],
        "gradient-to-pos": [{ to: Et() }],
        "gradient-from": [{ from: Q() }],
        "gradient-via": [{ via: Q() }],
        "gradient-to": [{ to: Q() }],
        rounded: [{ rounded: xe() }],
        "rounded-s": [{ "rounded-s": xe() }],
        "rounded-e": [{ "rounded-e": xe() }],
        "rounded-t": [{ "rounded-t": xe() }],
        "rounded-r": [{ "rounded-r": xe() }],
        "rounded-b": [{ "rounded-b": xe() }],
        "rounded-l": [{ "rounded-l": xe() }],
        "rounded-ss": [{ "rounded-ss": xe() }],
        "rounded-se": [{ "rounded-se": xe() }],
        "rounded-ee": [{ "rounded-ee": xe() }],
        "rounded-es": [{ "rounded-es": xe() }],
        "rounded-tl": [{ "rounded-tl": xe() }],
        "rounded-tr": [{ "rounded-tr": xe() }],
        "rounded-br": [{ "rounded-br": xe() }],
        "rounded-bl": [{ "rounded-bl": xe() }],
        "border-w": [{ border: Me() }],
        "border-w-x": [{ "border-x": Me() }],
        "border-w-y": [{ "border-y": Me() }],
        "border-w-s": [{ "border-s": Me() }],
        "border-w-e": [{ "border-e": Me() }],
        "border-w-t": [{ "border-t": Me() }],
        "border-w-r": [{ "border-r": Me() }],
        "border-w-b": [{ "border-b": Me() }],
        "border-w-l": [{ "border-l": Me() }],
        "divide-x": [{ "divide-x": Me() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": Me() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...tt(), "hidden", "none"] }],
        "divide-style": [{ divide: [...tt(), "hidden", "none"] }],
        "border-color": [{ border: Q() }],
        "border-color-x": [{ "border-x": Q() }],
        "border-color-y": [{ "border-y": Q() }],
        "border-color-s": [{ "border-s": Q() }],
        "border-color-e": [{ "border-e": Q() }],
        "border-color-t": [{ "border-t": Q() }],
        "border-color-r": [{ "border-r": Q() }],
        "border-color-b": [{ "border-b": Q() }],
        "border-color-l": [{ "border-l": Q() }],
        "divide-color": [{ divide: Q() }],
        "outline-style": [{ outline: [...tt(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [it, we, Ce] }],
        "outline-w": [{ outline: ["", it, ku, yi] }],
        "outline-color": [{ outline: Q() }],
        shadow: [{ shadow: ["", "none", w, td, ed] }],
        "shadow-color": [{ shadow: Q() }],
        "inset-shadow": [{ "inset-shadow": ["none", g, td, ed] }],
        "inset-shadow-color": [{ "inset-shadow": Q() }],
        "ring-w": [{ ring: Me() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: Q() }],
        "ring-offset-w": [{ "ring-offset": [it, yi] }],
        "ring-offset-color": [{ "ring-offset": Q() }],
        "inset-ring-w": [{ "inset-ring": Me() }],
        "inset-ring-color": [{ "inset-ring": Q() }],
        "text-shadow": [{ "text-shadow": ["none", _, td, ed] }],
        "text-shadow-color": [{ "text-shadow": Q() }],
        opacity: [{ opacity: [it, we, Ce] }],
        "mix-blend": [{ "mix-blend": [...St(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": St() }],
        "mask-clip": [
          { "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] },
          "mask-no-clip"
        ],
        "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }],
        "mask-image-linear-pos": [{ "mask-linear": [it] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": Ue() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": Ue() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": Q() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": Q() }],
        "mask-image-t-from-pos": [{ "mask-t-from": Ue() }],
        "mask-image-t-to-pos": [{ "mask-t-to": Ue() }],
        "mask-image-t-from-color": [{ "mask-t-from": Q() }],
        "mask-image-t-to-color": [{ "mask-t-to": Q() }],
        "mask-image-r-from-pos": [{ "mask-r-from": Ue() }],
        "mask-image-r-to-pos": [{ "mask-r-to": Ue() }],
        "mask-image-r-from-color": [{ "mask-r-from": Q() }],
        "mask-image-r-to-color": [{ "mask-r-to": Q() }],
        "mask-image-b-from-pos": [{ "mask-b-from": Ue() }],
        "mask-image-b-to-pos": [{ "mask-b-to": Ue() }],
        "mask-image-b-from-color": [{ "mask-b-from": Q() }],
        "mask-image-b-to-color": [{ "mask-b-to": Q() }],
        "mask-image-l-from-pos": [{ "mask-l-from": Ue() }],
        "mask-image-l-to-pos": [{ "mask-l-to": Ue() }],
        "mask-image-l-from-color": [{ "mask-l-from": Q() }],
        "mask-image-l-to-color": [{ "mask-l-to": Q() }],
        "mask-image-x-from-pos": [{ "mask-x-from": Ue() }],
        "mask-image-x-to-pos": [{ "mask-x-to": Ue() }],
        "mask-image-x-from-color": [{ "mask-x-from": Q() }],
        "mask-image-x-to-color": [{ "mask-x-to": Q() }],
        "mask-image-y-from-pos": [{ "mask-y-from": Ue() }],
        "mask-image-y-to-pos": [{ "mask-y-to": Ue() }],
        "mask-image-y-from-color": [{ "mask-y-from": Q() }],
        "mask-image-y-to-color": [{ "mask-y-to": Q() }],
        "mask-image-radial": [{ "mask-radial": [we, Ce] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": Ue() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": Ue() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": Q() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": Q() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          { "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": J() }],
        "mask-image-conic-pos": [{ "mask-conic": [it] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": Ue() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": Ue() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": Q() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": Q() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          { "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }
        ],
        "mask-position": [{ mask: Je() }],
        "mask-repeat": [{ mask: Ze() }],
        "mask-size": [{ mask: Mt() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", we, Ce] }],
        filter: [{ filter: ["", "none", we, Ce] }],
        blur: [{ blur: $e() }],
        brightness: [{ brightness: [it, we, Ce] }],
        contrast: [{ contrast: [it, we, Ce] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", T, td, ed] }],
        "drop-shadow-color": [{ "drop-shadow": Q() }],
        grayscale: [{ grayscale: ["", it, we, Ce] }],
        "hue-rotate": [{ "hue-rotate": [it, we, Ce] }],
        invert: [{ invert: ["", it, we, Ce] }],
        saturate: [{ saturate: [it, we, Ce] }],
        sepia: [{ sepia: ["", it, we, Ce] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", we, Ce] }],
        "backdrop-blur": [{ "backdrop-blur": $e() }],
        "backdrop-brightness": [{ "backdrop-brightness": [it, we, Ce] }],
        "backdrop-contrast": [{ "backdrop-contrast": [it, we, Ce] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", it, we, Ce] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [it, we, Ce] }],
        "backdrop-invert": [{ "backdrop-invert": ["", it, we, Ce] }],
        "backdrop-opacity": [{ "backdrop-opacity": [it, we, Ce] }],
        "backdrop-saturate": [{ "backdrop-saturate": [it, we, Ce] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", it, we, Ce] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": ne() }],
        "border-spacing-x": [{ "border-spacing-x": ne() }],
        "border-spacing-y": [{ "border-spacing-y": ne() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          { transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", we, Ce] }
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [it, "initial", we, Ce] }],
        ease: [{ ease: ["linear", "initial", j, we, Ce] }],
        delay: [{ delay: [it, we, Ce] }],
        animate: [{ animate: ["none", I, we, Ce] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [L, we, Ce] }],
        "perspective-origin": [{ "perspective-origin": q() }],
        rotate: [{ rotate: dt() }],
        "rotate-x": [{ "rotate-x": dt() }],
        "rotate-y": [{ "rotate-y": dt() }],
        "rotate-z": [{ "rotate-z": dt() }],
        scale: [{ scale: mt() }],
        "scale-x": [{ "scale-x": mt() }],
        "scale-y": [{ "scale-y": mt() }],
        "scale-z": [{ "scale-z": mt() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Nt() }],
        "skew-x": [{ "skew-x": Nt() }],
        "skew-y": [{ "skew-y": Nt() }],
        transform: [{ transform: [we, Ce, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: q() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: wt() }],
        "translate-x": [{ "translate-x": wt() }],
        "translate-y": [{ "translate-y": wt() }],
        "translate-z": [{ "translate-z": wt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: Q() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: Q() }],
        "color-scheme": [
          { scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              we,
              Ce
            ]
          }
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": ne() }],
        "scroll-mx": [{ "scroll-mx": ne() }],
        "scroll-my": [{ "scroll-my": ne() }],
        "scroll-ms": [{ "scroll-ms": ne() }],
        "scroll-me": [{ "scroll-me": ne() }],
        "scroll-mt": [{ "scroll-mt": ne() }],
        "scroll-mr": [{ "scroll-mr": ne() }],
        "scroll-mb": [{ "scroll-mb": ne() }],
        "scroll-ml": [{ "scroll-ml": ne() }],
        "scroll-p": [{ "scroll-p": ne() }],
        "scroll-px": [{ "scroll-px": ne() }],
        "scroll-py": [{ "scroll-py": ne() }],
        "scroll-ps": [{ "scroll-ps": ne() }],
        "scroll-pe": [{ "scroll-pe": ne() }],
        "scroll-pt": [{ "scroll-pt": ne() }],
        "scroll-pr": [{ "scroll-pr": ne() }],
        "scroll-pb": [{ "scroll-pb": ne() }],
        "scroll-pl": [{ "scroll-pl": ne() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", we, Ce] }],
        fill: [{ fill: ["none", ...Q()] }],
        "stroke-w": [{ stroke: [it, ku, yi, Ih] }],
        stroke: [{ stroke: ["none", ...Q()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection"
      ]
    };
  },
  mV = qj(pV);
function Ei(...a) {
  return mV(EC(a));
}
function vV({ delayDuration: a = 0, ...i }) {
  return M.jsxDEV(
    Lj,
    {
      "data-loc": "client/src/components/ui/tooltip.tsx:11",
      "data-slot": "tooltip-provider",
      delayDuration: a,
      ...i
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/tooltip.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}
const hS = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  gS = EC,
  hV = (a, i) => (s) => {
    var u;
    if (i?.variants == null) return gS(a, s?.class, s?.className);
    const { variants: d, defaultVariants: p } = i,
      f = Object.keys(d).map((y) => {
        const w = s?.[y],
          g = p?.[y];
        if (w === null) return null;
        const _ = hS(w) || hS(g);
        return d[y][_];
      }),
      E =
        s &&
        Object.entries(s).reduce((y, w) => {
          let [g, _] = w;
          return _ === void 0 || (y[g] = _), y;
        }, {}),
      b =
        i == null || (u = i.compoundVariants) === null || u === void 0
          ? void 0
          : u.reduce((y, w) => {
              let { class: g, className: _, ...T } = w;
              return Object.entries(T).every((O) => {
                let [L, B] = O;
                return Array.isArray(B) ? B.includes({ ...p, ...E }[L]) : { ...p, ...E }[L] === B;
              })
                ? [...y, g, _]
                : y;
            }, []);
    return gS(a, f, b, s?.class, s?.className);
  },
  gV = hV(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
            "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
          secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent dark:hover:bg-accent/50",
          link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
          "icon-sm": "size-8",
          "icon-lg": "size-10"
        }
      },
      defaultVariants: { variant: "default", size: "default" }
    }
  );
function yV({ className: a, variant: i, size: s, asChild: u = !1, ...d }) {
  const p = u ? EM : "button";
  return M.jsxDEV(
    p,
    {
      "data-loc": "client/src/components/ui/button.tsx:52",
      "data-slot": "button",
      className: Ei(gV({ variant: i, size: s, className: a })),
      ...d
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/button.tsx",
      lineNumber: 52,
      columnNumber: 5
    },
    this
  );
}
function bV({ className: a, ...i }) {
  return M.jsxDEV(
    "div",
    {
      "data-loc": "client/src/components/ui/card.tsx:7",
      "data-slot": "card",
      className: Ei(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        a
      ),
      ...i
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/card.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}
function xV({ className: a, ...i }) {
  return M.jsxDEV(
    "div",
    {
      "data-loc": "client/src/components/ui/card.tsx:66",
      "data-slot": "card-content",
      className: Ei("px-6", a),
      ...i
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/card.tsx",
      lineNumber: 66,
      columnNumber: 5
    },
    this
  );
}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const EV = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  AC = (...a) => a.filter((i, s, u) => !!i && u.indexOf(i) === s).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var SV = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const CV = R.forwardRef(
  (
    {
      color: a = "currentColor",
      size: i = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: u,
      className: d = "",
      children: p,
      iconNode: f,
      ...E
    },
    b
  ) =>
    R.createElement(
      "svg",
      {
        ref: b,
        ...SV,
        width: i,
        height: i,
        stroke: a,
        strokeWidth: u ? (Number(s) * 24) / Number(i) : s,
        className: AC("lucide", d),
        ...E
      },
      [...f.map(([y, w]) => R.createElement(y, w)), ...(Array.isArray(p) ? p : [p])]
    )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fl = (a, i) => {
  const s = R.forwardRef(({ className: u, ...d }, p) =>
    R.createElement(CV, { ref: p, iconNode: i, className: AC(`lucide-${EV(a)}`, u), ...d })
  );
  return (s.displayName = `${a}`), s;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wV = Fl("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RV = Fl("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TV = Fl("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NV = Fl("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DV = Fl("TriangleAlert", [
  [
    "path",
    { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const MC = Fl("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function _V(a, i) {
  if (a instanceof RegExp) return { keys: !1, pattern: a };
  var s,
    u,
    d,
    p,
    f = [],
    E = "",
    b = a.split("/");
  for (b[0] || b.shift(); (d = b.shift()); )
    (s = d[0]),
      s === "*"
        ? (f.push(s), (E += d[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : s === ":"
          ? ((u = d.indexOf("?", 1)),
            (p = d.indexOf(".", 1)),
            f.push(d.substring(1, ~u ? u : ~p ? p : d.length)),
            (E += ~u && !~p ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~p && (E += (~u ? "?" : "") + "\\" + d.substring(p)))
          : (E += "/" + d);
  return { keys: f, pattern: new RegExp("^" + E + (i ? "(?=$|/)" : "/?$"), "i") };
}
var $h = { exports: {} },
  Yh = {},
  yS;
function OV() {
  if (yS) return Yh;
  yS = 1;
  /**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ return (
    (function () {
      function a(T, O) {
        return (T === O && (T !== 0 || 1 / T === 1 / O)) || (T !== T && O !== O);
      }
      function i(T, O) {
        w ||
          d.startTransition === void 0 ||
          ((w = !0),
          console.error(
            "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
          ));
        var L = O();
        if (!g) {
          var B = O();
          p(L, B) ||
            (console.error("The result of getSnapshot should be cached to avoid an infinite loop"),
            (g = !0));
        }
        B = f({ inst: { value: L, getSnapshot: O } });
        var j = B[0].inst,
          I = B[1];
        return (
          b(
            function () {
              (j.value = L), (j.getSnapshot = O), s(j) && I({ inst: j });
            },
            [T, L, O]
          ),
          E(
            function () {
              return (
                s(j) && I({ inst: j }),
                T(function () {
                  s(j) && I({ inst: j });
                })
              );
            },
            [T]
          ),
          y(L),
          L
        );
      }
      function s(T) {
        var O = T.getSnapshot;
        T = T.value;
        try {
          var L = O();
          return !p(T, L);
        } catch {
          return !0;
        }
      }
      function u(T, O) {
        return O();
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var d = ju(),
        p = typeof Object.is == "function" ? Object.is : a,
        f = d.useState,
        E = d.useEffect,
        b = d.useLayoutEffect,
        y = d.useDebugValue,
        w = !1,
        g = !1,
        _ =
          typeof window > "u" ||
          typeof window.document > "u" ||
          typeof window.document.createElement > "u"
            ? u
            : i;
      (Yh.useSyncExternalStore = d.useSyncExternalStore !== void 0 ? d.useSyncExternalStore : _),
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })(),
    Yh
  );
}
var bS;
function kV() {
  return bS || ((bS = 1), ($h.exports = OV())), $h.exports;
}
var AV = kV();
const MV = fg.useInsertionEffect,
  LV =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  jV = LV ? R.useLayoutEffect : R.useEffect,
  VV = MV || jV,
  LC = (a) => {
    const i = R.useRef([a, (...s) => i[0](...s)]).current;
    return (
      VV(() => {
        i[0] = a;
      }),
      i[1]
    );
  },
  UV = "popstate",
  Rg = "pushState",
  Tg = "replaceState",
  FV = "hashchange",
  xS = [UV, Rg, Tg, FV],
  zV = (a) => {
    for (const i of xS) addEventListener(i, a);
    return () => {
      for (const i of xS) removeEventListener(i, a);
    };
  },
  jC = (a, i) => AV.useSyncExternalStore(zV, a, i),
  PV = () => location.search,
  HV = ({ ssrSearch: a = "" } = {}) => jC(PV, () => a),
  ES = () => location.pathname,
  BV = ({ ssrPath: a } = {}) => jC(ES, a ? () => a : ES),
  IV = (a, { replace: i = !1, state: s = null } = {}) => history[i ? Tg : Rg](s, "", a),
  $V = (a = {}) => [BV(a), IV],
  SS = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[SS] > "u") {
  for (const a of [Rg, Tg]) {
    const i = history[a];
    history[a] = function () {
      const s = i.apply(this, arguments),
        u = new Event(a);
      return (u.arguments = arguments), dispatchEvent(u), s;
    };
  }
  Object.defineProperty(window, SS, { value: !0 });
}
const YV = (a, i) =>
    i.toLowerCase().indexOf(a.toLowerCase()) ? "~" + i : i.slice(a.length) || "/",
  VC = (a = "") => (a === "/" ? "" : a),
  WV = (a, i) => (a[0] === "~" ? a.slice(1) : VC(i) + a),
  GV = (a = "", i) => YV(CS(VC(a)), CS(i)),
  CS = (a) => {
    try {
      return decodeURI(a);
    } catch {
      return a;
    }
  },
  UC = {
    hook: $V,
    searchHook: HV,
    parser: _V,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (a) => a
  },
  FC = R.createContext(UC),
  Fu = () => R.useContext(FC),
  zC = {},
  PC = R.createContext(zC),
  qV = () => R.useContext(PC),
  xd = (a) => {
    const [i, s] = a.hook(a);
    return [GV(a.base, i), LC((u, d) => s(WV(u, a.base), d))];
  },
  HC = () => xd(Fu()),
  BC = (a, i, s, u) => {
    const { pattern: d, keys: p } = i instanceof RegExp ? { keys: !1, pattern: i } : a(i || "*", u),
      f = d.exec(s) || [],
      [E, ...b] = f;
    return E !== void 0
      ? [
          !0,
          (() => {
            const y = p !== !1 ? Object.fromEntries(p.map((g, _) => [g, b[_]])) : f.groups;
            let w = { ...b };
            return y && Object.assign(w, y), w;
          })(),
          ...(u ? [E] : [])
        ]
      : [!1, null];
  },
  KV = ({ children: a, ...i }) => {
    const s = Fu(),
      u = i.hook ? UC : s;
    let d = u;
    const [p, f] = i.ssrPath?.split("?") ?? [];
    f && ((i.ssrSearch = f), (i.ssrPath = p)), (i.hrefs = i.hrefs ?? i.hook?.hrefs);
    let E = R.useRef({}),
      b = E.current,
      y = b;
    for (let w in u) {
      const g = w === "base" ? u[w] + (i[w] || "") : i[w] || u[w];
      b === y && g !== y[w] && (E.current = y = { ...y }),
        (y[w] = g),
        (g !== u[w] || g !== d[w]) && (d = y);
    }
    return R.createElement(FC.Provider, { value: d, children: a });
  },
  wS = ({ children: a, component: i }, s) =>
    i ? R.createElement(i, { params: s }) : typeof a == "function" ? a(s) : a,
  XV = (a) => {
    let i = R.useRef(zC);
    const s = i.current;
    return (i.current =
      Object.keys(a).length !== Object.keys(s).length ||
      Object.entries(a).some(([u, d]) => d !== s[u])
        ? a
        : s);
  },
  Rl = ({ path: a, nest: i, match: s, ...u }) => {
    const d = Fu(),
      [p] = xd(d),
      [f, E, b] = s ?? BC(d.parser, a, p, i),
      y = XV({ ...qV(), ...E });
    if (!f) return null;
    const w = b ? R.createElement(KV, { base: b }, wS(u, y)) : wS(u, y);
    return R.createElement(PC.Provider, { value: y, children: w });
  },
  Wh = R.forwardRef((a, i) => {
    const s = Fu(),
      [u, d] = xd(s),
      {
        to: p = "",
        href: f = p,
        onClick: E,
        asChild: b,
        children: y,
        className: w,
        replace: g,
        state: _,
        ...T
      } = a,
      O = LC((B) => {
        B.ctrlKey ||
          B.metaKey ||
          B.altKey ||
          B.shiftKey ||
          B.button !== 0 ||
          (E?.(B), B.defaultPrevented || (B.preventDefault(), d(f, a)));
      }),
      L = s.hrefs(f[0] === "~" ? f.slice(1) : s.base + f, s);
    return b && R.isValidElement(y)
      ? R.cloneElement(y, { onClick: O, href: L })
      : R.createElement("a", {
          ...T,
          onClick: O,
          href: L,
          className: w?.call ? w(u === f) : w,
          children: y,
          ref: i
        });
  }),
  ug = (a) =>
    Array.isArray(a)
      ? a.flatMap((i) => ug(i && i.type === R.Fragment ? i.props.children : i))
      : [a],
  QV = ({ children: a, location: i }) => {
    const s = Fu(),
      [u] = xd(s);
    typeof window < "u" &&
      (window.__WOUTER_ROUTES__ || (window.__WOUTER_ROUTES__ = []),
      ug(a).forEach((p) => {
        if (R.isValidElement(p) && p.props.path) {
          const f = p.props.path;
          window.__WOUTER_ROUTES__.includes(f) || window.__WOUTER_ROUTES__.push(f);
        }
      }));
    for (const d of ug(a)) {
      let p = 0;
      if (R.isValidElement(d) && (p = BC(s.parser, d.props.path, i || u, d.props.nest))[0])
        return R.cloneElement(d, { match: p });
    }
    return null;
  };
function RS() {
  const [, a] = HC(),
    i = () => {
      a("/");
    };
  return M.jsxDEV(
    "div",
    {
      "data-loc": "client/src/pages/NotFound.tsx:14",
      className:
        "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",
      children: M.jsxDEV(
        bV,
        {
          "data-loc": "client/src/pages/NotFound.tsx:15",
          className: "w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",
          children: M.jsxDEV(
            xV,
            {
              "data-loc": "client/src/pages/NotFound.tsx:16",
              className: "pt-8 pb-8 text-center",
              children: [
                M.jsxDEV(
                  "div",
                  {
                    "data-loc": "client/src/pages/NotFound.tsx:17",
                    className: "flex justify-center mb-6",
                    children: M.jsxDEV(
                      "div",
                      {
                        "data-loc": "client/src/pages/NotFound.tsx:18",
                        className: "relative",
                        children: [
                          M.jsxDEV(
                            "div",
                            {
                              "data-loc": "client/src/pages/NotFound.tsx:19",
                              className: "absolute inset-0 bg-red-100 rounded-full animate-pulse"
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
                              lineNumber: 19,
                              columnNumber: 15
                            },
                            this
                          ),
                          M.jsxDEV(
                            wV,
                            {
                              "data-loc": "client/src/pages/NotFound.tsx:20",
                              className: "relative h-16 w-16 text-red-500"
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
                              lineNumber: 20,
                              columnNumber: 15
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
                        lineNumber: 18,
                        columnNumber: 13
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                  },
                  this
                ),
                M.jsxDEV(
                  "h1",
                  {
                    "data-loc": "client/src/pages/NotFound.tsx:24",
                    className: "text-4xl font-bold text-slate-900 mb-2",
                    children: "404"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                  },
                  this
                ),
                M.jsxDEV(
                  "h2",
                  {
                    "data-loc": "client/src/pages/NotFound.tsx:26",
                    className: "text-xl font-semibold text-slate-700 mb-4",
                    children: "Page Not Found"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                  },
                  this
                ),
                M.jsxDEV(
                  "p",
                  {
                    "data-loc": "client/src/pages/NotFound.tsx:30",
                    className: "text-slate-600 mb-8 leading-relaxed",
                    children: [
                      "Sorry, the page you are looking for doesn't exist.",
                      M.jsxDEV(
                        "br",
                        { "data-loc": "client/src/pages/NotFound.tsx:32" },
                        void 0,
                        !1,
                        {
                          fileName: "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
                          lineNumber: 32,
                          columnNumber: 13
                        },
                        this
                      ),
                      "It may have been moved or deleted."
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                  },
                  this
                ),
                M.jsxDEV(
                  "div",
                  {
                    "data-loc": "client/src/pages/NotFound.tsx:36",
                    className: "flex flex-col sm:flex-row gap-3 justify-center",
                    children: M.jsxDEV(
                      yV,
                      {
                        "data-loc": "client/src/pages/NotFound.tsx:37",
                        onClick: i,
                        className:
                          "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",
                        children: [
                          M.jsxDEV(
                            RV,
                            {
                              "data-loc": "client/src/pages/NotFound.tsx:41",
                              className: "w-4 h-4 mr-2"
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
                              lineNumber: 41,
                              columnNumber: 15
                            },
                            this
                          ),
                          "Go Home"
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
                        lineNumber: 37,
                        columnNumber: 13
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
              lineNumber: 16,
              columnNumber: 9
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
          lineNumber: 15,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/pages/NotFound.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}
class JV extends R.Component {
  constructor(i) {
    super(i), (this.state = { hasError: !1, error: null });
  }
  static getDerivedStateFromError(i) {
    return { hasError: !0, error: i };
  }
  render() {
    return this.state.hasError
      ? M.jsxDEV(
          "div",
          {
            "data-loc": "client/src/components/ErrorBoundary.tsx:27",
            className: "flex items-center justify-center min-h-screen p-8 bg-background",
            children: M.jsxDEV(
              "div",
              {
                "data-loc": "client/src/components/ErrorBoundary.tsx:28",
                className: "flex flex-col items-center w-full max-w-2xl p-8",
                children: [
                  M.jsxDEV(
                    DV,
                    {
                      "data-loc": "client/src/components/ErrorBoundary.tsx:29",
                      size: 48,
                      className: "text-destructive mb-6 flex-shrink-0"
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        "/home/ubuntu/video_portfolio/client/src/components/ErrorBoundary.tsx",
                      lineNumber: 29,
                      columnNumber: 13
                    },
                    this
                  ),
                  M.jsxDEV(
                    "h2",
                    {
                      "data-loc": "client/src/components/ErrorBoundary.tsx:34",
                      className: "text-xl mb-4",
                      children: "An unexpected error occurred."
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        "/home/ubuntu/video_portfolio/client/src/components/ErrorBoundary.tsx",
                      lineNumber: 34,
                      columnNumber: 13
                    },
                    this
                  ),
                  M.jsxDEV(
                    "div",
                    {
                      "data-loc": "client/src/components/ErrorBoundary.tsx:36",
                      className: "p-4 w-full rounded bg-muted overflow-auto mb-6",
                      children: M.jsxDEV(
                        "pre",
                        {
                          "data-loc": "client/src/components/ErrorBoundary.tsx:37",
                          className: "text-sm text-muted-foreground whitespace-break-spaces",
                          children: this.state.error?.stack
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/ErrorBoundary.tsx",
                          lineNumber: 37,
                          columnNumber: 15
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        "/home/ubuntu/video_portfolio/client/src/components/ErrorBoundary.tsx",
                      lineNumber: 36,
                      columnNumber: 13
                    },
                    this
                  ),
                  M.jsxDEV(
                    "button",
                    {
                      "data-loc": "client/src/components/ErrorBoundary.tsx:42",
                      onClick: () => window.location.reload(),
                      className: Ei(
                        "flex items-center gap-2 px-4 py-2 rounded-lg",
                        "bg-primary text-primary-foreground",
                        "hover:opacity-90 cursor-pointer"
                      ),
                      children: [
                        M.jsxDEV(
                          NV,
                          { "data-loc": "client/src/components/ErrorBoundary.tsx:50", size: 16 },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/ubuntu/video_portfolio/client/src/components/ErrorBoundary.tsx",
                            lineNumber: 50,
                            columnNumber: 15
                          },
                          this
                        ),
                        "Reload Page"
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName:
                        "/home/ubuntu/video_portfolio/client/src/components/ErrorBoundary.tsx",
                      lineNumber: 42,
                      columnNumber: 13
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/components/ErrorBoundary.tsx",
                lineNumber: 28,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/components/ErrorBoundary.tsx",
            lineNumber: 27,
            columnNumber: 9
          },
          this
        )
      : this.props.children;
  }
}
const ZV = R.createContext(void 0);
function eU({ children: a, defaultTheme: i = "light", switchable: s = !1 }) {
  const [u, d] = R.useState(() => (s && localStorage.getItem("theme")) || i);
  R.useEffect(() => {
    const f = document.documentElement;
    u === "dark" ? f.classList.add("dark") : f.classList.remove("dark"),
      s && localStorage.setItem("theme", u);
  }, [u, s]);
  const p = s
    ? () => {
        d((f) => (f === "light" ? "dark" : "light"));
      }
    : void 0;
  return M.jsxDEV(
    ZV.Provider,
    {
      "data-loc": "client/src/contexts/ThemeContext.tsx:52",
      value: { theme: u, toggleTheme: p, switchable: s },
      children: a
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/contexts/ThemeContext.tsx",
      lineNumber: 52,
      columnNumber: 5
    },
    this
  );
}
function tU() {
  const [a] = HC(),
    [i, s] = R.useState(!1),
    u = [
      { label: "Videos", path: "/" },
      { label: "AI Tools Used", path: "/ai-tools" },
      { label: "Teaching Team", path: "/teaching-team" },
      { label: "Contact", path: "/contact" }
    ],
    d = () => {
      s(!1);
    };
  return M.jsxDEV(
    "nav",
    {
      "data-loc": "client/src/components/Navigation.tsx:20",
      className: "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200",
      children: M.jsxDEV(
        "div",
        {
          "data-loc": "client/src/components/Navigation.tsx:21",
          className: "container mx-auto px-4",
          children: [
            M.jsxDEV(
              "div",
              {
                "data-loc": "client/src/components/Navigation.tsx:22",
                className: "flex items-center justify-between h-16",
                children: [
                  M.jsxDEV(
                    Wh,
                    {
                      "data-loc": "client/src/components/Navigation.tsx:23",
                      href: "/",
                      children: M.jsxDEV(
                        "span",
                        {
                          "data-loc": "client/src/components/Navigation.tsx:24",
                          className:
                            "text-xl font-semibold text-black hover:opacity-70 transition-opacity cursor-pointer",
                          children: "AI for Design"
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                          lineNumber: 24,
                          columnNumber: 13
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                      lineNumber: 23,
                      columnNumber: 11
                    },
                    this
                  ),
                  M.jsxDEV(
                    "div",
                    {
                      "data-loc": "client/src/components/Navigation.tsx:30",
                      className: "hidden md:flex gap-2",
                      children: u.map((p) => {
                        const f = a === p.path;
                        return M.jsxDEV(
                          Wh,
                          {
                            "data-loc": "client/src/components/Navigation.tsx:34",
                            href: p.path,
                            children: M.jsxDEV(
                              "span",
                              {
                                "data-loc": "client/src/components/Navigation.tsx:35",
                                className: `px-6 py-2 rounded-full text-base transition-all cursor-pointer inline-block ${f ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                style: { fontWeight: f ? 500 : 400 },
                                children: p.label
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                                lineNumber: 35,
                                columnNumber: 19
                              },
                              this
                            )
                          },
                          p.path,
                          !1,
                          {
                            fileName:
                              "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                            lineNumber: 34,
                            columnNumber: 17
                          },
                          this
                        );
                      })
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                      lineNumber: 30,
                      columnNumber: 11
                    },
                    this
                  ),
                  M.jsxDEV(
                    "button",
                    {
                      "data-loc": "client/src/components/Navigation.tsx:51",
                      className: "md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors",
                      onClick: () => s(!i),
                      "aria-label": "Toggle menu",
                      children: M.jsxDEV(
                        "svg",
                        {
                          "data-loc": "client/src/components/Navigation.tsx:56",
                          className: "w-6 h-6 text-black",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: i
                            ? M.jsxDEV(
                                "path",
                                {
                                  "data-loc": "client/src/components/Navigation.tsx:66",
                                  d: "M6 18L18 6M6 6l12 12"
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                                  lineNumber: 66,
                                  columnNumber: 17
                                },
                                this
                              )
                            : M.jsxDEV(
                                "path",
                                {
                                  "data-loc": "client/src/components/Navigation.tsx:68",
                                  d: "M4 6h16M4 12h16M4 18h16"
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                                  lineNumber: 68,
                                  columnNumber: 17
                                },
                                this
                              )
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                          lineNumber: 56,
                          columnNumber: 13
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                      lineNumber: 51,
                      columnNumber: 11
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                lineNumber: 22,
                columnNumber: 9
              },
              this
            ),
            i &&
              M.jsxDEV(
                "div",
                {
                  "data-loc": "client/src/components/Navigation.tsx:76",
                  className: "md:hidden py-4 border-t border-gray-200",
                  children: M.jsxDEV(
                    "div",
                    {
                      "data-loc": "client/src/components/Navigation.tsx:77",
                      className: "flex flex-col gap-2",
                      children: u.map((p) => {
                        const f = a === p.path;
                        return M.jsxDEV(
                          Wh,
                          {
                            "data-loc": "client/src/components/Navigation.tsx:81",
                            href: p.path,
                            children: M.jsxDEV(
                              "span",
                              {
                                "data-loc": "client/src/components/Navigation.tsx:82",
                                onClick: d,
                                className: `block px-4 py-3 rounded-lg text-base transition-all cursor-pointer ${f ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                style: { fontWeight: f ? 500 : 400 },
                                children: p.label
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                              },
                              this
                            )
                          },
                          p.path,
                          !1,
                          {
                            fileName:
                              "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                            lineNumber: 81,
                            columnNumber: 19
                          },
                          this
                        );
                      })
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                      lineNumber: 77,
                      columnNumber: 13
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
                  lineNumber: 76,
                  columnNumber: 11
                },
                this
              )
          ]
        },
        void 0,
        !0,
        {
          fileName: "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
          lineNumber: 21,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/Navigation.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}
const TS = [
    "bg-blue-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-green-100",
    "bg-orange-100",
    "bg-red-100",
    "bg-teal-100",
    "bg-indigo-100",
    "bg-yellow-100",
    "bg-cyan-100",
    "bg-violet-100",
    "bg-lime-100"
  ],
  nU = (a) => TS[a % TS.length];
function rU({ video: a, onClick: i, index: s }) {
  const u = nU(s);
  return M.jsxDEV(
    "div",
    {
      "data-loc": "client/src/components/VideoCard.tsx:15",
      onClick: i,
      className: "video-card-hover cursor-pointer overflow-hidden bg-white",
      children: [
        M.jsxDEV(
          "div",
          {
            "data-loc": "client/src/components/VideoCard.tsx:19",
            className: `relative aspect-[9/16] ${u} overflow-hidden rounded-2xl`,
            children: [
              M.jsxDEV(
                "img",
                {
                  "data-loc": "client/src/components/VideoCard.tsx:20",
                  src: a.thumbnail,
                  alt: a.title,
                  className: "w-full h-full object-cover",
                  loading: "lazy"
                },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoCard.tsx",
                  lineNumber: 20,
                  columnNumber: 9
                },
                this
              ),
              M.jsxDEV(
                "div",
                {
                  "data-loc": "client/src/components/VideoCard.tsx:26",
                  className:
                    "absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity",
                  children: M.jsxDEV(
                    "div",
                    {
                      "data-loc": "client/src/components/VideoCard.tsx:27",
                      className: "bg-white/90 p-3",
                      children: M.jsxDEV(
                        TV,
                        {
                          "data-loc": "client/src/components/VideoCard.tsx:28",
                          className: "w-8 h-8 text-black fill-current"
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/VideoCard.tsx",
                          lineNumber: 28,
                          columnNumber: 13
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoCard.tsx",
                      lineNumber: 27,
                      columnNumber: 11
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoCard.tsx",
                  lineNumber: 26,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoCard.tsx",
            lineNumber: 19,
            columnNumber: 7
          },
          this
        ),
        M.jsxDEV(
          "div",
          {
            "data-loc": "client/src/components/VideoCard.tsx:32",
            className: "pt-3 bg-white",
            children: [
              M.jsxDEV(
                "h3",
                {
                  "data-loc": "client/src/components/VideoCard.tsx:33",
                  className: "text-base leading-tight mb-1 text-black",
                  style: { fontWeight: 600 },
                  children: a.title
                },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoCard.tsx",
                  lineNumber: 33,
                  columnNumber: 9
                },
                this
              ),
              M.jsxDEV(
                "p",
                {
                  "data-loc": "client/src/components/VideoCard.tsx:36",
                  className: "text-sm text-gray-500",
                  style: { fontWeight: 400 },
                  children: a.studentName
                },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoCard.tsx",
                  lineNumber: 36,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoCard.tsx",
            lineNumber: 32,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoCard.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
var Gh = "focusScope.autoFocusOnMount",
  qh = "focusScope.autoFocusOnUnmount",
  NS = { bubbles: !1, cancelable: !0 },
  aU = "FocusScope",
  IC = R.forwardRef((a, i) => {
    const { loop: s = !1, trapped: u = !1, onMountAutoFocus: d, onUnmountAutoFocus: p, ...f } = a,
      [E, b] = R.useState(null),
      y = kl(d),
      w = kl(p),
      g = R.useRef(null),
      _ = la(i, (L) => b(L)),
      T = R.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        }
      }).current;
    R.useEffect(() => {
      if (u) {
        let L = function (G) {
            if (T.paused || !E) return;
            const J = G.target;
            E.contains(J) ? (g.current = J) : Mo(g.current, { select: !0 });
          },
          B = function (G) {
            if (T.paused || !E) return;
            const J = G.relatedTarget;
            J !== null && (E.contains(J) || Mo(g.current, { select: !0 }));
          },
          j = function (G) {
            if (document.activeElement === document.body)
              for (const q of G) q.removedNodes.length > 0 && Mo(E);
          };
        document.addEventListener("focusin", L), document.addEventListener("focusout", B);
        const I = new MutationObserver(j);
        return (
          E && I.observe(E, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", L),
              document.removeEventListener("focusout", B),
              I.disconnect();
          }
        );
      }
    }, [u, E, T.paused]),
      R.useEffect(() => {
        if (E) {
          _S.add(T);
          const L = document.activeElement;
          if (!E.contains(L)) {
            const j = new CustomEvent(Gh, NS);
            E.addEventListener(Gh, y),
              E.dispatchEvent(j),
              j.defaultPrevented ||
                (oU(cU($C(E)), { select: !0 }), document.activeElement === L && Mo(E));
          }
          return () => {
            E.removeEventListener(Gh, y),
              setTimeout(() => {
                const j = new CustomEvent(qh, NS);
                E.addEventListener(qh, w),
                  E.dispatchEvent(j),
                  j.defaultPrevented || Mo(L ?? document.body, { select: !0 }),
                  E.removeEventListener(qh, w),
                  _S.remove(T);
              }, 0);
          };
        }
      }, [E, y, w, T]);
    const O = R.useCallback(
      (L) => {
        if ((!s && !u) || T.paused) return;
        const B = L.key === "Tab" && !L.altKey && !L.ctrlKey && !L.metaKey,
          j = document.activeElement;
        if (B && j) {
          const I = L.currentTarget,
            [G, J] = iU(I);
          G && J
            ? !L.shiftKey && j === J
              ? (L.preventDefault(), s && Mo(G, { select: !0 }))
              : L.shiftKey && j === G && (L.preventDefault(), s && Mo(J, { select: !0 }))
            : j === I && L.preventDefault();
        }
      },
      [s, u, T.paused]
    );
    return Oe.jsx(wr.div, { tabIndex: -1, ...f, ref: _, onKeyDown: O });
  });
IC.displayName = aU;
function oU(a, { select: i = !1 } = {}) {
  const s = document.activeElement;
  for (const u of a) if ((Mo(u, { select: i }), document.activeElement !== s)) return;
}
function iU(a) {
  const i = $C(a),
    s = DS(i, a),
    u = DS(i.reverse(), a);
  return [s, u];
}
function $C(a) {
  const i = [],
    s = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (u) => {
        const d = u.tagName === "INPUT" && u.type === "hidden";
        return u.disabled || u.hidden || d
          ? NodeFilter.FILTER_SKIP
          : u.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      }
    });
  for (; s.nextNode(); ) i.push(s.currentNode);
  return i;
}
function DS(a, i) {
  for (const s of a) if (!lU(s, { upTo: i })) return s;
}
function lU(a, { upTo: i }) {
  if (getComputedStyle(a).visibility === "hidden") return !0;
  for (; a; ) {
    if (i !== void 0 && a === i) return !1;
    if (getComputedStyle(a).display === "none") return !0;
    a = a.parentElement;
  }
  return !1;
}
function sU(a) {
  return a instanceof HTMLInputElement && "select" in a;
}
function Mo(a, { select: i = !1 } = {}) {
  if (a && a.focus) {
    const s = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== s && sU(a) && i && a.select();
  }
}
var _S = uU();
function uU() {
  let a = [];
  return {
    add(i) {
      const s = a[0];
      i !== s && s?.pause(), (a = OS(a, i)), a.unshift(i);
    },
    remove(i) {
      (a = OS(a, i)), a[0]?.resume();
    }
  };
}
function OS(a, i) {
  const s = [...a],
    u = s.indexOf(i);
  return u !== -1 && s.splice(u, 1), s;
}
function cU(a) {
  return a.filter((i) => i.tagName !== "A");
}
var Kh = 0;
function fU() {
  R.useEffect(() => {
    const a = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", a[0] ?? kS()),
      document.body.insertAdjacentElement("beforeend", a[1] ?? kS()),
      Kh++,
      () => {
        Kh === 1 &&
          document.querySelectorAll("[data-radix-focus-guard]").forEach((i) => i.remove()),
          Kh--;
      }
    );
  }, []);
}
function kS() {
  const a = document.createElement("span");
  return (
    a.setAttribute("data-radix-focus-guard", ""),
    (a.tabIndex = 0),
    (a.style.outline = "none"),
    (a.style.opacity = "0"),
    (a.style.position = "fixed"),
    (a.style.pointerEvents = "none"),
    a
  );
}
var wa = function () {
  return (
    (wa =
      Object.assign ||
      function (i) {
        for (var s, u = 1, d = arguments.length; u < d; u++) {
          s = arguments[u];
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (i[p] = s[p]);
        }
        return i;
      }),
    wa.apply(this, arguments)
  );
};
function YC(a, i) {
  var s = {};
  for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && i.indexOf(u) < 0 && (s[u] = a[u]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, u = Object.getOwnPropertySymbols(a); d < u.length; d++)
      i.indexOf(u[d]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(a, u[d]) &&
        (s[u[d]] = a[u[d]]);
  return s;
}
function dU(a, i, s) {
  if (s || arguments.length === 2)
    for (var u = 0, d = i.length, p; u < d; u++)
      (p || !(u in i)) && (p || (p = Array.prototype.slice.call(i, 0, u)), (p[u] = i[u]));
  return a.concat(p || Array.prototype.slice.call(i));
}
var ld = "right-scroll-bar-position",
  sd = "width-before-scroll-bar",
  pU = "with-scroll-bars-hidden",
  mU = "--removed-body-scroll-bar-size";
function Xh(a, i) {
  return typeof a == "function" ? a(i) : a && (a.current = i), a;
}
function vU(a, i) {
  var s = R.useState(function () {
    return {
      value: a,
      callback: i,
      facade: {
        get current() {
          return s.value;
        },
        set current(u) {
          var d = s.value;
          d !== u && ((s.value = u), s.callback(u, d));
        }
      }
    };
  })[0];
  return (s.callback = i), s.facade;
}
var hU = typeof window < "u" ? R.useLayoutEffect : R.useEffect,
  AS = new WeakMap();
function gU(a, i) {
  var s = vU(null, function (u) {
    return a.forEach(function (d) {
      return Xh(d, u);
    });
  });
  return (
    hU(
      function () {
        var u = AS.get(s);
        if (u) {
          var d = new Set(u),
            p = new Set(a),
            f = s.current;
          d.forEach(function (E) {
            p.has(E) || Xh(E, null);
          }),
            p.forEach(function (E) {
              d.has(E) || Xh(E, f);
            });
        }
        AS.set(s, a);
      },
      [a]
    ),
    s
  );
}
function yU(a) {
  return a;
}
function bU(a, i) {
  i === void 0 && (i = yU);
  var s = [],
    u = !1,
    d = {
      read: function () {
        if (u)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return s.length ? s[s.length - 1] : a;
      },
      useMedium: function (p) {
        var f = i(p, u);
        return (
          s.push(f),
          function () {
            s = s.filter(function (E) {
              return E !== f;
            });
          }
        );
      },
      assignSyncMedium: function (p) {
        for (u = !0; s.length; ) {
          var f = s;
          (s = []), f.forEach(p);
        }
        s = {
          push: function (E) {
            return p(E);
          },
          filter: function () {
            return s;
          }
        };
      },
      assignMedium: function (p) {
        u = !0;
        var f = [];
        if (s.length) {
          var E = s;
          (s = []), E.forEach(p), (f = s);
        }
        var b = function () {
            var w = f;
            (f = []), w.forEach(p);
          },
          y = function () {
            return Promise.resolve().then(b);
          };
        y(),
          (s = {
            push: function (w) {
              f.push(w), y();
            },
            filter: function (w) {
              return (f = f.filter(w)), s;
            }
          });
      }
    };
  return d;
}
function xU(a) {
  a === void 0 && (a = {});
  var i = bU(null);
  return (i.options = wa({ async: !0, ssr: !1 }, a)), i;
}
var WC = function (a) {
  var i = a.sideCar,
    s = YC(a, ["sideCar"]);
  if (!i) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var u = i.read();
  if (!u) throw new Error("Sidecar medium not found");
  return R.createElement(u, wa({}, s));
};
WC.isSideCarExport = !0;
function EU(a, i) {
  return a.useMedium(i), WC;
}
var GC = xU(),
  Qh = function () {},
  Ed = R.forwardRef(function (a, i) {
    var s = R.useRef(null),
      u = R.useState({ onScrollCapture: Qh, onWheelCapture: Qh, onTouchMoveCapture: Qh }),
      d = u[0],
      p = u[1],
      f = a.forwardProps,
      E = a.children,
      b = a.className,
      y = a.removeScrollBar,
      w = a.enabled,
      g = a.shards,
      _ = a.sideCar,
      T = a.noRelative,
      O = a.noIsolation,
      L = a.inert,
      B = a.allowPinchZoom,
      j = a.as,
      I = j === void 0 ? "div" : j,
      G = a.gapMode,
      J = YC(a, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
      ]),
      q = _,
      oe = gU([s, i]),
      X = wa(wa({}, J), d);
    return R.createElement(
      R.Fragment,
      null,
      w &&
        R.createElement(q, {
          sideCar: GC,
          removeScrollBar: y,
          shards: g,
          noRelative: T,
          noIsolation: O,
          inert: L,
          setCallbacks: p,
          allowPinchZoom: !!B,
          lockRef: s,
          gapMode: G
        }),
      f
        ? R.cloneElement(R.Children.only(E), wa(wa({}, X), { ref: oe }))
        : R.createElement(I, wa({}, X, { className: b, ref: oe }), E)
    );
  });
Ed.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ed.classNames = { fullWidth: sd, zeroRight: ld };
var SU = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function CU() {
  if (!document) return null;
  var a = document.createElement("style");
  a.type = "text/css";
  var i = SU();
  return i && a.setAttribute("nonce", i), a;
}
function wU(a, i) {
  a.styleSheet ? (a.styleSheet.cssText = i) : a.appendChild(document.createTextNode(i));
}
function RU(a) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(a);
}
var TU = function () {
    var a = 0,
      i = null;
    return {
      add: function (s) {
        a == 0 && (i = CU()) && (wU(i, s), RU(i)), a++;
      },
      remove: function () {
        a--, !a && i && (i.parentNode && i.parentNode.removeChild(i), (i = null));
      }
    };
  },
  NU = function () {
    var a = TU();
    return function (i, s) {
      R.useEffect(
        function () {
          return (
            a.add(i),
            function () {
              a.remove();
            }
          );
        },
        [i && s]
      );
    };
  },
  qC = function () {
    var a = NU(),
      i = function (s) {
        var u = s.styles,
          d = s.dynamic;
        return a(u, d), null;
      };
    return i;
  },
  DU = { left: 0, top: 0, right: 0, gap: 0 },
  Jh = function (a) {
    return parseInt(a || "", 10) || 0;
  },
  _U = function (a) {
    var i = window.getComputedStyle(document.body),
      s = i[a === "padding" ? "paddingLeft" : "marginLeft"],
      u = i[a === "padding" ? "paddingTop" : "marginTop"],
      d = i[a === "padding" ? "paddingRight" : "marginRight"];
    return [Jh(s), Jh(u), Jh(d)];
  },
  OU = function (a) {
    if ((a === void 0 && (a = "margin"), typeof window > "u")) return DU;
    var i = _U(a),
      s = document.documentElement.clientWidth,
      u = window.innerWidth;
    return { left: i[0], top: i[1], right: i[2], gap: Math.max(0, u - s + i[2] - i[0]) };
  },
  kU = qC(),
  Ol = "data-scroll-locked",
  AU = function (a, i, s, u) {
    var d = a.left,
      p = a.top,
      f = a.right,
      E = a.gap;
    return (
      s === void 0 && (s = "margin"),
      `
  .`
        .concat(
          pU,
          ` {
   overflow: hidden `
        )
        .concat(
          u,
          `;
   padding-right: `
        )
        .concat(E, "px ")
        .concat(
          u,
          `;
  }
  body[`
        )
        .concat(
          Ol,
          `] {
    overflow: hidden `
        )
        .concat(
          u,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            i && "position: relative ".concat(u, ";"),
            s === "margin" &&
              `
    padding-left: `
                .concat(
                  d,
                  `px;
    padding-top: `
                )
                .concat(
                  p,
                  `px;
    padding-right: `
                )
                .concat(
                  f,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(E, "px ")
                .concat(
                  u,
                  `;
    `
                ),
            s === "padding" && "padding-right: ".concat(E, "px ").concat(u, ";")
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          ld,
          ` {
    right: `
        )
        .concat(E, "px ")
        .concat(
          u,
          `;
  }
  
  .`
        )
        .concat(
          sd,
          ` {
    margin-right: `
        )
        .concat(E, "px ")
        .concat(
          u,
          `;
  }
  
  .`
        )
        .concat(ld, " .")
        .concat(
          ld,
          ` {
    right: 0 `
        )
        .concat(
          u,
          `;
  }
  
  .`
        )
        .concat(sd, " .")
        .concat(
          sd,
          ` {
    margin-right: 0 `
        )
        .concat(
          u,
          `;
  }
  
  body[`
        )
        .concat(
          Ol,
          `] {
    `
        )
        .concat(mU, ": ")
        .concat(
          E,
          `px;
  }
`
        )
    );
  },
  MS = function () {
    var a = parseInt(document.body.getAttribute(Ol) || "0", 10);
    return isFinite(a) ? a : 0;
  },
  MU = function () {
    R.useEffect(function () {
      return (
        document.body.setAttribute(Ol, (MS() + 1).toString()),
        function () {
          var a = MS() - 1;
          a <= 0 ? document.body.removeAttribute(Ol) : document.body.setAttribute(Ol, a.toString());
        }
      );
    }, []);
  },
  LU = function (a) {
    var i = a.noRelative,
      s = a.noImportant,
      u = a.gapMode,
      d = u === void 0 ? "margin" : u;
    MU();
    var p = R.useMemo(
      function () {
        return OU(d);
      },
      [d]
    );
    return R.createElement(kU, { styles: AU(p, !i, d, s ? "" : "!important") });
  },
  cg = !1;
if (typeof window < "u")
  try {
    var nd = Object.defineProperty({}, "passive", {
      get: function () {
        return (cg = !0), !0;
      }
    });
    window.addEventListener("test", nd, nd), window.removeEventListener("test", nd, nd);
  } catch {
    cg = !1;
  }
var Tl = cg ? { passive: !1 } : !1,
  jU = function (a) {
    return a.tagName === "TEXTAREA";
  },
  KC = function (a, i) {
    if (!(a instanceof Element)) return !1;
    var s = window.getComputedStyle(a);
    return s[i] !== "hidden" && !(s.overflowY === s.overflowX && !jU(a) && s[i] === "visible");
  },
  VU = function (a) {
    return KC(a, "overflowY");
  },
  UU = function (a) {
    return KC(a, "overflowX");
  },
  LS = function (a, i) {
    var s = i.ownerDocument,
      u = i;
    do {
      typeof ShadowRoot < "u" && u instanceof ShadowRoot && (u = u.host);
      var d = XC(a, u);
      if (d) {
        var p = QC(a, u),
          f = p[1],
          E = p[2];
        if (f > E) return !0;
      }
      u = u.parentNode;
    } while (u && u !== s.body);
    return !1;
  },
  FU = function (a) {
    var i = a.scrollTop,
      s = a.scrollHeight,
      u = a.clientHeight;
    return [i, s, u];
  },
  zU = function (a) {
    var i = a.scrollLeft,
      s = a.scrollWidth,
      u = a.clientWidth;
    return [i, s, u];
  },
  XC = function (a, i) {
    return a === "v" ? VU(i) : UU(i);
  },
  QC = function (a, i) {
    return a === "v" ? FU(i) : zU(i);
  },
  PU = function (a, i) {
    return a === "h" && i === "rtl" ? -1 : 1;
  },
  HU = function (a, i, s, u, d) {
    var p = PU(a, window.getComputedStyle(i).direction),
      f = p * u,
      E = s.target,
      b = i.contains(E),
      y = !1,
      w = f > 0,
      g = 0,
      _ = 0;
    do {
      if (!E) break;
      var T = QC(a, E),
        O = T[0],
        L = T[1],
        B = T[2],
        j = L - B - p * O;
      (O || j) && XC(a, E) && ((g += j), (_ += O));
      var I = E.parentNode;
      E = I && I.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? I.host : I;
    } while ((!b && E !== document.body) || (b && (i.contains(E) || i === E)));
    return ((w && Math.abs(g) < 1) || (!w && Math.abs(_) < 1)) && (y = !0), y;
  },
  rd = function (a) {
    return "changedTouches" in a
      ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY]
      : [0, 0];
  },
  jS = function (a) {
    return [a.deltaX, a.deltaY];
  },
  VS = function (a) {
    return a && "current" in a ? a.current : a;
  },
  BU = function (a, i) {
    return a[0] === i[0] && a[1] === i[1];
  },
  IU = function (a) {
    return `
  .block-interactivity-`
      .concat(
        a,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        a,
        ` {pointer-events: all;}
`
      );
  },
  $U = 0,
  Nl = [];
function YU(a) {
  var i = R.useRef([]),
    s = R.useRef([0, 0]),
    u = R.useRef(),
    d = R.useState($U++)[0],
    p = R.useState(qC)[0],
    f = R.useRef(a);
  R.useEffect(
    function () {
      f.current = a;
    },
    [a]
  ),
    R.useEffect(
      function () {
        if (a.inert) {
          document.body.classList.add("block-interactivity-".concat(d));
          var L = dU([a.lockRef.current], (a.shards || []).map(VS), !0).filter(Boolean);
          return (
            L.forEach(function (B) {
              return B.classList.add("allow-interactivity-".concat(d));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(d)),
                L.forEach(function (B) {
                  return B.classList.remove("allow-interactivity-".concat(d));
                });
            }
          );
        }
      },
      [a.inert, a.lockRef.current, a.shards]
    );
  var E = R.useCallback(function (L, B) {
      if (("touches" in L && L.touches.length === 2) || (L.type === "wheel" && L.ctrlKey))
        return !f.current.allowPinchZoom;
      var j = rd(L),
        I = s.current,
        G = "deltaX" in L ? L.deltaX : I[0] - j[0],
        J = "deltaY" in L ? L.deltaY : I[1] - j[1],
        q,
        oe = L.target,
        X = Math.abs(G) > Math.abs(J) ? "h" : "v";
      if ("touches" in L && X === "h" && oe.type === "range") return !1;
      var ne = LS(X, oe);
      if (!ne) return !0;
      if ((ne ? (q = X) : ((q = X === "v" ? "h" : "v"), (ne = LS(X, oe))), !ne)) return !1;
      if ((!u.current && "changedTouches" in L && (G || J) && (u.current = q), !q)) return !0;
      var Ne = u.current || q;
      return HU(Ne, B, L, Ne === "h" ? G : J);
    }, []),
    b = R.useCallback(function (L) {
      var B = L;
      if (!(!Nl.length || Nl[Nl.length - 1] !== p)) {
        var j = "deltaY" in B ? jS(B) : rd(B),
          I = i.current.filter(function (q) {
            return (
              q.name === B.type &&
              (q.target === B.target || B.target === q.shadowParent) &&
              BU(q.delta, j)
            );
          })[0];
        if (I && I.should) {
          B.cancelable && B.preventDefault();
          return;
        }
        if (!I) {
          var G = (f.current.shards || [])
              .map(VS)
              .filter(Boolean)
              .filter(function (q) {
                return q.contains(B.target);
              }),
            J = G.length > 0 ? E(B, G[0]) : !f.current.noIsolation;
          J && B.cancelable && B.preventDefault();
        }
      }
    }, []),
    y = R.useCallback(function (L, B, j, I) {
      var G = { name: L, delta: B, target: j, should: I, shadowParent: WU(j) };
      i.current.push(G),
        setTimeout(function () {
          i.current = i.current.filter(function (J) {
            return J !== G;
          });
        }, 1);
    }, []),
    w = R.useCallback(function (L) {
      (s.current = rd(L)), (u.current = void 0);
    }, []),
    g = R.useCallback(function (L) {
      y(L.type, jS(L), L.target, E(L, a.lockRef.current));
    }, []),
    _ = R.useCallback(function (L) {
      y(L.type, rd(L), L.target, E(L, a.lockRef.current));
    }, []);
  R.useEffect(function () {
    return (
      Nl.push(p),
      a.setCallbacks({ onScrollCapture: g, onWheelCapture: g, onTouchMoveCapture: _ }),
      document.addEventListener("wheel", b, Tl),
      document.addEventListener("touchmove", b, Tl),
      document.addEventListener("touchstart", w, Tl),
      function () {
        (Nl = Nl.filter(function (L) {
          return L !== p;
        })),
          document.removeEventListener("wheel", b, Tl),
          document.removeEventListener("touchmove", b, Tl),
          document.removeEventListener("touchstart", w, Tl);
      }
    );
  }, []);
  var T = a.removeScrollBar,
    O = a.inert;
  return R.createElement(
    R.Fragment,
    null,
    O ? R.createElement(p, { styles: IU(d) }) : null,
    T ? R.createElement(LU, { noRelative: a.noRelative, gapMode: a.gapMode }) : null
  );
}
function WU(a) {
  for (var i = null; a !== null; )
    a instanceof ShadowRoot && ((i = a.host), (a = a.host)), (a = a.parentNode);
  return i;
}
const GU = EU(GC, YU);
var JC = R.forwardRef(function (a, i) {
  return R.createElement(Ed, wa({}, a, { ref: i, sideCar: GU }));
});
JC.classNames = Ed.classNames;
var qU = function (a) {
    if (typeof document > "u") return null;
    var i = Array.isArray(a) ? a[0] : a;
    return i.ownerDocument.body;
  },
  Dl = new WeakMap(),
  ad = new WeakMap(),
  od = {},
  Zh = 0,
  ZC = function (a) {
    return a && (a.host || ZC(a.parentNode));
  },
  KU = function (a, i) {
    return i
      .map(function (s) {
        if (a.contains(s)) return s;
        var u = ZC(s);
        return u && a.contains(u)
          ? u
          : (console.error("aria-hidden", s, "in not contained inside", a, ". Doing nothing"),
            null);
      })
      .filter(function (s) {
        return !!s;
      });
  },
  XU = function (a, i, s, u) {
    var d = KU(i, Array.isArray(a) ? a : [a]);
    od[s] || (od[s] = new WeakMap());
    var p = od[s],
      f = [],
      E = new Set(),
      b = new Set(d),
      y = function (g) {
        !g || E.has(g) || (E.add(g), y(g.parentNode));
      };
    d.forEach(y);
    var w = function (g) {
      !g ||
        b.has(g) ||
        Array.prototype.forEach.call(g.children, function (_) {
          if (E.has(_)) w(_);
          else
            try {
              var T = _.getAttribute(u),
                O = T !== null && T !== "false",
                L = (Dl.get(_) || 0) + 1,
                B = (p.get(_) || 0) + 1;
              Dl.set(_, L),
                p.set(_, B),
                f.push(_),
                L === 1 && O && ad.set(_, !0),
                B === 1 && _.setAttribute(s, "true"),
                O || _.setAttribute(u, "true");
            } catch (j) {
              console.error("aria-hidden: cannot operate on ", _, j);
            }
        });
    };
    return (
      w(i),
      E.clear(),
      Zh++,
      function () {
        f.forEach(function (g) {
          var _ = Dl.get(g) - 1,
            T = p.get(g) - 1;
          Dl.set(g, _),
            p.set(g, T),
            _ || (ad.has(g) || g.removeAttribute(u), ad.delete(g)),
            T || g.removeAttribute(s);
        }),
          Zh--,
          Zh || ((Dl = new WeakMap()), (Dl = new WeakMap()), (ad = new WeakMap()), (od = {}));
      }
    );
  },
  QU = function (a, i, s) {
    s === void 0 && (s = "data-aria-hidden");
    var u = Array.from(Array.isArray(a) ? a : [a]),
      d = qU(a);
    return d
      ? (u.push.apply(u, Array.from(d.querySelectorAll("[aria-live], script"))),
        XU(u, d, s, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Sd = "Dialog",
  [ew] = pg(Sd),
  [JU, sa] = ew(Sd),
  tw = (a) => {
    const {
        __scopeDialog: i,
        children: s,
        open: u,
        defaultOpen: d,
        onOpenChange: p,
        modal: f = !0
      } = a,
      E = R.useRef(null),
      b = R.useRef(null),
      [y, w] = fj({ prop: u, defaultProp: d ?? !1, onChange: p, caller: Sd });
    return Oe.jsx(JU, {
      scope: i,
      triggerRef: E,
      contentRef: b,
      contentId: zh(),
      titleId: zh(),
      descriptionId: zh(),
      open: y,
      onOpenChange: w,
      onOpenToggle: R.useCallback(() => w((g) => !g), [w]),
      modal: f,
      children: s
    });
  };
tw.displayName = Sd;
var nw = "DialogTrigger",
  ZU = R.forwardRef((a, i) => {
    const { __scopeDialog: s, ...u } = a,
      d = sa(nw, s),
      p = la(i, d.triggerRef);
    return Oe.jsx(wr.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": d.open,
      "aria-controls": d.contentId,
      "data-state": _g(d.open),
      ...u,
      ref: p,
      onClick: Cr(a.onClick, d.onOpenToggle)
    });
  });
ZU.displayName = nw;
var Ng = "DialogPortal",
  [eF, rw] = ew(Ng, { forceMount: void 0 }),
  aw = (a) => {
    const { __scopeDialog: i, forceMount: s, children: u, container: d } = a,
      p = sa(Ng, i);
    return Oe.jsx(eF, {
      scope: i,
      forceMount: s,
      children: R.Children.map(u, (f) =>
        Oe.jsx(Uu, {
          present: s || p.open,
          children: Oe.jsx(dC, { asChild: !0, container: d, children: f })
        })
      )
    });
  };
aw.displayName = Ng;
var pd = "DialogOverlay",
  ow = R.forwardRef((a, i) => {
    const s = rw(pd, a.__scopeDialog),
      { forceMount: u = s.forceMount, ...d } = a,
      p = sa(pd, a.__scopeDialog);
    return p.modal
      ? Oe.jsx(Uu, { present: u || p.open, children: Oe.jsx(nF, { ...d, ref: i }) })
      : null;
  });
ow.displayName = pd;
var tF = mg("DialogOverlay.RemoveScroll"),
  nF = R.forwardRef((a, i) => {
    const { __scopeDialog: s, ...u } = a,
      d = sa(pd, s);
    return Oe.jsx(JC, {
      as: tF,
      allowPinchZoom: !0,
      shards: [d.contentRef],
      children: Oe.jsx(wr.div, {
        "data-state": _g(d.open),
        ...u,
        ref: i,
        style: { pointerEvents: "auto", ...u.style }
      })
    });
  }),
  xi = "DialogContent",
  iw = R.forwardRef((a, i) => {
    const s = rw(xi, a.__scopeDialog),
      { forceMount: u = s.forceMount, ...d } = a,
      p = sa(xi, a.__scopeDialog);
    return Oe.jsx(Uu, {
      present: u || p.open,
      children: p.modal ? Oe.jsx(rF, { ...d, ref: i }) : Oe.jsx(aF, { ...d, ref: i })
    });
  });
iw.displayName = xi;
var rF = R.forwardRef((a, i) => {
    const s = sa(xi, a.__scopeDialog),
      u = R.useRef(null),
      d = la(i, s.contentRef, u);
    return (
      R.useEffect(() => {
        const p = u.current;
        if (p) return QU(p);
      }, []),
      Oe.jsx(lw, {
        ...a,
        ref: d,
        trapFocus: s.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Cr(a.onCloseAutoFocus, (p) => {
          p.preventDefault(), s.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Cr(a.onPointerDownOutside, (p) => {
          const f = p.detail.originalEvent,
            E = f.button === 0 && f.ctrlKey === !0;
          (f.button === 2 || E) && p.preventDefault();
        }),
        onFocusOutside: Cr(a.onFocusOutside, (p) => p.preventDefault())
      })
    );
  }),
  aF = R.forwardRef((a, i) => {
    const s = sa(xi, a.__scopeDialog),
      u = R.useRef(!1),
      d = R.useRef(!1);
    return Oe.jsx(lw, {
      ...a,
      ref: i,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (p) => {
        a.onCloseAutoFocus?.(p),
          p.defaultPrevented || (u.current || s.triggerRef.current?.focus(), p.preventDefault()),
          (u.current = !1),
          (d.current = !1);
      },
      onInteractOutside: (p) => {
        a.onInteractOutside?.(p),
          p.defaultPrevented ||
            ((u.current = !0), p.detail.originalEvent.type === "pointerdown" && (d.current = !0));
        const f = p.target;
        s.triggerRef.current?.contains(f) && p.preventDefault(),
          p.detail.originalEvent.type === "focusin" && d.current && p.preventDefault();
      }
    });
  }),
  lw = R.forwardRef((a, i) => {
    const { __scopeDialog: s, trapFocus: u, onOpenAutoFocus: d, onCloseAutoFocus: p, ...f } = a,
      E = sa(xi, s),
      b = R.useRef(null),
      y = la(i, b);
    return (
      fU(),
      Oe.jsxs(Oe.Fragment, {
        children: [
          Oe.jsx(IC, {
            asChild: !0,
            loop: !0,
            trapped: u,
            onMountAutoFocus: d,
            onUnmountAutoFocus: p,
            children: Oe.jsx(vg, {
              role: "dialog",
              id: E.contentId,
              "aria-describedby": E.descriptionId,
              "aria-labelledby": E.titleId,
              "data-state": _g(E.open),
              ...f,
              ref: y,
              onDismiss: () => E.onOpenChange(!1)
            })
          }),
          Oe.jsxs(Oe.Fragment, {
            children: [
              Oe.jsx(iF, { titleId: E.titleId }),
              Oe.jsx(sF, { contentRef: b, descriptionId: E.descriptionId })
            ]
          })
        ]
      })
    );
  }),
  Dg = "DialogTitle",
  sw = R.forwardRef((a, i) => {
    const { __scopeDialog: s, ...u } = a,
      d = sa(Dg, s);
    return Oe.jsx(wr.h2, { id: d.titleId, ...u, ref: i });
  });
sw.displayName = Dg;
var uw = "DialogDescription",
  oF = R.forwardRef((a, i) => {
    const { __scopeDialog: s, ...u } = a,
      d = sa(uw, s);
    return Oe.jsx(wr.p, { id: d.descriptionId, ...u, ref: i });
  });
oF.displayName = uw;
var cw = "DialogClose",
  fw = R.forwardRef((a, i) => {
    const { __scopeDialog: s, ...u } = a,
      d = sa(cw, s);
    return Oe.jsx(wr.button, {
      type: "button",
      ...u,
      ref: i,
      onClick: Cr(a.onClick, () => d.onOpenChange(!1))
    });
  });
fw.displayName = cw;
function _g(a) {
  return a ? "open" : "closed";
}
var dw = "DialogTitleWarning",
  [WF, pw] = bM(dw, { contentName: xi, titleName: Dg, docsSlug: "dialog" }),
  iF = ({ titleId: a }) => {
    const i = pw(dw),
      s = `\`${i.contentName}\` requires a \`${i.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${i.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${i.docsSlug}`;
    return (
      R.useEffect(() => {
        a && (document.getElementById(a) || console.error(s));
      }, [s, a]),
      null
    );
  },
  lF = "DialogDescriptionWarning",
  sF = ({ contentRef: a, descriptionId: i }) => {
    const u = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${pw(lF).contentName}}.`;
    return (
      R.useEffect(() => {
        const d = a.current?.getAttribute("aria-describedby");
        i && d && (document.getElementById(i) || console.warn(u));
      }, [u, a, i]),
      null
    );
  },
  uF = tw,
  cF = aw,
  fF = ow,
  dF = iw,
  pF = sw,
  mF = fw;
const mw = R.createContext({
    isComposing: () => !1,
    setComposing: () => {},
    justEndedComposing: () => !1,
    markCompositionEnd: () => {}
  }),
  vF = () => R.useContext(mw);
function hF({ ...a }) {
  const i = R.useRef(!1),
    s = R.useRef(!1),
    u = R.useRef(null),
    d = R.useMemo(
      () => ({
        isComposing: () => i.current,
        setComposing: (p) => {
          i.current = p;
        },
        justEndedComposing: () => s.current,
        markCompositionEnd: () => {
          (s.current = !0),
            u.current && clearTimeout(u.current),
            (u.current = setTimeout(() => {
              s.current = !1;
            }, 150));
        }
      }),
      []
    );
  return M.jsxDEV(
    mw.Provider,
    {
      "data-loc": "client/src/components/ui/dialog.tsx:50",
      value: d,
      children: M.jsxDEV(
        uF,
        { "data-loc": "client/src/components/ui/dialog.tsx:51", "data-slot": "dialog", ...a },
        void 0,
        !1,
        {
          fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/dialog.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/dialog.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
}
function gF({ ...a }) {
  return M.jsxDEV(
    cF,
    { "data-loc": "client/src/components/ui/dialog.tsx:65", "data-slot": "dialog-portal", ...a },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/dialog.tsx",
      lineNumber: 65,
      columnNumber: 10
    },
    this
  );
}
const vw = R.forwardRef(({ className: a, ...i }, s) =>
  M.jsxDEV(
    fF,
    {
      "data-loc": "client/src/components/ui/dialog.tsx:79",
      ref: s,
      "data-slot": "dialog-overlay",
      className: Ei(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        a
      ),
      ...i
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/dialog.tsx",
      lineNumber: 79,
      columnNumber: 5
    },
    void 0
  )
);
vw.displayName = "DialogOverlay";
const hw = R.forwardRef(function (
  { className: i, children: s, showCloseButton: u = !0, onEscapeKeyDown: d, ...p },
  f
) {
  const { isComposing: E } = vF(),
    b = R.useCallback(
      (y) => {
        if (y.isComposing || E()) {
          y.preventDefault();
          return;
        }
        d?.(y);
      },
      [E, d]
    );
  return M.jsxDEV(
    gF,
    {
      "data-loc": "client/src/components/ui/dialog.tsx:126",
      "data-slot": "dialog-portal",
      children: [
        M.jsxDEV(
          vw,
          { "data-loc": "client/src/components/ui/dialog.tsx:127" },
          void 0,
          !1,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/dialog.tsx",
            lineNumber: 127,
            columnNumber: 7
          },
          this
        ),
        M.jsxDEV(
          dF,
          {
            "data-loc": "client/src/components/ui/dialog.tsx:128",
            ref: f,
            "data-slot": "dialog-content",
            className: Ei(
              "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
              i
            ),
            onEscapeKeyDown: b,
            ...p,
            children: [
              s,
              u &&
                M.jsxDEV(
                  mF,
                  {
                    "data-loc": "client/src/components/ui/dialog.tsx:140",
                    "data-slot": "dialog-close",
                    className:
                      "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    children: [
                      M.jsxDEV(
                        MC,
                        { "data-loc": "client/src/components/ui/dialog.tsx:144" },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/ui/dialog.tsx",
                          lineNumber: 144,
                          columnNumber: 13
                        },
                        this
                      ),
                      M.jsxDEV(
                        "span",
                        {
                          "data-loc": "client/src/components/ui/dialog.tsx:145",
                          className: "sr-only",
                          children: "Close"
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/ui/dialog.tsx",
                          lineNumber: 145,
                          columnNumber: 13
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/dialog.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                  },
                  this
                )
            ]
          },
          void 0,
          !0,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/dialog.tsx",
            lineNumber: 128,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/dialog.tsx",
      lineNumber: 126,
      columnNumber: 5
    },
    this
  );
});
hw.displayName = "DialogContent";
function yF({ className: a, ...i }) {
  return M.jsxDEV(
    pF,
    {
      "data-loc": "client/src/components/ui/dialog.tsx:183",
      "data-slot": "dialog-title",
      className: Ei("text-lg leading-none font-semibold", a),
      ...i
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/ui/dialog.tsx",
      lineNumber: 183,
      columnNumber: 5
    },
    this
  );
}
function bF({ video: a, isOpen: i, onClose: s }) {
  return (
    R.useEffect(() => {
      const u = (d) => {
        d.key === "Escape" && s();
      };
      return (
        i && document.addEventListener("keydown", u),
        () => {
          document.removeEventListener("keydown", u);
        }
      );
    }, [i, s]),
    a
      ? M.jsxDEV(
          hF,
          {
            "data-loc": "client/src/components/VideoModal.tsx:32",
            open: i,
            onOpenChange: s,
            children: M.jsxDEV(
              hw,
              {
                "data-loc": "client/src/components/VideoModal.tsx:33",
                className:
                  "w-[90vw] md:w-[47.5vh] md:max-w-[475px] p-0 gap-0 bg-black border-4 border-black shadow-none max-h-[min(900px,95vh)] md:max-h-[95vh] overflow-y-auto md:translate-y-[-50%] translate-y-[-47.5%]",
                showCloseButton: !1,
                children: [
                  M.jsxDEV(
                    yF,
                    {
                      "data-loc": "client/src/components/VideoModal.tsx:37",
                      className: "sr-only",
                      children: a.title
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                      lineNumber: 37,
                      columnNumber: 9
                    },
                    this
                  ),
                  M.jsxDEV(
                    "div",
                    {
                      "data-loc": "client/src/components/VideoModal.tsx:38",
                      className: "relative",
                      children: [
                        M.jsxDEV(
                          "div",
                          {
                            "data-loc": "client/src/components/VideoModal.tsx:39",
                            className: "aspect-[9/16] w-full bg-black",
                            children: M.jsxDEV(
                              "iframe",
                              {
                                "data-loc": "client/src/components/VideoModal.tsx:40",
                                src: `https://www.youtube.com/embed/${a.youtubeId}?autoplay=1&rel=0`,
                                title: a.title,
                                allow:
                                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: !0,
                                className: "w-full h-full"
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                              },
                              this
                            )
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                          },
                          this
                        ),
                        M.jsxDEV(
                          "div",
                          {
                            "data-loc": "client/src/components/VideoModal.tsx:48",
                            className: "p-5 bg-white relative",
                            children: [
                              M.jsxDEV(
                                "button",
                                {
                                  "data-loc": "client/src/components/VideoModal.tsx:49",
                                  onClick: s,
                                  className:
                                    "absolute top-5 right-5 w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors rounded-sm",
                                  "aria-label": "Close video",
                                  children: M.jsxDEV(
                                    MC,
                                    {
                                      "data-loc": "client/src/components/VideoModal.tsx:54",
                                      className: "w-8 h-8 text-black"
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                      lineNumber: 54,
                                      columnNumber: 15
                                    },
                                    this
                                  )
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                  lineNumber: 49,
                                  columnNumber: 13
                                },
                                this
                              ),
                              M.jsxDEV(
                                "div",
                                {
                                  "data-loc": "client/src/components/VideoModal.tsx:56",
                                  className: "pr-10",
                                  children: [
                                    M.jsxDEV(
                                      "h2",
                                      {
                                        "data-loc": "client/src/components/VideoModal.tsx:57",
                                        className: "font-bold text-lg mb-2 text-black",
                                        children: a.title
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                      },
                                      this
                                    ),
                                    M.jsxDEV(
                                      "div",
                                      {
                                        "data-loc": "client/src/components/VideoModal.tsx:58",
                                        className: "flex items-center gap-2 mb-3",
                                        children: [
                                          M.jsxDEV(
                                            "p",
                                            {
                                              "data-loc": "client/src/components/VideoModal.tsx:59",
                                              className: "text-sm text-gray-600",
                                              children: a.studentName
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                              lineNumber: 59,
                                              columnNumber: 17
                                            },
                                            this
                                          ),
                                          a.year &&
                                            a.studentCourse &&
                                            M.jsxDEV(
                                              "span",
                                              {
                                                "data-loc":
                                                  "client/src/components/VideoModal.tsx:63",
                                                className:
                                                  "text-xs px-3 py-1 bg-black text-white rounded-full",
                                                children: ["Year ", a.year, ", ", a.studentCourse]
                                              },
                                              void 0,
                                              !0,
                                              {
                                                fileName:
                                                  "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                              },
                                              this
                                            )
                                        ]
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName:
                                          "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                      },
                                      this
                                    ),
                                    M.jsxDEV(
                                      "div",
                                      {
                                        "data-loc": "client/src/components/VideoModal.tsx:68",
                                        className: "flex flex-wrap gap-2 mb-3",
                                        children: [
                                          M.jsxDEV(
                                            "span",
                                            {
                                              "data-loc": "client/src/components/VideoModal.tsx:69",
                                              className:
                                                "text-xs px-3 py-1 bg-gray-200 text-gray-700 rounded-full",
                                              children: a.category
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                              lineNumber: 69,
                                              columnNumber: 17
                                            },
                                            this
                                          ),
                                          M.jsxDEV(
                                            "span",
                                            {
                                              "data-loc": "client/src/components/VideoModal.tsx:72",
                                              className:
                                                "text-xs px-3 py-1 bg-gray-200 text-gray-700 rounded-full",
                                              children: a.discipline
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                              lineNumber: 72,
                                              columnNumber: 17
                                            },
                                            this
                                          )
                                        ]
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName:
                                          "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                      },
                                      this
                                    ),
                                    a.portfolioLink &&
                                      M.jsxDEV(
                                        "a",
                                        {
                                          "data-loc": "client/src/components/VideoModal.tsx:77",
                                          href: a.portfolioLink.startsWith("http")
                                            ? a.portfolioLink
                                            : `https://${a.portfolioLink}`,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "text-sm text-black font-medium hover:underline inline-flex items-center gap-1",
                                          children: "View Portfolio →"
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                          lineNumber: 77,
                                          columnNumber: 17
                                        },
                                        this
                                      )
                                  ]
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                                  lineNumber: 56,
                                  columnNumber: 13
                                },
                                this
                              )
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName:
                              "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                      lineNumber: 38,
                      columnNumber: 9
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
                lineNumber: 33,
                columnNumber: 7
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/components/VideoModal.tsx",
            lineNumber: 32,
            columnNumber: 5
          },
          this
        )
      : null
  );
}
const xF = ["All", "Why AI Sucks", "Why AI is Great", "Mini Masterclass"],
  EF = ["All", "Industrial Design", "Architecture", "Landscape Architecture"];
function SF({
  selectedCategory: a,
  selectedDiscipline: i,
  onCategoryChange: s,
  onDisciplineChange: u,
  videoCounts: d,
  frontPageText: p
}) {
  const f = p?.mainTitle || "AI for Design",
    E = p?.subTitle || "College of Design & Engineering, National University of Singapore",
    b =
      p?.description1 ||
      "Design and engineering students at NUS explore AI's capability for design and share what they learned. Starting with provocatively questioning why AI 'sucks', they progress through debunking their own initial impressions to arrive at 'Why it is great for design'. The course culminates in their delivery of mini masterclasses that are helpful for their disciplinary peers.",
    y = p?.description2 || "Directed by Assoc. Prof Donn Koh and Asst. Prof Frederick Chando Kim.",
    w = y === "Directed by Assoc. Prof Donn Koh and Asst. Prof Frederick Chando Kim.",
    g = {
      All: "All",
      "Why AI Sucks": p?.category1Name || "Why AI Sucks",
      "Why AI is Great": p?.category2Name || "Why AI is Great",
      "Mini Masterclass": p?.category3Name || "Mini Masterclass (Coming Soon)"
    };
  return M.jsxDEV(
    M.Fragment,
    {
      children: [
        M.jsxDEV(
          "div",
          {
            "data-loc": "client/src/components/FilterBar.tsx:53",
            className: "bg-white",
            children: M.jsxDEV(
              "div",
              {
                "data-loc": "client/src/components/FilterBar.tsx:54",
                className: "container py-6 max-w-7xl",
                children: M.jsxDEV(
                  "div",
                  {
                    "data-loc": "client/src/components/FilterBar.tsx:55",
                    className: "mb-8 pt-[10vh] md:text-center md:pt-[35vh]",
                    children: [
                      M.jsxDEV(
                        "h1",
                        {
                          "data-loc": "client/src/components/FilterBar.tsx:56",
                          className: "text-5xl md:text-9xl mb-3 text-black",
                          style: { fontWeight: 600, letterSpacing: "-0.02em" },
                          children: f
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                          lineNumber: 56,
                          columnNumber: 13
                        },
                        this
                      ),
                      M.jsxDEV(
                        "p",
                        {
                          "data-loc": "client/src/components/FilterBar.tsx:59",
                          className: "text-black text-lg md:text-xl mb-[10vh] md:mb-[10vh]",
                          style: { fontWeight: 400 },
                          children: E
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                          lineNumber: 59,
                          columnNumber: 13
                        },
                        this
                      ),
                      M.jsxDEV(
                        "p",
                        {
                          "data-loc": "client/src/components/FilterBar.tsx:62",
                          className:
                            "text-gray-500 text-sm md:text-xl mb-2 md:max-w-[50vw] md:mx-auto",
                          style: { fontWeight: 400 },
                          children: b
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                          lineNumber: 62,
                          columnNumber: 13
                        },
                        this
                      ),
                      M.jsxDEV(
                        "p",
                        {
                          "data-loc": "client/src/components/FilterBar.tsx:65",
                          className: "text-gray-400 text-sm md:text-base",
                          style: { fontWeight: 400 },
                          children: w
                            ? M.jsxDEV(
                                M.Fragment,
                                {
                                  children: [
                                    "Directed by ",
                                    M.jsxDEV(
                                      "a",
                                      {
                                        "data-loc": "client/src/components/FilterBar.tsx:68",
                                        href: "https://www.linkedin.com/in/donnkoh/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "font-semibold text-gray-600 hover:underline",
                                        children: "Assoc. Prof Donn Koh"
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 31
                                      },
                                      this
                                    ),
                                    " and ",
                                    M.jsxDEV(
                                      "a",
                                      {
                                        "data-loc": "client/src/components/FilterBar.tsx:68",
                                        href: "https://www.linkedin.com/in/frederick-chando-kim-b2972922/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "font-semibold text-gray-600 hover:underline",
                                        children: "Asst. Prof Frederick Chando Kim"
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 255
                                      },
                                      this
                                    ),
                                    "."
                                  ]
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                                  lineNumber: 67,
                                  columnNumber: 17
                                },
                                this
                              )
                            : y
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                          lineNumber: 65,
                          columnNumber: 13
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                lineNumber: 54,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
            lineNumber: 53,
            columnNumber: 7
          },
          this
        ),
        M.jsxDEV(
          "div",
          {
            "data-loc": "client/src/components/FilterBar.tsx:79",
            className: "bg-white md:sticky md:top-16 z-10 md:bg-white/80 md:backdrop-blur-md",
            children: M.jsxDEV(
              "div",
              {
                "data-loc": "client/src/components/FilterBar.tsx:80",
                className: "container py-4 max-w-7xl",
                children: M.jsxDEV(
                  "div",
                  {
                    "data-loc": "client/src/components/FilterBar.tsx:81",
                    className: "space-y-4",
                    children: [
                      M.jsxDEV(
                        "div",
                        {
                          "data-loc": "client/src/components/FilterBar.tsx:82",
                          className: "md:text-center",
                          children: [
                            M.jsxDEV(
                              "h3",
                              {
                                "data-loc": "client/src/components/FilterBar.tsx:83",
                                className: "text-xs uppercase tracking-wider text-gray-500 mb-2",
                                style: { fontWeight: 500 },
                                children: "Category"
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                              },
                              this
                            ),
                            M.jsxDEV(
                              "div",
                              {
                                "data-loc": "client/src/components/FilterBar.tsx:86",
                                className: "flex flex-wrap gap-2 md:justify-center",
                                children: xF.map((_) =>
                                  M.jsxDEV(
                                    "button",
                                    {
                                      "data-loc": "client/src/components/FilterBar.tsx:88",
                                      onClick: (T) => {
                                        T.preventDefault(), s(_);
                                      },
                                      className: `px-4 py-2 text-sm transition-colors rounded-full ${a === _ ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-gray-200"}`,
                                      style: { fontWeight: 500 },
                                      children: g[_] || _
                                    },
                                    _,
                                    !1,
                                    {
                                      fileName:
                                        "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                                      lineNumber: 88,
                                      columnNumber: 19
                                    },
                                    this
                                  )
                                )
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                              },
                              this
                            )
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                          lineNumber: 82,
                          columnNumber: 13
                        },
                        this
                      ),
                      M.jsxDEV(
                        "div",
                        {
                          "data-loc": "client/src/components/FilterBar.tsx:107",
                          className: "md:text-center",
                          children: [
                            M.jsxDEV(
                              "h3",
                              {
                                "data-loc": "client/src/components/FilterBar.tsx:108",
                                className: "text-xs uppercase tracking-wider text-gray-500 mb-2",
                                style: { fontWeight: 500 },
                                children: "Discipline"
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                              },
                              this
                            ),
                            M.jsxDEV(
                              "div",
                              {
                                "data-loc": "client/src/components/FilterBar.tsx:111",
                                className: "flex flex-wrap gap-2 md:justify-center",
                                children: EF.map((_) =>
                                  M.jsxDEV(
                                    "button",
                                    {
                                      "data-loc": "client/src/components/FilterBar.tsx:113",
                                      onClick: (T) => {
                                        T.preventDefault(), u(_);
                                      },
                                      className: `px-4 py-2 text-sm transition-colors rounded-full ${i === _ ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-gray-200"}`,
                                      style: { fontWeight: 500 },
                                      children: _
                                    },
                                    _,
                                    !1,
                                    {
                                      fileName:
                                        "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                                      lineNumber: 113,
                                      columnNumber: 19
                                    },
                                    this
                                  )
                                )
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                              },
                              this
                            )
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                          lineNumber: 107,
                          columnNumber: 13
                        },
                        this
                      ),
                      M.jsxDEV(
                        "div",
                        {
                          "data-loc": "client/src/components/FilterBar.tsx:132",
                          className: "text-sm text-gray-600 pt-2 md:text-center",
                          style: { fontWeight: 400 },
                          children: [
                            "Showing ",
                            M.jsxDEV(
                              "span",
                              {
                                "data-loc": "client/src/components/FilterBar.tsx:133",
                                style: { fontWeight: 600 },
                                children: d.filtered
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                                lineNumber: 133,
                                columnNumber: 23
                              },
                              this
                            ),
                            " of",
                            " ",
                            M.jsxDEV(
                              "span",
                              {
                                "data-loc": "client/src/components/FilterBar.tsx:134",
                                style: { fontWeight: 600 },
                                children: d.total
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                              },
                              this
                            ),
                            " videos"
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                          lineNumber: 132,
                          columnNumber: 13
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
                lineNumber: 80,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
            lineNumber: 79,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/components/FilterBar.tsx",
      lineNumber: 51,
      columnNumber: 5
    },
    this
  );
}
const CF = "1Wt4OAjql9HowAFn8ceK7NmImHvWky8gUPyxx320DqU4",
  wF = "0site_display",
  RF = (a, i) =>
    `https://docs.google.com/spreadsheets/d/${a}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(i)}`,
  TF = (a) => {
    const i = [];
    let s = [],
      u = "",
      d = !1;
    for (let p = 0; p < a.length; p++) {
      const f = a[p],
        E = a[p + 1];
      f === '"'
        ? d && E === '"'
          ? ((u += '"'), p++)
          : (d = !d)
        : f === "," && !d
          ? (s.push(u), (u = ""))
          : f ===
                `
` && !d
            ? (s.push(u), s.some((b) => b.trim() !== "") && i.push(s), (s = []), (u = ""))
            : f === "\r" &&
                E ===
                  `
` &&
                !d
              ? (s.push(u), s.some((b) => b.trim() !== "") && i.push(s), (s = []), (u = ""), p++)
              : (u += f);
    }
    return (u || s.length > 0) && (s.push(u), s.some((p) => p.trim() !== "") && i.push(s)), i;
  },
  NF = async () => {
    try {
      const a = RF(CF, wF),
        i = await fetch(a);
      if (!i.ok) throw new Error(`Failed to fetch sheet: ${i.statusText}`);
      const s = await i.text();
      return TF(s)
        .slice(1)
        .filter((p) => p[4] && p[4].trim() !== "")
        .map((p, f) => {
          const E = p[0] || "",
            b = p[1] || "",
            y = p[2] || "",
            w = p[3] || "",
            g = p[4] || "",
            _ = p[5] || "",
            T = p[6] || "",
            O = p[7] || "",
            L = p[8] || "",
            B = parseInt(p[9]) || f + 1;
          return {
            id: f + 1,
            displaySequence: B,
            studentName: E,
            year: b,
            studentCourse: y,
            portfolioLink: w,
            youtubeId: g,
            category: _,
            discipline: T,
            title: O,
            thumbnail: `https://img.youtube.com/vi/${g}/maxresdefault.jpg`
          };
        });
    } catch (a) {
      throw (console.error("Error fetching videos from Google Sheets:", a), a);
    }
  },
  DF = "1Wt4OAjql9HowAFn8ceK7NmImHvWky8gUPyxx320DqU4",
  Cd = {
    ai_tools_used: "1031799690",
    teaching_team: "1887582810",
    contact: "1344258660",
    front_page_text: "1214168120"
  };
async function wd(a) {
  const i = `https://docs.google.com/spreadsheets/d/${DF}/export?format=csv&gid=${a}`,
    u = await (await fetch(i)).text(),
    d = [];
  let p = [],
    f = "",
    E = !1;
  for (let b = 0; b < u.length; b++) {
    const y = u[b],
      w = u[b + 1];
    y === '"'
      ? E && w === '"'
        ? ((f += '"'), b++)
        : (E = !E)
      : y === "," && !E
        ? (p.push(f.trim()), (f = ""))
        : y ===
              `
` && !E
          ? (p.push(f.trim()), p.some((g) => g.length > 0) && d.push(p), (p = []), (f = ""))
          : (f += y);
  }
  return (f || p.length > 0) && (p.push(f.trim()), p.some((b) => b.length > 0) && d.push(p)), d;
}
async function _F() {
  const a = await wd(Cd.ai_tools_used),
    i = a[0]?.[2] || "AI Tools Used",
    s = a[1]?.[2] || "",
    u = [];
  for (let d = 3; d < a.length; d++) {
    const p = a[d];
    p[2] &&
      p[2].trim() &&
      u.push({ name: p[2] || "", elaboration: p[3] || "", tag: p[4] || "", link: p[5] || "" });
  }
  return { content: { title: i, description: s }, tools: u };
}
async function OF() {
  const a = await wd(Cd.teaching_team),
    i = a[0]?.[2] || "Teaching Team",
    s = a[1]?.[2] || "",
    u = [];
  for (let d = 3; d < a.length; d++) {
    const p = a[d];
    p[2] &&
      p[2].trim() &&
      u.push({
        name: p[2] || "",
        role: p[3] || "",
        department: p[4] || "",
        bio: p[5] || "",
        linkButton1: p[6] || "",
        link1: p[7] || "",
        linkButton2: p[8] || "",
        link2: p[9] || ""
      });
  }
  return { content: { title: i, description: s }, members: u };
}
async function kF() {
  const a = await wd(Cd.contact),
    i = a[0]?.[2] || "Contact",
    s = a[1]?.[2] || "",
    u = [];
  for (let d = 3; d < a.length; d++) {
    const p = a[d];
    p[2] && p[2].trim() && u.push({ item: p[2] || "", role: p[3] || "", mailtoLinks: p[4] || "" });
  }
  return { content: { title: i, description: s }, items: u };
}
async function AF() {
  const a = await wd(Cd.front_page_text);
  return {
    mainTitle: a[0]?.[2] || "AI for Design",
    subTitle: a[1]?.[2] || "College of Design & Engineering, National University of Singapore",
    description1: a[2]?.[2] || "",
    description2:
      a[3]?.[2] || "Directed by Assoc. Prof Donn Koh and Asst. Prof Frederick Chando Kim.",
    category1Name: a[4]?.[2] || "Why AI Sucks",
    category2Name: a[5]?.[2] || "Why AI is Great",
    category3Name: a[6]?.[2] || "Mini Masterclass (Coming Soon)"
  };
}
function MF() {
  const [a, i] = R.useState([]),
    [s, u] = R.useState(null),
    [d, p] = R.useState(!1),
    [f, E] = R.useState("All"),
    [b, y] = R.useState("All"),
    [w, g] = R.useState(!0),
    [_, T] = R.useState(null);
  R.useEffect(() => {
    Promise.all([NF(), AF()])
      .then(([j, I]) => {
        i(j), T(I), g(!1);
      })
      .catch((j) => {
        console.error("Error loading data from Google Sheets:", j), g(!1);
      });
  }, []);
  const O = R.useMemo(() => {
      const j = a.filter((I) => {
        const G = f === "All" || I.category === f,
          J = b === "All" || I.discipline === b;
        return G && J;
      });
      if (f === "All") {
        const I = j
            .filter((oe) => oe.category === "Why AI is Great")
            .sort((oe, X) => oe.displaySequence - X.displaySequence),
          G = [],
          J = new Set();
        I.forEach((oe) => {
          const X = j.find(
            (ne) =>
              ne.category === "Why AI Sucks" && ne.studentName === oe.studentName && !J.has(ne.id)
          );
          X && (G.push(X), J.add(X.id)), G.push(oe), J.add(oe.id);
        });
        const q = j
          .filter((oe) => !J.has(oe.id))
          .sort((oe, X) => oe.displaySequence - X.displaySequence);
        return [...G, ...q];
      }
      return j.sort((I, G) => I.displaySequence - G.displaySequence);
    }, [a, f, b]),
    L = (j) => {
      u(j), p(!0);
    },
    B = () => {
      p(!1), setTimeout(() => u(null), 300);
    };
  return w
    ? M.jsxDEV(
        "div",
        {
          "data-loc": "client/src/pages/Home.tsx:94",
          className: "min-h-screen flex items-center justify-center",
          children: M.jsxDEV(
            "div",
            {
              "data-loc": "client/src/pages/Home.tsx:95",
              className: "text-center",
              children: [
                M.jsxDEV(
                  "div",
                  {
                    "data-loc": "client/src/pages/Home.tsx:96",
                    className:
                      "w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                  },
                  this
                ),
                M.jsxDEV(
                  "p",
                  {
                    "data-loc": "client/src/pages/Home.tsx:97",
                    className: "text-muted-foreground",
                    children: "Loading videos..."
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
              lineNumber: 95,
              columnNumber: 9
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
          lineNumber: 94,
          columnNumber: 7
        },
        this
      )
    : M.jsxDEV(
        "div",
        {
          "data-loc": "client/src/pages/Home.tsx:104",
          className: "min-h-screen bg-white",
          children: [
            M.jsxDEV(
              SF,
              {
                "data-loc": "client/src/pages/Home.tsx:105",
                selectedCategory: f,
                selectedDiscipline: b,
                onCategoryChange: E,
                onDisciplineChange: y,
                videoCounts: { total: a.length, filtered: O.length },
                frontPageText: _ || void 0
              },
              void 0,
              !1,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
                lineNumber: 105,
                columnNumber: 7
              },
              this
            ),
            M.jsxDEV(
              "main",
              {
                "data-loc": "client/src/pages/Home.tsx:117",
                className: "container py-8 min-h-[calc(100vh-200px)]",
                children:
                  O.length === 0
                    ? M.jsxDEV(
                        "div",
                        {
                          "data-loc": "client/src/pages/Home.tsx:119",
                          className: "text-center py-20",
                          children: M.jsxDEV(
                            "p",
                            {
                              "data-loc": "client/src/pages/Home.tsx:120",
                              className: "text-muted-foreground text-lg",
                              children: "No videos found with the selected filters."
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
                              lineNumber: 120,
                              columnNumber: 13
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
                          lineNumber: 119,
                          columnNumber: 11
                        },
                        this
                      )
                    : M.jsxDEV(
                        "div",
                        {
                          "data-loc": "client/src/pages/Home.tsx:125",
                          className:
                            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6",
                          children: O.map((j, I) =>
                            M.jsxDEV(
                              "div",
                              {
                                "data-loc": "client/src/pages/Home.tsx:127",
                                className: "animate-in fade-in slide-in-from-bottom-4",
                                style: {
                                  animationDelay: `${I * 30}ms`,
                                  animationDuration: "400ms",
                                  animationFillMode: "backwards"
                                },
                                children: M.jsxDEV(
                                  rU,
                                  {
                                    "data-loc": "client/src/pages/Home.tsx:132",
                                    video: j,
                                    index: j.displaySequence - 1,
                                    onClick: () => L(j)
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                  },
                                  this
                                )
                              },
                              j.id,
                              !1,
                              {
                                fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                              },
                              this
                            )
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
                          lineNumber: 125,
                          columnNumber: 11
                        },
                        this
                      )
              },
              void 0,
              !1,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
                lineNumber: 117,
                columnNumber: 7
              },
              this
            ),
            M.jsxDEV(
              bF,
              { "data-loc": "client/src/pages/Home.tsx:143", video: s, isOpen: d, onClose: B },
              void 0,
              !1,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
                lineNumber: 143,
                columnNumber: 7
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "/home/ubuntu/video_portfolio/client/src/pages/Home.tsx",
          lineNumber: 104,
          columnNumber: 5
        },
        this
      );
}
function LF() {
  const [a, i] = R.useState({ title: "", description: "" }),
    [s, u] = R.useState([]),
    [d, p] = R.useState(!0),
    [f, E] = R.useState(null);
  return (
    R.useEffect(() => {
      async function b() {
        try {
          const y = await _F();
          i(y.content), u(y.tools);
        } catch (y) {
          E("Failed to load AI tools data"), console.error(y);
        } finally {
          p(!1);
        }
      }
      b();
    }, []),
    d
      ? M.jsxDEV(
          "div",
          {
            "data-loc": "client/src/pages/AITools.tsx:28",
            className: "min-h-screen bg-white flex items-center justify-center",
            children: M.jsxDEV(
              "div",
              {
                "data-loc": "client/src/pages/AITools.tsx:29",
                className: "text-gray-500",
                children: "Loading..."
              },
              void 0,
              !1,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                lineNumber: 29,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
            lineNumber: 28,
            columnNumber: 7
          },
          this
        )
      : f
        ? M.jsxDEV(
            "div",
            {
              "data-loc": "client/src/pages/AITools.tsx:36",
              className: "min-h-screen bg-white flex items-center justify-center",
              children: M.jsxDEV(
                "div",
                {
                  "data-loc": "client/src/pages/AITools.tsx:37",
                  className: "text-red-500",
                  children: f
                },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                  lineNumber: 37,
                  columnNumber: 9
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
              lineNumber: 36,
              columnNumber: 7
            },
            this
          )
        : M.jsxDEV(
            "div",
            {
              "data-loc": "client/src/pages/AITools.tsx:43",
              className: "min-h-screen bg-white",
              children: M.jsxDEV(
                "div",
                {
                  "data-loc": "client/src/pages/AITools.tsx:44",
                  className: "container py-12 max-w-7xl",
                  children: [
                    M.jsxDEV(
                      "div",
                      {
                        "data-loc": "client/src/pages/AITools.tsx:46",
                        className: "mb-12 md:text-center pt-[10vh] md:pt-[15vh]",
                        children: [
                          M.jsxDEV(
                            "h1",
                            {
                              "data-loc": "client/src/pages/AITools.tsx:47",
                              className: "text-5xl md:text-7xl mb-6 text-black",
                              style: { fontWeight: 600, letterSpacing: "-0.02em" },
                              children: a.title
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                              lineNumber: 47,
                              columnNumber: 11
                            },
                            this
                          ),
                          M.jsxDEV(
                            "p",
                            {
                              "data-loc": "client/src/pages/AITools.tsx:50",
                              className:
                                "text-gray-500 text-lg md:text-xl md:max-w-[50vw] md:mx-auto",
                              style: { fontWeight: 400 },
                              children: a.description
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                              lineNumber: 50,
                              columnNumber: 11
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                      },
                      this
                    ),
                    M.jsxDEV(
                      "div",
                      {
                        "data-loc": "client/src/pages/AITools.tsx:56",
                        className:
                          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto",
                        children: s.map((b, y) =>
                          M.jsxDEV(
                            "div",
                            {
                              "data-loc": "client/src/pages/AITools.tsx:58",
                              className:
                                "bg-white border border-gray-200 p-6 hover:border-gray-400 transition-colors",
                              children: [
                                M.jsxDEV(
                                  "div",
                                  {
                                    "data-loc": "client/src/pages/AITools.tsx:59",
                                    className: "mb-3",
                                    children: [
                                      M.jsxDEV(
                                        "h3",
                                        {
                                          "data-loc": "client/src/pages/AITools.tsx:60",
                                          className: "text-xl font-semibold text-black mb-2",
                                          children: b.name
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                                          lineNumber: 60,
                                          columnNumber: 17
                                        },
                                        this
                                      ),
                                      b.tag &&
                                        M.jsxDEV(
                                          "span",
                                          {
                                            "data-loc": "client/src/pages/AITools.tsx:62",
                                            className:
                                              "inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full",
                                            children: b.tag
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                          },
                                          this
                                        )
                                    ]
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName:
                                      "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                  },
                                  this
                                ),
                                M.jsxDEV(
                                  "p",
                                  {
                                    "data-loc": "client/src/pages/AITools.tsx:67",
                                    className: "text-gray-600 text-sm mb-4",
                                    children: b.elaboration
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                  },
                                  this
                                ),
                                b.link &&
                                  M.jsxDEV(
                                    "a",
                                    {
                                      "data-loc": "client/src/pages/AITools.tsx:69",
                                      href: b.link,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className: "text-black font-semibold hover:underline text-sm",
                                      children: "Visit Tool →"
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                                      lineNumber: 69,
                                      columnNumber: 17
                                    },
                                    this
                                  )
                              ]
                            },
                            y,
                            !0,
                            {
                              fileName: "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                              lineNumber: 58,
                              columnNumber: 13
                            },
                            this
                          )
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
                  lineNumber: 44,
                  columnNumber: 7
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "/home/ubuntu/video_portfolio/client/src/pages/AITools.tsx",
              lineNumber: 43,
              columnNumber: 5
            },
            this
          )
  );
}
function jF() {
  const [a, i] = R.useState({ title: "", description: "" }),
    [s, u] = R.useState([]),
    [d, p] = R.useState(!0),
    [f, E] = R.useState(null);
  return (
    R.useEffect(() => {
      async function b() {
        try {
          const y = await OF();
          i(y.content), u(y.members);
        } catch (y) {
          E("Failed to load teaching team data"), console.error(y);
        } finally {
          p(!1);
        }
      }
      b();
    }, []),
    d
      ? M.jsxDEV(
          "div",
          {
            "data-loc": "client/src/pages/TeachingTeam.tsx:28",
            className: "min-h-screen bg-white flex items-center justify-center",
            children: M.jsxDEV(
              "div",
              {
                "data-loc": "client/src/pages/TeachingTeam.tsx:29",
                className: "text-gray-500",
                children: "Loading..."
              },
              void 0,
              !1,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                lineNumber: 29,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
            lineNumber: 28,
            columnNumber: 7
          },
          this
        )
      : f
        ? M.jsxDEV(
            "div",
            {
              "data-loc": "client/src/pages/TeachingTeam.tsx:36",
              className: "min-h-screen bg-white flex items-center justify-center",
              children: M.jsxDEV(
                "div",
                {
                  "data-loc": "client/src/pages/TeachingTeam.tsx:37",
                  className: "text-red-500",
                  children: f
                },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                  lineNumber: 37,
                  columnNumber: 9
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
              lineNumber: 36,
              columnNumber: 7
            },
            this
          )
        : M.jsxDEV(
            "div",
            {
              "data-loc": "client/src/pages/TeachingTeam.tsx:43",
              className: "min-h-screen bg-white",
              children: M.jsxDEV(
                "div",
                {
                  "data-loc": "client/src/pages/TeachingTeam.tsx:44",
                  className: "container py-12 max-w-7xl",
                  children: [
                    M.jsxDEV(
                      "div",
                      {
                        "data-loc": "client/src/pages/TeachingTeam.tsx:46",
                        className: "mb-12 md:text-center pt-[10vh] md:pt-[15vh]",
                        children: [
                          M.jsxDEV(
                            "h1",
                            {
                              "data-loc": "client/src/pages/TeachingTeam.tsx:47",
                              className: "text-5xl md:text-7xl mb-6 text-black",
                              style: { fontWeight: 600, letterSpacing: "-0.02em" },
                              children: a.title
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                              lineNumber: 47,
                              columnNumber: 11
                            },
                            this
                          ),
                          M.jsxDEV(
                            "p",
                            {
                              "data-loc": "client/src/pages/TeachingTeam.tsx:50",
                              className:
                                "text-gray-500 text-lg md:text-xl md:max-w-[50vw] md:mx-auto",
                              style: { fontWeight: 400 },
                              children: a.description
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                              lineNumber: 50,
                              columnNumber: 11
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                      },
                      this
                    ),
                    M.jsxDEV(
                      "div",
                      {
                        "data-loc": "client/src/pages/TeachingTeam.tsx:56",
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto",
                        children: s.map((b, y) =>
                          M.jsxDEV(
                            "div",
                            {
                              "data-loc": "client/src/pages/TeachingTeam.tsx:58",
                              className: "bg-white border border-gray-200 p-8",
                              children: [
                                M.jsxDEV(
                                  "h3",
                                  {
                                    "data-loc": "client/src/pages/TeachingTeam.tsx:59",
                                    className: "text-2xl font-semibold text-black mb-2",
                                    children: b.name
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                  },
                                  this
                                ),
                                b.role &&
                                  M.jsxDEV(
                                    "p",
                                    {
                                      "data-loc": "client/src/pages/TeachingTeam.tsx:61",
                                      className: "text-gray-700 font-medium mb-1",
                                      children: b.role
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                                      lineNumber: 61,
                                      columnNumber: 17
                                    },
                                    this
                                  ),
                                b.department &&
                                  M.jsxDEV(
                                    "p",
                                    {
                                      "data-loc": "client/src/pages/TeachingTeam.tsx:64",
                                      className: "text-gray-500 text-sm mb-4",
                                      children: b.department
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                                      lineNumber: 64,
                                      columnNumber: 17
                                    },
                                    this
                                  ),
                                b.bio &&
                                  M.jsxDEV(
                                    "p",
                                    {
                                      "data-loc": "client/src/pages/TeachingTeam.tsx:67",
                                      className: "text-gray-600 text-sm leading-relaxed mb-4",
                                      children: b.bio
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                                      lineNumber: 67,
                                      columnNumber: 17
                                    },
                                    this
                                  ),
                                M.jsxDEV(
                                  "div",
                                  {
                                    "data-loc": "client/src/pages/TeachingTeam.tsx:70",
                                    className: "flex flex-wrap gap-3 mt-4",
                                    children: [
                                      b.linkButton1 &&
                                        b.link1 &&
                                        M.jsxDEV(
                                          "a",
                                          {
                                            "data-loc": "client/src/pages/TeachingTeam.tsx:72",
                                            href: b.link1,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className:
                                              "inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors",
                                            children: b.linkButton1
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                          },
                                          this
                                        ),
                                      b.linkButton2 &&
                                        b.link2 &&
                                        M.jsxDEV(
                                          "a",
                                          {
                                            "data-loc": "client/src/pages/TeachingTeam.tsx:82",
                                            href: b.link2,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className:
                                              "inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors",
                                            children: b.linkButton2
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                          },
                                          this
                                        )
                                    ]
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName:
                                      "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                  },
                                  this
                                )
                              ]
                            },
                            y,
                            !0,
                            {
                              fileName:
                                "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                              lineNumber: 58,
                              columnNumber: 13
                            },
                            this
                          )
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
                  lineNumber: 44,
                  columnNumber: 7
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "/home/ubuntu/video_portfolio/client/src/pages/TeachingTeam.tsx",
              lineNumber: 43,
              columnNumber: 5
            },
            this
          )
  );
}
function VF() {
  const [a, i] = R.useState({ title: "", description: "" }),
    [s, u] = R.useState([]),
    [d, p] = R.useState(!0),
    [f, E] = R.useState(null);
  if (
    (R.useEffect(() => {
      async function y() {
        try {
          const w = await kF();
          i(w.content), u(w.items);
        } catch (w) {
          E("Failed to load contact data"), console.error(w);
        } finally {
          p(!1);
        }
      }
      y();
    }, []),
    d)
  )
    return M.jsxDEV(
      "div",
      {
        "data-loc": "client/src/pages/Contact.tsx:28",
        className: "min-h-screen bg-white flex items-center justify-center",
        children: M.jsxDEV(
          "div",
          {
            "data-loc": "client/src/pages/Contact.tsx:29",
            className: "text-gray-500",
            children: "Loading..."
          },
          void 0,
          !1,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
            lineNumber: 29,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      this
    );
  if (f)
    return M.jsxDEV(
      "div",
      {
        "data-loc": "client/src/pages/Contact.tsx:36",
        className: "min-h-screen bg-white flex items-center justify-center",
        children: M.jsxDEV(
          "div",
          { "data-loc": "client/src/pages/Contact.tsx:37", className: "text-red-500", children: f },
          void 0,
          !1,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
            lineNumber: 37,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    );
  const b = (y) =>
    y
      ? y
          .split(/[\n,]/)
          .map((w) => w.trim())
          .filter((w) => w.length > 0)
      : [];
  return M.jsxDEV(
    "div",
    {
      "data-loc": "client/src/pages/Contact.tsx:50",
      className: "min-h-screen bg-white",
      children: M.jsxDEV(
        "div",
        {
          "data-loc": "client/src/pages/Contact.tsx:51",
          className: "container py-12 max-w-7xl",
          children: [
            M.jsxDEV(
              "div",
              {
                "data-loc": "client/src/pages/Contact.tsx:53",
                className: "mb-12 md:text-center pt-[10vh] md:pt-[15vh]",
                children: [
                  M.jsxDEV(
                    "h1",
                    {
                      "data-loc": "client/src/pages/Contact.tsx:54",
                      className: "text-5xl md:text-7xl mb-6 text-black",
                      style: { fontWeight: 600, letterSpacing: "-0.02em" },
                      children: a.title
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
                      lineNumber: 54,
                      columnNumber: 11
                    },
                    this
                  ),
                  M.jsxDEV(
                    "p",
                    {
                      "data-loc": "client/src/pages/Contact.tsx:57",
                      className: "text-gray-500 text-lg md:text-xl md:max-w-[50vw] md:mx-auto",
                      style: { fontWeight: 400 },
                      children: a.description
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
                      lineNumber: 57,
                      columnNumber: 11
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
                lineNumber: 53,
                columnNumber: 9
              },
              this
            ),
            M.jsxDEV(
              "div",
              {
                "data-loc": "client/src/pages/Contact.tsx:63",
                className: "space-y-8 max-w-4xl mx-auto",
                children: s.map((y, w) => {
                  const g = b(y.mailtoLinks);
                  return M.jsxDEV(
                    "div",
                    {
                      "data-loc": "client/src/pages/Contact.tsx:67",
                      className: "bg-white border border-gray-200 p-8",
                      children: [
                        M.jsxDEV(
                          "h3",
                          {
                            "data-loc": "client/src/pages/Contact.tsx:68",
                            className: "text-2xl font-semibold text-black mb-3",
                            children: y.item
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
                            lineNumber: 68,
                            columnNumber: 17
                          },
                          this
                        ),
                        y.role &&
                          M.jsxDEV(
                            "div",
                            {
                              "data-loc": "client/src/pages/Contact.tsx:70",
                              className: "text-gray-600 text-sm mb-4 whitespace-pre-line",
                              children: y.role
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
                              lineNumber: 70,
                              columnNumber: 19
                            },
                            this
                          ),
                        g.length > 0 &&
                          M.jsxDEV(
                            "div",
                            {
                              "data-loc": "client/src/pages/Contact.tsx:73",
                              className: "space-y-2",
                              children: g.map((_, T) => {
                                const O = _.includes("@") && !_.startsWith("http"),
                                  L = O ? `mailto:${_}` : _,
                                  B = O ? `Email: ${_}` : _;
                                return M.jsxDEV(
                                  "div",
                                  {
                                    "data-loc": "client/src/pages/Contact.tsx:81",
                                    children: M.jsxDEV(
                                      "a",
                                      {
                                        "data-loc": "client/src/pages/Contact.tsx:82",
                                        href: L,
                                        target: O ? void 0 : "_blank",
                                        rel: O ? void 0 : "noopener noreferrer",
                                        className:
                                          "text-black font-semibold hover:underline text-sm",
                                        children: B
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
                                        lineNumber: 82,
                                        columnNumber: 27
                                      },
                                      this
                                    )
                                  },
                                  T,
                                  !1,
                                  {
                                    fileName:
                                      "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                  },
                                  this
                                );
                              })
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
                              lineNumber: 73,
                              columnNumber: 19
                            },
                            this
                          )
                      ]
                    },
                    w,
                    !0,
                    {
                      fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
                      lineNumber: 67,
                      columnNumber: 15
                    },
                    this
                  );
                })
              },
              void 0,
              !1,
              {
                fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
                lineNumber: 63,
                columnNumber: 9
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/pages/Contact.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
}
function UF() {
  return M.jsxDEV(
    M.Fragment,
    {
      children: [
        M.jsxDEV(
          tU,
          { "data-loc": "client/src/App.tsx:16" },
          void 0,
          !1,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
            lineNumber: 16,
            columnNumber: 7
          },
          this
        ),
        M.jsxDEV(
          QV,
          {
            "data-loc": "client/src/App.tsx:17",
            children: [
              M.jsxDEV(
                Rl,
                { "data-loc": "client/src/App.tsx:18", path: "/", component: MF },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
                  lineNumber: 18,
                  columnNumber: 9
                },
                this
              ),
              M.jsxDEV(
                Rl,
                { "data-loc": "client/src/App.tsx:19", path: "/ai-tools", component: LF },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
                  lineNumber: 19,
                  columnNumber: 9
                },
                this
              ),
              M.jsxDEV(
                Rl,
                { "data-loc": "client/src/App.tsx:20", path: "/teaching-team", component: jF },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
                  lineNumber: 20,
                  columnNumber: 9
                },
                this
              ),
              M.jsxDEV(
                Rl,
                { "data-loc": "client/src/App.tsx:21", path: "/contact", component: VF },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
                  lineNumber: 21,
                  columnNumber: 9
                },
                this
              ),
              M.jsxDEV(
                Rl,
                { "data-loc": "client/src/App.tsx:22", path: "/404", component: RS },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
                  lineNumber: 22,
                  columnNumber: 9
                },
                this
              ),
              M.jsxDEV(
                Rl,
                { "data-loc": "client/src/App.tsx:24", component: RS },
                void 0,
                !1,
                {
                  fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
                  lineNumber: 24,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
            lineNumber: 17,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
function FF() {
  return M.jsxDEV(
    JV,
    {
      "data-loc": "client/src/App.tsx:37",
      children: M.jsxDEV(
        eU,
        {
          "data-loc": "client/src/App.tsx:38",
          defaultTheme: "light",
          children: M.jsxDEV(
            vV,
            {
              "data-loc": "client/src/App.tsx:42",
              children: [
                M.jsxDEV(
                  hM,
                  { "data-loc": "client/src/App.tsx:43" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                  },
                  this
                ),
                M.jsxDEV(
                  UF,
                  { "data-loc": "client/src/App.tsx:44" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
              lineNumber: 42,
              columnNumber: 9
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
          lineNumber: 38,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/App.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
}
FA.createRoot(document.getElementById("root")).render(
  M.jsxDEV(
    FF,
    { "data-loc": "client/src/main.tsx:5" },
    void 0,
    !1,
    {
      fileName: "/home/ubuntu/video_portfolio/client/src/main.tsx",
      lineNumber: 5,
      columnNumber: 53
    },
    void 0
  )
);
